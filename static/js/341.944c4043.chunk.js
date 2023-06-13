"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[341],{8130:function(e,r,t){t.d(r,{V:function(){return s}});var a=t(9439),n=t(2791),i=t(7689),c=t(3329),s=function(e){var r=e.recipeTitle,t=(0,n.useState)(""),s=(0,a.Z)(t,2),o=s[0],l=s[1],u=(0,i.TH)();(0,n.useEffect)((function(){var e=_(u.pathname);l(e)}),[u]);var _=function(e){switch(e.substring(1)){case"categories":return"Categories";case"favorite":return"Favorites";case"add":return"Add recipe";case"my":return"My recipes";case"search":return"Search";case"shopping-list":return"Shopping list";default:return"Page Title"}};return(0,c.jsx)(c.Fragment,{children:r?(0,c.jsx)("h1",{className:"recipeName",children:r}):(0,c.jsx)("div",{className:"page-wrapper",children:(0,c.jsxs)("div",{className:"mainTitle-container",children:[(0,c.jsx)("h1",{className:"mainTitle",children:o}),(0,c.jsx)("div",{className:"mainTitle-decorator1"}),(0,c.jsx)("div",{className:"mainTitle-decorator2"}),(0,c.jsx)("div",{className:"mainTitle-decorator3"})]})})})}},4487:function(e,r,t){t.d(r,{v:function(){return x}});var a,n,i=t(2791),c="RecipeCard_recipeEll__KT0Cb",s="RecipeCard_recipeOverlay__-FMJO",o="RecipeCard_recipeImg__cxGnz",l="RecipeCard_recipeTitle__u3yR1",u="RecipeCard_recipeTime__+1iB9",_="RecipeCard_recipeClock__uJh7r",h="RecipeCard_recipeText__2pAFU",p=["title","titleId"];function d(){return d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}function f(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function v(e,r){var t=e.title,c=e.titleId,s=f(e,p);return i.createElement("svg",d({width:48,height:48,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":c},s),t?i.createElement("title",{id:c},t):null,a||(a=i.createElement("g",{clipPath:"url(#clip0_0_429)"},i.createElement("path",{d:"M23.99 4C12.94 4 4 12.95 4 24C4 35.05 12.94 44 23.99 44C35.04 44 44 35.05 44 24C44 12.95 35.04 4 23.99 4ZM24 40C15.16 40 8 32.84 8 24C8 15.16 15.16 8 24 8C32.84 8 40 15.16 40 24C40 32.84 32.84 40 24 40Z"}),i.createElement("path",{d:"M25 14H22V26L32.49 32.3L34 29.84L25 24.5V14Z"}))),n||(n=i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_0_429"},i.createElement("rect",{width:48,height:48,fill:"white"})))))}var m=i.forwardRef(v),g=(t.p,t(3329)),x=function(e){var r=e.recipe,t=r.title,a=r.preview,n=r._id,i=r.time,p=r.description;return(0,g.jsx)("li",{className:c,children:(0,g.jsxs)("a",{href:"so_yummy/recipe/".concat(n),children:[(0,g.jsx)("img",{className:o,src:a,alt:"recipe prewiew"}),(0,g.jsx)("p",{className:l,children:t}),(0,g.jsxs)("div",{className:s,children:[(0,g.jsxs)("p",{className:u,children:[(0,g.jsx)(m,{className:_}),"".concat(i," min")]}),(0,g.jsx)("p",{className:h,children:p})]})]})})}},4341:function(e,r,t){t.r(r),t.d(r,{default:function(){return L}});var a=t(9439),n=t(2791),i=t(7689),c=t(5985),s=t(2254),o=t(9434),l=function(e){return e.search.loading},u=function(e){return e.search.error},_=function(e){return e.search.searchData},h=function(e){return e.search.selectedTypes},p=function(e){return e.search.fromFooter},d=t(7456),f=t(3329),v=function(){var e=(0,n.useState)(""),r=(0,a.Z)(e,2),t=r[0],i=r[1],l=(0,o.I0)(),u=(0,o.v9)(h);return(0,f.jsxs)("form",{className:s.Z.searchBox,onSubmit:function(e){e.preventDefault(),""!==t.trim()?"query"===u?l((0,d._B)(t)):"ingredients"===u&&l((0,d.sF)(t)):c.Am.warn("Enter your query")},children:[(0,f.jsx)(c.Ix,{}),(0,f.jsx)("input",{className:s.Z.searchInput,type:"text",placeholder:"Search recipes...",value:t,name:"searchInput",onChange:function(e){i(e.target.value)}}),(0,f.jsx)("button",{className:s.Z.searchBtn,type:"submit",children:"Search"})]})},m=t(1413),g=t(9278),x="SearchTypeSelector_cont_type_select__wYnRK",C="SearchTypeSelector_search_select__3irfA",w=t(1089),b=[{searchType:"title"},{searchType:"ingredients"}],y={singleValue:function(e){return(0,m.Z)((0,m.Z)({},e),{},{color:"var(--mainTextColor)"})},menu:function(e){return(0,m.Z)((0,m.Z)({},e),{},{background:"transparent"})},option:function(e,r){return(0,m.Z)((0,m.Z)({},e),{},{backgroundColor:r.isFocused?"#8BAA36":"white",color:r.isFocused?"white":"black"})},input:function(e){return(0,m.Z)((0,m.Z)({},e),{},{color:"#8BAA36"})},dropdownIndicator:function(e,r){return(0,m.Z)((0,m.Z)({},e),{},{border:"none",boxShadow:"none",color:"#8BAA36"})},control:function(e,r){return(0,m.Z)((0,m.Z)({},e),{},{height:34,width:143,background:"var(--greyToBlack)",borderRadius:6,borderColor:r.isFocused?"#8BAA36":"#CED4DA",boxShadow:r.isFocused?"0 0 0 2px #8BAA36":"none","&:hover":{borderColor:r.isFocused?"#8BAA36":"#CED4DA"}})}},B=function(){var e=(0,o.I0)(),r=(0,o.v9)(p),t=(0,n.useState)(""),i=(0,a.Z)(t,2),c=(i[0],i[1]);return(0,f.jsxs)("div",{className:x,children:[(0,f.jsx)("label",{htmlFor:"select",children:"Search by:"}),(0,f.jsx)(g.ZP,{className:C,name:"select",options:b,styles:y,getOptionLabel:function(e){return e.searchType},getOptionValue:function(e){return e.searchType},isSearchable:!1,onChange:function(r){c(r.searchType),e((0,w.Yk)(r.searchType))},defaultValue:r?b.find((function(e){return"ingredients"===e.searchType})):b.find((function(e){return"title"===e.searchType}))})]})},S=t(7139),j=function(e){var r=e.value,t=e.onChange;return(0,f.jsxs)("div",{className:S.Z.search_bar,children:[(0,f.jsx)(v,{value:r,onChange:function(e){t(e)}}),(0,f.jsx)(B,{})]})},Z=t(4487),T=t(266),k=t(9091),N=t(1820),E=function(e){var r=e.searchValue,t=(0,n.useState)([]),i=(0,a.Z)(t,2),c=(i[0],i[1]),s=(0,n.useState)(""),h=(0,a.Z)(s,2),p=h[0],d=h[1],v=(0,n.useState)(!0),m=(0,a.Z)(v,2),g=(m[0],m[1]),x=(0,o.v9)(l),C=(0,o.v9)(u),w=(0,o.v9)(_);return(0,n.useEffect)((function(){if(p!==r){if(!r)return c([]),void d("");g(!0);var e=setTimeout((function(){var e=w.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}));c(e),d(r),g(!1)}),500);return function(){return clearTimeout(e)}}}),[r]),(0,f.jsxs)("div",{children:[x&&(0,f.jsx)(N.Z,{}),C&&(0,f.jsxs)("div",{className:S.Z.searchLookingWrapper,children:[(0,f.jsx)("img",{src:k,alt:"images"}),(0,f.jsx)("p",{children:"Try looking for something else..."})]}),w&&(0,f.jsx)("div",{style:{backgroundColor:"var(--whiteSearchToDark)"},className:T.Z.previewCategoriesBox,children:(0,f.jsx)("ul",{className:T.Z.previewCategoriesList,children:(0,f.jsx)("li",{className:T.Z.previewCategoriesListEll,children:(0,f.jsx)("ul",{className:T.Z.recipeListSearch,children:w.map((function(e){return(0,f.jsx)(Z.v,{recipe:e},e._id)}))})})})})]})},P=t(8130),L=function(){var e=(0,i.TH)(),r=(0,n.useState)(""),t=(0,a.Z)(r,2),c=t[0],s=t[1],o=(0,n.useState)(!1),l=(0,a.Z)(o,2),u=l[0],_=l[1],h=(0,n.useState)(""),p=(0,a.Z)(h,2),d=p[0],v=p[1];return(0,n.useEffect)((function(){"footer"===e.state&&v("ingredients")}),[e.state]),(0,n.useEffect)((function(){u&&v(c)}),[u,c]),(0,f.jsxs)("div",{className:S.Z.search_wrapper,children:[(0,f.jsx)(P.V,{}),(0,f.jsx)(j,{value:c,onChange:function(e){s(e.target.value)},onSearch:function(){_(!0)}}),(0,f.jsx)(E,{searchValue:d},d)]})}},266:function(e,r){r.Z={"dark-mode":"PreviewCategories_dark-mode__UwhIV","remove-btnX":"PreviewCategories_remove-btnX__bXUq5","remove-btnX--icon":"PreviewCategories_remove-btnX--icon__EtLZR","base-link-leaf":"PreviewCategories_base-link-leaf__igZKL",trashBtn:"PreviewCategories_trashBtn__YoLeA","trashBtn--icon":"PreviewCategories_trashBtn--icon__0MoUl",flexWrapper:"PreviewCategories_flexWrapper__mOsfd",active:"PreviewCategories_active__-pr0Z",container:"PreviewCategories_container__Ono7y",previewCategoriesBox:"PreviewCategories_previewCategoriesBox__xYe+f",previewCategoriesList:"PreviewCategories_previewCategoriesList__YaEsK",previewCategoriesListEll:"PreviewCategories_previewCategoriesListEll__tpDjs",categoriesName:"PreviewCategories_categoriesName__njlB1",recipeListSearch:"PreviewCategories_recipeListSearch__xEyrW",recipeList:"PreviewCategories_recipeList__u1L4M",seeAllBtn:"PreviewCategories_seeAllBtn__mi3cr",otherCategoriesBtn:"PreviewCategories_otherCategoriesBtn__wJTpE"}},2254:function(e,r){r.Z={"dark-mode":"Search_dark-mode__aDdyb","remove-btnX":"Search_remove-btnX__7dWJK","remove-btnX--icon":"Search_remove-btnX--icon__Ty-Fz","base-link-leaf":"Search_base-link-leaf__Ptj2B",trashBtn:"Search_trashBtn__BJ3cR","trashBtn--icon":"Search_trashBtn--icon__DkaJy",flexWrapper:"Search_flexWrapper__FvK7C",active:"Search_active__mvXU1",container:"Search_container__FpDfx",newBtn:"Search_newBtn__M8eOy",searchBox:"Search_searchBox__WErQz",searchInput:"Search_searchInput__JV0cW",searchBtn:"Search_searchBtn__ycykD"}},7139:function(e,r){r.Z={"dark-mode":"SearchBar_dark-mode__Axps8","remove-btnX":"SearchBar_remove-btnX__DGM1M","remove-btnX--icon":"SearchBar_remove-btnX--icon__MNy30","base-link-leaf":"SearchBar_base-link-leaf__TgZJi",trashBtn:"SearchBar_trashBtn__+cdKQ","trashBtn--icon":"SearchBar_trashBtn--icon__43BC6",flexWrapper:"SearchBar_flexWrapper__9jFuf",active:"SearchBar_active__NJFcj",container:"SearchBar_container__hBKHC",search_bar:"SearchBar_search_bar__yiAEi",searchLookingWrapper:"SearchBar_searchLookingWrapper__r+Xwy"}},9091:function(e,r,t){e.exports=t.p+"static/media/asdd.195c8cc165ac8d4aba1f.png"}}]);
//# sourceMappingURL=341.944c4043.chunk.js.map