"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[539],{8130:function(e,r,n){n.d(r,{V:function(){return l}});var t=n(9439),i=n(2791),o=n(7689),a=n(3329),l=function(){var e=(0,i.useState)(""),r=(0,t.Z)(e,2),n=r[0],l=r[1],s=(0,o.TH)();(0,i.useEffect)((function(){var e=u(s.pathname);l(e)}),[s]);var u=function(e){switch(e.substring(1)){case"categories":return"Categories";case"favorite":return"Favorites";case"add":return"Add recipe";case"my":return"My recipes";case"search":return"Search";case"shopping-list":return"Shopping list";default:return"Page Title"}};return(0,a.jsx)("div",{className:"page-wrapper",children:(0,a.jsxs)("div",{className:"mainTitle-container",children:[(0,a.jsx)("h1",{className:"mainTitle",children:n}),(0,a.jsx)("div",{className:"mainTitle-decorator1"}),(0,a.jsx)("div",{className:"mainTitle-decorator2"}),(0,a.jsx)("div",{className:"mainTitle-decorator3"})]})})}},7539:function(e,r,n){n.r(r),n.d(r,{default:function(){return Ce}});var t,i,o=n(2791),a=n(9439),l=n(4554),s=n(5705),u=n(6727),c="AddRecipeForm_addRecipeForm__KeVKW",d=n(1413),m=n(5987),p=n(6151),h=n(3329),f=["children"],g=function(e){var r=e.children,n=((0,m.Z)(e,f),(0,s.u6)().submitForm),t={variant:"standart",color:"primary",onClick:function(){n()},sx:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,fontSize:"16px",lineHeight:"24px",color:"#FAFAFA",width:"129px",height:"46px",borderRadius:"24px 44px",border:"1px solid #F0F0F0",background:"#22252A",textTransform:"none","&:hover":{background:"#8BAA36"}}};return(0,h.jsx)(p.Z,(0,d.Z)((0,d.Z)({},t),{},{children:r}))},x=JSON.parse('{"breakfast":"Breakfast","dessert":"Dessert","miscellaneous":"Miscellaneous","perogy":"Pierogi"}'),v=JSON.parse('{"5 min":"5 min","10 min":"10 min","15 min":"15 min","20 min":"20 min","25 min":"25 min","30 min":"30 min","35 min":"35 min","40 min":"40 min","45 min":"45 min","50 min":"50 min","55 min":"55 min","1 hour":"1 hour","1 hour 5 min":"1 hour 5 min","1 hour 15 min":"1 hour 15 min","1 hour 20 min":"1 hour 20 min","1 hour 10 min":"1 hour 10 min","1 hour 25 min":"1 hour 25 min","1 hour 30 min":"1 hour 30 min","1 hour 35 min":"1 hour 35 min","1 hour 40 min":"1 hour 40 min","1 hour 45 min":"1 hour 45 min","1 hour 50 min":"1 hour 50 min","1 hour 55 min":"1 hour 55 min","2 hours":"2 hours","2 hours 5 min":"2 hours 5 min","2 hours 10 min":"2 hours 10 min","2 hours 15 min":"2 hours 15 min","2 hours 25 min":"2 hours 25 min","2 hours 30 min":"2 hours 30 min","2 hours 35 min":"2 hours 35 min","2 hours 40 min":"2 hours 40 min","2 hours 45 min":"2 hours 45 min","2 hours 50 min":"2 hours 50 min","2 hours 55 min":"2 hours 55 min","3 hours":"3 hours","more than 3 hours":"more than 3 hours"}'),j=n(7630),y=n(8128),b=["name"],w=(0,j.ZP)(y.Z)((function(e){e.theme;var r=e.error;return{borderBottom:"1px solid ".concat(r?"red":"#E0E0E0"),"& .MuiOutlinedInput-root":{"& input":{paddingLeft:0},"& fieldset":{paddingLeft:0}},"& .MuiOutlinedInput-notchedOutline":{outline:"none",border:"none"},"& .MuiFormHelperText-root":{position:"absolute",bottom:"-20px"},"& .MuiPopover-paper":{width:"122px"}}})),O=function(e){var r=e.name,n=(0,m.Z)(e,b),t=(0,s.U$)(r),i=(0,a.Z)(t,2),o=i[0],l=i[1],u=(0,d.Z)((0,d.Z)((0,d.Z)({},o),n),{},{fullWidth:!0,variant:"outlined"});return l&&l.touched&&l.error&&(u.error=!0,u.helperText=l.error),(0,h.jsx)(w,(0,d.Z)({},u))},k=["title","titleId"];function C(){return C=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},C.apply(this,arguments)}function Z(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function I(e,r){var n=e.title,a=e.titleId,l=Z(e,k);return o.createElement("svg",C({width:64,height:64,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":a},l),n?o.createElement("title",{id:a},n):null,t||(t=o.createElement("path",{d:"M56.381 22.8571V13.696C56.3811 12.0826 55.7414 10.535 54.6023 9.39244C53.4631 8.24988 51.9175 7.60557 50.3041 7.60073L41.143 7.5733M56.381 41.1428V50.2857C56.381 51.9022 55.7389 53.4526 54.5958 54.5957C53.4527 55.7387 51.9024 56.3809 50.2858 56.3809H41.143M22.8572 7.5733L13.6961 7.60378C12.0827 7.60862 10.5371 8.25293 9.39792 9.39549C8.2588 10.538 7.61913 12.0856 7.61914 13.699V22.8571M22.8572 56.3809H13.7144C12.0978 56.3809 10.5475 55.7387 9.40439 54.5957C8.26132 53.4526 7.61914 51.9022 7.61914 50.2857V41.1428",stroke:"#FAFAFA",strokeLinecap:"round",strokeLinejoin:"round"})),i||(i=o.createElement("path",{d:"M32 37.5C33.25 37.5 34.3127 37.0627 35.188 36.188C36.0627 35.3127 36.5 34.25 36.5 33C36.5 31.75 36.0627 30.6873 35.188 29.812C34.3127 28.9373 33.25 28.5 32 28.5C30.75 28.5 29.6873 28.9373 28.812 29.812C27.9373 30.6873 27.5 31.75 27.5 33C27.5 34.25 27.9373 35.3127 28.812 36.188C29.6873 37.0627 30.75 37.5 32 37.5ZM24 41C23.45 41 22.9793 40.8043 22.588 40.413C22.196 40.021 22 39.55 22 39V27C22 26.45 22.196 25.9793 22.588 25.588C22.9793 25.196 23.45 25 24 25H27.15L29 23H35L36.85 25H40C40.55 25 41.021 25.196 41.413 25.588C41.8043 25.9793 42 26.45 42 27V39C42 39.55 41.8043 40.021 41.413 40.413C41.021 40.8043 40.55 41 40 41H24Z",fill:"#FAFAFA"})))}var F=o.forwardRef(I),E=(n.p,{image:["jpg","png","jpeg","webp"]});var S,_=function(e){var r=e.name,n=e.reset,t=(0,o.useState)(null),i=(0,a.Z)(t,2),l=i[0],u=i[1],c=(0,s.U$)(r),d=(0,a.Z)(c,3),m=d[1],p=d[2],f=(0,o.useRef)(null),g=function(e){return e?e.size>716800?"File size exceeds the maximum limit":(r=e.name.toLowerCase(),n="image",r&&E[n].indexOf(r.split(".").pop())>-1?void 0:"Invalid file format"):"Please select a file";var r,n};return(0,o.useEffect)((function(){n&&u(null)}),[n]),(0,h.jsxs)("div",{style:{position:"relative"},children:[(0,h.jsxs)("div",{style:{width:"279px",height:"268px",backgroundColor:"#8BAA36",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px"},onClick:function(){f.current.click()},children:[l?(0,h.jsx)("img",{src:l,alt:"recipe",style:{maxWidth:"100%",maxHeight:"100%"}}):(0,h.jsx)(F,{width:"64px",height:"64px"}),(0,h.jsx)("input",{type:"file",id:r,name:r,ref:f,style:{display:"none"},onChange:function(e){var r=e.currentTarget.files[0];p.setValue(r);var n=g(r);if(p.setError(n),p.setTouched(!0),n)u(null);else{p.setTouched(!1);var t=new FileReader;t.onload=function(e){u(e.target.result)},t.readAsDataURL(r)}n&&setTimeout((function(){p.setTouched(!0)}),0)}})]}),m.touched&&m.error?(0,h.jsx)("div",{style:{color:"#d32f2f",fontSize:"0.75rem",fontWeight:"400",lineHeight:"1.66",position:"absolute",bottom:"-18px"},children:m.error}):null]})},L=n(4693),P=n(9891),A=["title","titleId"];function T(){return T=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},T.apply(this,arguments)}function R(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function M(e,r){var n=e.title,t=e.titleId,i=R(e,A);return o.createElement("svg",T({width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":t},i),n?o.createElement("title",{id:t},n):null,S||(S=o.createElement("path",{d:"M11 1L6 6L1 1",stroke:"#8BAA36",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var N,q,B=o.forwardRef(M),H=(n.p,["name","options","label","text"]),W=(0,j.ZP)(L.Z)((function(e){e.theme,e.error;return{paddingTop:"16.5px",paddingBottom:"16.5px",textAlign:"end",width:"160px","& .MuiSelect-icon":{top:"calc(55% - 0.5em)"},"&::before":{content:'""',left:"-183px",opacity:"0.3"}}})),V=function(e){var r=e.name,n=e.options,t=e.label,i=(e.text,(0,m.Z)(e,H)),o=(0,s.u6)().setFieldValue,u=(0,s.U$)(r),c=(0,a.Z)(u,2),p=c[0],f=c[1],g=(0,d.Z)((0,d.Z)((0,d.Z)({},p),i),{},{variant:"standard",onChange:function(e){var n=e.target.value;o(r,n)},IconComponent:B,MenuProps:{PaperProps:{style:{maxHeight:"220px",width:"155px"}}}});return f&&f.touched&&f.error&&(g.error=!0),(0,h.jsxs)(l.Z,{position:"relative",children:[(0,h.jsx)(W,(0,d.Z)((0,d.Z)({label:t},g),{},{children:Object.keys(n).map((function(e,r){return(0,h.jsx)(P.Z,{value:e,children:n[e]},r)}))})),(0,h.jsx)("div",{style:{position:"absolute",top:"50%",left:"-183px",transform:"translateY(-50%)",opacity:"0.5"},children:(0,h.jsx)("span",{style:{textAlign:"end"},children:t})})]})},z=function(e){var r=e.isFormSubmitted,n=e.categories,t=e.cookingTime;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(_,{name:"file",reset:r}),(0,h.jsx)(O,{name:"title",placeholder:"Enter item title"}),(0,h.jsx)(O,{name:"about",placeholder:"Enter about recipe"}),(0,h.jsxs)(l.Z,{display:"flex",flexDirection:"column",alignItems:"flex-end",width:"100%",children:[(0,h.jsx)(V,{name:"category",label:"Category",options:n}),(0,h.jsx)(V,{name:"cookingTime",label:"Cooking time",options:t})]})]})},D=n(890),U="RecipeIngredientsFields_ingredientsWrapper__tHn7n",K="RecipeIngredientsFields_ingredientsHeaderWrapper__RYr94",J="RecipeIngredientsFields_addRemoveCounter__Qh+Tx",Y="RecipeIngredientsFields_counterIcon__BbUXx",$="RecipeIngredientsFields_inputWrapper__sN9YM",X="RecipeIngredientsFields_deleteIcon__qIKEx",Q=["title","titleId"];function G(){return G=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},G.apply(this,arguments)}function ee(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function re(e,r){var n=e.title,t=e.titleId,i=ee(e,Q);return o.createElement("svg",G({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":t},i),n?o.createElement("title",{id:t},n):null,N||(N=o.createElement("path",{d:"M2.1875 7H11.8125",stroke:"#8BAA36",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),q||(q=o.createElement("path",{d:"M7 2.1875V11.8125",stroke:"#8BAA36",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var ne,te=o.forwardRef(re),ie=(n.p,["title","titleId"]);function oe(){return oe=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},oe.apply(this,arguments)}function ae(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function le(e,r){var n=e.title,t=e.titleId,i=ae(e,ie);return o.createElement("svg",oe({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":t},i),n?o.createElement("title",{id:t},n):null,ne||(ne=o.createElement("path",{d:"M2.1875 7H11.8125",stroke:"#333333",strokeOpacity:.3,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var se,ue,ce=o.forwardRef(le),de=(n.p,["title","titleId"]);function me(){return me=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},me.apply(this,arguments)}function pe(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function he(e,r){var n=e.title,t=e.titleId,i=pe(e,de);return o.createElement("svg",me({width:18,height:19,viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":t},i),n?o.createElement("title",{id:t},n):null,se||(se=o.createElement("path",{d:"M14.0625 4.4375L3.9375 14.5625",stroke:"#333333",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ue||(ue=o.createElement("path",{d:"M14.0625 14.5625L3.9375 4.4375",stroke:"#333333",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var fe=o.forwardRef(he),ge=(n.p,function(e){var r=e.counter,n=e.handleIncrement,t=e.handleDecrement,i=(0,s.u6)().values;return(0,h.jsxs)(l.Z,{className:U,children:[(0,h.jsx)(l.Z,{className:K,children:(0,h.jsx)(D.Z,{sx:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:"600",fontSize:"24px",lineHeight:"24px",color:"#3E4462"},children:"Ingredients"})}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"100%",marginTop:"28px"},children:(0,h.jsx)(s.F2,{name:"ingredients",children:function(e){var o=e.push,a=e.remove,s=e.form;return(0,h.jsxs)("div",{children:[s.values.ingredients.map((function(e,r){return(0,h.jsxs)("div",{className:$,children:[(0,h.jsx)(y.Z,{name:"ingredients[".concat(r,"].name"),placeholder:"Enter ingredient".concat(r),onChange:s.handleChange,onBlur:s.handleBlur,variant:"outlined",value:e.name,sx:{width:"194px",height:"53px",color:"red"}}),(0,h.jsx)(y.Z,{name:"ingredients[".concat(r,"].dose"),placeholder:"Dose",onChange:s.handleChange,onBlur:s.handleBlur,value:e.dose,sx:{width:"84px",height:"53px",marginLeft:"14px"}}),i.ingredients.length>1&&(0,h.jsx)(fe,{width:"18px",height:"18px",cursor:"pointer",className:X,onClick:function(){a(r),delete i.ingredients[r],t()}})]},r)})),(0,h.jsxs)(l.Z,{className:J,children:[r>1&&(0,h.jsx)(ce,{onClick:function(){a(r-1),t()},className:Y}),(0,h.jsx)("span",{children:r}),(0,h.jsx)(te,{onClick:function(){o({name:"",dose:""}),n()},className:Y})]})]})}})})]})}),xe=function(){return(0,h.jsxs)(l.Z,{width:"100%",mt:"44px",children:[(0,h.jsx)(D.Z,{sx:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:"600",fontSize:"24px",lineHeight:"24px",color:"#3E4462"},children:"Recipe Preparation"}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",maxWidth:"100%",marginTop:"28px"},children:(0,h.jsx)(s.gN,{name:"preparation",placeholder:"enter preparation here",variant:"outlined",as:"textarea"})})]})},ve=716800,je={title:"",about:"",category:"breakfast",cookingTime:"40 min",recipe:"",file:"",ingredients:[{name:"",dose:""}],preparation:""},ye={image:["jpg","png","jpeg","webp"]};function be(e,r){return e&&ye[r].indexOf(e.split(".").pop())>-1}var we=u.Ry().shape({title:u.Z_().required("Title is required"),about:u.Z_().required("About is required"),category:u.Z_().required("Category is required"),cookingTime:u.Z_().required("Cooking time is required"),file:u.nK().test("is-valid-file","Invalid file format",(function(e){return!e||be(e&&e.name.toLowerCase(),"image")})).test("is-valid-size","File size exceeds the maximum limit",(function(e){return!e||e.size<=ve})).required("Image is required"),ingredients:u.IX().of(u.Ry().shape({name:u.Z_().required("Ingredient is required"),dose:u.Z_().required("Dose is required")})).required("Ingredients are required"),preparation:u.Z_().required()}),Oe=function(){var e=(0,o.useState)(!1),r=(0,a.Z)(e,2),n=r[0],t=r[1],i=(0,o.useState)(1),u=(0,a.Z)(i,2),d=u[0],m=u[1],p=function(){m((function(e){return e+1}))},f=function(){d>1&&m((function(e){return e-1}))},j=function(e){return e?e.size>ve?"File size exceeds the maximum limit":be(e.name.toLowerCase(),"image")?void 0:"Invalid file format":"Please select a file"};return(0,h.jsx)("div",{className:c,children:(0,h.jsx)(s.J9,{initialValues:je,validationSchema:we,onSubmit:function(e,r){var n=r.resetForm,i=e.file;j(i)||(console.log(e),t(!0),m(1),n())},children:function(e){e.values,e.errors;return(0,h.jsx)(s.l0,{children:(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)(z,{isFormSubmitted:n,categories:x,cookingTime:v}),(0,h.jsx)(ge,{counter:d,handleIncrement:p,handleDecrement:f}),(0,h.jsx)(xe,{}),(0,h.jsx)(l.Z,{marginTop:"18px",width:"100%",children:(0,h.jsx)(g,{type:"submit",children:"Submit"})})]})})}})})},ke=n(8130),Ce=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ke.V,{}),(0,h.jsx)(Oe,{})]})}}}]);
//# sourceMappingURL=539.27c40807.chunk.js.map