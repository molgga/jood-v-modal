import{e as A,h as _,u as b,i as O,_ as m,o as F,c as u,b as a,f as o,w as p,r as C,d as l,p as B,g as f,j as g,S as E,k as $,l as M,m as T,n as V,a as v}from"./app.92258bdb.js";const w=A({setup(){const s=_(),n=b();return{withBase:O,onOpen:()=>{var r;const e=(r=n.data)==null?void 0:r.nestedModalExampleOption;s.open({component:h,data:{nestedModalExampleOption:e},...e})},onClose:()=>{n.close()}}}}),x="/jood-v-modal/assets/bangw.2646bab8.jpg";const S=s=>(B("data-v-a1cc658e"),s=s(),f(),s),I={class:"example-modal"},N=S(()=>a("div",{class:"head-panel"},[a("h2",{class:"tit"},"\uC548\uB155\uD558\uC138\uC694!")],-1)),R=S(()=>a("div",{class:"body-panel"},[l(" @jood/v-modal \uC785\uB2C8\uB2E4. "),a("div",null,[a("img",{src:x})])],-1)),j={class:"foot-actions"},J=S(()=>a("div",{class:"spacer"},null,-1));function P(s,n,i,c,e,r){const t=C("el-button");return F(),u("div",I,[N,R,a("div",j,[o(t,{type:"primary",onClick:s.onOpen},{default:p(()=>[l("open")]),_:1},8,["onClick"]),J,o(t,{type:"danger",onClick:s.onClose},{default:p(()=>[l("close")]),_:1},8,["onClick"])])])}const h=m(w,[["render",P],["__scopeId","data-v-a1cc658e"]]),H=A({setup(){const s=_(),n=g({overlayClose:!0,floatingMode:!0,disableShadow:!0,fullHeight:!1,duration:240});return{optionState:n,onOpen:()=>{const c={...n};s.open({component:h,data:{nestedModalExampleOption:c},...c})}}}});const D=s=>(B("data-v-844dde9a"),s=s(),f(),s),L={class:"example"},U={class:"actions"},q={class:"option-table"},z={class:"row"},G=D(()=>a("div",{class:"cell dt"},"overlayClose",-1)),K={class:"cell dd"},Q={class:"row"},W=D(()=>a("div",{class:"cell dt"},"floatingMode",-1)),X={class:"cell dd"},Y={class:"row"},Z=D(()=>a("div",{class:"cell dt"},"fullHeight",-1)),ss={class:"cell dd"},ns=D(()=>a("p",{class:"info"}," \uBAA8\uB2EC\uC758 css height: 100% \uCC98\uB9AC\uAC00 \uC5B4\uB835\uB2E4\uB294 \uC810\uC73C\uB85C \uC778\uD574, \uBAA8\uB2EC\uC744 \uAC10\uC2F8\uB294 entryComponent (\uBD80\uBAA8)\uC758 height \uB97C 100% \uB85C \uB9CC\uB4ED\uB2C8\uB2E4. \uBAA8\uB2EC\uC758 \uC0AC\uC774\uC988\uB97C \uAC15\uC81C\uB85C 100% \uCC98\uB9AC\uD558\uB294\uAC74 \uC544\uB2D9\uB2C8\uB2E4. ",-1)),as={class:"row"},os=D(()=>a("div",{class:"cell dt"},"duration",-1)),es={class:"cell dd"};function ls(s,n,i,c,e,r){const t=C("el-button"),y=C("el-checkbox"),k=C("el-input-number");return F(),u("div",L,[a("div",U,[o(t,{type:"primary",onClick:s.onOpen},{default:p(()=>[l("onOpen")]),_:1},8,["onClick"])]),a("div",q,[a("div",z,[G,a("div",K,[o(y,{modelValue:s.optionState.overlayClose,"onUpdate:modelValue":n[0]||(n[0]=d=>s.optionState.overlayClose=d)},{default:p(()=>[l("overlay \uC601\uC5ED\uC744 \uD074\uB9AD\uC2DC \uBAA8\uB2EC\uC744 \uB2EB\uC2B5\uB2C8\uB2E4.")]),_:1},8,["modelValue"])])]),a("div",Q,[W,a("div",X,[o(y,{modelValue:s.optionState.floatingMode,"onUpdate:modelValue":n[1]||(n[1]=d=>s.optionState.floatingMode=d)},{default:p(()=>[l("\uBAA8\uB2EC\uC774 \uC911\uCCA9\uD574\uC11C \uC5F4\uB9AC\uB294 \uACBD\uC6B0 animation \uCC98\uB9AC\uB97C \uD569\uB2C8\uB2E4.")]),_:1},8,["modelValue"])])]),a("div",Y,[Z,a("div",ss,[o(y,{modelValue:s.optionState.fullHeight,"onUpdate:modelValue":n[2]||(n[2]=d=>s.optionState.fullHeight=d)},{default:p(()=>[l("css height 100% \uCC98\uB9AC\uB97C \uC704\uD55C \uAC12 \uC785\uB2C8\uB2E4.")]),_:1},8,["modelValue"]),ns])]),a("div",as,[os,a("div",es,[o(k,{modelValue:s.optionState.duration,"onUpdate:modelValue":n[3]||(n[3]=d=>s.optionState.duration=d),min:0,max:1e4,step:10},null,8,["modelValue"])])])])])}const ps=m(H,[["render",ls],["__scopeId","data-v-844dde9a"]]),ts=A({setup(){const s=_(),n=g({overlayClose:!0,floatingMode:!0,disableShadow:!0,duration:240});return{optionState:n,onOpen:c=>{let e;switch(c){case"StackTop":e=new V;break;case"StackBottom":e=new T;break;case"StackLeft":e=new M;break;case"StackRight":e=new $;break;default:e=new E;break}const r={...n,openStrategy:e};s.open({component:h,data:{nestedModalExampleOption:r},...r})}}}});const cs={class:"example"},rs={class:"actions"};function ys(s,n,i,c,e,r){const t=C("el-button");return F(),u("div",cs,[a("div",rs,[o(t,{class:"action",type:"primary",onClick:n[0]||(n[0]=y=>s.onOpen())},{default:p(()=>[l("StackNormal")]),_:1}),o(t,{class:"action",type:"primary",onClick:n[1]||(n[1]=y=>s.onOpen("StackTop"))},{default:p(()=>[l("StackTop")]),_:1}),o(t,{class:"action",type:"primary",onClick:n[2]||(n[2]=y=>s.onOpen("StackBottom"))},{default:p(()=>[l("StackBottom")]),_:1}),o(t,{class:"action",type:"primary",onClick:n[3]||(n[3]=y=>s.onOpen("StackLeft"))},{default:p(()=>[l("StackLeft")]),_:1}),o(t,{class:"action",type:"primary",onClick:n[4]||(n[4]=y=>s.onOpen("StackRight"))},{default:p(()=>[l("StackRight")]),_:1})])])}const ds=m(ts,[["render",ys],["__scopeId","data-v-e4bbece3"]]),is=v(`<h1 id="\uBAA8\uB2EC-\uC5F4\uAE30" tabindex="-1">\uBAA8\uB2EC \uC5F4\uAE30 <a class="header-anchor" href="#\uBAA8\uB2EC-\uC5F4\uAE30" aria-hidden="true">#</a></h1><p>JdModalService \uB97C \uD1B5\uD574 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC5F4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. <code>useJdModalService</code> \uB97C \uD1B5\uD574 \uC11C\uBE44\uC2A4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useJdModalService</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jood/v-modal</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> MyModal </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./MyModal.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">modalService</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useJdModalService</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onOpen</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">modalService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MyModal</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">onOpen</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\uC635\uC158" tabindex="-1">\uC635\uC158 <a class="header-anchor" href="#\uC635\uC158" aria-hidden="true">#</a></h2><p>\uAC04\uD3B8\uD558\uAC8C \uC801\uC6A9\uD558\uAC70\uB098 \uD574\uC81C\uD558\uAE30 \uC704\uD55C \uBA87\uAC00\uC9C0 \uC635\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p>`,5),Cs=v(`<div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">modalService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> OpenModal</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">overlayClose</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">floatingMode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">disableShadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fullHeight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">duration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">240</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="openstrategy" tabindex="-1">OpenStrategy <a class="header-anchor" href="#openstrategy" aria-hidden="true">#</a></h2><p><code>OpenStrategy</code> \uB780 \uBAA8\uB2EC\uC758 \uC5F4\uB9AC\uACE0 \uB2EB\uD790 \uB54C\uC758 \uC2A4\uD0C0\uC77C(css) \uCC98\uB9AC\uB97C \uD569\uB2C8\uB2E4. \uC544\uB798 \uC608\uC81C\uC5D0\uC11C \uBCF4\uB4EF\uC774 \uB9CE\uC774 \uC0AC\uC6A9\uD560 \uBC95\uD55C \uBA87\uAC00\uC9C0 \uC2A4\uD0C0\uC77C\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</p>`,3),Ds=v(`<div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">StackNormal</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">StackTop</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">StackBottom</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">StackLeft</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">StackRight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@jood/v-modal</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">modalService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> OpenModal</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">openStrategy</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">StackBottom</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\uC9C1\uC811 OpenStrategy \uB97C \uB9CC\uB4E4 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD788 \uC54C\uACE0 \uC2F6\uB2E4\uBA74 <a href="./../open-strategy/intro.html">OpenStarategy \uB780?</a>\uB97C \uCC38\uACE0\uD558\uC138\uC694.</p>`,2),As=JSON.parse('{"title":"\uBAA8\uB2EC \uC5F4\uAE30","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC635\uC158","slug":"\uC635\uC158","link":"#\uC635\uC158","children":[]},{"level":2,"title":"OpenStrategy","slug":"openstrategy","link":"#openstrategy","children":[]}],"relativePath":"pages/practice/open.md"}'),Fs={name:"pages/practice/open.md"},_s=Object.assign(Fs,{setup(s){return(n,i)=>(F(),u("div",null,[is,o(ps),Cs,o(ds),Ds]))}});export{As as __pageData,_s as default};
