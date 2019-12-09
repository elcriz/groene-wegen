(this["webpackJsonpgroene-wegen"]=this["webpackJsonpgroene-wegen"]||[]).push([[0],{11:function(e,a,t){e.exports=t(18)},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),i=t.n(l),c=t(8),s=t(5),o=t(1),m=t.n(o),d=t(3),u=t(4),g=t(6),E=function(){function e(){Object(u.a)(this,e)}return Object(g.a)(e,null,[{key:"getFromStorage",value:function(){var e=window.localStorage.getItem("cars");return e?""===JSON.parse(e)?[]:JSON.parse(e):[]}},{key:"addToStorage",value:function(e){window.localStorage.setItem("cars",JSON.stringify(e))}}]),e}(),_={headers:{"X-App-Token":"sx2tUJREaYSPBDaMp88kiCI5K"}},f=function(){function e(){Object(u.a)(this,e)}return Object(g.a)(e,null,[{key:"getByNumberPlate",value:function(e){var a;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.awrap(fetch("https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=".concat(e),Object(s.a)({},_)));case 3:if((a=t.sent).ok){t.next=6;break}throw new Error(a.statusText);case 6:return t.next=8,m.a.awrap(a.json());case 8:return t.abrupt("return",t.sent);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),null,null,[[0,11]])}},{key:"getEnvironmentalByNumberPlate",value:function(e){var a;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.awrap(fetch("https://opendata.rdw.nl/resource/8ys7-d773.json?kenteken=".concat(e),Object(s.a)({},_)));case 3:if((a=t.sent).ok){t.next=6;break}throw new Error(a.statusText);case 6:return t.next=8,m.a.awrap(a.json());case 8:return t.abrupt("return",t.sent);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),null,null,[[0,11]])}}]),e}(),v=["Benzine","Diesel","LPG"];function h(e){return e.length>1&&-1!==e.findIndex((function(e){return"Elektriciteit"===e.brandstof_omschrijving}))}function b(e){return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))}var p=function e(a){var t=a.kenteken,n=a.merk,r=a.handelsbenaming,l=a.zuinigheidslabel,i=a.datum_eerste_toelating,c=a.inrichting,s=a.massa_ledig_voertuig,o=a.massa_rijklaar,m=a.environmental;Object(u.a)(this,e);var d=function(e){if(e.length>1)return h(e)?e.find((function(e){return-1!==v.indexOf(e.brandstof_omschrijving)})):e.find((function(e){return!!e.brandstofverbruik_gecombineerd}));return e.find((function(e){return"1"===e.brandstof_volgnummer}))}(m),g=function(e){if(e.length>1)return h(e)?e.find((function(e){return-1===v.indexOf(e.brandstof_omschrijving)})):e.find((function(e){return!e.brandstofverbruik_gecombineerd}));return}(m);this.numberPlate=t,this.brand=n,this.name=function(e,a){return a.replace(e,"").trim()}(n,r),this.year=i?i.substring(0,4):void 0,this.numberPlate&&(this.isFossileFuelCar=function(e){return-1!==v.indexOf(e.brandstof_omschrijving)}(d),this.engineType=g?"".concat(d.brandstof_omschrijving,"/").concat(g.brandstof_omschrijving):d.brandstof_omschrijving,this.energyLabel=this.isFossileFuelCar?l:"A",this.mileage=this.isFossileFuelCar?{country:parseFloat(d.brandstofverbruik_buiten),city:parseFloat(d.brandstofverbruik_stad),combined:parseFloat(d.brandstofverbruik_gecombineerd)}:void 0,this.emissions=this.isFossileFuelCar?{level:parseFloat(d.emissiecode_omschrijving),co2:parseFloat(d.co2_uitstoot_gecombineerd),soot:d.roetuitstoot?parseFloat(d.roetuitstoot):void 0}:void 0,this.noiseLevels={inStationary:d.geluidsniveau_stationair?parseFloat(d.geluidsniveau_stationair):void 0,inMotion:d.geluidsniveau_rijdend?parseFloat(d.geluidsniveau_rijdend):void 0},this.sizes={type:b(c),empty:s,loaded:o})},N=t(2),y=function(e){var a=e.children;return r.a.createElement("header",{className:"header"},r.a.createElement("hgroup",{className:"header__heading-group"},r.a.createElement("h1",{className:"header__heading"},"GroeneWegen"),r.a.createElement("h2",{className:"header__sub-heading"},"Check direct de impact van auto's op het milieu")),a,r.a.createElement("div",{className:"header__icons"},r.a.createElement(N.c,{className:"header__icon header__icon--car"})))},k=t(7),w=t.n(k),C=function(e){var a=e.onSubmit,t=e.isLoading,l=Object(n.useState)(""),i=Object(d.a)(l,2),c=i[0],s=i[1];return r.a.createElement("form",{className:w()("search-form",{"is-loading":t}),onSubmit:function(e){e.preventDefault(),t||(a(c),s(""))}},r.a.createElement("div",{className:"search-form__inner"},r.a.createElement("div",{className:"search-form__field"},r.a.createElement("input",{className:"search-form__input",type:"text",value:c,placeholder:"AB 123 C",maxLength:"6",onChange:function(e){s(e.target.value.toUpperCase())},disabled:t}))))},j=function(e){var a=e.children,t=e.onCloseClick;return r.a.createElement("div",{className:"dialog"},r.a.createElement("div",{className:"dialog__inner"},a,t&&r.a.createElement("div",{className:"dialog__actions"},r.a.createElement("button",{className:"dialog__action dialog__action--close",onClick:t},"Sluiten"))))},S=function(e){var a=e.className,t=e.label;return r.a.createElement("div",{className:w()(a,"energy-label",{"energy-label--A":"A"===t,"energy-label--B":"B"===t,"energy-label--C":"C"===t,"energy-label--D":"D"===t,"energy-label--E":"E"===t,"energy-label--F":"F"===t,"energy-label--G":"G"===t,"energy-label--unknown":!t})},t||"-")},O=function(e){var a=e.item;return r.a.createElement("div",{className:"car-identity"},r.a.createElement("div",{className:"car-identity__content"},r.a.createElement("h1",{className:"car-identity__name"},a.year," ",a.brand," (",a.name,")"),r.a.createElement("div",{className:"car-identity__meta-data"},r.a.createElement("div",{className:"car-identity__number-plate"},a.numberPlate),r.a.createElement("div",{className:"car-identity__engine-type"},a.engineType))),r.a.createElement(S,{className:"car-identity__energy-label",label:a.energyLabel}))},x=function(e){var a=e.items,t=e.onReturnClick;return r.a.createElement(j,{onCloseClick:t},r.a.createElement("div",{className:"compare"},r.a.createElement("div",{className:"compare__inner"},a.map((function(e,a){return r.a.createElement("section",{key:a,className:"compare__section"},r.a.createElement("header",{className:"compare__header"},r.a.createElement(O,{item:e})),r.a.createElement("div",{className:"compare__car-info car-info"},r.a.createElement("div",{className:"car-info__data"},r.a.createElement("div",{className:"car-info__data-inner"},r.a.createElement("h2",{className:"car-info__data-heading"},"Verbruik"),r.a.createElement("dl",{className:"car-info__data-list"},r.a.createElement("dt",null,"Stad"),r.a.createElement("dd",null,r.a.createElement("strong",null,e.mileage&&e.mileage.city?e.mileage.city:"-")," l/100km"),r.a.createElement("dt",null,"Buitengebied"),r.a.createElement("dd",null,r.a.createElement("strong",null,e.mileage&&e.mileage.country?e.mileage.country:"-")," l/100km"),r.a.createElement("dt",null,"Gecombineerd"),r.a.createElement("dd",null,r.a.createElement("strong",null,e.mileage&&e.mileage.combined?e.mileage.combined:"-")," l/100km")))),r.a.createElement("div",{className:"car-info__data"},r.a.createElement("div",{className:"car-info__data-inner"},r.a.createElement("h2",{className:"car-info__data-heading"},"Uitstoot"),r.a.createElement("dl",{className:"car-info__data-list"},r.a.createElement("dt",null,"Klasse"),r.a.createElement("dd",null,r.a.createElement("strong",null,"Euro ",e.emissions&&e.emissions.level?e.emissions.level:"-")),r.a.createElement("dt",null,"CO2"),r.a.createElement("dd",null,r.a.createElement("strong",null,e.emissions&&e.emissions.co2?e.emissions.co2:"-")," gr./km"),r.a.createElement("dt",null,"Roet"),r.a.createElement("dd",null,r.a.createElement("strong",null,e.emissions&&e.emissions.soot?e.emissions.soot:"-")," gr./km")))),r.a.createElement("div",{className:"car-info__data"},r.a.createElement("div",{className:"car-info__data-inner"},r.a.createElement("h2",{className:"car-info__data-heading"},"Motorgeluid"),r.a.createElement("dl",{className:"car-info__data-list"},r.a.createElement("dt",null,"Stationair"),r.a.createElement("dd",null,r.a.createElement("strong",null,e.noiseLevels&&e.noiseLevels.inStationary?e.noiseLevels.inStationary:"-")," dB"),r.a.createElement("dt",null,"In beweging"),r.a.createElement("dd",null,r.a.createElement("strong",null,e.noiseLevels&&e.noiseLevels.inMotion?e.noiseLevels.inMotion:"-")," dB")))),r.a.createElement("div",{className:"car-info__data"},r.a.createElement("div",{className:"car-info__data-inner"},r.a.createElement("h2",{className:"car-info__data-heading"},"Afmetingen"),r.a.createElement("dl",{className:"car-info__data-list"},r.a.createElement("dt",null,"Type"),r.a.createElement("dd",null,r.a.createElement("strong",null,e.sizes.type?e.sizes.type:"-")),r.a.createElement("dt",null,"Ledig"),r.a.createElement("dd",null,r.a.createElement("strong",null,e.sizes.empty?e.sizes.empty:"-")," kg"),r.a.createElement("dt",null,"Rijklaar"),r.a.createElement("dd",null,r.a.createElement("strong",null,e.sizes.loaded?e.sizes.loaded:"-")," kg"))))))})))))},L=function(e){var a=e.items,t=e.onCompareClick,n=e.onClearClick,l=e.onItemClick,i=e.onDeleteCarClick;return r.a.createElement("div",{className:"recents"},!a.length&&r.a.createElement("div",{className:"recents__empty-state"},"Je hebt nog geen auto's opgezocht..."),a.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"recents__header"},r.a.createElement("h2",{className:"recents__heading"},"Onlangs gecheckt"),r.a.createElement("aside",{className:"recents__actions"},a.length>1&&r.a.createElement("button",{className:"recents__action recents__action--compare",title:"Vergelijken",onClick:t},r.a.createElement(N.a,null)),r.a.createElement("button",{className:"recents__action recents__action--clear",type:"button",title:"Verwijderen",onClick:n},r.a.createElement(N.e,null)))),r.a.createElement("div",{className:"recents__inner"},r.a.createElement("div",{className:"recents__items"},a.map((function(e,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("button",{className:"recents__item",type:"button",onClick:function(){l(e.numberPlate)}},r.a.createElement("div",{className:"recents__item-content"},r.a.createElement("h3",{className:"recents__item-name"},e.year," ",e.brand," (",e.name,")"),r.a.createElement("div",{className:"recents__item-meta-data"},r.a.createElement("div",{className:"recents__item-number-plate"},e.numberPlate),r.a.createElement("div",{className:"recents__item-engine-type"},e.engineType))),r.a.createElement(S,{className:"recents__item-energy-label",label:e.energyLabel})),r.a.createElement("button",{className:"recents__delete-item-action",title:"Verwijder auto",onClick:function(){i(a)}},r.a.createElement(N.e,null)))}))))))},F=function(e){var a=e.item,t=e.onReturnClick;return r.a.createElement(j,{onCloseClick:t},r.a.createElement("div",{className:"car-info car-info--positioned"},r.a.createElement("header",{className:"car-info__header"},r.a.createElement(O,{item:a})),r.a.createElement("div",{className:"car-info__inner"},r.a.createElement("div",{className:"car-info__data"},r.a.createElement("div",{className:"car-info__data-inner"},r.a.createElement("h2",{className:"car-info__data-heading"},"Verbruik"),r.a.createElement("dl",{className:"car-info__data-list"},r.a.createElement("dt",null,"Stad"),r.a.createElement("dd",null,r.a.createElement("strong",null,a.mileage&&a.mileage.city?a.mileage.city:"-")," l/100km"),r.a.createElement("dt",null,"Buitengebied"),r.a.createElement("dd",null,r.a.createElement("strong",null,a.mileage&&a.mileage.country?a.mileage.country:"-")," l/100km"),r.a.createElement("dt",null,"Gecombineerd"),r.a.createElement("dd",null,r.a.createElement("strong",null,a.mileage&&a.mileage.combined?a.mileage.combined:"-")," l/100km")))),r.a.createElement("div",{className:"car-info__data"},r.a.createElement("div",{className:"car-info__data-inner"},r.a.createElement("h2",{className:"car-info__data-heading"},"Uitstoot"),r.a.createElement("dl",{className:"car-info__data-list"},r.a.createElement("dt",null,"Klasse"),r.a.createElement("dd",null,r.a.createElement("strong",null,"Euro ",a.emissions&&a.emissions.level?a.emissions.level:"-")),r.a.createElement("dt",null,"CO2"),r.a.createElement("dd",null,r.a.createElement("strong",null,a.emissions&&a.emissions.co2?a.emissions.co2:"-")," gr./km"),r.a.createElement("dt",null,"Roet"),r.a.createElement("dd",null,r.a.createElement("strong",null,a.emissions&&a.emissions.soot?a.emissions.soot:"-")," gr./km")))),r.a.createElement("div",{className:"car-info__data"},r.a.createElement("div",{className:"car-info__data-inner"},r.a.createElement("h2",{className:"car-info__data-heading"},"Motorgeluid"),r.a.createElement("dl",{className:"car-info__data-list"},r.a.createElement("dt",null,"Stationair"),r.a.createElement("dd",null,r.a.createElement("strong",null,a.noiseLevels&&a.noiseLevels.inStationary?a.noiseLevels.inStationary:"-")," dB"),r.a.createElement("dt",null,"In beweging"),r.a.createElement("dd",null,r.a.createElement("strong",null,a.noiseLevels&&a.noiseLevels.inMotion?a.noiseLevels.inMotion:"-")," dB")))),r.a.createElement("div",{className:"car-info__data"},r.a.createElement("div",{className:"car-info__data-inner"},r.a.createElement("h2",{className:"car-info__data-heading"},"Afmetingen"),r.a.createElement("dl",{className:"car-info__data-list"},r.a.createElement("dt",null,"Type"),r.a.createElement("dd",null,r.a.createElement("strong",null,a.sizes.type?a.sizes.type:"-")),r.a.createElement("dt",null,"Ledig"),r.a.createElement("dd",null,r.a.createElement("strong",null,a.sizes.empty?a.sizes.empty:"-")," kg"),r.a.createElement("dt",null,"Rijklaar"),r.a.createElement("dd",null,r.a.createElement("strong",null,a.sizes.loaded?a.sizes.loaded:"-")," kg"))))),r.a.createElement("span",{className:"car-info__car-icon"},r.a.createElement(N.b,null))))},B=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader__inner"},r.a.createElement(N.d,{className:"loader__icon"})))},z=function(e){var a=e.text;return r.a.createElement("div",{className:"error"},a)},P=function(){var e=Object(n.useState)(),a=Object(d.a)(e,2),t=a[0],l=a[1],i=Object(n.useState)(void 0),o=Object(d.a)(i,2),u=o[0],g=o[1],_=Object(n.useState)(E.getFromStorage()),v=Object(d.a)(_,2),h=v[0],b=v[1],N=Object(n.useState)(!1),k=Object(d.a)(N,2),w=k[0],j=k[1],S=Object(n.useState)(!1),O=Object(d.a)(S,2),P=O[0],T=O[1],A=function(){T(!P)};function R(e){var a,t,n,r,i=arguments;return m.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return a=!(i.length>1&&void 0!==i[1])||i[1],j(!0),o.next=4,m.a.awrap(f.getByNumberPlate(e));case 4:return t=o.sent,o.next=7,m.a.awrap(f.getEnvironmentalByNumberPlate(e));case 7:n=o.sent,(r=new p(Object(s.a)({environmental:n},t[0]))).numberPlate||(g("Ongeldig kenteken"),setTimeout((function(){g(void 0)}),2500)),r.numberPlate&&(a&&(b([r].concat(Object(c.a)(h))),E.addToStorage([r].concat(Object(c.a)(h)))),l(r)),j(!1);case 12:case"end":return o.stop()}}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null,r.a.createElement(C,{onSubmit:R,isLoading:w})),r.a.createElement(L,{items:h,onCompareClick:A,onClearClick:function(){b([]),E.addToStorage("")},onItemClick:function(e){return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.awrap(R(e,!1));case 2:case"end":return a.stop()}}))},onDeleteCarClick:function(e){var a=h.filter((function(a,t){return t!==e}));b(a),E.addToStorage(a)}}),t&&r.a.createElement(F,{item:t,onReturnClick:function(){l(void 0)}}),P&&r.a.createElement(x,{items:h,onReturnClick:A}),w&&r.a.createElement(B,null),u&&r.a.createElement(z,{text:u}))},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(17);i.a.render(r.a.createElement(P,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");T?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(a,e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.a6b12f4b.chunk.js.map