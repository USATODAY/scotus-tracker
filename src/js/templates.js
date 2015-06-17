define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-panel iapp-intro-panel">\n    <div class="intro-box">\n        <div class="logo"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/scotus-tracker/img/logo.svg" width="42%"/></div>\n        <h1 class="iapp-page-header">' +
((__t = (head)) == null ? '' : __t) +
'</h1>\n\n        <p class="iapp-page-chatter">' +
((__t = (chatter)) == null ? '' : __t) +
'</p>\n\n        <div class="iapp-button iapp-button-blue iapp-begin-button">\n            <div class="iapp-button-text">Begin</div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["decidedcase.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-case-wrap">\n    <h2 class="iapp-case-name">' +
((__t = (case_title)) == null ? '' : __t) +
' </h2>\n    <p class="iapp-decided-indicator">' +
((__t = (case_name )) == null ? '' : __t) +
' <span class="label label-success">Decided</span> Decided: ' +
((__t = (case_date)) == null ? '' : __t) +
'</p>\n    <div class="iapp-share-buttons">\n        <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/twitter.svg" alt="Twitter share"></a>\n        <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (shareImage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/fb.svg" alt="Facebook share"></a>\n    </div>\n\n    <div class="iapp-case-split-column">\n        <div class="iapp-case-section">\n            <h3 class="iapp-case-section-label">Question</h3>\n            <h4 class="iapp-case-question">' +
((__t = (question)) == null ? '' : __t) +
'</h4>\n        </div>\n\n        \n\n        <div class="iapp-case-section">\n            <h3 class="iapp-case-section-label">Outcome</h3>\n            <h4 class="iapp-outcome">' +
((__t = (outcome)) == null ? '' : __t) +
'</h4>\n        </div>\n    </div>\n\n    <div class="iapp-case-split-column">\n        <h3 class="iapp-case-section-label">Decision Breakdown:</h3>\n        <table class="table table-bordered iapp-decision-table">\n            <thead>\n                <tr>\n                    <td>Justice</td>\n                    <td>Decision</td>\n                </tr>\n            </thead>\n            <tbody>\n                ';
 _.each(justices, function(justice) { ;
__p += '\n                <tr>\n                    <td>' +
((__t = (justice.name )) == null ? '' : __t) +
'</td>\n                    ';
 if(justice.status == "for") { ;
__p += '\n                    <td class="iapp-for">Majority</td>\n                    ';
} else if(justice.status == "in-part") { ;
__p += '\n                    <td class="iapp-in-part">Concur in part</td>\n                    ';
} else if(justice.status == "against") { ;
__p += '\n                    <td class="iapp-against">Dissent</td>\n                    ';
};
__p += '\n                </tr>\n                ';
});
__p += '\n            </tbody>\n        </table>\n    </div>\n\n        <div class="iapp-case-section iapp-case-quotes">\n            <div class="iapp-case-quote-wrap iapp-case-split-column ">\n                <h3 class="iapp-case-section-label">Quote from the Majority</h3>\n                <p class="iapp-case-quote">' +
((__t = ( quote_1 )) == null ? '' : __t) +
'</p>\n                <p class="iapp-case-quote-source">' +
((__t = ( quote_1_source)) == null ? '' : __t) +
'</p>\n            </div>\n            <div class="iapp-case-quote-wrap  iapp-case-split-column">\n                <h3 class="iapp-case-section-label">Quote from the dissent</h3>\n                <p class="iapp-case-quote">' +
((__t = ( quote_2 )) == null ? '' : __t) +
'</p>\n                <p class="iapp-case-quote-source">' +
((__t = ( quote_2_source)) == null ? '' : __t) +
'</p>\n            </div>\n        </div>\n\n        <div class="iapp-case-section iapp-case-arguments">\n            <div class="iapp-case-argument iapp-case-split-column">\n                <h3 class="iapp-case-argument-title iapp-case-section-label">Argument For</h3>\n                <p class="iapp-case-argument-text">' +
((__t = ( argument_for )) == null ? '' : __t) +
'</p>\n            </div>\n            <div class="iapp-case-argument iapp-case-split-column">\n                <h3 class="iapp-case-argument-title iapp-case-section-label">Argument Against</h3>\n                <p class="iapp-case-argument-text">' +
((__t = ( argument_against )) == null ? '' : __t) +
'</p>\n            </div>\n        </div>\n    <div class="iapp-case-nav">\n        <div class="iapp-button iapp-button-blue iapp-case-nav-button iapp-case-next-button"><div class="iapp-button-text">Next</div></div>\n        <div class="iapp-button iapp-button-blue iapp-case-nav-button iapp-case-previous-button"><div class="iapp-button-text">Previous</div></div>\n    </div>\n</div>\n';

}
return __p
};

this["templates"]["template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>' +
((__t = (test)) == null ? '' : __t) +
'</h3>\n';

}
return __p
};

this["templates"]["undecidedcase.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-case-wrap">\n    <h2 class="iapp-case-name">' +
((__t = (case_title)) == null ? '' : __t) +
'</h2>\n    <p class="iapp-decided-indicator">' +
((__t = (case_name)) == null ? '' : __t) +
' <span class="label label-warning">Undecided</span> Argued: ' +
((__t = (case_date)) == null ? '' : __t) +
'</p>\n    <div class="iapp-share-buttons">\n        <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/twitter.svg" alt="Twitter share"></a>\n        <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (shareImage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'" class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/emoji-index/img/fb.svg" alt="Facebook share"></a>\n    </div>\n    <div class="iapp-case-split-column">\n        <div class="iapp-case-section">\n            <h3 class="iapp-case-section-label">Question</h3>\n            <h4 class="iapp-case-question">' +
((__t = (question)) == null ? '' : __t) +
'</h4>\n        </div>\n        \n        <div class="iapp-case-section">\n            <h3 class="iapp-case-section-label">Projected Outcome</h3>\n            <h4 class="iapp-outcome">' +
((__t = (outcome)) == null ? '' : __t) +
'</h4>\n        </div>\n    </div>\n    <div class="iapp-case-split-column">\n        <h3 class="iapp-case-section-label">Breakdown:</h3>\n        <table class="table table-bordered iapp-decision-table">\n            <thead>\n                <tr>\n                    <td>Justice</td>\n                    <td>Decision</td>\n                </tr>\n            </thead>\n            <tbody>\n                ';
 _.each(justices, function(justice) { ;
__p += '\n                <tr>\n                    <td>' +
((__t = (justice.name )) == null ? '' : __t) +
'</td>\n                    ';
 if(justice.status == "for") { ;
__p += '\n                    <td class="iapp-undecided">?</td>\n                    ';
} else if(justice.status == "in-part") { ;
__p += '\n                    <td class="iapp-undecided">?</td>\n                    ';
} else if(justice.status == "against") { ;
__p += '\n                    <td class="iapp-undecided">?</td>\n                    ';
};
__p += '\n                </tr>\n                ';
});
__p += '\n            </tbody>\n        </table>\n    </div>\n\n    \n    <div class="iapp-case-section iapp-case-quotes">\n        <h3 class="iapp-case-section-label">Quotes from the arguments</h3>\n        <div class="iapp-case-quote-wrap iapp-case-split-column">\n            <p class="iapp-case-quote">' +
((__t = ( quote_1 )) == null ? '' : __t) +
'</p>\n            <p class="iapp-case-quote-source">' +
((__t = ( quote_1_source)) == null ? '' : __t) +
'</p>\n        </div>\n        <div class="iapp-case-quote-wrap iapp-case-split-column">\n            <p class="iapp-case-quote">' +
((__t = ( quote_2 )) == null ? '' : __t) +
'</p>\n            <p class="iapp-case-quote-source">' +
((__t = ( quote_2_source)) == null ? '' : __t) +
'</p>\n        </div>\n    </div>\n    <div class="iapp-case-section iapp-case-arguments">\n            <div class="iapp-case-argument iapp-case-split-column">\n                <h3 class="iapp-case-argument-title iapp-case-section-label">Argument For</h3>\n                <p class="iapp-case-argument-text">' +
((__t = ( argument_for )) == null ? '' : __t) +
'</p>\n            </div>\n            <div class="iapp-case-argument iapp-case-split-column">\n                <h3 class="iapp-case-argument-title iapp-case-section-label">Argument Against</h3>\n                <p class="iapp-case-argument-text">' +
((__t = ( argument_against )) == null ? '' : __t) +
'</p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="iapp-case-nav">\n    <div class="iapp-button iapp-button-blue iapp-case-nav-button iapp-case-next-button"><div class="iapp-button-text">Next</div></div>\n    <div class="iapp-button iapp-button-blue  iapp-case-nav-button iapp-case-previous-button"><div class="iapp-button-text">Previous</div></div>\n</div>\n\n';

}
return __p
};

  return this["templates"];

});