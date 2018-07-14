
/*
 *  jQuery googleAutocomplete - v1
 * 
 *  Made by Aatish Gore
 *  Under MIT License
 */

;
(function($, window, document, undefined) {

           
   

    // Create the defaults once
    var pluginName = "googleAutocomplete",
            defaults = {
        latitudeSelector: '#latitude',
        longitudeSelector: '#longitude',
    };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
           	var self = this;
            var autocomplete = new google.maps.places.Autocomplete(this.element, { types: ['geocode'] });
            var infoWindow = new google.maps.InfoWindow();
            google.maps.event.addListener(autocomplete, 'place_changed', function() {
                var place = autocomplete.getPlace();
                $(self.settings.latitudeSelector).val( place.geometry.location.lat());
                $(self.settings.longitudeSelector).val( place.geometry.location.lng());

            });
        }

    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });

        // chain jQuery functions
        return this;
    };

})(jQuery, window, document);


