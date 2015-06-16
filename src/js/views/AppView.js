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
                this.listenTo(Backbone, 'router:case', this.goToCase);
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
                this.$el.append(this.template({head: dataManager.data.head, chatter: dataManager.data.chatter}));
                this.addSubViews();
                return this;
            },
            template: templates["app.html"],
            subViews: [],
            currentSubView: 0,
            addSubViews: function() {
                var _this = this;

                //create new case collection from data returned from the dataManager
                var caseCollection = new CaseCollection(dataManager.data.cases);

                console.log(caseCollection);

                //loop through each model in the case collection and create a case view for it. 
                //Then add the case view to the subview array.
                //Then append the case view html to the document.
                caseCollection.each(function(caseModel) {
                    var caseView = new CaseView({model: caseModel});
                    _this.subViews.push(caseView);
                    _this.$el.append(caseView.el);
                });
            },
            begin: function() {
                //launches the app into the first case from the intro
                this.subViews[this.currentSubView].$el.removeClass('upcoming').addClass('active');
                
                //update url to match new case model
                var caseModel = this.subViews[this.currentSubView].model;
                var slug = caseModel.get("slug");
                router.navigate("case/" + slug);
            },
            goForward: function() {
                //move forward one sub view

                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView++;
                var newSub = this.subViews[this.currentSubView];

                //update url to match new case model
                //
                var caseModel = newSub.model;
                var slug = caseModel.get("slug");
                router.navigate("case/" + slug);

                oldSub.$el.removeClass('active').addClass('done');
                newSub.$el.removeClass('upcoming').addClass('active');
            },
            goBack: function() {
                var oldSub = this.subViews[this.currentSubView];
                oldSub.$el.removeClass('active').addClass('upcoming');
                if (this.currentSubView > 0) {
                    this.currentSubView--;
                    var newSub = this.subViews[this.currentSubView];

                    //update url to match new case model
                    //
                    var caseModel = newSub.model;
                    var slug = caseModel.get("slug");
                    router.navigate("case/" + slug);
                    newSub.$el.removeClass('done').addClass('active');
                } else {
                    router.navigate("_");
                }

            },
            goHome: function() {
                var oldSub = this.subViews[this.currentSubView];
                this.currentSubView = 0;
                var newSub = this.subViews[this.currentSubView];

                oldSub.$el.removeClass('active').addClass('upcoming');
                newSub.$el.removeClass('done').addClass('active');
            },
            goToCase: function(caseSlug) {
                //@TODO find the relevant case and navigate to it
                console.log(caseSlug);

                //find subView whose model maches the slug provided by the router
                var caseModel = _.find(this.subViews, function(subView) {
                    return subView.model.get("slug") == caseSlug;
                });

                var caseIndex = this.subViews.indexOf(caseModel);

                var currentIndex = this.currentSubView;
                this.currentSubView = caseIndex;
                var newSub = this.subViews[this.currentSubView];

                if (caseIndex > currentIndex) {
                    _.each(this.subViews.slice(currentIndex, caseIndex), function(subView) {
                        subView.$el.removeClass('active').removeClass('upcoming').addClass('done');
                    });
                } else {
                    _.each(this.subViews.slice(caseIndex + 1, currentIndex + 1), function(subView) {
                        subView.$el.removeClass('active').removeClass('done').addClass('upcoming');
                    });
                }
                newSub.$el.removeClass('done').removeClass('upcoming').addClass('active');
            },
            getURL: function() {
                 return 'http://' + window.location.hostname + window.location.pathname;
            }
        });
});
