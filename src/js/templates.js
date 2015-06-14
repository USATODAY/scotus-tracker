define(function(){

this["templates"] = this["templates"] || {};

this["templates"]["app.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-panel iapp-intro-panel">\n    <h1 class="iapp-page-header">SCOTUS Decision Tracker </h1>\n    <p class="iapp-page-chatter">Amet repellendus iusto cumque voluptas necessitatibus similique sapiente? Minus error vero quia ea fugiat deleniti. Commodi quidem voluptate fugit modi soluta quisquam. Autem in beatae laboriosam excepturi corporis officia quasi!</p>\n    <div class="iapp-button iapp-button-blue iapp-begin-button"><div class="iapp-button-text">Begin</div></div>\n</div>\n';

}
return __p
};

this["templates"]["decidedcase.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="iapp-case-wrap">\n    <h2 class="iapp-case-name">' +
((__t = (case_name)) == null ? '' : __t) +
' </h2>\n    <p class="iapp-decided-indicator"><span class="label label-success">Decided</span></p>\n    <h4 class="iapp-case-question">' +
((__t = (question)) == null ? '' : __t) +
'</h4>\n    <div class="iapp-case-nav">\n        <div class="iapp-button iapp-button-blue iapp-case-nav-button iapp-case-next-button"><div class="iapp-button-text">Next</div></div>\n        <div class="iapp-button iapp-button-blue iapp-case-nav-button iapp-case-previous-button"><div class="iapp-button-text">Previous</div></div>\n    </div>\n\n    <h3 class="iapp-case-section-label">Outcome</h3>\n    <h4 class="iapp-outcome">' +
((__t = (outcome)) == null ? '' : __t) +
'</h4>\n    <h3 class="iapp-case-section-label">Decision Breakdown:</h3>\n    <table class="table table-bordered iapp-decision-table">\n        <thead>\n            <tr>\n                <td>Justice</td>\n                <td>Decision</td>\n            </tr>\n        </thead>\n        <tbody>\n            ';
 _.each(justices, function(justice) { ;
__p += '\n            <tr>\n                <td>' +
((__t = (justice.name )) == null ? '' : __t) +
'</td>\n                ';
 if(justice.status == "for") { ;
__p += '\n                <td class="iapp-for">Majority</td>\n                ';
} else if(justice.status == "in-part") { ;
__p += '\n                <td class="iapp-in-part">Concur in part</td>\n                ';
} else if(justice.status == "against") { ;
__p += '\n                <td class="iapp-against">Dissent</td>\n                ';
};
__p += '\n            </tr>\n            </tr>\n            ';
});
__p += '\n        </tbody>\n    </table>\n</div>\n';

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
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="iapp-case-wrap">\n    <h2 class="iapp-case-name">' +
((__t = (case_name)) == null ? '' : __t) +
'</h2>\n    <p class="iapp-decided-indicator"><span class="label label-warning">Undecided</span></p>\n    <h4 class="iapp-case-question">' +
((__t = (question)) == null ? '' : __t) +
'</h4>\n    <div class="iapp-case-arguments">\n        <div class="iapp-case-argument">\n            <h3 class="iapp-case-argument-title">Argument For</h3>\n            <p class="iapp-case-argument-text">' +
((__t = ( argument_for )) == null ? '' : __t) +
'</p>\n        </div>\n        <div class="iapp-case-argument">\n            <h3 class="iapp-case-argument-title">Argument Against</h3>\n            <p class="iapp-case-argument-text">' +
((__t = ( argument_against )) == null ? '' : __t) +
'</p>\n        </div>\n    </div>\n</div>\n<div class="iapp-case-nav">\n    <div class="iapp-button iapp-button-blue iapp-case-nav-button iapp-case-next-button"><div class="iapp-button-text">Next</div></div>\n    <div class="iapp-button iapp-button-blue  iapp-case-nav-button iapp-case-previous-button"><div class="iapp-button-text">Previous</div></div>\n</div>\n\n';

}
return __p
};

  return this["templates"];

});