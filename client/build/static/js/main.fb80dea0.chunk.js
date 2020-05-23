(this["webpackJsonpsmart-grocery"]=this["webpackJsonpsmart-grocery"]||[]).push([[0],{22:function(e,t,a){e.exports=a(47)},27:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(21),o=a.n(c);a(27);var l=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",null,"menu"),n.a.createElement("h1",null,"Smart Grocery List"))},s=a(6),i=a(1),u=a(2),m=a.n(u),p=a(7),d=a(3),y=function(e,t){switch(t.type){case"DELETE_ITEM_FROM_LIST":var a=e.groceryItem.filter((function(e){return e._id!==t.payload}));return Object(d.a)({},e,{groceryItem:a});case"ADD_ITEM_TO_LIST":return Object(d.a)({},e,{groceryItem:[].concat(Object(s.a)(e.groceryItem),[t.payload])});case"TOGGLE_CHECKED":var r=e.groceryItem.map((function(e){return e._id===t.payload._id?(e.checked=!e.checked,e):e}));return Object(d.a)({},e,{groceryItem:r});case"GET_GROCERIES":return Object(d.a)({},e,{groceryLoading:!1,groceryItem:t.payload});case"GET_STORES":return Object(d.a)({},e,{store:t.payload,storeLoading:!1});case"ADD_STORE":return console.log("in add store -",t.payload),Object(d.a)({},e,{store:[].concat(Object(s.a)(e.store),[t.payload])});case"DELETE_STORE":var n=e.store.filter((function(e){return e._id!==t.payload}));return Object(d.a)({},e,{store:n});case"GET_HISTORY":return Object(d.a)({},e,{historyItem:t.payload,historyLoading:!1});case"DELETE_HISTORY_ITEM_FROM_LIST":var c=e.historyItem.filter((function(e){return e._id!==t.payload}));return Object(d.a)({},e,{historyItem:c});case"ADD_ITEM_TO_HISTORY":return Object(d.a)({},e,{historyItem:[].concat(Object(s.a)(e.historyItem),[t.payload])});case"GET_TRANSACTIONS":return Object(d.a)({},e,{groceryLoading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(d.a)({},e,{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(d.a)({},e,{transactions:[].concat(Object(s.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(d.a)({},e,{error:t.payload});default:return e}},E=a(8),f=a.n(E),v={store:[],groceryItem:[],historyItem:[],error:null,groceryLoading:!0,storeLoading:!0,historyLoading:!0},O=Object(r.createContext)(v),h=function(e){var t=e.children,a=Object(r.useReducer)(y,v),c=Object(i.a)(a,2),o=c[0],l=c[1];function s(){return(s=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/v1/groceryItems");case 3:t=e.sent,l({type:"GET_GROCERIES",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(){return(u=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.delete("/api/v1/groceryItems/".concat(t));case 3:l({type:"DELETE_ITEM_FROM_LIST",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function d(){return(d=Object(p.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,f.a.post("/api/v1/groceryItems",t,a);case 4:r=e.sent,l({type:"ADD_ITEM_TO_LIST",payload:r.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function E(){return(E=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/v1/groceryStores");case 3:t=e.sent,l({type:"GET_STORES",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(){return(h=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.delete("/api/v1/groceryStores/".concat(t));case 3:l({type:"DELETE_STORE",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function b(){return(b=Object(p.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,f.a.post("/api/v1/groceryStores",t,a);case 4:r=e.sent,l({type:"ADD_STORE",payload:r.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function g(){return(g=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/v1/historyItems");case 3:t=e.sent,l({type:"GET_HISTORY",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function I(){return(I=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.delete("/api/v1/historyItems/".concat(t));case 3:l({type:"DELETE_HISTORY_ITEM_FROM_LIST",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function S(){return(S=Object(p.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,f.a.post("/api/v1/historyItems",t,a);case 4:r=e.sent,l({type:"ADD_ITEM_TO_HISTORY",payload:r.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return n.a.createElement(O.Provider,{value:{store:o.store,groceryItem:o.groceryItem,deleteItemFromList:function(e){return u.apply(this,arguments)},addItemToList:function(e){return d.apply(this,arguments)},toggleChecked:function(e){l({type:"TOGGLE_CHECKED",payload:e})},getGroceryItems:function(){return s.apply(this,arguments)},getStores:function(){return E.apply(this,arguments)},deleteStore:function(e){return h.apply(this,arguments)},addStore:function(e){return b.apply(this,arguments)},historyItem:o.historyItem,getHistoryItems:function(){return g.apply(this,arguments)},addItemToHistory:function(e){return S.apply(this,arguments)},deleteItemFromHistory:function(e){return I.apply(this,arguments)},error:o.error,groceryLoading:o.groceryLoading}},t)},b=a(5),g=a.n(b);a(9);var I=function(e){var t=Object(r.useContext)(O),a=t.toggleChecked,c=t.deleteItemFromList;return n.a.createElement("div",null,n.a.createElement("h4",null,e.name),n.a.createElement("ul",{className:"list"},n.a.createElement(b.SlideDown,null,e.list.map((function(e){return n.a.createElement("li",{key:e._id,style:{textDecoration:e.checked?"line-through":""}},n.a.createElement("button",{className:"delete-btn",style:{textDecoration:""},onClick:function(){return c(e._id)}},"X"),e.itemName," ",n.a.createElement("span",null," ",e.aisle," "),n.a.createElement("button",{className:"check-btn",onClick:function(){return a(e)}},"\u2713"))})))))};var S=function(){return n.a.createElement("div",{className:"loader center spinner"})};var j=function(){var e=Object(r.useContext)(O),t=e.store,a=e.getStores,c=e.groceryItem,o=e.getGroceryItems,l=e.groceryLoading,u=e.getHistoryItems,m=Object(r.useState)([]),p=Object(i.a)(m,2),d=p[0],y=p[1],E=Object(r.useState)(!0),f=Object(i.a)(E,2),v=f[0],h=f[1];return Object(r.useEffect)((function(){o(),a(),u()}),[]),Object(r.useEffect)((function(){var e=c.sort((function(e,t){return e.aisle>t.aisle?1:-1}));y([]),t.filter((function(t){var a=e.filter((function(e){return e.defaultStore.toUpperCase()===t.storeName.toUpperCase()}));if(0!==a.length){var r=n.a.createElement(I,{name:t.storeName,list:a,key:t._id});y((function(e){return[].concat(Object(s.a)(e),[r])}))}}))}),[c,t]),n.a.createElement("div",{className:"container"},n.a.createElement("h3",null,"grocery list",n.a.createElement("span",{onClick:function(){return h(!v)}},v?"\ud83d\udd3c":"\ud83d\udd3d")),n.a.createElement(b.SlideDown,null,v?l?n.a.createElement(S,null):d:null))};var T=function(e){var t=Object(r.useContext)(O).deleteItemFromHistory,a=Object(r.useState)(!1),c=Object(i.a)(a,2),o=c[0],l=c[1],s=n.a.createElement("div",null,n.a.createElement("div",null,e.store),n.a.createElement("div",null,e.aisle),n.a.createElement("div",null,e.description));return n.a.createElement("div",null,n.a.createElement("div",{onClick:function(){l(!o)}},n.a.createElement("button",{className:"delete-btn",onClick:function(){return t(e.hiid)}},"X"),e.name,o?s:null))};var N=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(""),l=Object(i.a)(o,2),u=l[0],m=l[1],p=Object(r.useContext)(O).historyItem;return Object(r.useEffect)((function(){m([]),p&&p.map((function(e){var t=n.a.createElement("li",{key:e._id},n.a.createElement(T,{hiid:e._id,name:e.groceryItemName,store:e.storeName,aisle:e.groceryItemAisle,description:e.groceryItemDescription,date:e.lastPurchased}));return m((function(e){return[].concat(Object(s.a)(e),[t])})),null}))}),[p]),n.a.createElement("div",null,n.a.createElement("h3",null,"history list",n.a.createElement("span",{onClick:function(){return c(!a)}},a?"\ud83d\udd3c":"\ud83d\udd3d")),n.a.createElement(b.SlideDown,null,a?n.a.createElement("ul",{className:"list"},n.a.createElement("div",null,u)):null))};var R=function(){var e=Object(r.useContext)(O),t=e.historyItem,a=e.addItemToList,c=Object(r.useState)(""),o=Object(i.a)(c,2),l=o[0],s=o[1],u=Object(r.useState)([]),m=Object(i.a)(u,2),p=m[0],d=m[1],y=function(e){return function(t){t.preventDefault();var r={itemName:e.groceryItemName,description:e.groceryItemDescription,aisle:e.groceryItemAisle,defaultStore:e.storeName};a(r)}};return n.a.createElement("div",null,n.a.createElement("form",null,n.a.createElement("input",{type:"text",placeholder:"Search",value:l,onChange:function(e){var a=t.filter((function(t){var a=new RegExp("^".concat(e.target.value),"gi");return t.groceryItemName.match(a)}));if(e.target.value.length<2)a=[],d([]);else{var r=[];if(a.length>1){var c=a.sort((function(e,t){return e.groceryItemName>t.groceryItemName?1:-1}));console.log("sorted matches ",c),r=[a[0]];for(var o=1;o<a.length;o++)c[o].groceryItemName!==c[o-1].groceryItemName&&r.push(c[o]);console.log("No Dupes-- ",r)}else r=a.map((function(e){return e}));var l=r.map((function(e){return n.a.createElement(b.SlideDown,{key:e._id},n.a.createElement("form",{onSubmit:y(e)},n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{htmlFor:"text"},"Add New Item"),n.a.createElement("input",{type:"text",placeholder:"grocery item name",value:e.groceryItemName,name:"groceryName",readOnly:!0})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"description",value:e.groceryItemDescription,readOnly:!0})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"aisle",value:e.groceryItemAisle,readOnly:!0})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"store",value:e.storeName,readOnly:!0})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"date last purchased",value:e.lastPurchased,readOnly:!0})),n.a.createElement("button",{className:"btn"},"Add To Grocery List")))}));d(l)}console.log("matches--\x3e",a),s(e.target.value)}})," "),p)};var _=function(){var e=Object(r.useContext)(O),t=e.addItemToList,a=e.store,c=Object(r.useState)(""),o=Object(i.a)(c,2),l=o[0],s=o[1],u=Object(r.useState)(""),m=Object(i.a)(u,2),p=m[0],d=m[1],y=Object(r.useState)(""),E=Object(i.a)(y,2),f=E[0],v=E[1],h=Object(r.useState)(""),g=Object(i.a)(h,2),I=g[0],S=g[1],j=Object(r.useState)(""),T=Object(i.a)(j,2),N=T[0],_=T[1],C=Object(r.useState)(!0),x=Object(i.a)(C,2),k=x[0],A=x[1];return n.a.createElement("div",null,n.a.createElement("h3",null,"Add item to list",n.a.createElement("span",{onClick:function(){return A(!k)}},k?"\ud83d\udd3c":"\ud83d\udd3d")),n.a.createElement(b.SlideDown,null,n.a.createElement(R,null),k?n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("in addToList ");var r={itemName:l.toLowerCase(),description:p,aisle:f.toLowerCase(),defaultStore:I.toUpperCase()},n=a.filter((function(e){return e.storeName===r.defaultStore}));console.log("testArr ->",n),console.log("defaultStore->",r.defaultStore),0===n.length&&(r.defaultStore="ANY/OTHER"),console.log("newItem -> ",r),t(r),s(""),d(""),v(""),S(""),_("")}},n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{htmlFor:"text"},"Add New Item"),n.a.createElement("input",{type:"text",placeholder:"grocery item name",value:l,onChange:function(e){return s(e.target.value)},required:!0})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"description",value:p,onChange:function(e){return d(e.target.value)}})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"aisle",value:f,onChange:function(e){return v(e.target.value)}})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"store",value:I,onChange:function(e){return S(e.target.value)}})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"date last purchased",value:N,readOnly:!0})),n.a.createElement("button",{className:"btn"},"Add To Grocery List")):null))};var C=function(e){var t=Object(r.useContext)(O).deleteStore,a=Object(r.useState)(!1),c=Object(i.a)(a,2),o=c[0],l=c[1],s=n.a.createElement("div",null,e.description);return n.a.createElement("div",{onClick:function(){l(!o)}},n.a.createElement("button",{className:"delete-btn",onClick:function(){return t(e.sid)}},"X"),e.name,o?s:null)};var x=function(){var e=Object(r.useContext)(O).addStore,t=Object(r.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(r.useState)(""),s=Object(i.a)(l,2),u=s[0],m=s[1];return n.a.createElement("div",null,n.a.createElement("h3",null,"Add Store"),n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log("in addToList ");var a={storeName:c.toUpperCase(),description:u};console.log("newStore -> ",a),e(a),o(""),m("")}},n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{htmlFor:"text"},"Search or Add New Store"),n.a.createElement("input",{type:"text",placeholder:"store name",value:c,onChange:function(e){return o(e.target.value)},required:!0})),n.a.createElement("div",{className:"form-control"},n.a.createElement("input",{type:"text",placeholder:"description",value:u,onChange:function(e){return m(e.target.value)}})),n.a.createElement("button",{className:"btn"},"Add To Store List")))};var k=function(){var e=Object(r.useContext)(O),t=e.store,a=e.storeLoading,c=Object(r.useState)([]),o=Object(i.a)(c,2),l=o[0],u=o[1],m=Object(r.useState)(!1),p=Object(i.a)(m,2),d=p[0],y=p[1],E=Object(r.useState)(!1),f=Object(i.a)(E,2),v=f[0],h=f[1];return Object(r.useEffect)((function(){u([]),t.map((function(e){var t=n.a.createElement("li",{key:e._id},n.a.createElement(C,{name:e.storeName,sid:e._id,description:e.description}));return u((function(e){return[].concat(Object(s.a)(e),[t])})),null}))}),[t]),n.a.createElement("div",null,n.a.createElement("h3",null,"store list",n.a.createElement("span",{onClick:function(){return h(!v)}},v?"\ud83d\udd3c":"\ud83d\udd3d"),v?n.a.createElement("span",{onClick:function(){return y(!d)}},d?"\u2796":"\u2795"):null),n.a.createElement(g.a,null,d&&v?n.a.createElement(x,null):null,v?n.a.createElement("ul",{className:"list"},a?n.a.createElement(S,null):l):null))};var A=function(){var e=Object(r.useContext)(O),t=e.groceryItem,a=e.addItemToHistory,c=e.deleteItemFromList;return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){t.filter((function(e){return!0===e.checked})).map((function(e){var t={groceryItemName:e.itemName,storeName:e.defaultStore,groceryItemDescription:e.description,groceryItemAisle:e.aisle};return a(t),c(e._id),null}))}},"SUBMIT"),n.a.createElement("button",{onClick:function(){t.forEach((function(e){c(e._id)}))}},"RESET"))};var w=function(){return n.a.createElement(h,null,n.a.createElement(l,null),n.a.createElement(A,null),n.a.createElement(j,null),n.a.createElement(_,null),n.a.createElement(N,null),n.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.fb80dea0.chunk.js.map