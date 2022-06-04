
由于项目中有时候要用到动效 Tabbar，原生的 Tabbar 可自定义性有局限性，稍微整理了一下，弄出一个组件。

H5 Demo：[点击预览](https://static-528a6e8c-512f-4be5-8bab-bd1e5ac2197c.bspapp.com/#/)

> 提供了相关示例 Demo，可以自己在插件市场]导入示例项目  
> 大家可以多多反馈，主要是实现动效所以Tabbar的其他功能并没有付出太多精力大家可以自行补全其他Tabbar功能  
> 最好提供一下使用的什么端，数据结构及大概的代码，我好复现找问题，不要直接提`怎么xxx报错了`等没意义的问题，神仙也不知道你为啥报错了。
> 关于图标更换大家可以用figma绘制出图标后导出为svg文件，参考svg文档去使用 
## 兼容性

 nvue  + 各平台小程序暂不支持

## 引入插件

推荐使用 easycom 引入

导入插件后再`pages.json`加上如下配置：

```json
"easycom": {
	  "autoscan": true,
	  "custom": {
	    "foo-bar": "@/components/fooBar/fooBar.vue",
		"home": "@/components/fooBar/home.vue",
		"cate": "@/components/fooBar/cate.vue",
		"shop": "@/components/fooBar/shop.vue",
		"user": "@/components/fooBar/user.vue"
	  }
}
```

`App.vue`引入基础样式(注意style标签需声明scss属性支持)

```shell
/* App.vue */
<style lang="scss">
	@import "components/fooBar/fooBar.scss";
</style>
```

`svg.js`文件放入static

svg.js：[点击预览](https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@3.0/dist/svg.min.js)
svg.js文档：[点击预览](https://svgjs.dev/docs/3.0/getting-started/)

## 图片演示

![图片演示](https://static-528a6e8c-512f-4be5-8bab-bd1e5ac2197c.bspapp.com/static/2021_11_24_12_47_05.gif)

## 交流群

![697867234](https://static-528a6e8c-512f-4be5-8bab-bd1e5ac2197c.bspapp.com/static/qrcode_1637737177930.jpg)