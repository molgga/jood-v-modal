"use strict";(self["webpackChunkdev"]=self["webpackChunkdev"]||[]).push([[457],{6457:function(e,a,o){o.r(a),o.d(a,{default:function(){return Z}});var n=o(7875);const t=e=>((0,n.dD)("data-v-a80cac08"),e=e(),(0,n.Cn)(),e),s=(0,n.Uk)("open"),d=t((()=>(0,n._)("br",null,null,-1))),l=t((()=>(0,n._)("br",null,null,-1))),c=t((()=>(0,n._)("a",{href:"https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-before-leave",target:"_blank"},"demo code",-1)));function r(e,a,o,t,r,i){const u=(0,n.up)("demo-button"),v=(0,n.up)("demo-panel");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(v,{title:"Before leave"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{onClick:e.onOpen},{default:(0,n.w5)((()=>[s])),_:1},8,["onClick"]),d,l,c])),_:1})])}var i=o(8251),u=o(4825);const v=e=>((0,n.dD)("data-v-4daf71d6"),e=e(),(0,n.Cn)(),e),f={class:"sample-modal"},h=v((()=>(0,n._)("div",{class:"head"},[(0,n._)("h2",{class:"tit"},"SampleBeforeLeave")],-1))),m={class:"body"},p=(0,n.Uk)(" isChanged "),g={key:0,class:"desc"},C={class:"foot"},k=(0,n.Uk)(" history back ");function _(e,a,o,t,s,d){const l=(0,n.up)("demo-button");return(0,n.wg)(),(0,n.iD)("div",f,[h,(0,n._)("div",m,[(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=a=>e.state.isChanged=a),onChange:a[1]||(a[1]=(...a)=>e.onChange&&e.onChange(...a))},null,544),[[u.e8,e.state.isChanged]]),p]),e.state.isChanged?((0,n.wg)(),(0,n.iD)("div",g," confirm before leave ")):(0,n.kq)("",!0)]),(0,n._)("div",C,[(0,n._)("div",null,[(0,n.Wm)(l,{color:e.state.isChanged?"danger":"#f0f0f0",onClick:e.onBack},{default:(0,n.w5)((()=>[k])),_:1},8,["color","onClick"])])])])}var b=o(641),B=(0,n.aZ)({setup(){const{attachBeforeLeave:e,detachBeforeLeave:a,setBeforeLeaveConfirm:o,setBeforeLeaveValidate:t}=(0,i.useJdModalBeforeLeave)(),s=(0,b.qj)({isChanged:!0});t((()=>(console.log("setBeforeLeaveValidate"),!s.isChanged))),o((async()=>(console.log("setBeforeLeaveConfirm"),new Promise((e=>{e(confirm("back?"))})))));const d=()=>{history.back()},l=()=>{a(),s.isChanged&&e()};return(0,n.bv)((()=>{e()})),(0,n.Ah)((()=>{a()})),{state:s,onChange:l,onBack:d}}}),w=o(4407);const y=(0,w.Z)(B,[["render",_],["__scopeId","data-v-4daf71d6"]]);var L=y,D=(0,n.aZ)({setup(){const e=(0,i.useJdModalService)(),a=()=>{e.open({component:L,overlayClose:!0})};return{onOpen:a}}});const U=(0,w.Z)(D,[["render",r],["__scopeId","data-v-a80cac08"]]);var Z=U}}]);