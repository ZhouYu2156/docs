import{_ as e,c as s,a3 as i,o as l}from"./chunks/framework.qvFKrwDx.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"资源/快速文档查阅/本地人工智能大语言模型安装.md","filePath":"资源/快速文档查阅/本地人工智能大语言模型安装.md","lastUpdated":1728754142000}'),t={name:"资源/快速文档查阅/本地人工智能大语言模型安装.md"};function n(h,a,r,o,d,p){return l(),s("div",null,a[0]||(a[0]=[i('<h2 id="_1、本地安装自己的大语言模型" tabindex="-1">1、本地安装自己的大语言模型 <a class="header-anchor" href="#_1、本地安装自己的大语言模型" aria-label="Permalink to &quot;1、本地安装自己的大语言模型&quot;">​</a></h2><blockquote><ul><li>Ollama 是一个开源的大型语言模型（LLM）服务工具，它允许用户在本地机器上运行和部署大型语言模型。</li><li>Ollama 设计为一个框架，旨在简化在 Docker 容器中部署和管理大型语言模型的过程，使得这一过程变得简单快捷。</li><li>用户可以通过简单的命令行操作，快速在本地运行如 Llama 3 这样的开源大型语言模型。</li></ul></blockquote><h3 id="官网下载-ollama-运行大语言模型的软件" tabindex="-1">官网下载 ollama 运行大语言模型的软件 <a class="header-anchor" href="#官网下载-ollama-运行大语言模型的软件" aria-label="Permalink to &quot;官网下载 ollama 运行大语言模型的软件&quot;">​</a></h3><blockquote><p>ollama 官网: <a href="https://ollama.com/" target="_blank" rel="noreferrer">前往 ollama</a></p></blockquote><h3 id="运行模型" tabindex="-1">运行模型 <a class="header-anchor" href="#运行模型" aria-label="Permalink to &quot;运行模型&quot;">​</a></h3><blockquote><p>命令执行的同时，会自动查看当前是否有模型名字为 <code>llama3</code> 的大模型，没有的话会自动去内部配置的大模型仓库下载并启动</p></blockquote><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ollama</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> llama3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		# 尝试下载 llama3(默认回答是英文的) 这个大模型来使用，当然还有很多其他的大模型，大家可以去官网去看看</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="安装千问大模型-默认支持中文回答" tabindex="-1">安装<code>千问大模型</code>(默认支持中文回答) <a class="header-anchor" href="#安装千问大模型-默认支持中文回答" aria-label="Permalink to &quot;安装`千问大模型`(默认支持中文回答)&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ollama</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qwen</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		# 安装并运行千问大模型</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2、如何构建自己的-llama3-中文模型" tabindex="-1">2、如何构建自己的 llama3 中文模型 <a class="header-anchor" href="#_2、如何构建自己的-llama3-中文模型" aria-label="Permalink to &quot;2、如何构建自己的 llama3 中文模型&quot;">​</a></h2><h3 id="下载中文-llama3-大模型文件" tabindex="-1">下载中文 llama3 大模型文件 <a class="header-anchor" href="#下载中文-llama3-大模型文件" aria-label="Permalink to &quot;下载中文 llama3 大模型文件&quot;">​</a></h3><blockquote><p>Hugging Face官网: <a href="https://huggingface.co/shenzhi-wang/Llama3-8B-Chinese-Chat-GGUF-f16/tree/main" target="_blank" rel="noreferrer">前往下载 llama3 中文大模型</a></p></blockquote><h3 id="编写模型文件-创建-modelfile-文件" tabindex="-1">编写模型文件(创建 Modelfile 文件) <a class="header-anchor" href="#编写模型文件-创建-modelfile-文件" aria-label="Permalink to &quot;编写模型文件(创建 Modelfile 文件)&quot;">​</a></h3><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># FROM 指定 GGUF 文件的路径</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FROM F:/models/Llama3-8B-Chinese-Chat-q8_0-v2_1.gguf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="创建-ollama-模型" tabindex="-1">创建 ollama 模型 <a class="header-anchor" href="#创建-ollama-模型" aria-label="Permalink to &quot;创建 ollama 模型&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ollama</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> geek-llama3-8B-Chinese</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./Modelfile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>这个命令会读取当前路径下创建的<code>Modelfile</code>文件中的配置，并创建一个名为 <code>geek-llama3-8B-Chinese</code> 的新模型。</p></blockquote><h3 id="查看-ollama-当前的模型列表" tabindex="-1">查看 ollama 当前的模型列表 <a class="header-anchor" href="#查看-ollama-当前的模型列表" aria-label="Permalink to &quot;查看 ollama 当前的模型列表&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ollama</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="运行已创建的大模型" tabindex="-1">运行已创建的大模型 <a class="header-anchor" href="#运行已创建的大模型" aria-label="Permalink to &quot;运行已创建的大模型&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ollama</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> geek-llama3-8B-Chinese:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><blockquote><p>参考：<a href="https://mp.weixin.qq.com/s?__biz=MzUyODk0Njc1NQ==&amp;mid=2247486353&amp;idx=1&amp;sn=b590181589be96cf9e016b39cc4cdbf7&amp;chksm=fb64f3917f0dfa282b943c03352c06a6adfe4a4043805be7440cc3ff45f77c16841a1cb15c11&amp;scene=27" target="_blank" rel="noreferrer">推荐阅读博客文章</a></p></blockquote>',23)]))}const b=e(t,[["render",n]]);export{k as __pageData,b as default};
