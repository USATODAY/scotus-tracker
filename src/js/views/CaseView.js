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
            'click .iapp-case-previous-button': "onPreviousClick"
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
        }
    });
});
