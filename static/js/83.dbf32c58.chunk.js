(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[83],{4645:function(t,e,n){"use strict";n.d(e,{F4:function(){return o},fk:function(){return r}});var r=function(t){return t.contacts.items.filter((function(t){return t.family}))},o=function(t){var e=t.contacts,n=e.items,r=e.filter;if(!r)return n;var o=r.toLowerCase();return n.filter((function(t){var e=t.name,n=t.number,r=e.toLowerCase(),a=n.toLowerCase();return r.includes(o)||a.includes(o)}))}},83:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return z}});var r=n(9434),o=n(2791),a=n(4942),c=n(1413),s=n(8152),i=n(2007),u=n.n(i),l=function(t){var e=t.initialState,n=t.onSubmit,r=(0,o.useState)((0,c.Z)({},e)),i=(0,s.Z)(r,2),u=i[0],l=i[1];return{state:u,setState:l,handleChange:function(t){var e=t.target,n=e.value,r=e.name,o=e.type,s=e.checked,i="checkbox"===o?s:n;l((function(t){return(0,c.Z)((0,c.Z)({},t),{},(0,a.Z)({},r,i))}))},handleSubmit:function(t){t.preventDefault(),n((0,c.Z)({},u)),l((0,c.Z)({},e))}}},f=l;l.defaultProps={onSubmit:function(){}},l.propTypes={onSubmit:u().func,target:u().object};var m=n(6429),h=n.n(m),p={nameId:"",numberId:"",familyId:"",name:"",number:"",family:!1},d="contactForm_phoneForm__fecZ5",x="contactForm_phoneInputName__hiaPc",v="contactForm_phoneInputNumber__4PF5a",b="contactForm_phoneInputLicence__62fyl",_="contactForm_licenceText__u6xqY",g="contactForm_phoneFormButton__FRxt2",y=n(3329),C=function(t){var e=t.onSubmit,n=f({initialState:p,onSubmit:e}),r=n.state,a=n.handleChange,c=n.handleSubmit,s=(0,o.useMemo)((function(){return h()()}),[]),i=(0,o.useMemo)((function(){return h()()}),[]),u=(0,o.useMemo)((function(){return h()()}),[]),l=r.name,m=r.number,C=r.family;return(0,y.jsxs)("form",{onSubmit:c,className:d,children:[(0,y.jsxs)("label",{htmlFor:s,children:["Name",(0,y.jsx)("input",{className:x,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:l,onChange:a,id:s,required:!0})]}),(0,y.jsxs)("label",{htmlFor:i,children:["Number",(0,y.jsx)("input",{className:v,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:m,onChange:a,id:i,required:!0})]}),(0,y.jsxs)("label",{html:u,children:[(0,y.jsx)("input",{className:b,value:C,type:"checkbox",name:"family",checked:C,onChange:a,id:u}),(0,y.jsx)("span",{className:_,children:"If family contact"})]}),(0,y.jsx)("button",{type:"submit",className:g,children:"Add contact"})]})},j=C;C.defaultProps={onSubmit:function(){}};var w="contactList_phonebook__Ekg2i",k="contactList_phonebookTitle__fYbgA",N="contactList_phonebookListItem__zsiCr",F="contactList_phonebookListButton__gBbI+",L="contactList_contact__YILiK",S="contactList_contactInput__VdnXO",I="contactList_title__LOOxb",T=function(t){var e=t.id,n=t.name,r=t.number,o=t.removeContact;return(0,y.jsxs)("li",{className:N,children:[n,": ",r,(0,y.jsx)("button",{className:F,type:"button",onClick:function(){return o(e)},children:"Delete"})]})},P=(0,o.memo)(T);T.defaultProps={id:"",name:"",number:"",removeContact:function(){}};var O=function(t){var e=t.items,n=t.removeContact,r=e.map((function(t){return(0,y.jsx)(P,(0,c.Z)((0,c.Z)({},t),{},{removeContact:n}),t.id)}));return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h4",{className:I,children:"Contacts list:"}),(0,y.jsx)("ol",{children:r})]})},Z=O;O.defaultProps={items:[],removeContact:function(){}};var M=n(2077),A=n(856),E=n(4645),R=function(t){return t.contacts.filter},V=function(){var t=(0,r.v9)(E.F4),e=(0,r.v9)(R),n=(0,r.I0)();return(0,y.jsxs)("div",{className:w,children:[(0,y.jsx)("h2",{className:k,children:"Add contact"}),(0,y.jsx)(j,{onSubmit:function(t){var e=(0,M.uK)(t);n(e)}}),(0,y.jsx)("h2",{className:k,children:"Contacts"}),(0,y.jsxs)("div",{className:L,children:[(0,y.jsx)("input",{value:e,name:"filter",onChange:function(t){var e=t.target;n((0,A.T)(e.value))},className:S,placeholder:"Filter contacts"}),(0,y.jsx)(Z,{items:t,removeContact:function(t){n((0,M.zY)(t))}})]})]})},q=V;V.defaultProps={getFilteredContacts:function(){},getFilter:function(){},data:{},id:""};var z=function(){return(0,y.jsx)("div",{children:(0,y.jsx)(q,{})})}},888:function(t,e,n){"use strict";var r=n(9047);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,c){if(c!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(t,e,n){t.exports=n(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6429:function(t,e,n){"use strict";t.exports=n(5274)},8857:function(t,e,n){"use strict";var r,o,a,c=n(5408),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){a=!1}function u(t){if(t){if(t!==r){if(t.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,i()}}else r!==s&&(r=s,i())}function l(){return a||(a=function(){r||u(s);for(var t,e=r.split(""),n=[],o=c.nextValue();e.length>0;)o=c.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||s},characters:function(t){return u(t),r},seed:function(t){c.seed(t),o!==t&&(i(),o=t)},lookup:function(t){return l()[t]},shuffled:l}},7098:function(t,e,n){"use strict";var r,o,a=n(2226);n(8857);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===o?r++:(r=0,o=n),e+=a(7),e+=a(t),r>0&&(e+=a(r)),e+=a(n)}},2226:function(t,e,n){"use strict";var r=n(8857),o=n(9139),a=n(2483);t.exports=function(t){for(var e,n=0,c="";!e;)c+=a(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return c}},5274:function(t,e,n){"use strict";var r=n(8857),o=n(7098),a=n(6046),c=n(5347)||0;function s(){return o(c)}t.exports=s,t.exports.generate=s,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return c=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=a},6046:function(t,e,n){"use strict";var r=n(8857);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},9139:function(t){"use strict";var e,n="object"===typeof window&&(window.crypto||window.msCrypto);e=n&&n.getRandomValues?function(t){return n.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=e},5408:function(t){"use strict";var e=1;t.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(t){e=t}}},5347:function(t){"use strict";t.exports=0},2483:function(t){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*n/e.length),a="";;)for(var c=t(o),s=o;s--;)if((a+=e[c[s]&r]||"").length===+n)return a}}}]);
//# sourceMappingURL=83.dbf32c58.chunk.js.map