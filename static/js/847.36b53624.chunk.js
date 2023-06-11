"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[847],{8130:function(e,r,n){n.d(r,{V:function(){return c}});var a=n(9439),t=n(2791),i=n(7689),s=n(3329),c=function(){var e=(0,t.useState)(""),r=(0,a.Z)(e,2),n=r[0],c=r[1],o=(0,i.TH)();(0,t.useEffect)((function(){var e=l(o.pathname);c(e)}),[o]);var l=function(e){switch(e.substring(1)){case"categories":return"Categories";case"favorite":return"Favorites";case"add":return"Add recipe";case"my":return"My recipes";case"search":return"Search";case"shopping-list":return"Shopping list";default:return"Page Title"}};return(0,s.jsx)("div",{className:"page-wrapper",children:(0,s.jsxs)("div",{className:"mainTitle-container",children:[(0,s.jsx)("h1",{className:"mainTitle",children:n}),(0,s.jsx)("div",{className:"mainTitle-decorator1"}),(0,s.jsx)("div",{className:"mainTitle-decorator2"}),(0,s.jsx)("div",{className:"mainTitle-decorator3"})]})})}},8847:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var a,t,i=n(2791),s=n(5861),c=n(4687),o=n.n(c),l=n(9434),p=n(9221),d=function(e){return e.shoppingListIngredients.isLoading},h=function(e){return e.shoppingListIngredients.shoppingIngredients.shoppingList},u=["title","titleId"];function m(){return m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function g(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function f(e,r){var n=e.title,s=e.titleId,c=g(e,u);return i.createElement("svg",m({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":s},c),n?i.createElement("title",{id:s},n):null,a||(a=i.createElement("path",{d:"M10.9375 3.0625L3.0625 10.9375",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),t||(t=i.createElement("path",{d:"M10.9375 10.9375L3.0625 3.0625",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var v=i.forwardRef(f),_=(n.p,n(1820)),j=n(7132),x=n(7139),b=n(3329),N=function(){var e=(0,l.I0)(),r=(0,l.v9)(h),n=(0,l.v9)(d),a=function(){var r=(0,s.Z)(o().mark((function r(n){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:try{e((0,p.O)(n)),e((0,p.p)())}catch(a){console.log(a)}case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,i.useEffect)((function(){e((0,p.p)())}),[e]),n?(0,b.jsx)(_.Z,{}):r&&0!==r.length?(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:"shopping-list-container",children:[(0,b.jsxs)("div",{className:"shopping-list-categories",children:[(0,b.jsx)("span",{className:"shopping-list-categories--name",children:"Product"}),(0,b.jsxs)("div",{className:"name-wrapper",children:[(0,b.jsx)("span",{className:"shopping-list-categories--name",children:"Number"}),(0,b.jsx)("span",{className:"shopping-list-categories--name",children:"Remove"})]})]}),(0,b.jsx)("ul",{className:"ingredient-list",children:r.map((function(e){return(0,b.jsxs)("li",{className:"ingredient-item",children:[(0,b.jsxs)("div",{className:"ingredient-wrapper",children:[(0,b.jsx)("div",{className:"ingredient-img-wrapper",children:(0,b.jsx)("img",{className:"ingredient-img",src:e.thb,alt:e.ttl})}),(0,b.jsx)("h2",{className:"ingredient-name",children:e.ttl})]}),(0,b.jsxs)("div",{className:"quantity-remove-wrapper",children:[(0,b.jsxs)("div",{className:"ingredient-quantity-wrapper",children:[" ",(0,b.jsx)("span",{className:"ingredient-quantity",children:e.measure})]}),(0,b.jsx)("button",{className:"remove-btnX x-btn",type:"button",onClick:function(){a(e)},children:(0,b.jsx)(v,{className:"remove-btnX--icon"})})]})]},e._id)}))})]})}):(0,b.jsxs)("div",{className:x.Z.searchLookingWrapper,children:[(0,b.jsx)("img",{src:j,alt:"images"}),(0,b.jsx)("p",{className:"emptyName",children:"Your shopping list still empty..."})]})},y=n(8130),w=function(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y.V,{}),(0,b.jsx)(N,{})]})}},7139:function(e,r){r.Z={"dark-mode":"SearchBar_dark-mode__Axps8","remove-btnX":"SearchBar_remove-btnX__DGM1M","remove-btnX--icon":"SearchBar_remove-btnX--icon__MNy30","base-link-leaf":"SearchBar_base-link-leaf__TgZJi",trashBtn:"SearchBar_trashBtn__+cdKQ","trashBtn--icon":"SearchBar_trashBtn--icon__43BC6",flexWrapper:"SearchBar_flexWrapper__9jFuf",active:"SearchBar_active__NJFcj",container:"SearchBar_container__hBKHC",search_bar:"SearchBar_search_bar__yiAEi",searchLookingWrapper:"SearchBar_searchLookingWrapper__r+Xwy",pagination:"SearchBar_pagination__doavI",activePage:"SearchBar_activePage__3GIfh"}},7132:function(e,r,n){e.exports=n.p+"static/media/kisspng-vegetable.b8ddd1d1a02f272ef517.webp"}}]);
//# sourceMappingURL=847.36b53624.chunk.js.map