"use strict";var t=require("react");exports.Button=e=>{var{children:r,variant:n,shape:a}=e,o=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r}(e,["children","variant","shape"]);const c=`btn btn-${n} btn-${a}`;return t.createElement("button",Object.assign({className:c},o),r)};
