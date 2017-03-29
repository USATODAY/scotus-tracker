define(
  [
    'jquery',
    'underscore',
    'backbone',
    'models/config'
  ],
  function(jQuery, _, Backbone, config){

    return Backbone.Model.extend({
        defaults: {
        },

        initialize: function() {
            var baseURL = window.location.origin + window.location.pathname + "#/case/" + this.get("slug");
            this.set({
                'baseURL': baseURL,
                'fbShare': this.createFbShareURL(baseURL),
                'twitterShare': this.createTwitterShareURL(baseURL),
                'share_language': this.get("default_share_language") + ": " + this.get('case_name'),
                'encodedShare': encodeURIComponent(this.get("default_share_language") + ": " + this.get('case_name')),
                'fb_id': config.fb_app_id,
                'email_link': this.createEmailLink(baseURL),
                'fb_redirect': 'https://' + window.location.hostname + '/pages/interactives/fb-share/',
                'shareImage': config.shareImage
            }); 
        },
        createFbShareURL: function(url) {   
            url = url.replace('#', '%23');
            return encodeURI(url); 
        },
        createTwitterShareURL: function(url) {
            return encodeURIComponent(url); 
        },
        createEmailLink: function(url) {
            return "mailto:?body=" + encodeURIComponent(this.get('default_share_language') + ": " + this.get('case_name')) +  "%0d%0d" + this.createTwitterShareURL(url) + "&subject=";
        },
    });

});
