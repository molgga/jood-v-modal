(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb0e2046"],{"0616":function(n,e,t){"use strict";var o=t("746d"),c=t.n(o);c.a},4810:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("example-intro"),t("jd-modal-provider"),t("div",{staticClass:"test-print"},[t("div",{staticClass:"print"},[n._v(n._s(n.modalState.count)+" 열림")]),n.modalState.modals.length?t("div",{staticClass:"test-modals"},n._l(n.modalState.modals,(function(e,o){return t("div",{key:e.id,staticClass:"modal"},[t("button",{on:{click:function(n){return e.close()}}},[n._v("모달 "+n._s(o+1)+" 닫기")])])})),0):n._e()]),t("div",[t("button",{on:{click:n.onOpen}},[n._v("open")])])],1)},c=[],l=t("2d1f"),s=t("c465"),i=t("437d"),u=t("2c8d"),a=t("fce1"),r=Object(s["defineComponent"])({components:{JdModalProvider:i["a"],ExampleIntro:u["a"]},setup:function(){Object(i["c"])();var n=Object(i["e"])(),e=new l["a"],t=Object(s["reactive"])({count:0,modals:[]}),o=function(){n.open({overlayClose:!0,component:a["default"]})};return Object(s["onMounted"])((function(){var o=n.observeModals().subscribe((function(){t.count=n.modals.length,t.modals=n.modals}));e.add(o)})),Object(s["onUnmounted"])((function(){n.closeAll(),e.unsubscribe()})),{modalState:t,onOpen:o}}}),d=r,f=(t("a5fc"),t("2be6")),b=Object(f["a"])(d,o,c,!1,null,"0b858158",null);e["default"]=b.exports},"6c7e":function(n,e,t){},"6cdb":function(n,e,t){"use strict";var o=t("b486"),c=t.n(o);c.a},"746d":function(n,e,t){},a5fc:function(n,e,t){"use strict";var o=t("6c7e"),c=t.n(o);c.a},b486:function(n,e,t){},fce1:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"some-view"},[t("h2",[n._v("simple1")]),t("div",[t("button",{on:{click:n.onOpen}},[n._v("open")]),t("button",{on:{click:n.onClose}},[n._v("close")])])])},c=[],l=t("c465"),s=t("437d"),i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"some-view"},[t("h2",[n._v("simple2")]),t("div",[t("button",{on:{click:n.onOpen}},[n._v("open")]),t("button",{on:{click:n.onClose}},[n._v("close")]),t("button",{on:{click:n.onCloseAll}},[n._v("closeAll")])])])},u=[],a=(t("ef1f"),function(){return Promise.resolve().then(t.bind(null,"fce1"))}),r=Object(l["defineComponent"])({setup:function(){var n=Object(s["e"])(),e=Object(s["d"])(),t=function(){n.open({component:a})},o=function(){e.close()},c=function(){n.closeAll()};return{onOpen:t,onClose:o,onCloseAll:c}}}),d=r,f=(t("6cdb"),t("2be6")),b=Object(f["a"])(d,i,u,!1,null,"25a70aeb",null),v=b.exports,p=Object(l["defineComponent"])({setup:function(){var n=Object(s["e"])(),e=Object(s["d"])(),t=function(){n.open({component:v})},o=function(){e.close()};return{onOpen:t,onClose:o}}}),m=p,O=(t("0616"),Object(f["a"])(m,o,c,!1,null,"0db88c68",null));e["default"]=O.exports}}]);