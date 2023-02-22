import{_ as e,o as s,c as o,f as n}from"./app.067ebe20.js";const _=JSON.parse('{"title":"Todo 待办","description":"","frontmatter":{},"headers":[{"level":2,"title":"button 组件","slug":"button-组件","link":"#button-组件","children":[]},{"level":2,"title":"menu 组件","slug":"menu-组件","link":"#menu-组件","children":[]}],"relativePath":"examples/todo.md"}'),a={name:"examples/todo.md"},t=n(`<h1 id="todo-待办" tabindex="-1">Todo 待办 <a class="header-anchor" href="#todo-待办" aria-hidden="true">#</a></h1><h2 id="button-组件" tabindex="-1">button 组件 <a class="header-anchor" href="#button-组件" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">✍️✍️✍️</p><p>对于文本按钮的禁用使用的是 <code>CSS</code> 样式, 让鼠标事件失效</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> // 不接受鼠标事件</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>导致禁用文本按钮的鼠标样式修改不生效<br><strong>任务: <em>让文本禁用按钮的鼠标样式生效</em></strong></p></div><h2 id="menu-组件" tabindex="-1">menu 组件 <a class="header-anchor" href="#menu-组件" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">✍️✍️✍️</p><ol><li>对于属性 <code>index</code> 组件代码自动生成 <code>1-1-1-1</code></li><li><code>onSelect</code> 方法返回的信息, 现在返回的是当前的<code>index</code>, 应该返回<code>menuItem</code>实例</li><li><code>menu subMenu menuItem</code> 组件插槽展示逻辑&amp;插槽组件校验</li><li><code>subMenu</code> 组件支持 <code>disabled</code></li><li><code>hover</code> 样式会微动优化</li></ol></div>`,5),l=[t];function c(d,i,p,r,u,m){return s(),o("div",null,l)}const b=e(a,[["render",c]]);export{_ as __pageData,b as default};
