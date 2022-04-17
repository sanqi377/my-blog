(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{510:function(s,a,e){"use strict";e.r(a);var t=e(8),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"安装-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[s._v("#")]),s._v(" 安装 Docker")]),s._v(" "),e("h3",{attrs:{id:"使用-root-账户登录-centos-确保-yum-包更新到最新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-root-账户登录-centos-确保-yum-包更新到最新"}},[s._v("#")]),s._v(" 使用 "),e("code",[s._v("root")]),s._v(" 账户登录 "),e("code",[s._v("centos")]),s._v(" 确保 "),e("code",[s._v("yum")]),s._v(" 包更新到最新")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum update\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"安装需要的软件包-yum-util-提供-yum-config-manager-功能-另外两个是-devicemapper-驱动依赖的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装需要的软件包-yum-util-提供-yum-config-manager-功能-另外两个是-devicemapper-驱动依赖的"}},[s._v("#")]),s._v(" 安装需要的软件包 "),e("code",[s._v("yum-util")]),s._v(" 提供 "),e("code",[s._v("yum-config-manager")]),s._v(" 功能，另外两个是 "),e("code",[s._v("devicemapper")]),s._v(" 驱动依赖的")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils device-mapper-persistent-data lvm2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"设置-yum-源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置-yum-源"}},[s._v("#")]),s._v(" 设置 "),e("code",[s._v("yum")]),s._v(" 源")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"安装-docker-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-2"}},[s._v("#")]),s._v(" 安装 "),e("code",[s._v("Docker")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"启动并加入开机启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动并加入开机启动"}},[s._v("#")]),s._v(" 启动并加入开机启动")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"安装-docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-compose"}},[s._v("#")]),s._v(" 安装 docker-compose")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python-pip "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip3 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --upgrade pip "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip3 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);