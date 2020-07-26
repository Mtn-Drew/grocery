(this["webpackJsonpsmart-grocery"]=this["webpackJsonpsmart-grocery"]||[]).push([[0],{29:function(e,t,a){e.exports=a(54)},34:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(14),c=a.n(o),l=(a(34),a(26));var s=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,n.a.createElement(l.a,{className:"grocery-icon"}),"Smart Grocery List"))},i=a(10),u=a(2),m=a(3),d=a.n(m),p=a(6),E=a(4),y=function(e,t){switch(t.type){case"DELETE_ITEM_FROM_LIST":var a=e.groceryItem.filter((function(e){return e._id!==t.payload}));return Object(E.a)({},e,{groceryItem:a});case"ADD_ITEM_TO_LIST":return Object(E.a)({},e,{groceryItem:[].concat(Object(i.a)(e.groceryItem),[t.payload])});case"UPDATE_GROCERY_ITEM":var r=e.groceryItem.filter((function(e){return e._id!==t.payload._id}));return Object(E.a)({},e,{groceryItem:[].concat(Object(i.a)(r),[t.payload]),showModal:!1});case"TOGGLE_CHECKED":var n=e.groceryItem.map((function(e){return e._id===t.payload._id?(e.checked=!e.checked,e):e}));return Object(E.a)({},e,{groceryItem:n});case"TOGGLE_MODAL":var o=!e.showModal;try{return Object(E.a)({},e,{showModal:o,modalName:t.payload.itemName,modalDescription:t.payload.description,modalAisle:t.payload.aisle,modalStore:t.payload.defaultStore,modalId:t.payload._id})}catch(s){return Object(E.a)({},e,{showModal:o})}case"SET_NEW_MODAL_NAME":return{modalName:t.payload};case"GET_GROCERIES":return Object(E.a)({},e,{groceryLoading:!1,groceryItem:t.payload});case"GET_STORES":return Object(E.a)({},e,{store:t.payload,storeLoading:!1});case"ADD_STORE":return Object(E.a)({},e,{store:[].concat(Object(i.a)(e.store),[t.payload])});case"DELETE_STORE":var c=e.store.filter((function(e){return e._id!==t.payload}));return Object(E.a)({},e,{store:c});case"GET_HISTORY":return Object(E.a)({},e,{historyItem:t.payload,historyLoading:!1});case"DELETE_HISTORY_ITEM_FROM_LIST":var l=e.historyItem.filter((function(e){return e._id!==t.payload}));return Object(E.a)({},e,{historyItem:l});case"ADD_ITEM_TO_HISTORY":return Object(E.a)({},e,{historyItem:[].concat(Object(i.a)(e.historyItem),[t.payload])});case"DATA_ERROR":return Object(E.a)({},e,{error:t.payload});default:return e}},f=a(7),v=a.n(f),h={store:[],groceryItem:[],historyItem:[],error:null,groceryLoading:!0,storeLoading:!0,historyLoading:!0,showModal:!1,modal:"",modalName:"",modalDescription:"",modalAisle:"",modalStore:"",modalDate:"",modalId:""},O=Object(r.createContext)(h),b=function(e){var t=e.children,a=Object(r.useReducer)(y,h),o=Object(u.a)(a,2),c=o[0],l=o[1];function s(){return(s=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/v1/groceryItems");case 3:t=e.sent,l({type:"GET_GROCERIES",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"DATA_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function i(){return(i=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("/api/v1/groceryItems/".concat(t));case 3:l({type:"DELETE_ITEM_FROM_LIST",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l({type:"DATA_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function m(){return(m=Object(p.a)(d.a.mark((function e(t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},r={itemName:t.itemName,description:t.description,aisle:t.aisle,defaultStore:t.defaultStore,_id:t._id},e.prev=2,e.next=5,v.a.put("/api/v1/groceryItems/".concat(r._id),r,a);case 5:l({type:"UPDATE_GROCERY_ITEM",payload:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),l({type:"DATA_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function E(){return(E=Object(p.a)(d.a.mark((function e(t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,v.a.post("/api/v1/groceryItems",t,a);case 4:r=e.sent,l({type:"ADD_ITEM_TO_LIST",payload:r.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"DATA_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function f(){return(f=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/v1/groceryStores");case 3:t=e.sent,l({type:"GET_STORES",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"DATA_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function b(){return(b=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("/api/v1/groceryStores/".concat(t));case 3:l({type:"DELETE_STORE",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l({type:"DATA_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function g(){return(g=Object(p.a)(d.a.mark((function e(t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,v.a.post("/api/v1/groceryStores",t,a);case 4:r=e.sent,l({type:"ADD_STORE",payload:r.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"DATA_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function I(){return(I=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/v1/historyItems");case 3:t=e.sent,l({type:"GET_HISTORY",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"DATA_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function N(){return(N=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("/api/v1/historyItems/".concat(t));case 3:l({type:"DELETE_HISTORY_ITEM_FROM_LIST",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l({type:"DATA_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function S(){return(S=Object(p.a)(d.a.mark((function e(t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,v.a.post("/api/v1/historyItems",t,a);case 4:r=e.sent,l({type:"ADD_ITEM_TO_HISTORY",payload:r.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"DATA_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return n.a.createElement(O.Provider,{value:{store:c.store,groceryItem:c.groceryItem,deleteItemFromList:function(e){return i.apply(this,arguments)},addItemToList:function(e){return E.apply(this,arguments)},toggleChecked:function(e){l({type:"TOGGLE_CHECKED",payload:e})},getGroceryItems:function(){return s.apply(this,arguments)},getStores:function(){return f.apply(this,arguments)},deleteStore:function(e){return b.apply(this,arguments)},addStore:function(e){return g.apply(this,arguments)},historyItem:c.historyItem,getHistoryItems:function(){return I.apply(this,arguments)},addItemToHistory:function(e){return S.apply(this,arguments)},deleteItemFromHistory:function(e){return N.apply(this,arguments)},toggleModal:function(e){l({type:"TOGGLE_MODAL",payload:e})},modal:c.modal,error:c.error,groceryLoading:c.groceryLoading,showModal:c.showModal,modalName:c.modalName,modalAisle:c.modalAisle,modalDescription:c.modalDescription,modalStore:c.modalStore,modalDate:c.modalDate,setNewModalName:function(e){l({type:"SET_NEW_MODAL_NAME",payload:e})},updateGroceryItem:function(e){return m.apply(this,arguments)},modalId:c.modalId}},t)},g=a(27),I=a(11),N=a(8),S=a.n(N),j=(a(13),function(e){var t=Object(r.useContext)(O).toggleModal,a=n.a.createElement("div",{className:"modal-wrapper"},n.a.createElement("div",{className:"modal-backdrop",onClick:t}),n.a.createElement("div",{className:"modal-box"},e.children));return c.a.createPortal(a,document.querySelector("#modal"))});var _=function(){var e=Object(r.useContext)(O),t=e.historyItem,a=e.addItemToList,o=Object(r.useState)(""),c=Object(u.a)(o,2),l=c[0],s=c[1],i=Object(r.useState)([]),m=Object(u.a)(i,2),d=m[0],p=m[1],E=function(e){return function(t){t.preventDefault();var r={itemName:e.groceryItemName,description:e.groceryItemDescription,aisle:e.groceryItemAisle,defaultStore:e.storeName};s(""),p([]),a(r)}};return n.a.createElement("div",null,n.a.createElement("form",null,n.a.createElement("label",{htmlFor:"search-bar"},"Search"),n.a.createElement("input",{id:"search-bar",type:"text",placeholder:"Enter search term",value:l,onChange:function(e){var a=t.filter((function(t){var a=new RegExp("^".concat(e.target.value),"gi");return t.groceryItemName.match(a)}));if(e.target.value.length<2)a=[],p([]);else{var r=[];if(a.length>1){var o=a.sort((function(e,t){return e.groceryItemName>t.groceryItemName?1:-1}));r=[a[0]];for(var c=1;c<a.length;c++)o[c].groceryItemName!==o[c-1].groceryItemName&&r.push(o[c])}else r=a.map((function(e){return e}));var l=r.map((function(e){return n.a.createElement(N.SlideDown,{key:e._id,id:"add-item-form"},n.a.createElement("form",{onSubmit:E(e)},n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{htmlFor:"add-item-form"},"Add New Item"),n.a.createElement("input",{type:"text",placeholder:"grocery item name",value:e.groceryItemName,name:"groceryName",readOnly:!0})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"optional description",value:e.groceryItemDescription,readOnly:!0})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"aisle",value:e.groceryItemAisle,readOnly:!0})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"store",value:e.storeName,readOnly:!0})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"date last purchased",value:e.lastPurchased,readOnly:!0})),n.a.createElement("button",{className:"btn"},"Add To Grocery List")))}));p(l)}s(e.target.value)}})," "),d)},T=a(9);var R=function(e){var t=Object(r.useContext)(O),a=t.addItemToList,o=t.store,c=t.updateGroceryItem,l=t.toggleModal,s=Object(r.useState)(""),i=Object(u.a)(s,2),m=i[0],d=i[1],p=Object(r.useState)(""),E=Object(u.a)(p,2),y=E[0],f=E[1],v=Object(r.useState)(""),h=Object(u.a)(v,2),b=h[0],g=h[1],I=Object(r.useState)(""),S=Object(u.a)(I,2),j=S[0],R=S[1],w=Object(r.useState)(""),D=Object(u.a)(w,2),x=D[0],A=D[1],C=Object(r.useState)(!0),k=Object(u.a)(C,2),L=k[0],M=k[1],G=Object(r.useRef)(null);return Object(r.useEffect)((function(){e.name&&(d(e.name),A(e._id)),e.description&&f(e.description),e.store&&R(e.store),e.aisle&&g(e.aisle)}),[]),n.a.createElement("div",null,e.name?null:n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Add item to list",n.a.createElement("span",{onClick:function(){return M(!L)}},L?n.a.createElement(T.b,{className:"up-down-icon"}):n.a.createElement(T.a,{className:"up-down-icon"}))),n.a.createElement(_,null)),n.a.createElement(N.SlideDown,null,L?n.a.createElement("form",{onSubmit:e.name?function(e){e.preventDefault();var t={itemName:m.toLowerCase(),description:y,aisle:b.toLowerCase(),defaultStore:j.toUpperCase().replace("'",""),_id:x};0===o.filter((function(e){return e.storeName===t.defaultStore})).length&&(t.defaultStore="ANY/OTHER"),c(t),l()}:function(e){e.preventDefault();var t={itemName:m.toLowerCase(),description:y,aisle:b.toLowerCase(),defaultStore:j.toUpperCase().replace("'","")};0===o.filter((function(e){return e.storeName===t.defaultStore})).length&&(t.defaultStore="ANY/OTHER"),a(t),d(""),f(""),g(""),R(""),A(""),G.current.focus()}},n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{htmlFor:"text"},e.name?"":"Add New Item"),n.a.createElement("input",{id:"grocery-item-name",type:"text",placeholder:"Enter item name",value:m,onChange:function(e){return d(e.target.value)},required:!0,ref:G})," ",n.a.createElement("label",{htmlFor:"grocery-item-name"},"Grocery Item Name")),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{id:"description",type:"text",placeholder:"Enter description",value:y,onChange:function(e){return f(e.target.value)}})," ",n.a.createElement("label",{htmlFor:"description"},"Description (Optional)")),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{id:"aisle",type:"text",placeholder:"Enter aisle",value:b,onChange:function(e){return g(e.target.value)}})," ",n.a.createElement("label",{htmlFor:"aisle"},"Aisle (Optional)")),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{id:"store",type:"text",placeholder:"Enter store name",value:j,onChange:function(e){return R(e.target.value)}})," ",n.a.createElement("label",{htmlFor:"store"},"Store (Optional)")),n.a.createElement("button",{className:"btn"},e.name?"Update Item":"Add To Grocery List")):null))};var w=function(e){var t=Object(r.useContext)(O),a=t.toggleChecked,o=t.deleteItemFromList,c=t.showModal,l=t.toggleModal,s=t.modalName,i=t.modalAisle,u=t.modalDate,m=t.modalDescription,d=t.modalStore,p=t.modalId;return n.a.createElement("div",null,c?n.a.createElement(j,null,n.a.createElement(R,{name:s,description:m,aisle:i,store:d,_id:p,date:u}),n.a.createElement("button",{onClick:l,className:"myButton"},"Cancel")):null,n.a.createElement("h3",null,e.name),n.a.createElement("ul",{className:"list"},n.a.createElement(N.SlideDown,null,e.list.map((function(e){return n.a.createElement("li",{key:e._id,style:{textDecoration:e.checked?"line-through":""},className:"sorted-grocery-list-entry"},n.a.createElement("button",{className:"delete-btn",style:{textDecoration:""},onClick:function(){return o(e._id)}},n.a.createElement(I.b,{className:"check-delete-icon"})),n.a.createElement("span",{onClick:function(){return l(e)}},e.itemName)," ",n.a.createElement("span",{onClick:function(){return l(e)}}," ",e.aisle," "),n.a.createElement("button",{className:"check-btn",onClick:function(){return a(e)}},n.a.createElement(g.a,null)))})))))};var D=function(){return n.a.createElement("div",{className:"loader center spinner"})};var x=function(){var e=Object(r.useContext)(O),t=e.store,a=e.getStores,o=e.groceryItem,c=e.getGroceryItems,l=e.groceryLoading,s=e.getHistoryItems,m=Object(r.useState)([]),d=Object(u.a)(m,2),p=d[0],E=d[1],y=Object(r.useState)(!0),f=Object(u.a)(y,2),v=f[0],h=f[1];return Object(r.useEffect)((function(){c(),a(),s()}),[]),Object(r.useEffect)((function(){var e=o.sort((function(e,t){return e.aisle<t.aisle?-1:e.aisle>t.aisle?1:e.itemName<t.itemName?-1:e.itemName>t.itemName?1:0}));E([]),t.filter((function(t){var a=e.filter((function(e){return e.defaultStore.toUpperCase()===t.storeName.toUpperCase()}));if(0!==a.length){var r=n.a.createElement(w,{name:t.storeName,list:a,key:t._id});E((function(e){return[].concat(Object(i.a)(e),[r])}))}}))}),[o,t]),n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"grocery list",n.a.createElement("span",{onClick:function(){return h(!v)}},v?n.a.createElement(T.b,{className:"up-down-icon"}):n.a.createElement(T.a,{className:"up-down-icon"}))),n.a.createElement(N.SlideDown,null,v?l?n.a.createElement(D,null):p:null))};var A=function(e){var t=Object(r.useContext)(O).deleteStore,a=Object(r.useState)(!1),o=Object(u.a)(a,2),c=o[0],l=o[1],s=n.a.createElement("div",null,e.description);return n.a.createElement("div",{onClick:function(){l(!c)}},n.a.createElement("button",{className:"delete-btn",style:{marginRight:20},onClick:function(){return t(e.sid)}},n.a.createElement(I.c,null)),e.name,c?s:null)};var C=function(){var e=Object(r.useContext)(O).addStore,t=Object(r.useState)(""),a=Object(u.a)(t,2),o=a[0],c=a[1],l=Object(r.useState)(""),s=Object(u.a)(l,2),i=s[0],m=s[1];return n.a.createElement("div",null,n.a.createElement("h2",null,"Add Store"),n.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={storeName:o.toUpperCase(),description:i};e(a),c(""),m("")}},n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{htmlFor:"text"},"Search or Add New Store"),n.a.createElement("input",{type:"text",placeholder:"store name",value:o,onChange:function(e){return c(e.target.value)},required:!0})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"description",value:i,onChange:function(e){return m(e.target.value)}})),n.a.createElement("button",{className:"btn"},"Add To Store List")))},k=a(16);var L=function(){var e=Object(r.useContext)(O),t=e.store,a=e.storeLoading,o=Object(r.useState)([]),c=Object(u.a)(o,2),l=c[0],s=c[1],m=Object(r.useState)(!1),d=Object(u.a)(m,2),p=d[0],E=d[1],y=Object(r.useState)(!1),f=Object(u.a)(y,2),v=f[0],h=f[1];return Object(r.useEffect)((function(){s([]),t.map((function(e){var t=n.a.createElement("li",{key:e._id},n.a.createElement(A,{name:e.storeName,sid:e._id,description:e.description}));return s((function(e){return[].concat(Object(i.a)(e),[t])})),null}))}),[t]),n.a.createElement("div",null,n.a.createElement("h2",null,"store list",n.a.createElement("span",{onClick:function(){return h(!v)}},v?n.a.createElement(T.a,{className:"up-down-icon"}):n.a.createElement(T.b,{className:"up-down-icon"})),v?n.a.createElement("span",{onClick:function(){return E(!p)}},p?n.a.createElement(k.a,{className:"up-down-icon"}):n.a.createElement(k.b,{className:"up-down-icon"})):null),n.a.createElement(S.a,null,p&&v?n.a.createElement(C,null):null,v?n.a.createElement("ul",{className:"list"},a?n.a.createElement(D,null):l):null))},M=a(28);var G=function(){var e=Object(r.useContext)(O),t=e.groceryItem,a=e.addItemToHistory,o=e.deleteItemFromList;return n.a.createElement("div",{className:"submit-buttons"},n.a.createElement("button",{onClick:function(){t.filter((function(e){return!0===e.checked})).map((function(e){var t={groceryItemName:e.itemName,storeName:e.defaultStore,groceryItemDescription:e.description,groceryItemAisle:e.aisle};return a(t),o(e._id),null}))},className:"myButton"},"SUBMIT",n.a.createElement(I.a,{className:"up-down-icon"})),n.a.createElement("button",{onClick:function(){t.forEach((function(e){o(e._id)}))},className:"myButton"},"RESET",n.a.createElement(M.a,{className:"up-down-icon"})))};var F=function(){return n.a.createElement(b,null,n.a.createElement("div",{className:"App"},n.a.createElement(s,null),n.a.createElement(G,null),n.a.createElement(x,null),n.a.createElement(R,null),n.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.26b5a8ca.chunk.js.map