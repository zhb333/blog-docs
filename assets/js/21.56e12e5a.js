(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{508:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、nvm的安装和使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、nvm的安装和使用"}},[s._v("#")]),s._v(" 一、nvm的安装和使用")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("nvm")]),s._v("全称 "),a("strong",[s._v("Node Version Manager")]),s._v(" 是 "),a("code",[s._v("Nodejs")]),s._v(" 版本管理器，它让我们能方便的对 "),a("code",[s._v("Nodejs")]),s._v(" 的版 本进行切换。 "),a("code",[s._v("nvm")]),s._v(" 的官方版本只支持 "),a("code",[s._v("Linux")]),s._v(" 和 "),a("code",[s._v("Mac")]),s._v("。 "),a("code",[s._v("Windows")]),s._v(" 用户，可以用 "),a("code",[s._v("nvm-windows")])])]),s._v(" "),a("h3",{attrs:{id:"_1、卸载已安装到全局的-node-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、卸载已安装到全局的-node-npm"}},[s._v("#")]),s._v(" 1、卸载已安装到全局的 "),a("code",[s._v("node")]),s._v("/"),a("code",[s._v("npm")])]),s._v(" "),a("p",[s._v("如果之前是在官网下载的 "),a("code",[s._v("node")]),s._v(" 安装包，运行后会自动安装在全局目录，其中"),a("code",[s._v("node")]),s._v(" 命令"),a("code",[s._v("/usr/local/bin/node")]),s._v(" ，"),a("code",[s._v("npm")]),s._v(" 命令在全局 node_modules 目录中，具体路径为"),a("code",[s._v("/usr/local/lib/node_modules/npm")])]),s._v(" "),a("p",[a("strong",[s._v("安装 nvm 之前先删除下已安装的 "),a("code",[s._v("node")])])]),s._v(" "),a("p",[a("strong",[a("code",[s._v("windows")]),s._v(" 使用 "),a("code",[s._v("git-bash")]),s._v(" 执行以下命令")])]),s._v(" "),a("ul",[a("li",[s._v("查看已经安装在全局的模块")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -g --depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("可以使用 "),a("code",[s._v("360软件管家")]),s._v(" 进行卸载")])]),s._v(" "),a("li",[a("p",[s._v("以防卸载有残留，手动删除安装目录")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/bin/node\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/lib/node_modules/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("删除全局 node 模块注册的软链")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("  /usr/local/bin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../lib/node_modules/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$9")]),s._v("}'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2、安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装"}},[s._v("#")]),s._v(" 2、安装")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("下载 "),a("code",[s._v("nvm")]),s._v(" 包 地址："),a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("nvm-windows下载"),a("OutboundLink")],1),s._v("，我们选择第一个："),a("code",[s._v("nvm-noinstall.zip")]),s._v(" 下载完成后解压到一个地方，比如: "),a("code",[s._v("d:\\app\\nvm")]),s._v(" 里面的文件列表是这样的："),a("code",[s._v("elevate.cmd")]),s._v("、"),a("code",[s._v("elevate.vbs")]),s._v("、"),a("code",[s._v("install.cmd")]),s._v("、"),a("code",[s._v("LICENSE")]),s._v("、"),a("code",[s._v("nvm.exe")])])]),s._v(" "),a("li",[a("p",[s._v("双击 "),a("code",[s._v("install.cmd")]),s._v(" , 直接回车，成功后，会在"),a("code",[s._v("D")]),s._v("盘的根目录生成一个 "),a("code",[s._v("settings.txt")]),s._v(" 的文本文件，把这个文件剪切到 "),a("code",[s._v("d:\\app\\nvm")]),s._v(" 目录中，然后我们把它的内容修改成这样：")])])]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  root: D:\\app\\nvm\n  path: D:\\app\\nodejs \n  arch: 64 \n  proxy: none \n  node_mirror: http://npm.taobao.org/mirrors/node/ \n  npm_mirror: https://npm.taobao.org/mirrors/npm/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("配置环境变量，刚刚点击了"),a("code",[s._v("install.cmd")]),s._v("的文件，会在环境变量的系统变量中，生成两个环境变量："),a("code",[s._v("NVM_HOME")]),s._v(" 和 "),a("code",[s._v("NVM_SYMLINK")]),s._v(" 修改这两个变量名的变量值："),a("code",[s._v("NVM_HOME")]),s._v("的变量值为："),a("code",[s._v("D:\\app\\nvm")]),s._v(",  "),a("code",[s._v("NVM_SYMLINK")]),s._v("的变量值为："),a("code",[s._v("D:\\app\\nodejs")])])]),s._v(" "),a("li",[a("p",[s._v("如果在Path中有 "),a("code",[s._v("D:\\app\\nvm")]),s._v(" ; 或者是 "),a("code",[s._v("D:\\app\\nodejs")]),s._v(" ，把他们删掉。 在Path中添加： "),a("code",[s._v("%NVM_HOME%")]),s._v("、 "),a("code",[s._v("%NVM_SYMLINK%")])])]),s._v(" "),a("li",[a("p",[s._v("打开一个cmd窗口输入命令："),a("code",[s._v("nvm v")]),s._v(" ，可以看到当前"),a("code",[s._v("nvm")]),s._v("的版本信息。然后我们可以安装"),a("code",[s._v("nodejs")]),s._v("了")])]),s._v(" "),a("li",[a("p",[s._v("继续输入命令：nvm install latest 如果网络畅通，我们会看到正在下载的提示，下载完成后 会让你use那个最新的node版本。")])]),s._v(" "),a("li",[a("p",[s._v("使用 "),a("code",[s._v("nvm")]),s._v(" 下载 "),a("code",[s._v("node.js")]),s._v(", 会生成 "),a("code",[s._v("d:\\app\\nodejs")]),s._v(" 目录，以后下载的 "),a("code",[s._v("nodejs")]),s._v(" 都会在这个文件中")])]),s._v(" "),a("li",[a("p",[s._v("同样的咱们可以下载其他版本的nodejs，这样通过命令:nvm use 版本号 比如：nvm use 5.11.0就可以轻松实现版本切换了。")])])]),s._v(" "),a("p",[a("strong",[s._v("备注： 如果你的电脑系统是32 位的，那么在下载nodejs版本的时候，一定要指明 32 如： nvm install 5.11.0 32 这样在32位的电脑系统中，才可以使用，默认是64位的。")])]),s._v(" "),a("h3",{attrs:{id:"_3、nvm常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、nvm常用命令"}},[s._v("#")]),s._v(" 3、nvm常用命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 安装指定版本，可模糊安装，如：安装v6.2.0，既可nvm install v6.2.0，又可nvm install 6.2")]),s._v("\n\nnvm uninstall "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 删除已安装的指定版本，语法与install类似")]),s._v("\n\nnvm use "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 切换使用指定的版本node")]),s._v("\n\nnvm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 列出所有安装的版本")]),s._v("\n\nnvm ls-remote "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 列出所以远程服务器的版本（官方node version list）")]),s._v("\n\nnvm current "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 显示当前的版本")]),s._v("\n\nnvm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 给不同的版本号添加别名")]),s._v("\n\nnvm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unalias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 删除已定义的别名")]),s._v("\n\nnvm reinstall-packages "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 在当前版本node环境下，重新全局安装指定版本号的npm包")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"二、npm的安装和使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、npm的安装和使用"}},[s._v("#")]),s._v(" 二、npm的安装和使用")]),s._v(" "),a("ul",[a("li",[s._v("配置npm的全局安装路径")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" prefix "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d:'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\a"}},[s._v("\\a")]),s._v("pp"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("vm"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('pm"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在用户文件夹下会生成一个"),a("code",[s._v(".npmrc")]),s._v("的文件")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("prefix=D:\\app\\nvm\\npm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("安装 "),a("code",[s._v("npm")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("配置 "),a("code",[s._v("npm")]),s._v(" 环境变量")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("NPM_HOME")]),s._v(", 变量值为 ："),a("code",[s._v("d:\\app\\nvm\\npm")])]),a("br"),s._v("\n以后安装的全局 "),a("code",[s._v("npm")]),s._v(" 包，都会在这个文件夹中")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("%NPM_HOME%")]),s._v(" 一定要添加在 "),a("code",[s._v("%NVM_SYMLINK%")]),s._v(" 之前")])])]),s._v(" "),a("li",[a("p",[s._v("此时我们使用的就是我们统一下载的npm包了")])])]),s._v(" "),a("h2",{attrs:{id:"三、nrm-的安装和使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、nrm-的安装和使用"}},[s._v("#")]),s._v(" 三、nrm 的安装和使用")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("nrm")]),s._v("(npm registry manager) 是 "),a("code",[s._v("npm")]),s._v(" 的镜像源管理工具，有时候国外资源太慢，那么我们可以用这个来切换镜像源。")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("首先全局安装 nrm：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g nrm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("查看可以使用的镜像源")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nrm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("会发现列出了下面几个源：")]),s._v(" "),a("p",[a("code",[s._v("npm ---- https://registry.npmjs.org/")]),a("br"),s._v(" "),a("code",[s._v("cnpm --- http://r.cnpmjs.org/")]),s._v(" "),a("code",[s._v("taobao - https://registry.npm.taobao.org/")]),a("br"),s._v(" "),a("code",[s._v("nj ----- https://registry.nodejitsu.com/")]),a("br"),s._v(" "),a("code",[s._v("rednpm - http://registry.mirror.cqupt.edu.cn/")]),a("br"),s._v(" "),a("code",[s._v("npmMirror https://skimdb.npmjs.com/registry/")]),a("br"),s._v(" "),a("code",[s._v("edunpm - http://registry.enpmjs.org/")])])]),s._v(" "),a("li",[a("p",[s._v("个人经验，"),a("code",[s._v("cnpm")]),s._v(" 的镜像源最快")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nrm use cnpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);