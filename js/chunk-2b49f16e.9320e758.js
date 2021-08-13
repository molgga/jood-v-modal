(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b49f16e"],{2089:function(e,t,n){"use strict";n("2d13")},"2d13":function(e,t,n){},9877:function(e,t,n){"use strict";n("f43a")},c685:function(e,t,n){"use strict";n.r(t);var o=n("4430");Object(o["C"])("data-v-92509282");var l={class:"box"},a=Object(o["g"])("div",null,"to modal",-1),c={class:"box"},s=Object(o["g"])("div",null,"from modal",-1),r={class:"box"},d=Object(o["i"])("open"),u=Object(o["g"])("br",null,null,-1),i=Object(o["g"])("a",{href:"https://github.com/molgga/jood-v-modal/tree/master/packages/dev/src/components/demo-vue3/demo-data-result",target:"_blank"},"demo code",-1);function b(e,t,n,b,p,j){var m=Object(o["H"])("demo-button"),O=Object(o["H"])("demo-panel"),f=Object(o["H"])("demo-panel-devider"),v=Object(o["H"])("demo-preview-code");return Object(o["z"])(),Object(o["f"])("div",null,[Object(o["j"])(O,{title:"Pass data&result"},{default:Object(o["S"])((function(){return[Object(o["g"])("div",l,[a,Object(o["T"])(Object(o["g"])("input",{class:"test-put",placeholder:"to modal","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.state.passText=t})},null,512),[[o["P"],e.state.passText]])]),Object(o["g"])("div",c,[s,Object(o["T"])(Object(o["g"])("input",{class:"test-put",placeholder:"from modal","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.state.resultText=t})},null,512),[[o["P"],e.state.resultText]])]),Object(o["g"])("div",r,[Object(o["j"])(m,{onClick:e.onOpen},{default:Object(o["S"])((function(){return[d]})),_:1},8,["onClick"])]),u,i]})),_:1}),Object(o["j"])(f),Object(o["j"])(O,{title:"To modal"},{default:Object(o["S"])((function(){return[Object(o["j"])(v,Object(o["t"])(Object(o["n"])(e.Codes.ToModal)),null,16)]})),_:1}),Object(o["j"])(f),Object(o["j"])(O,{title:"From modal (SampleModal.vue)"},{default:Object(o["S"])((function(){return[Object(o["j"])(v,Object(o["t"])(Object(o["n"])(e.Codes.FromModal)),null,16)]})),_:1})])}Object(o["A"])();var p=n("8fd0"),j=n("9d0e"),m={ToModal:{title:"",description:"",lang:"typescript",code:"import { Subscription } from 'rxjs';\nimport { defineComponent, reactive, onUnmounted } from 'vue';\nimport { useJdModalService } from '@jood/v-modal';\nimport SampleModal1, { SampleModalData, SampleModalResult } from './SampleModal1.vue';\n\nexport default defineComponent({\n  setup() {\n    const modalService = useJdModalService();\n    const listener = new Subscription();\n    const state = reactive({\n      passText: 'foo',\n      resultText: ''\n    });\n\n    const onOpen = () => {\n      const modalRef = modalService.open<SampleModalResult, SampleModalData>({\n        data: { passText: state.passText },\n        component: SampleModal1\n      });\n      const observeResult = modalRef.observeClosed().subscribe(result => {\n        const { resultText = '' } = result || {};\n        state.resultText = resultText;\n        console.log('close result:', resultText);\n      });\n    };\n\n    onUnmounted(() => {\n      listener.unsubscribe();\n      modalService.closeAll();\n    });\n\n    return {\n      state,\n      onOpen\n    };\n  }\n});"},FromModal:{title:"",description:"",lang:"typescript",code:"import { defineComponent, reactive } from 'vue';\nimport { useJdModalRef } from '@jood/v-modal';\n\nexport interface SampleModalData {\n  passText?: string;\n}\nexport interface SampleModalResult {\n  resultText?: string;\n}\nexport default defineComponent({\n  setup() {\n    const modalRef = useJdModalRef<SampleModalResult, SampleModalData>();\n    const modalData = modalRef.data || {};\n    const anyResult = reactive({\n      text: 'hello ' + modalData.passText || ''\n    });\n    const onCancel = () => {\n      modalRef.close();\n    };\n    const onClose = () => {\n      modalRef.close({\n        resultText: anyResult.text\n      });\n    };\n    return {\n      anyResult,\n      onCancel,\n      onClose\n    };\n  }\n});"}};Object(o["C"])("data-v-53fc2bb5");var O={class:"sample-modal"},f=Object(o["g"])("div",{class:"head"},[Object(o["g"])("h2",{class:"tit"},"sample-modal1")],-1),v={class:"body"},x={class:"foot"},T={class:"aside"},g=Object(o["i"])("cancel"),C=Object(o["g"])("div",{class:"spacer"},null,-1),S={class:"bside"},M=Object(o["i"])("close&result");function R(e,t,n,l,a,c){var s=Object(o["H"])("demo-button");return Object(o["z"])(),Object(o["f"])("div",O,[f,Object(o["g"])("div",v,[Object(o["T"])(Object(o["g"])("input",{class:"test-put","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.anyResult.text=t}),placeholder:"Result text"},null,512),[[o["P"],e.anyResult.text]])]),Object(o["g"])("div",x,[Object(o["g"])("div",T,[Object(o["j"])(s,{text:"",color:"#999999",onClick:e.onCancel},{default:Object(o["S"])((function(){return[g]})),_:1},8,["onClick"])]),C,Object(o["g"])("div",S,[Object(o["j"])(s,{text:"",color:"primary",onClick:e.onClose},{default:Object(o["S"])((function(){return[M]})),_:1},8,["onClick"])])])])}Object(o["A"])();var h=Object(o["l"])({setup:function(){var e=Object(j["k"])(),t=e.data||{},n=Object(o["D"])({text:"hello "+t.passText||!1}),l=function(){e.close()},a=function(){e.close({resultText:n.text})};return{anyResult:n,onCancel:l,onClose:a}}});n("9877");h.render=R,h.__scopeId="data-v-53fc2bb5";var k=h,y=Object(o["l"])({setup:function(){var e=Object(j["l"])(),t=new p["b"],n=Object(o["D"])({passText:"foo",resultText:""}),l=function(){var t=e.open({data:{passText:n.passText},component:k});t.observeClosed().subscribe((function(e){var t=e||{},o=t.resultText,l=void 0===o?"":o;n.resultText=l,console.log("close result:",l)}))};return Object(o["y"])((function(){t.unsubscribe(),e.closeAll()})),{Codes:m,state:n,onOpen:l}}});n("2089");y.render=b,y.__scopeId="data-v-92509282";t["default"]=y},f43a:function(e,t,n){}}]);