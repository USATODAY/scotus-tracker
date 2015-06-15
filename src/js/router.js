define([
    "jquery",
    "underscore",
    'lib/BackboneRouter',
    ], 
    function($, _, Backbone) { 
        var Router = Backbone.Router.extend({

            routes: {
                "": "home",
                
                "case/:case_name":                 "highlight",    // #/1

            },

            home: function() {
                Backbone.trigger("homeRoute");
            },

            highlight: function(clip_name) {
                Backbone.trigger("router:case", clip_name);
            }

        });


        return new Router();
});
