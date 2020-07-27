   var searchInput = 'search_input';
$(document).ready(function () {

    $(document).on('click','#search_input',function(){
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode'],
    });
    google.maps.event.addListener(autocomplete, 'place_changed', function () {

    });
});
});  