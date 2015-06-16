define(
  [
    'jquery',
    'underscore',
    'backbone',
    'dataManager',
    'router',
    'templates',
    'api/analytics'
  ],
  function(jQuery, _, Backbone, dataManager, router, templates, Analytics) {

    return Backbone.View.extend({
        initialize: function() {
            console.log(this.model);
            if (this.model.get("is_decided")) {
                this.template = templates["decidedcase.html"];
            } else {
                this.template = templates["undecidedcase.html"];
            }
            this.render();
        },
        events: {
            'click .iapp-case-next-button': "onNextClick",
            'click .iapp-case-previous-button': "onPreviousClick",
            'click .iapp-share-popup': 'onShareButtonClick'
        },
        className: 'iapp-panel iapp-case-panel upcoming',
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        onNextClick: function() {
            Backbone.trigger("app:goForward");
        },
        onPreviousClick: function() {
            Backbone.trigger("app:goBack");
        },
        onShareButtonClick: function(e) {
            Analytics.trackEvent('Case share clicked');
            e.preventDefault();
            this.windowPopup(e.currentTarget.href, 500, 300);
        },
        windowPopup: function(url, width, height) {
            // Calculate the position of the popup so
            // it’s centered on the screen.
            var left = (screen.width / 2) - (width / 2),
            top = (screen.height / 2) - (height / 2);

            window.open(
                url,
                "",
                "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
            );
        }
    });
});
