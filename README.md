googleautocompleter
===================

google autocompleter plugin


You can create google autocompleter textbox with latitude and longitude in response to any form element.

You would require
jquery 1.4 +
google maps api

$('#location').googleAutocomplete({"latitudeSelector":"#lat","longitudeSelector":"#lng"});
$('#location2').googleAutocomplete();

options
latitudeSelector : form element which stores latitude 
longitudeSelector : form element which stores longitude
