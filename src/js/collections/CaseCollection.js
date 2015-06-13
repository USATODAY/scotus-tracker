define(
  [
    'jquery',
    'underscore',
    'backbone',
    'models/CaseModel'
  ], function(jQuery, _, Backbone, CaseModel){

    return Backbone.Collection.extend({
        initialize: function() {
           
        },
        model: CaseModel,
    });

});
