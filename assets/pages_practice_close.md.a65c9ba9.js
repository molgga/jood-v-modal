import{_ as s,o as a,c as n,a as l}from"./app.eebeef11.js";const F=JSON.parse('{"title":"\uBAA8\uB2EC \uB2EB\uAE30","description":"","frontmatter":{},"headers":[],"relativePath":"pages/practice/close.md"}'),p={name:"pages/practice/close.md"},e=l(`<h1 id="\uBAA8\uB2EC-\uB2EB\uAE30" tabindex="-1">\uBAA8\uB2EC \uB2EB\uAE30 <a class="header-anchor" href="#\uBAA8\uB2EC-\uB2EB\uAE30" aria-hidden="true">#</a></h1><p>\uBAA8\uB2EC\uC744 \uB2EB\uB294 \uBC29\uBC95\uC740 \uC5EC\uB7EC\uAC00\uC9C0\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</p><p>JdModalService (<code>useJdModalService</code>) \uB97C \uD1B5\uD574 \uBAA8\uB4E0 \uBAA8\uB2EC\uC744 \uB2EB\uAC70\uB098 \uD2B9\uC815 \uBAA8\uB2EC\uC744 \uB2EB\uC744 \uC218 \uC788\uACE0, JdModalRef (<code>useJdModalRef</code>) \uB97C \uD1B5\uD574 \uBAA8\uB2EC\uC744 \uB2EB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\u{1F4A1} modalService \uB85C \uC5F4\uB9AC\uC788\uB294 \uBAA8\uB4E0 \uBAA8\uB2EC\uC744 \uB2EB\uAE30</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">modalService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">closeAll</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u{1F4A1} modalRef \uB97C \uC774\uC6A9\uD558\uC5EC \uD2B9\uC815 \uBAA8\uB2EC\uC744 \uB2EB\uAE30</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">modalRef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> modalService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> MyModal</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">modalRef</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\uC774\uB807\uAC8C\uB3C4 \uB2EB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">modalService</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">closeById</span><span style="color:#A6ACCD;">(modalRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u{1F4A1} \uC5F4\uB9AC\uC9C4 \uBAA8\uB2EC \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uB2EB\uAE30</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// MyModal.vue</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> modalRef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useJdModalRef</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> onClose </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">modalRef</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,11),o=[e];function c(r,t,i,d,y,D){return a(),n("div",null,o)}const C=s(p,[["render",c]]);export{F as __pageData,C as default};
