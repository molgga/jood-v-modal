"use strict";(self["webpackChunkdev"]=self["webpackChunkdev"]||[]).push([[961],{3961:function(e,o,t){t.r(o),t.d(o,{default:function(){return me}});var a=t(7875),n=t(349),s=t(4825);const l=e=>((0,a.dD)("data-v-faa1406c"),e=e(),(0,a.Cn)(),e),c=(0,a.Uk)("open"),d=l((()=>(0,a._)("br",null,null,-1))),i=l((()=>(0,a._)("br",null,null,-1))),u=l((()=>(0,a._)("a",{href:"https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-location-hash",target:"_blank"},"demo code",-1))),r={class:"row-label"},k=l((()=>(0,a._)("span",{class:"label"},"useHistoryState",-1))),p={key:0,class:"text-list"},m=l((()=>(0,a._)("li",null,"modal open = history.pushState(...)",-1))),_=l((()=>(0,a._)("li",null,"history.back = modal close (can use beforeLeave)",-1))),h=l((()=>(0,a._)("li",{class:"warn"},"warning: GA, page-view tracker",-1))),v=l((()=>(0,a._)("li",{class:"warn"},"warning: router.beforeRoute",-1))),f=l((()=>(0,a._)("li",{class:"warn"},"warning: url garbage",-1))),w=[m,_,h,v,f],C={key:1,class:"text-list"},b=l((()=>(0,a._)("li",null,"none",-1))),g=[b];function y(e,o,t,l,m,_){const h=(0,a.up)("demo-button"),v=(0,a.up)("demo-panel"),f=(0,a.up)("demo-panel-devider");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(v,{title:"history state"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{onClick:e.onOpen},{default:(0,a.w5)((()=>[c])),_:1},8,["onClick"]),(0,a._)("span",null,(0,n.zw)(e.testState),1),d,i,u])),_:1}),(0,a.Wm)(f),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("label",r,[(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=o=>e.state.useLocationHash=o),onChange:o[1]||(o[1]=(...o)=>e.onChangeUseLocationHash&&e.onChangeUseLocationHash(...o))},null,544),[[s.e8,e.state.useLocationHash]]),k])]),(0,a._)("div",null,[e.state.useLocationHash?((0,a.wg)(),(0,a.iD)("ul",p,w)):(0,a.kq)("",!0),e.state.useLocationHash?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("ul",C,g))])])),_:1})])}var U=t(641),S=t(8251);const I={class:"sample-modal"},W={class:"head"},H={class:"tit"},M={class:"foot"},D=(0,a.Uk)("history back"),L=(0,a.Uk)(" | "),O=(0,a.Uk)("open"),Z=(0,a.Uk)(" | "),q=(0,a.Uk)("close");function J(e,o,t,s,l,c){const d=(0,a.up)("demo-button");return(0,a.wg)(),(0,a.iD)("div",I,[(0,a._)("div",W,[(0,a._)("h2",H,"modalId: "+(0,n.zw)(e.state.modalId),1)]),(0,a._)("div",M,[(0,a.Wm)(d,{onClick:e.onBack},{default:(0,a.w5)((()=>[D])),_:1},8,["onClick"]),L,(0,a.Wm)(d,{onClick:e.onOpen},{default:(0,a.w5)((()=>[O])),_:1},8,["onClick"]),Z,(0,a.Wm)(d,{onClick:e.onClose},{default:(0,a.w5)((()=>[q])),_:1},8,["onClick"])])])}const j={class:"sample-modal"},B={class:"head"},z={class:"tit"},R={class:"foot"},x=(0,a.Uk)("history back"),A=(0,a.Uk)(" | "),G=(0,a.Uk)("open"),T=(0,a.Uk)(" | "),V=(0,a.Uk)("close");function E(e,o,t,s,l,c){const d=(0,a.up)("demo-button");return(0,a.wg)(),(0,a.iD)("div",j,[(0,a._)("div",B,[(0,a._)("h2",z,"modalId: "+(0,n.zw)(e.state.modalId),1)]),(0,a._)("div",R,[(0,a.Wm)(d,{onClick:e.onBack},{default:(0,a.w5)((()=>[x])),_:1},8,["onClick"]),A,(0,a.Wm)(d,{onClick:e.onOpen},{default:(0,a.w5)((()=>[G])),_:1},8,["onClick"]),T,(0,a.Wm)(d,{onClick:e.onClose},{default:(0,a.w5)((()=>[V])),_:1},8,["onClick"])])])}const F={class:"sample-modal"},K={class:"head"},N={class:"tit"},P={class:"foot"},Q=(0,a.Uk)("history back"),X=(0,a.Uk)(" | "),Y=(0,a.Uk)("open"),$=(0,a.Uk)(" | "),ee=(0,a.Uk)("close");function oe(e,o,t,s,l,c){const d=(0,a.up)("demo-button");return(0,a.wg)(),(0,a.iD)("div",F,[(0,a._)("div",K,[(0,a._)("h2",N,"modalId: "+(0,n.zw)(e.state.modalId),1)]),(0,a._)("div",P,[(0,a.Wm)(d,{onClick:e.onBack},{default:(0,a.w5)((()=>[Q])),_:1},8,["onClick"]),X,(0,a.Wm)(d,{onClick:e.onOpen},{default:(0,a.w5)((()=>[Y])),_:1},8,["onClick"]),$,(0,a.Wm)(d,{onClick:e.onClose},{default:(0,a.w5)((()=>[ee])),_:1},8,["onClick"])])])}var te=(0,a.aZ)({setup(){const e=(0,S.useJdModalService)(),o=(0,S.useJdModalRef)(),t=(0,U.qj)({modalId:o.id}),a=()=>{e.open({component:re})},n=()=>{o.close({result:Date.now()})},s=()=>{history.back()};return{state:t,onOpen:a,onClose:n,onBack:s}}}),ae=t(4407);const ne=(0,ae.Z)(te,[["render",oe],["__scopeId","data-v-66f4e893"]]);var se=ne,le=(0,a.aZ)({setup(){const e=(0,S.useJdModalService)(),o=(0,S.useJdModalRef)(),t=(0,U.qj)({modalId:o.id}),a=()=>{e.open({component:se,overlayClose:!0,floatingMode:!0})},n=()=>{o.close({result:Date.now()})},s=()=>{history.back()};return{state:t,onOpen:a,onClose:n,onBack:s}}});const ce=(0,ae.Z)(le,[["render",E],["__scopeId","data-v-3f41d146"]]);var de=ce,ie=(0,a.aZ)({setup(){const e=(0,S.useJdModalService)(),o=(0,S.useJdModalRef)(),t=(0,U.qj)({modalId:o.id}),a=()=>{e.open({component:de,overlayClose:!0,floatingMode:!0})},n=()=>{o.close({result:Date.now()})},s=()=>{history.back()};return{state:t,onOpen:a,onClose:n,onBack:s}}});const ue=(0,ae.Z)(ie,[["render",J],["__scopeId","data-v-5490681f"]]);var re=ue,ke=(0,a.aZ)({setup(){const e=(0,S.useJdModalService)(),o=(0,U.qj)({useLocationHash:!0}),t=()=>{e.setUseHistoryState(o.useLocationHash)},n=()=>{e.open({component:re,overlayClose:!0,floatingMode:!0})};let s;const l=(0,U.qj)({historyState:{}}),c=(e=!0)=>{e?setTimeout((()=>{l.historyState={...history.state}}),300):l.historyState={...history.state}},d=()=>{c()};return(0,a.bv)((()=>{c(!1),s=e.observeModalState().subscribe(d)})),(0,a.Ah)((()=>{s&&(s.unsubscribe(),s=null),e.closeAll(),e.setUseHistoryState(!0)})),{state:o,onChangeUseLocationHash:t,onOpen:n,testState:l}}});const pe=(0,ae.Z)(ke,[["render",y],["__scopeId","data-v-faa1406c"]]);var me=pe}}]);