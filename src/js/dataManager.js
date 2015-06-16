define(
  [
    'jquery',
    'underscore',
    'backbone',
    'models/justices'
  ],
  function(jQuery, _, Backbone, justices) {

    var hostname = window.location.hostname;

    var dataURL;

    if ((hostname == "localhost" || hostname == "10.0.2.2")) {
        dataURL = 'data/data.json';
    } else {


        dataURL = "http://" + hostname + "/services/webproxy/?url=http://www.gannett-cdn.com/experiments/usatoday/2015/06/scotus-tracker/data/data.json";

    }

    return {
        data: null,
        getData: function() {
            var _this = this;
            jQuery.getJSON(dataURL, function(data) {        
                
                //parse raw data from JSON
                _this.data = _this.parseData(data[0]);

                // trigger the dataReady Backbone event which kicks off the app
                Backbone.trigger("dataReady", this);

            });
        },
        parseData: function(data) {
            var parsedCases = [];
            var _this = this;
            _.each(data.cases, function(caseObj) {
                newCaseObj = caseObj;

                // Split for and against names into arrays
                newCaseObj.for = newCaseObj.for.split(", ");
                newCaseObj.against = newCaseObj.against.split(", ");
                newCaseObj.inPart = newCaseObj.wildcard_or_concur_in_part.split(", ");
                var justicesObj = new justices.Justices();
                var justiceArray = justicesObj.justices;

                // Add default share language from data to each case

                newCaseObj.default_share_language = data.share_language;



                _.each(newCaseObj.for, function(forJustice) {
                    var justiceObj = _.findWhere(justiceArray, {"last_name": forJustice});
                    justiceObj.status = "for";
                });
                _.each(newCaseObj.against, function(againstJustice) {
                    var justiceObj = _.findWhere(justiceArray, {"last_name": againstJustice});
                    justiceObj.status = "against";
                });
                _.each(newCaseObj.inPart, function(inPartJustice) {
                    if (inPartJustice !== "") {
                        var justiceObj = _.findWhere(justiceArray, {"last_name": inPartJustice});
                        justiceObj.status = "in-part";
                    }
                });

                newCaseObj.justices = justiceArray;

                //convert is_decided to boolean value
                if (newCaseObj.is_decided === "") {
                    newCaseObj.is_decided = false;
                } else {
                    newCaseObj.is_decided = true;
                }
                
                //add slug to each case
                newCaseObj.slug = _this.slugify(newCaseObj.case_name);


                parsedCases.push(newCaseObj);
            });
            data.cases = parsedCases;
            return data;
        },
        slugify: function(text) {
            return text.toString().toLowerCase()
                .replace(/\s+/g, '-')           // Replace spaces with -
                .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                .replace(/^-+/, '')             // Trim - from start of text
                .replace(/-+$/, '');            // Trim - from end of text
        }
    };


});
