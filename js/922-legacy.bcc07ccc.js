"use strict";(self["webpackChunkdev"]=self["webpackChunkdev"]||[]).push([[922],{8922:function(e,n,o){o.r(n),o.d(n,{default:function(){return y}});var l=o(7875),t=o(349),r=(0,l.Uk)("open"),d=(0,l._)("br",null,null,-1),a=(0,l._)("br",null,null,-1),u=(0,l._)("a",{href:"https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-panel-style",target:"_blank"},"demo code",-1);function c(e,n,o,c,i,s){var p=(0,l.up)("demo-button"),f=(0,l.up)("demo-panel"),m=(0,l.up)("demo-panel-devider"),v=(0,l.up)("demo-preview-code");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(f,{title:"Custom panelStyle"},{default:(0,l.w5)((function(){return[(0,l.Wm)(p,{onClick:e.onOpen},{default:(0,l.w5)((function(){return[r]})),_:1},8,["onClick"]),d,a,u]})),_:1}),(0,l.Wm)(m),(0,l.Wm)(f,{title:"panelStyle option"},{default:(0,l.w5)((function(){return[(0,l.Wm)(v,(0,t.vs)((0,l.F4)(e.Codes.Sample1)),null,16)]})),_:1})])}var i=o(8251),s={Sample1:{title:"",description:"",lang:"typescript",code:"export default defineComponent({\n  setup() {\n    const modalService = useJdModalService();\n\n    const onOpen = () => {\n      modalService.open({\n        panelStyle: {\n          borderRadius: '0',\n          border: '10px solid #ff0000',\n          backgroundColor: '#ffff00',\n          margin: '20px 0',\n          overflow: 'hidden'\n        },\n        overlayClose: true,\n        component: SampleModal\n      });\n    };\n\n    onUnmounted(() => {\n      modalService.closeAll();\n    });\n\n    return {\n      onOpen\n    };\n  }\n});"}},p={class:"sample-modal"},f={class:"panel-body"},m={class:"panel-foot"},v=(0,l.Uk)("close");function b(e,n,o,r,d,a){var u=(0,l.up)("demo-button");return(0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("div",f,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(10,(function(e){return(0,l._)("div",{key:e,class:"test-box"},(0,t.zw)(e),1)})),64))]),(0,l._)("div",m,[(0,l.Wm)(u,{text:"",color:"primary",onClick:e.onClose},{default:(0,l.w5)((function(){return[v]})),_:1},8,["onClick"])])])}var C=(0,l.aZ)({setup:function(){var e=(0,i.useJdModalRef)(),n=function(){e.close()};return{onClose:n}}}),k=o(4407);const g=(0,k.Z)(C,[["render",b],["__scopeId","data-v-df2b75a0"]]);var w=g,_=(0,l.aZ)({setup:function(){var e=(0,i.useJdModalService)(),n=function(){e.open({panelStyle:{borderRadius:"0",border:"10px solid #ff0000",backgroundColor:"#ffff00",margin:"20px 0",overflow:"hidden"},overlayClose:!0,component:w})};return(0,l.Ah)((function(){e.closeAll()})),{Codes:s,onOpen:n}}});const S=(0,k.Z)(_,[["render",c]]);var y=S}}]);