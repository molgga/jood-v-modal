import{a as C,u as A,S as D,c as O,d as $,e as M,f as T}from"./chunks/theme.DCNg3CeF.js";import{e as g,B as V,_ as y,N as c,f as E,g as m,h as n,P as i,v as t,t as l,D as B,E as S,r as f,aO as _}from"./chunks/framework.CmXKAP2h.js";const w=g({setup(){const s=C(),a=A();return{withBase:V,onOpen:()=>{var d;const e=(d=a.data)==null?void 0:d.nestedModalExampleOption;s.open({component:v,data:{nestedModalExampleOption:e},...e})},onClose:()=>{a.close()}}}}),b=s=>(B("data-v-90d565bd"),s=s(),S(),s),x={class:"example-modal"},I=b(()=>n("div",{class:"head-panel"},[n("h2",{class:"tit"},"안녕하세요!")],-1)),N=b(()=>n("div",{class:"body-panel"},"@jood/v-modal 입니다.",-1)),P={class:"foot-actions"},R=b(()=>n("div",{class:"spacer"},null,-1));function J(s,a,k,o,e,d){const p=c("el-button");return E(),m("div",x,[I,N,n("div",P,[i(p,{type:"primary",onClick:s.onOpen},{default:t(()=>[l("open")]),_:1},8,["onClick"]),R,i(p,{type:"danger",onClick:s.onClose},{default:t(()=>[l("close")]),_:1},8,["onClick"])])])}const v=y(w,[["render",J],["__scopeId","data-v-90d565bd"]]),q=g({setup(){const s=C(),a=f({overlayClose:!0,floatingMode:!0,disableShadow:!0,fullHeight:!1,duration:240});return{optionState:a,onOpen:()=>{const o={...a};s.open({component:v,data:{nestedModalExampleOption:o},...o})}}}}),u=s=>(B("data-v-bd90964e"),s=s(),S(),s),H={class:"example"},L={class:"actions"},j={class:"option-table"},U={class:"row"},z=u(()=>n("div",{class:"cell dt"},"overlayClose",-1)),G={class:"cell dd"},K={class:"row"},Q=u(()=>n("div",{class:"cell dt"},"floatingMode",-1)),W={class:"cell dd"},X={class:"row"},Y=u(()=>n("div",{class:"cell dt"},"fullHeight",-1)),Z={class:"cell dd"},ss=u(()=>n("p",{class:"info"}," 모달의 css height: 100% 처리가 어렵다는 점으로 인해, 모달을 감싸는 entryComponent (부모)의 height 를 100% 로 만듭니다. 모달의 사이즈를 강제로 100% 처리하는건 아닙니다. ",-1)),as={class:"row"},ns=u(()=>n("div",{class:"cell dt"},"duration",-1)),is={class:"cell dd"};function es(s,a,k,o,e,d){const p=c("el-button"),r=c("el-checkbox"),F=c("el-input-number");return E(),m("div",H,[n("div",L,[i(p,{type:"primary",onClick:s.onOpen},{default:t(()=>[l("open")]),_:1},8,["onClick"])]),n("div",j,[n("div",U,[z,n("div",G,[i(r,{modelValue:s.optionState.overlayClose,"onUpdate:modelValue":a[0]||(a[0]=h=>s.optionState.overlayClose=h)},{default:t(()=>[l("overlay 영역을 클릭시 모달을 닫습니다.")]),_:1},8,["modelValue"])])]),n("div",K,[Q,n("div",W,[i(r,{modelValue:s.optionState.floatingMode,"onUpdate:modelValue":a[1]||(a[1]=h=>s.optionState.floatingMode=h)},{default:t(()=>[l("모달이 중첩해서 열리는 경우 animation 처리를 합니다.")]),_:1},8,["modelValue"])])]),n("div",X,[Y,n("div",Z,[i(r,{modelValue:s.optionState.fullHeight,"onUpdate:modelValue":a[2]||(a[2]=h=>s.optionState.fullHeight=h)},{default:t(()=>[l("css height 100% 처리를 위한 값 입니다.")]),_:1},8,["modelValue"]),ss])]),n("div",as,[ns,n("div",is,[i(F,{modelValue:s.optionState.duration,"onUpdate:modelValue":a[3]||(a[3]=h=>s.optionState.duration=h),min:0,max:1e4,step:10},null,8,["modelValue"])])])])])}const ts=y(q,[["render",es],["__scopeId","data-v-bd90964e"]]),ls=g({setup(){const s=C(),a=f({overlayClose:!0,floatingMode:!0,disableShadow:!0,duration:240});return{optionState:a,onOpen:o=>{let e;switch(o){case"StackTop":e=new T;break;case"StackBottom":e=new M;break;case"StackLeft":e=new $;break;case"StackRight":e=new O;break;default:e=new D;break}const d={...a,openStrategy:e};s.open({component:v,data:{nestedModalExampleOption:d},...d})}}}}),ps={class:"example"},os={class:"actions"};function ds(s,a,k,o,e,d){const p=c("el-button");return E(),m("div",ps,[n("div",os,[i(p,{class:"action",type:"primary",onClick:a[0]||(a[0]=r=>s.onOpen())},{default:t(()=>[l("StackNormal")]),_:1}),i(p,{class:"action",type:"primary",onClick:a[1]||(a[1]=r=>s.onOpen("StackTop"))},{default:t(()=>[l("StackTop")]),_:1}),i(p,{class:"action",type:"primary",onClick:a[2]||(a[2]=r=>s.onOpen("StackBottom"))},{default:t(()=>[l("StackBottom")]),_:1}),i(p,{class:"action",type:"primary",onClick:a[3]||(a[3]=r=>s.onOpen("StackLeft"))},{default:t(()=>[l("StackLeft")]),_:1}),i(p,{class:"action",type:"primary",onClick:a[4]||(a[4]=r=>s.onOpen("StackRight"))},{default:t(()=>[l("StackRight")]),_:1})])])}const rs=y(ls,[["render",ds],["__scopeId","data-v-e4bbece3"]]),hs=_(`<h1 id="모달-열기" tabindex="-1">모달 열기 <a class="header-anchor" href="#모달-열기" aria-label="Permalink to &quot;모달 열기&quot;">​</a></h1><p>JdModalService 를 통해 컴포넌트를 열 수 있습니다. <code>useJdModalService</code> 를 통해 서비스를 사용할 수 있습니다.</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineComponent } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useJdModalService } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@jood/v-modal&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MyModal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./MyModal.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> modalService</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useJdModalService</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onOpen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      modalService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        component: MyModal</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      onOpen</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="옵션" tabindex="-1">옵션 <a class="header-anchor" href="#옵션" aria-label="Permalink to &quot;옵션&quot;">​</a></h2><p>간편하게 적용하거나 해제하기 위한 몇가지 옵션을 제공합니다.</p>`,5),ks=_(`<div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">modalService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  component: OpenModal,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  overlayClose: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  floatingMode: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  disableShadow: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fullHeight: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  duration: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">240</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="openstrategy" tabindex="-1">OpenStrategy <a class="header-anchor" href="#openstrategy" aria-label="Permalink to &quot;OpenStrategy&quot;">​</a></h2><p><code>OpenStrategy</code> 란 모달의 열리고 닫힐 때의 스타일(css) 처리를 합니다. 아래 예제에서 보듯이 많이 사용할 법한 몇가지 스타일은 기본적으로 제공하고 있습니다.</p>`,3),cs=_(`<div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { StackNormal, StackTop, StackBottom, StackLeft, StackRight } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@jood/v-modal&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">modalService.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  component: OpenModal,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  openStrategy: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> StackBottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>직접 OpenStrategy 를 만들 수도 있습니다. 자세히 알고 싶다면 <a href="./../open-strategy/intro.html">OpenStarategy 란?</a>를 참고하세요.</p>`,2),Cs=JSON.parse('{"title":"모달 열기","description":"","frontmatter":{},"headers":[],"relativePath":"pages/practice/open.md","filePath":"pages/practice/open.md"}'),us={name:"pages/practice/open.md"},gs=Object.assign(us,{setup(s){return(a,k)=>(E(),m("div",null,[hs,i(ts),ks,i(rs),cs]))}});export{Cs as __pageData,gs as default};