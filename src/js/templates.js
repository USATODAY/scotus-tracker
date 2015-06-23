define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-panel iapp-intro-panel">\n    <div class="intro-box">\n        \n        <h1 class="iapp-page-header">' +
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
__p += '<div class="iapp-case-wrap">\n    <div class="small-head center">Supreme Court Decision Tracker</div>\n    <div class="case-bar-wrap">\n        <h2 class="iapp-case-name">' +
((__t = (case_title)) == null ? '' : __t) +
' </h2>\n\n        <p class="iapp-decided-indicator">' +
((__t = (case_name )) == null ? '' : __t) +
' <span\n                class="label label-success">Decided: ' +
((__t = (case_date)) == null ? '' : __t) +
'</span>\n        </p>\n    </div>\n    <div class="iapp-row-wrapper">\n        <div class="iapp-case-split-column">\n            <div class="iapp-case-section">\n                <h3 class="iapp-case-section-label">Question</h3>\n                <h4 class="iapp-case-question">' +
((__t = (question)) == null ? '' : __t) +
'</h4>\n            </div>\n        </div>\n        <div class="iapp-case-split-column right">\n            <div class="iapp-case-section">\n                <h3 class="iapp-case-section-label">Outcome</h3>\n                <h4 class="iapp-outcome">' +
((__t = (outcome)) == null ? '' : __t) +
'</h4>\n            </div>\n        </div>\n    </div>\n    <div class="iapp-row-wrapper">\n        <div class="iapp-case-full-column">\n            <h3 class="iapp-case-section-label">Decision Breakdown:</h3>\n            ';
 _.each(justices, function(justice, index) { ;
__p += '\n            ';
 if(index % 3 == 0) { ;
__p += '\n            ';
 if(index > 0) { ;
__p += '\n            </tr>\n            </table>\n            ';
};
__p += '\n            <table class="table iapp-decision-table">\n                <tr>\n                    ';
};
__p += '\n                    ';
 if(justice.status == "for") { ;
__p += '\n                    <td class="iapp-for"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/scotus-tracker/img/' +
((__t = (justice.name.substr(justice.name.lastIndexOf(" ") + 1, justice.name.length - justice.name.lastIndexOf(" ") + 1).toLowerCase() )) == null ? '' : __t) +
'.jpg" width="100%"/>\n                        ' +
((__t = (justice.first_name)) == null ? '' : __t) +
'<br/>' +
((__t = (justice.last_name)) == null ? '' : __t) +
'<br/><br/><span class="vote">MAJORITY</span></td>\n                    ';
} else if(justice.status == "in-part") { ;
__p += '\n                    <td class="iapp-in-part"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/scotus-tracker/img/' +
((__t = (justice.name.substr(justice.name.lastIndexOf(" ") + 1, justice.name.length - justice.name.lastIndexOf(" ") + 1).toLowerCase() )) == null ? '' : __t) +
'.jpg" width="100%"/>\n                        ' +
((__t = (justice.first_name)) == null ? '' : __t) +
'<br/>' +
((__t = (justice.last_name)) == null ? '' : __t) +
'<br/><br/><span class="vote">CONCUR</span></td>\n                    ';
} else if(justice.status == "against") { ;
__p += '\n                    <td class="iapp-against"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/scotus-tracker/img/' +
((__t = (justice.name.substr(justice.name.lastIndexOf(" ") + 1, justice.name.length - justice.name.lastIndexOf(" ") + 1).toLowerCase() )) == null ? '' : __t) +
'.jpg" width="100%"/>\n                        ' +
((__t = (justice.first_name)) == null ? '' : __t) +
'<br/>' +
((__t = (justice.last_name)) == null ? '' : __t) +
'<br/><br/><span class="vote">DISSENT</span></td>\n                    ';
};
__p += '\n\n                    ';
});
__p += '\n                </tr>\n            </table>\n\n        </div>\n    </div>\n        <div class="iapp-row-wrapper">\n        <div class="iapp-case-split-column">\n            <div class="iapp-case-section">\n                <h3 class="iapp-case-section-label">Opinion</h3>\n\n                <h4 class="iapp-case-quote">' +
((__t = ( quote_1 )) == null ? '' : __t) +
'</h4>\n\n                <h4 class="iapp-case-quote-source">' +
((__t = ( quote_1_source)) == null ? '' : __t) +
'</h4>\n            </div>\n        </div>\n        <div class="iapp-case-split-column right">\n            <div class="iapp-case-section">\n                <h3 class="iapp-case-section-label">Dissent</h3>\n\n                <h4 class="iapp-case-quote">' +
((__t = ( quote_2 )) == null ? '' : __t) +
'</h4>\n\n                <h4 class="iapp-case-quote-source">' +
((__t = ( quote_2_source)) == null ? '' : __t) +
'</h4>\n            </div>\n        </div>\n    </div>\n\n    <div class="iapp-row-wrapper">\n        <div class="iapp-case-argument iapp-case-split-column">\n            <div class="iapp-case-section">\n                <h3 class="iapp-case-argument-title iapp-case-section-label">Argument For</h3>\n                <h4 class="iapp-case-argument-text">' +
((__t = ( argument_for )) == null ? '' : __t) +
'</h4>\n            </div>\n\n\n        </div>\n\n        <div class="iapp-case-argument iapp-case-split-column right">\n            <div class="iapp-case-section">\n                <h3 class="iapp-case-argument-title iapp-case-section-label">Argument Against</h3>\n                <h4 class="iapp-case-argument-text">' +
((__t = ( argument_against )) == null ? '' : __t) +
'</h4>\n            </div>\n        </div>\n    </div>\n\n    <div class="iapp-row-wrapper">\n        <div class="iapp-share-buttons">\n            <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'"\n               class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img\n                    src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/scotus-tracker/img/twitter.svg"\n                    alt="Twitter share"></a>\n            <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (shareImage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'"\n               class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img\n                    src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/scotus-tracker/img/fb.svg"\n                    alt="Facebook share"></a>\n        </div>\n    </div>\n    <div class="iapp-case-nav">\n        <div class="iapp-button iapp-button-blue iapp-case-nav-button iapp-case-next-button">\n            <div class="iapp-button-text">Next</div>\n        </div>\n        <div class="iapp-button iapp-button-blue iapp-case-nav-button iapp-case-previous-button">\n            <div class="iapp-button-text">Back</div>\n        </div>\n    </div>\n</div>\n';

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
__p += '<div class="iapp-case-wrap">\n    <div class="small-head center">Supreme Court Decision Tracker</div>\n    <div class="case-bar-wrap">\n        <h2 class="iapp-case-name">' +
((__t = (case_title)) == null ? '' : __t) +
' </h2>\n\n        <p class="iapp-decided-indicator">' +
((__t = (case_name )) == null ? '' : __t) +
' <span\n                class="label label-warning">Argued: ' +
((__t = (case_date)) == null ? '' : __t) +
' (Undecided)</span>\n        </p>\n    </div>\n    <div class="iapp-row-wrapper">\n        <div class="iapp-case-split-column">\n            <div class="iapp-case-section">\n                <h3 class="iapp-case-section-label">Question</h3>\n                <h4 class="iapp-case-question">' +
((__t = (question)) == null ? '' : __t) +
'</h4>\n            </div>\n        </div>\n        <div class="iapp-case-split-column right">\n            <div class="iapp-case-section">\n                <h3 class="iapp-case-section-label">Possible Outcome</h3>\n                <h4 class="iapp-outcome">' +
((__t = (outcome)) == null ? '' : __t) +
'</h4>\n            </div>\n        </div>\n    </div>\n\n    <div class="iapp-row-wrapper">\n        <div class="iapp-case-full-column">\n            <h3 class="iapp-case-section-label">Decision Breakdown:</h3>\n            ';
 _.each(justices, function(justice, index) { ;
__p += '\n            ';
 if(index % 3 == 0) { ;
__p += '\n            ';
 if(index > 0) { ;
__p += '\n            </tr>\n            </table>\n            ';
};
__p += '\n            <table class="table iapp-decision-table">\n                <tr>\n                    ';
};
__p += '\n                    <td class="iapp-undecided"><img src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/scotus-tracker/img/' +
((__t = (justice.name.substr(justice.name.lastIndexOf(" ") + 1, justice.name.length - justice.name.lastIndexOf(" ") + 1).toLowerCase() )) == null ? '' : __t) +
'.jpg" width="100%"/>\n                        ' +
((__t = (justice.first_name)) == null ? '' : __t) +
'<br/>' +
((__t = (justice.last_name)) == null ? '' : __t) +
'<br/>\n                    </td>\n                    ';
});
__p += '\n                </tr>\n            </table>\n\n        </div>\n    </div>\n\n    <div class="iapp-row-wrapper">\n        <div class="iapp-case-split-column">\n            <div class="iapp-case-section">\n                <h3 class="iapp-case-section-label">Oral Argument</h3>\n\n                <h4 class="iapp-case-quote">' +
((__t = ( quote_1 )) == null ? '' : __t) +
'</h4>\n\n                <h4 class="iapp-case-quote-source">' +
((__t = ( quote_1_source)) == null ? '' : __t) +
'</h4>\n            </div>\n        </div>\n        <div class="iapp-case-split-column right">\n            <div class="iapp-case-section">\n                <h3 class="iapp-case-section-label">Oral Argument</h3>\n\n                <h4 class="iapp-case-quote">' +
((__t = ( quote_2 )) == null ? '' : __t) +
'</h4>\n\n                <h4 class="iapp-case-quote-source">' +
((__t = ( quote_2_source)) == null ? '' : __t) +
'</h4>\n            </div>\n        </div>\n    </div>\n    <div class="iapp-row-wrapper">\n        <div class="iapp-case-argument iapp-case-split-column">\n            <div class="iapp-case-section">\n                <h3 class="iapp-case-argument-title iapp-case-section-label">Argument For</h3>\n                <h4 class="iapp-case-argument-text">' +
((__t = ( argument_for )) == null ? '' : __t) +
'</h4>\n            </div>\n\n\n        </div>\n\n        <div class="iapp-case-argument iapp-case-split-column right">\n            <div class="iapp-case-section">\n                <h3 class="iapp-case-argument-title iapp-case-section-label">Argument Against</h3>\n                <h4 class="iapp-case-argument-text">' +
((__t = ( argument_against )) == null ? '' : __t) +
'</h4>\n            </div>\n        </div>\n    </div>\n\n\n\n\n    <div class="iapp-row-wrapper">\n        <div class="iapp-share-buttons">\n            <a href="https://twitter.com/intent/tweet?url=' +
((__t = (twitterShare)) == null ? '' : __t) +
'&text=' +
((__t = (encodedShare)) == null ? '' : __t) +
'"\n               class="iapp-share-button iapp-share-twitter iapp-share-popup" target="_blank"><img\n                    src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/scotus-tracker/img/twitter.svg"\n                    alt="Twitter share"></a>\n            <a href="https://www.facebook.com/dialog/feed?display=popup&app_id=' +
((__t = (fb_id)) == null ? '' : __t) +
'&link=' +
((__t = (fbShare)) == null ? '' : __t) +
'&picture=' +
((__t = (shareImage)) == null ? '' : __t) +
'&name=&description=' +
((__t = (encodedShare)) == null ? '' : __t) +
'&redirect_uri=' +
((__t = (fb_redirect)) == null ? '' : __t) +
'"\n               class="iapp-share-button iapp-share-facebook iapp-share-popup" target="_blank"><img\n                    src="http://www.gannett-cdn.com/experiments/usatoday/2015/06/scotus-tracker/img/fb.svg"\n                    alt="Facebook share"></a>\n        </div>\n    </div>\n\n    <div class="iapp-case-nav">\n        <div class="iapp-button iapp-button-blue iapp-case-nav-button iapp-case-next-button">\n            <div class="iapp-button-text">Next</div>\n        </div>\n        <div class="iapp-button iapp-button-blue  iapp-case-nav-button iapp-case-previous-button">\n            <div class="iapp-button-text">Back</div>\n        </div>\n    </div>\n\n</div>';

}
return __p
};

  return this["templates"];

});