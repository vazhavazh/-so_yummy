"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[941],{8130:function(e,r,t){t.d(r,{V:function(){return s}});var i=t(9439),a=t(2791),c=t(7689),n=t(3329),s=function(e){var r=e.recipeTitle,t=(0,a.useState)(""),s=(0,i.Z)(t,2),l=s[0],o=s[1],u=(0,c.TH)();(0,a.useEffect)((function(){var e=p(u.pathname);o(e)}),[u]);var p=function(e){switch(e.substring(1)){case"categories":return"Categories";case"favorite":return"Favorites";case"add":return"Add recipe";case"my":return"My recipes";case"search":return"Search";case"shopping-list":return"Shopping list";default:return"Page Title"}};return(0,n.jsx)(n.Fragment,{children:r?(0,n.jsx)("h1",{className:"recipeName",children:r}):(0,n.jsx)("div",{className:"page-wrapper",children:(0,n.jsxs)("div",{className:"mainTitle-container",children:[(0,n.jsx)("h1",{className:"mainTitle",children:l}),(0,n.jsx)("div",{className:"mainTitle-decorator1"}),(0,n.jsx)("div",{className:"mainTitle-decorator2"}),(0,n.jsx)("div",{className:"mainTitle-decorator3"})]})})})}},4487:function(e,r,t){t.d(r,{v:function(){return j}});var i,a,c=t(2791),n="RecipeCard_recipeEll__KT0Cb",s="RecipeCard_recipeOverlay__-FMJO",l="RecipeCard_recipeImg__cxGnz",o="RecipeCard_recipeTitle__u3yR1",u="RecipeCard_recipeTime__+1iB9",p="RecipeCard_recipeClock__uJh7r",d="RecipeCard_recipeText__2pAFU",f=["title","titleId"];function h(){return h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},h.apply(this,arguments)}function m(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},c=Object.keys(e);for(i=0;i<c.length;i++)t=c[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)t=c[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function v(e,r){var t=e.title,n=e.titleId,s=m(e,f);return c.createElement("svg",h({width:48,height:48,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":n},s),t?c.createElement("title",{id:n},t):null,i||(i=c.createElement("g",{clipPath:"url(#clip0_0_429)"},c.createElement("path",{d:"M23.99 4C12.94 4 4 12.95 4 24C4 35.05 12.94 44 23.99 44C35.04 44 44 35.05 44 24C44 12.95 35.04 4 23.99 4ZM24 40C15.16 40 8 32.84 8 24C8 15.16 15.16 8 24 8C32.84 8 40 15.16 40 24C40 32.84 32.84 40 24 40Z"}),c.createElement("path",{d:"M25 14H22V26L32.49 32.3L34 29.84L25 24.5V14Z"}))),a||(a=c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_0_429"},c.createElement("rect",{width:48,height:48,fill:"white"})))))}var x=c.forwardRef(v),g=(t.p,t(3329)),j=function(e){var r=e.recipe,t=r.title,i=r.preview,a=r._id,c=r.time,f=r.description;return(0,g.jsx)("li",{className:n,children:(0,g.jsxs)("a",{href:"/recipe/".concat(a),children:[(0,g.jsx)("img",{className:l,src:i,alt:"recipe prewiew"}),(0,g.jsx)("p",{className:o,children:t}),(0,g.jsxs)("div",{className:s,children:[(0,g.jsxs)("p",{className:u,children:[(0,g.jsx)(x,{className:p}),"".concat(c," min")]}),(0,g.jsx)("p",{className:d,children:f})]})]})})}},941:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var i=t(9439),a=t(3896),c=t(3449),n=t(2140),s=t(2851),l=t(2791),o=t(4487),u=t(9434),p=t(7689),d=t(8364),f=t(1820),h=t(3329),m=function(){var e=(0,p.UO)().categoriesName,r=(0,p.s0)(),t=(0,u.I0)(),m=(0,l.useState)(e),v=(0,i.Z)(m,2),x=v[0],g=v[1],j=(0,l.useState)(null),_=(0,i.Z)(j,2),C=_[0],b=_[1],w=(0,u.v9)((function(e){return e.categoriesStore.categories})).currentCategories;(0,l.useEffect)((function(){b(w[0]),g(e)}),[e,w]),(0,l.useEffect)((function(){t((0,d.p)()),t((0,d.R)(x))}),[t,x]);var y=(0,u.v9)((function(e){return e.categoriesStore.categories})).categoriesTitle;return(0,h.jsx)("div",{className:"categories",children:(0,h.jsxs)(c.ZP,{value:x,children:[(0,h.jsx)("div",{className:"categories-switcher",children:(0,h.jsx)(n.Z,{variant:"scrollable",scrollButtons:"auto",onChange:function(e,t){var i=e.target.textContent;g(i),r("/categories/".concat(i),{replace:!0})},sx:{"& .MuiTabs-scroller":{"& .css-1aquho2-MuiTabs-indicator":{backgroundColor:"#8BAA36"}},"& .MuiTabs-flexContainer":{gap:"28px","@media (min-width: 768px)":{gap:"55px"},"& :hover":{color:"#8BAA36"}},"& .MuiTab-root":{textTransform:"capitalize",minWidth:"0",fontSize:"18px",fontFamily:"Poppins",fontWeight:"400",lineHeight:"18px",borderColor:"#8BAA36"},"& .MuiSvgIcon-root":{fill:"#BDBDBD","& :hover":{fill:"#8BAA36"}}},children:y.map((function(e){var r=e.category,t=e._id;return(0,h.jsx)(a.Z,{label:r,value:r,sx:{padding:"0",color:"#BDBDBD","&.Mui-selected":{color:"#8BAA36"}}},t)}))})}),(0,h.jsx)(s.Z,{value:x,sx:{p:0},children:(0,h.jsx)("ul",{className:"categories-cards",children:C?C.recipes.map((function(e){return(0,h.jsx)(o.v,{recipe:e},e._id)})):(0,h.jsx)(f.Z,{})})})]})})},v=t(8130),x=function(){return(0,h.jsxs)("div",{children:[(0,h.jsx)(v.V,{}),(0,h.jsx)(m,{})]})}}}]);
//# sourceMappingURL=941.ff487891.chunk.js.map