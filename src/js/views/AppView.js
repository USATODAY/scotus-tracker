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
    'views/CaseView',
    'templates'
  ],
  function(jQuery, _, Backbone, dataManager, Analytics, router, config, CaseCollection, CaseView, templates){
        return Backbone.View.extend({
            initialize: function() {
                this.listenTo(Backbone, "dataReady", this.onDataReady);
                this.listenTo(Backbone, "app:goForward", this.goForward);
                this.listenTo(Backbone, "app:goBack", this.goBack);
            },
            events: {
                "click .iapp-begin-button": "begin"
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
            currentSubView: 0,
            addSubViews: function() {
                var _this = this;
                var caseCollection = new CaseCollection(dataManager.data);
                caseCollection.each(function(caseModel) {
                    var caseView = new CaseView({model: caseModel});
                    _this.subViews.push(caseView);
                    _this.$el.append(caseView.el);
                });
            },
            begin: function() {
                this.subViews[this.currentSubView].$el.removeClass('upcoming').addClass('active');
            },
            goForward: function() {
                console.log("go forward");
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
