package com.terrafirma.dashboard

import grails.util.Environment
import org.codehaus.groovy.grails.commons.ConfigurationHolder

class ProcessRawWaterDataJob {

    def waterCalculationService
    def grailsApplication
    def jobMonitorService

    static triggers = {
        if (ConfigurationHolder.config.grails.all.jobs.enabled.toString().equals("1") &&
                ConfigurationHolder.config.grails.raw.data.water.toString().equals("1")) {
            simple name: 'processRawWater', startDelay: 30000, repeatInterval: 1000*60*30
            // execute job once every 10 seconds
        }
    }

    def execute() {
        try {
            String batchNo = ConfigurationHolder.config.grails.raw.data.batch.toString()
            String jobName = "ProcessRawWaterDataJob-$batchNo"
            jobMonitorService.updateJob(jobName)

            println "##### WATER PROCESSING"

            if(grailsApplication.config.quartz_water_job_running == false) {
                grailsApplication.config.quartz_water_job_running = true
                println "#### WATER PROCESSING| JOB STATE: STARTING| START TIME: ${new Date()}"

                int unprocessedToGrab = 250
                Config waterProcessing = Config.findByCategoryAndKey("WATER PROCESSING","UNPROCESSED_TO_GRAB")
                if(waterProcessing != null) {
                    unprocessedToGrab = Integer.parseInt(waterProcessing.value)
                }

                //For Prod deploy:
                if (Environment.current == Environment.PRODUCTION){
                    waterCalculationService.processFlotronRecords(unprocessedToGrab)
                    waterCalculationService.processAqualocRecords(unprocessedToGrab)
                    waterCalculationService.processSensusRecords(unprocessedToGrab)
                    waterCalculationService.processJLoggerRecords()
                }
                //For Dev Testing:
                else if (Environment.current == Environment.TEST || Environment.current == Environment.DEVELOPMENT){
                    waterCalculationService.processFlotronRecords(250)
                    waterCalculationService.processAqualocRecords(50)
                    waterCalculationService.processSensusRecords(250)
                    waterCalculationService.processJLoggerRecords()
                }

                println "#### WATER PROCESSING| JOB STATE: DONE"

                grailsApplication.config.quartz_water_job_running = false
            } else {
                println "#### WATER PROCESSING| JOB STATE: BUSY"
            }
        } catch(Exception e) {
            grailsApplication.config.quartz_water_job_running = false
            e.printStackTrace()
        }
    }
}
