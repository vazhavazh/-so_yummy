"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[536],{8130:function(e,r,n){n.d(r,{V:function(){return l}});var t=n(9439),i=n(2791),a=n(7689),o=n(3329),l=function(e){var r=e.recipeTitle,n=(0,i.useState)(""),l=(0,t.Z)(n,2),s=l[0],c=l[1],p=(0,a.TH)();(0,i.useEffect)((function(){var e=d(p.pathname);c(e)}),[p]);var d=function(e){switch(e.substring(1)){case"categories":return"Categories";case"favorite":return"Favorites";case"add":return"Add recipe";case"my":return"My recipes";case"search":return"Search";case"shopping-list":return"Shopping list";default:return"Page Title"}};return(0,o.jsx)(o.Fragment,{children:r?(0,o.jsx)("h1",{className:"recipeName",children:r}):(0,o.jsx)("div",{className:"page-wrapper",children:(0,o.jsxs)("div",{className:"mainTitle-container",children:[(0,o.jsx)("h1",{className:"mainTitle",children:s}),(0,o.jsx)("div",{className:"mainTitle-decorator1"}),(0,o.jsx)("div",{className:"mainTitle-decorator2"}),(0,o.jsx)("div",{className:"mainTitle-decorator3"})]})})})}},6112:function(e,r,n){n.d(r,{H:function(){return a}});var t=n(9439),i=n(2791),a=function(e){var r=(0,i.useState)(window.innerWidth<=e),n=(0,t.Z)(r,2),a=n[0],o=n[1];return(0,i.useEffect)((function(){function r(){o(window.innerWidth<=e)}return window.addEventListener("resize",r),function(){return window.removeEventListener("resize",r)}}),[e]),a}},2536:function(e,r,n){n.r(r),n.d(r,{default:function(){return ye}});var t,i,a=n(2791),o=n(9439),l=n(1413),s=n(5705),c=n(6747),p=n(6727),d=n(9278),u={"dark-mode":"AddRecipeForm_dark-mode__JrKm9","remove-btnX":"AddRecipeForm_remove-btnX__20jtb","remove-btnX--icon":"AddRecipeForm_remove-btnX--icon__XlwWQ","base-link-leaf":"AddRecipeForm_base-link-leaf__wnP1R",trashBtn:"AddRecipeForm_trashBtn__lrjfc","trashBtn--icon":"AddRecipeForm_trashBtn--icon__BhYco",flexWrapper:"AddRecipeForm_flexWrapper__WFCrm",active:"AddRecipeForm_active__72gzK",container:"AddRecipeForm_container__MxaEc",addRecipeFormWrapper:"AddRecipeForm_addRecipeFormWrapper__5XfAs",addRecipeForm:"AddRecipeForm_addRecipeForm__KeVKW",buttonWrapper:"AddRecipeForm_buttonWrapper__HI-97",descriptionWrapper:"AddRecipeForm_descriptionWrapper__u4yK8",minWidthTabletContainer:"AddRecipeForm_minWidthTabletContainer__ujqq6",inputWrapper:"AddRecipeForm_inputWrapper__B+dVC",errorMessage:"AddRecipeForm_errorMessage__O17cD",recipeDescriptionInput:"AddRecipeForm_recipeDescriptionInput__376kL",error:"AddRecipeForm_error__5LksZ",inputWrapperCategory:"AddRecipeForm_inputWrapperCategory__o8+bl",categoryLabel:"AddRecipeForm_categoryLabel__2xmI1",inputWrapperFile:"AddRecipeForm_inputWrapperFile__z2Fkw",errorMessageFile:"AddRecipeForm_errorMessageFile__2sWWz",ingredientsWrapper:"AddRecipeForm_ingredientsWrapper__NIX2h",ingredientsTitle:"AddRecipeForm_ingredientsTitle__NYMRm",addRemoveCounter:"AddRecipeForm_addRemoveCounter__C2T00",counterIcon:"AddRecipeForm_counterIcon__voYz3",ingredientsHeaderWrapper:"AddRecipeForm_ingredientsHeaderWrapper__Wi+sP",ingredientsInputWrapper:"AddRecipeForm_ingredientsInputWrapper__gygNl",ingredientItemWrapper:"AddRecipeForm_ingredientItemWrapper__ltSkL",ingredientInputWtapper:"AddRecipeForm_ingredientInputWtapper__xnZz5",ingredientDose:"AddRecipeForm_ingredientDose__bm51g",deleteIcon:"AddRecipeForm_deleteIcon__vqqT8",doseErrorMessage:"AddRecipeForm_doseErrorMessage__9iSIK",preparationWrapper:"AddRecipeForm_preparationWrapper__r6uOx",preparationHeaderWrapper:"AddRecipeForm_preparationHeaderWrapper__sv9Oy",preparationInputWrapper:"AddRecipeForm_preparationInputWrapper__I+rex",preparationInput:"AddRecipeForm_preparationInput__iAomH",prepatationError:"AddRecipeForm_prepatationError__sGAtR"},m=n(5987),f=n(6151),h=n(3329),g=["children"],v=function(e){var r=e.children,n=((0,m.Z)(e,g),(0,s.u6)().submitForm),t={variant:"standart",color:"primary",onClick:function(){n()},sx:{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,fontSize:"16px",lineHeight:"24px",color:"#FAFAFA",width:"129px",height:"46px",borderRadius:"24px 44px",border:"1px solid #F0F0F0",background:"#22252A",textTransform:"none","&:hover":{background:"#8BAA36"},"@media screen and (min-width: 768px)":{width:"161px",height:"52px"}}};return(0,h.jsx)(f.Z,(0,l.Z)((0,l.Z)({},t),{},{children:r}))},_=["title","titleId"];function b(){return b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},b.apply(this,arguments)}function x(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function j(e,r){var n=e.title,o=e.titleId,l=x(e,_);return a.createElement("svg",b({width:64,height:64,viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":o},l),n?a.createElement("title",{id:o},n):null,t||(t=a.createElement("path",{d:"M56.381 22.8571V13.696C56.3811 12.0826 55.7414 10.535 54.6023 9.39244C53.4631 8.24988 51.9175 7.60557 50.3041 7.60073L41.143 7.5733M56.381 41.1428V50.2857C56.381 51.9022 55.7389 53.4526 54.5958 54.5957C53.4527 55.7387 51.9024 56.3809 50.2858 56.3809H41.143M22.8572 7.5733L13.6961 7.60378C12.0827 7.60862 10.5371 8.25293 9.39792 9.39549C8.2588 10.538 7.61913 12.0856 7.61914 13.699V22.8571M22.8572 56.3809H13.7144C12.0978 56.3809 10.5475 55.7387 9.40439 54.5957C8.26132 53.4526 7.61914 51.9022 7.61914 50.2857V41.1428",stroke:"#FAFAFA",strokeLinecap:"round",strokeLinejoin:"round"})),i||(i=a.createElement("path",{d:"M32 37.5C33.25 37.5 34.3127 37.0627 35.188 36.188C36.0627 35.3127 36.5 34.25 36.5 33C36.5 31.75 36.0627 30.6873 35.188 29.812C34.3127 28.9373 33.25 28.5 32 28.5C30.75 28.5 29.6873 28.9373 28.812 29.812C27.9373 30.6873 27.5 31.75 27.5 33C27.5 34.25 27.9373 35.3127 28.812 36.188C29.6873 37.0627 30.75 37.5 32 37.5ZM24 41C23.45 41 22.9793 40.8043 22.588 40.413C22.196 40.021 22 39.55 22 39V27C22 26.45 22.196 25.9793 22.588 25.588C22.9793 25.196 23.45 25 24 25H27.15L29 23H35L36.85 25H40C40.55 25 41.021 25.196 41.413 25.588C41.8043 25.9793 42 26.45 42 27V39C42 39.55 41.8043 40.021 41.413 40.413C41.021 40.8043 40.55 41 40 41H24Z",fill:"#FAFAFA"})))}var y=a.forwardRef(j),F=(n.p,"FileInputField_fileInput__K3yLP"),w={image:["jpg","png","jpeg","webp"]};var N,R,k=function(e){var r=e.name,n=e.reset,t=(0,a.useState)(null),i=(0,o.Z)(t,2),l=i[0],c=i[1],p=(0,s.U$)(r),d=(0,o.Z)(p,3)[2],u=(0,a.useRef)(null),m=function(e){return e?e.size>716800?"File size exceeds the maximum limit":(r=e.name.toLowerCase(),n="image",r&&w[n].indexOf(r.split(".").pop())>-1?void 0:"Invalid file format"):"Please select a file";var r,n};return(0,a.useEffect)((function(){n&&c(null)}),[n]),(0,h.jsx)("div",{style:{position:"relative"},children:(0,h.jsxs)("div",{className:F,onClick:function(){u.current.click()},children:[l?(0,h.jsx)("img",{src:l,alt:"recipe",style:{maxWidth:"100%",maxHeight:"100%"}}):(0,h.jsx)(y,{width:"64px",height:"64px"}),(0,h.jsx)("input",{type:"file",id:r,name:r,ref:u,style:{display:"none"},onChange:function(e){var r=e.currentTarget.files[0];d.setValue(r);var n=m(r);if(d.setError(n),d.setTouched(!0),n)c(null);else{d.setTouched(!1);var t=new FileReader;t.onload=function(e){c(e.target.result)},t.readAsDataURL(r)}n&&setTimeout((function(){d.setTouched(!0)}),0)}})]})})},I=["title","titleId"];function W(){return W=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},W.apply(this,arguments)}function A(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function C(e,r){var n=e.title,t=e.titleId,i=A(e,I);return a.createElement("svg",W({width:18,height:19,viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":t},i),n?a.createElement("title",{id:t},n):null,N||(N=a.createElement("path",{d:"M14.0625 4.4375L3.9375 14.5625",stroke:"#333333",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),R||(R=a.createElement("path",{d:"M14.0625 14.5625L3.9375 4.4375",stroke:"#333333",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var O,Z,T=a.forwardRef(C),E=(n.p,["title","titleId"]);function L(){return L=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},L.apply(this,arguments)}function P(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function S(e,r){var n=e.title,t=e.titleId,i=P(e,E);return a.createElement("svg",L({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":t},i),n?a.createElement("title",{id:t},n):null,O||(O=a.createElement("path",{d:"M2.1875 7H11.8125",stroke:"#8BAA36",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Z||(Z=a.createElement("path",{d:"M7 2.1875V11.8125",stroke:"#8BAA36",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var B,M=a.forwardRef(S),H=(n.p,["title","titleId"]);function q(){return q=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},q.apply(this,arguments)}function z(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function V(e,r){var n=e.title,t=e.titleId,i=z(e,H);return a.createElement("svg",q({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":t},i),n?a.createElement("title",{id:t},n):null,B||(B=a.createElement("path",{d:"M2.1875 7H11.8125",stroke:"#333333",strokeOpacity:.3,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var D=a.forwardRef(V),X=(n.p,JSON.parse('[{"value":"breakfast","label":"Breakfast"},{"value":"dessert","label":"Dessert"},{"value":"miscellaneous","label":"Miscellaneous"},{"value":"dinner","label":"Dinner"},{"value":"super","label":"Supper"},{"value":"lunch","label":"Lunch"}]')),U=JSON.parse('[{"value":"5 min","label":"5 min"},{"value":"10 min","label":"10 min"},{"value":"15 min","label":"15 min"},{"value":"20 min","label":"20 min"},{"value":"25 min","label":"25 min"},{"value":"30 min","label":"30 min"},{"value":"35 min","label":"35 min"},{"value":"40 min","label":"40 min"},{"value":"45 min","label":"45 min"},{"value":"50 min","label":"50 min"},{"value":"55 min","label":"55 min"},{"value":"1 hour","label":"1 hour"},{"value":"1 hour 5 min","label":"1 hour 5 min"},{"value":"1 hour 10 min","label":"1 hour 10 min"},{"value":"1 hour 15 min","label":"1 hour 15 min"},{"value":"1 hour 20 min","label":"1 hour 20 min"}]'),K=JSON.parse('[{"value":"chicken","label":"Chicken"},{"value":"beef","label":"Beef"},{"value":"apple cider vinegar","label":"Apple Cider Vinegar"},{"value":"asparagus","label":"Asparagus"},{"value":"aubergine","label":"Aubergine"},{"value":"baby plum tomatoes","label":"Baby Plum Tomatoes"},{"value":"bacon","label":"Bacon"},{"value":"egg","label":"Egg"},{"value":"cucumber","label":"Cucumber"},{"value":"salmon","label":"Salmon"}]'),Y={image:["jpg","png","jpeg","webp"]};var J={file:"",title:"",about:"",category:"",cookingTime:"",ingredients:[{name:"",dose:""}],preparation:""},Q=p.Ry().shape({title:p.Z_().required("Title is required"),about:p.Z_().required("About is required"),category:p.Z_().required("Category is required"),cookingTime:p.Z_().required("Cooking time is required"),preparation:p.Z_().required("Recipe preparation is required"),ingredients:p.IX().of(p.Ry().shape({name:p.Z_().required("Select ingredient"),dose:p.Z_().required("Type dose")})),file:p.nK().test("is-valid-file","Invalid file format",(function(e){return!e||(r=e&&e.name.toLowerCase(),n="image",r&&Y[n].indexOf(r.split(".").pop())>-1);var r,n})).test("is-valid-size","File size exceeds the maximum limit",(function(e){return!e||e.size<=716800})).required("Image is required")}),G={container:function(e,r){return(0,l.Z)((0,l.Z)({},e),{},{fontFamily:"Poppins",fontStyle:"normal",fontWeight:"400",fontSize:"12px",lineHeight:"12px",border:(r.isFocused,"none"),outline:(r.isFocused,"none")})},dropdownIndicator:function(e){return(0,l.Z)((0,l.Z)({},e),{},{color:"#8baa36"})},menu:function(e){return(0,l.Z)((0,l.Z)({},e),{},{maxHeight:"170px",overflowY:"auto"})},control:function(e,r){return(0,l.Z)((0,l.Z)({},e),{},{height:34,width:"150px",border:"none",outline:"none",textAlign:"end"})},indicatorSeparator:function(e){return(0,l.Z)((0,l.Z)({},e),{},{display:"none"})}},$={container:function(e,r){return(0,l.Z)((0,l.Z)({},e),{},{fontFamily:"Poppins",fontStyle:"normal",fontWeight:"400",fontSize:"12px",lineHeight:"12px",border:(r.isFocused,"none"),outline:(r.isFocused,"none")})},dropdownIndicator:function(e){return(0,l.Z)((0,l.Z)({},e),{},{color:"#8baa36"})},menu:function(e){return(0,l.Z)((0,l.Z)({},e),{},{maxHeight:"170px",overflowY:"auto"})},control:function(e,r){return(0,l.Z)((0,l.Z)({},e),{},{height:"53px",width:"100%",border:"none",outline:"none",backgroundColor:"#f5f5f5"})},indicatorSeparator:function(e){return(0,l.Z)((0,l.Z)({},e),{},{display:"none"})}},ee=function(){var e=(0,a.useState)(!1),r=(0,o.Z)(e,2),n=r[0],t=r[1],i=(0,a.useState)(1),p=(0,o.Z)(i,2),m=p[0],f=p[1],g=function(){m>1&&f((function(e){return e-1}))};return(0,h.jsx)("div",{className:u.addRecipeFormWrapper,children:(0,h.jsx)(s.J9,{initialValues:J,validationSchema:Q,onSubmit:function(e,r){var n=r.resetForm,i=e.preparation.split("\n").filter((function(e){return""!==e.trim()})),a=(0,l.Z)((0,l.Z)({},e),{},{preparation:i});console.log(a),t(!0),f(1),n()},children:function(e){var r=e.values,t=e.errors,i=e.touched,a=e.setFieldValue;return(0,h.jsxs)(s.l0,{className:u.addRecipeForm,children:[(0,h.jsxs)("div",{className:u.descriptionWrapper,children:[(0,h.jsxs)("div",{className:u.inputWrapperFile,children:[(0,h.jsx)(k,{name:"file",reset:n}),(0,h.jsx)(s.Bc,{className:u.errorMessageFile,name:"file",component:"div"})]}),(0,h.jsxs)("div",{className:u.minWidthTabletContainer,children:[(0,h.jsxs)("div",{className:u.inputWrapper,children:[(0,h.jsx)(s.gN,{className:"".concat(u.recipeDescriptionInput," ").concat(t.title&&i.title?u.error:""),type:"text",name:"title",placeholder:"Enter item title"}),(0,h.jsx)(s.Bc,{className:u.errorMessage,name:"title",component:"div"})]}),(0,h.jsxs)("div",{className:u.inputWrapper,children:[(0,h.jsx)(s.gN,{className:"".concat(u.recipeDescriptionInput," ").concat(t.about&&i.about?u.error:""),type:"text",name:"about",placeholder:"Enter about recipe"}),(0,h.jsx)(s.Bc,{name:"about",component:"div",className:u.errorMessage})]}),(0,h.jsxs)("div",{className:"".concat(u.inputWrapperCategory," ").concat(t.category&&i.category?u.error:""),children:[(0,h.jsx)("label",{className:u.categoryLabel,htmlFor:"category",children:"Category"}),(0,h.jsx)(d.ZP,{name:"category",options:X,styles:G,isSearchable:!1,className:u.ingredientCategoryInput,value:n?"":X.find((function(e){return e.value===r.category})),onChange:function(e){return a("category",e.value)}}),(0,h.jsx)(s.Bc,{name:"category",component:"div",className:u.errorMessage})]}),(0,h.jsxs)("div",{className:"".concat(u.inputWrapperCategory," ").concat(t.cookingTime&&i.cookingTime?u.error:""),children:[(0,h.jsx)("label",{className:u.categoryLabel,htmlFor:"cookingTime",children:"Cooking time"}),(0,h.jsx)(d.ZP,{name:"cookingTime",options:U,styles:G,isSearchable:!1,value:n?"":U.find((function(e){return e.value===r.cookingTime})),onChange:function(e){return a("cookingTime",e.value)}}),(0,h.jsx)(s.Bc,{name:"cookingTime",component:"div",className:u.errorMessage})]})]})]}),(0,h.jsxs)("div",{className:u.ingredientsWrapper,children:[(0,h.jsx)("div",{className:u.ingredientsHeaderWrapper,children:(0,h.jsx)("p",{className:u.ingredientsTitle,children:"Ingredients"})}),(0,h.jsx)("div",{className:u.ingredientsInputWrapper,children:(0,h.jsx)(s.F2,{name:"ingredients",children:function(e){var n=e.push,t=e.remove,i=e.form;return(0,h.jsxs)("div",{children:[i.values.ingredients.map((function(e,n){return(0,h.jsxs)("div",{className:u.ingredientItemWrapper,children:[(0,h.jsx)("div",{className:u.ingredientInputWtapper,children:(0,h.jsx)(d.ZP,{name:"ingredients[".concat(n,"].name"),options:K,isSearchable:!0,styles:$,placeholder:"Select ingredient",value:K.find((function(e){return e.value===r.ingredients[n].name})),onChange:function(e){return a("ingredients[".concat(n,"].name"),e.value)}})}),(0,h.jsx)(s.Bc,{name:"ingredients[".concat(n,"].name"),className:u.errorMessage,component:"div"}),(0,h.jsx)(s.gN,{name:"ingredients[".concat(n,"].dose"),placeholder:"Dose",className:u.ingredientDose}),(0,h.jsx)(s.Bc,{name:"ingredients[".concat(n,"].dose"),className:u.doseErrorMessage,component:"div"}),r.ingredients.length>1&&(0,h.jsx)(T,{className:u.deleteIcon,onClick:function(){console.log("This is delete button"),t(n),g()}})]},n)})),(0,h.jsxs)(c.Z,{className:u.addRemoveCounter,children:[m>1&&(0,h.jsx)(D,{onClick:function(){t(m-1),g()},className:u.counterIcon}),(0,h.jsx)("span",{children:m}),(0,h.jsx)(M,{onClick:function(){n({name:"",dose:""}),f((function(e){return e+1}))},className:u.counterIcon})]})]})}})})]}),(0,h.jsxs)("div",{className:u.preparationWrapper,children:[(0,h.jsx)("div",{className:u.preparationHeaderWrapper,children:(0,h.jsx)("p",{className:u.ingredientsTitle,children:"Recipe Preparation"})}),(0,h.jsxs)("div",{className:u.preparationInputWrapper,children:[(0,h.jsx)(s.gN,{as:"textarea",name:"preparation",className:u.preparationInput,placeholder:"Enter recipe"}),(0,h.jsx)(s.Bc,{name:"preparation",component:"div",className:u.prepatationError})]})]}),(0,h.jsx)("div",{className:u.buttonWrapper,children:(0,h.jsx)(v,{type:"submit",children:"Add"})})]})}})})},re=n(9434),ne=function(e){return e.popularRecipe.popularRecipe},te=n(6112),ie=n(293),ae="PopularRecipes_popularBox__nboYF",oe="PopularRecipes_popularTitle__o0ZO-",le="PopularRecipes_popularList__bl1eP",se="PopularRecipes_popularListEll__V+ibi",ce="PopularRecipes_popularEll__XX1bX",pe="PopularRecipes_populaImg__MeCQf",de="PopularRecipes_popularTextBox__qvCNg",ue="PopularRecipes_popularTitleRecipe__KAFTt",me="PopularRecipes_popularDiscrRecipe__zWoGY",fe=function(){var e=(0,re.v9)(ne),r=(0,re.I0)(),n=(0,te.H)(767.9),t=(0,te.H)(1439.9),i=function(e,r){var n=e;return n.length>r&&(n=e.slice(0,r)+"..."),n};return(0,a.useEffect)((function(){r((0,ie.r)())}),[r]),(0,h.jsxs)("div",{className:ae,children:[(0,h.jsx)("h2",{className:oe,children:"Popular recipe"}),(0,h.jsx)("ul",{className:le,children:function(e){return n?e.slice(0,4):t?e.slice(0,2):window.innerWidth>=1440?e.slice(0,4):e}(e).map((function(e){var r=e.description,n=e.preview,t=e.title,a=e._id;return(0,h.jsx)("li",{className:se,children:(0,h.jsxs)("a",{className:ce,href:"/recipe/".concat(a),children:[(0,h.jsx)("img",{className:pe,src:n,alt:"title"}),(0,h.jsxs)("div",{className:de,children:[(0,h.jsx)("p",{className:ue,children:t}),(0,h.jsx)("p",{className:me,children:i(r,77)})]})]})},a)}))})]})},he=n(7745),ge=n(9520),ve=n(221),_e=n(1108),be={socialBox:"FollowUs_socialBox__qsvao",socialTitle:"FollowUs_socialTitle__rZFuQ",socialList:"FollowUs_socialList__WhXWv",facebookIcon:"FollowUs_facebookIcon__h9TqW",youtubeIcon:"FollowUs_youtubeIcon__djZdF",twitterIcon:"FollowUs_twitterIcon__YDACU",instagramIcon:"FollowUs_instagramIcon__csPL9"},xe=function(){return(0,h.jsxs)("div",{className:be.socialBox,children:[(0,h.jsx)("h2",{className:be.socialTitle,children:"Follow us"}),(0,h.jsxs)("ul",{className:be.socialList,children:[(0,h.jsx)("li",{className:be.facebookItem,children:(0,h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com",children:(0,h.jsx)(he.r,{className:be.facebookIcon})})}),(0,h.jsx)("li",{className:be.youtubeItem,children:(0,h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com",children:(0,h.jsx)(ge.r,{className:be.youtubeIcon})})}),(0,h.jsx)("li",{className:be.twitterItem,children:(0,h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://twitter.com",children:(0,h.jsx)(ve.r,{className:be.twitterIcon})})}),(0,h.jsx)("li",{className:be.instagramItem,children:(0,h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com",children:(0,h.jsx)(_e.r,{className:be.instagramIcon})})})]})]})},je=n(8130),ye=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(je.V,{}),(0,h.jsx)(ee,{}),(0,h.jsx)(fe,{}),(0,h.jsx)(xe,{})]})}}}]);
//# sourceMappingURL=536.62841dc9.chunk.js.map