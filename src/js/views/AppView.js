define(
  [
    'jquery',
    'underscore',
    'lib/BackboneRouter',
    'dataManager',
    'api/analytics',
    'router',
    'models/config',
    'collections/CaseCollection',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, Analytics, router, config, CaseCollection, templates){
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, "dataReady", this.onDataReady);
            },
            events: {
            },
            onDataReady: function() {
                this.render();
                Backbone.history.start();
                _.delay(function() {
                    this.$('.iapp-preloader').fadeOut(250);
                }, 1000);
                
            },
            render: function() {
                this.$el.append(this.template());
                this.addSubViews();
                return this;
            },
            template: templates["app.html"],
            subViews: [],
            addSubViews: function() {
                var caseCollection = new CaseCollection(dataManager.data);
                console.log(caseCollection);
            },
            goForward: function() {
                
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView++;
                var newSub = this.subViews[this.currentSubView];

                oldSub.$el.removeClass('active').addClass('done');
                newSub.$el.removeClass('upcoming').addClass('active');
            },
            goBack: function() {
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView--;
                var newSub = this.subViews[this.currentSubView];

                oldSub.$el.removeClass('active').addClass('upcoming');
                newSub.$el.removeClass('done').addClass('active');
            },
            goHome: function() {
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView = 0;
                var newSub = this.subViews[this.currentSubView];

                oldSub.$el.removeClass('active').addClass('upcoming');
                newSub.$el.removeClass('done').addClass('active');
            },
            getURL: function() {
                 return 'http://' + window.location.hostname + window.location.pathname;
            }
        });
});
