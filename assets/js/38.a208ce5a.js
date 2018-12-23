(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{299:function(t,e,_){"use strict";_.r(e);var a=_(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[_("p",[t._v("memcache笔记")]),t._v(" "),t._m(0),t._v(" "),_("p",[t._v("释义：就是一个数据库、但是数据存在内存中")]),t._v(" "),_("p",[t._v("作用：常用来做缓存服务器、将从数据库查询的数据缓存起来，减少数据库查询、加快查询速度。")]),t._v(" "),_("p",[t._v("​\tps.数据存储在内存中系统重启则丢失")]),t._v(" "),t._m(1),t._v(" "),_("p",[t._v("共同点：都是C/S架构（客户端client/服务器server）")]),t._v(" "),_("p",[t._v("不同点：mysql存磁盘文件、memcache内存")]),t._v(" "),_("p",[t._v("不同点：mysql存储数据得先创建数据库再创建表、memcache直接以键值对形式存储")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),_("p",[t._v("1、服务器端软件安装(win)")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),_("p",[t._v("安装步骤：")]),t._v(" "),_("p",[t._v("​\t步骤1：将memcache解压到e:\\memcache目录中（绿色版：直接解压即可）")]),t._v(" "),_("p",[t._v("​\t\t![img](file:///C:\\Users\\VULCAN\\AppData\\Local\\Temp\\ksohtml\\wps14AD.tmp.jpg)")]),t._v(" "),_("p",[t._v("​        步骤2：安装memcache服务器（命令：E:\\memcache\\memcached  -d  install）")]),t._v(" "),_("p",[t._v("​\t\t![img](file:///C:\\Users\\VULCAN\\AppData\\Local\\Temp\\ksohtml\\wpsB042.tmp.jpg)")]),t._v(" "),_("p",[t._v("​\t步骤3：启用memcached服务")]),t._v(" "),t._m(6),t._v(" "),_("p",[t._v("​\t\t复杂：memcached  -l  localhost  -p 11211  -m 64  -d  start")]),t._v(" "),t._m(7),t._v(" "),_("p",[t._v("​\t步骤4：检查是否启用成功")]),t._v(" "),_("p",[t._v("​        连接memcache数据库（通过putty第三方工具telnet协议）")]),t._v(" "),t._m(8),t._v(" "),_("p",[t._v("​\t命令手册： "),_("a",{attrs:{href:"http://www.runoob.com/memcached/memcached-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.runoob.com/memcached/memcached-tutorial.html"),_("OutboundLink")],1)]),t._v(" "),t._m(9),t._v(" "),_("p",[t._v("Ø 语法：set 键 额外信息  缓存时间  数据长度")]),t._v(" "),_("p",[t._v("n 键  \t\t - \t 名称不能超过250字符")]),t._v(" "),_("p",[t._v("n 额外信息  -  客户机使用它存储关于键值对的额外信息（注：整型参数）")]),t._v(" "),_("p",[t._v("n 缓存时间  -  0-理论永久，其他-单位秒（注：最大存储时间30天）")]),t._v(" "),_("p",[t._v("n 数据长度  -  写数字，单位字节（注：回车输入具体内容）")]),t._v(" "),_("p",[t._v("Ø 说明： 键存在-则修改，键不存在-则创建")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"_1、什么是memcache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是memcache","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、什么是Memcache")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"_2、与mysql比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、与mysql比较","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("strong",[this._v("2、与mysql比较")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[this._v("键key")]),this._v(" "),e("th",[this._v("值value")])])]),this._v(" "),e("tbody",[e("tr",[e("td",[this._v("字串(唯一)")]),this._v(" "),e("td",[this._v("字符串,整数,浮点数,布尔,数组,对象,NULL,二进制数据(图片,视频,音频)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"三、安装与配置memcached（c-s结构）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、安装与配置memcached（c-s结构）","aria-hidden":"true"}},[this._v("#")]),this._v(" 三、安装与配置Memcached（C/S结构）")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("命令")]),t._v(" "),_("th",[t._v("释义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("-l")]),t._v(" "),_("td",[t._v("localhost")]),t._v(" "),_("td",[t._v("服务器ip地址（默认本机）")])]),t._v(" "),_("tr",[_("td",[t._v("-p")]),t._v(" "),_("td",[t._v("port")]),t._v(" "),_("td",[t._v("端口（11211）")])]),t._v(" "),_("tr",[_("td",[t._v("-d")]),t._v(" "),_("td",[t._v("install/uninstall/start")]),t._v(" "),_("td",[t._v("管理memcache")])]),t._v(" "),_("tr",[_("td",[t._v("-m")]),t._v(" "),_("td",[t._v("memory")]),t._v(" "),_("td",[t._v("内存大小，默认64M")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("​\t具体安装步骤：")]),this._v(" "),e("p",[this._v("​\t\thttp://www.runoob.com/memcached/window-install-memcached.html")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("   简单：memcached  -d start\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"C:%5CUsers%5CVULCAN%5CDesktop%5Cassets/wps44B3.tmp.jpg",alt:"img"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"四、操作memcache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、操作memcache","aria-hidden":"true"}},[this._v("#")]),this._v(" 四、操作Memcache")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"增-改键（set）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增-改键（set）","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("strong",[this._v("增/改键（set）")])])}],!1,null,null,null);s.options.__file="Memcache笔记.md";e.default=s.exports}}]);