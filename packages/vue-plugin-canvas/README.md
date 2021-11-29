# Tenon Vue Plugin Canvas
## &lt;ex-canvas&gt;

### 简介
&lt;ex-canvast&gt;是 Tenon 中画布组件，可用于绘制一些自定义图形，如：线段、矩形、圆形、椭圆、图片、文本等，从而实现复杂图形的展示。

### 属性

- 支持 [通用视图属性](https://hummer.didi.cn/doc#/zh-CN/normal_view_prop)。Canvas 组件自身相关的属性均是以方法调用的形式来进行设置的

### 样式

- 支持通用样式，可参考[样式介绍](https://hummer.didi.cn/doc-tenon#/zh-CN/basic_style)

### 方法
| 方法名     |   参数  |   返回值   | 说明 |
| :-------- | :--------:| :------: | :-------:|
|lineWidth| (widthValue: number) | void | 设置stroke的线粗细 |
|lineColor| (colorHex: number) | void | 设置stroke的线粗细 |
|lineCap| (value: number) | void | 设置线头样式 |
|lineJoin| (value: number) | void | 设置折线折点样式 |
|drawLine| (fraomX : number , fromY : number , toX : number , toY : number) | void | 根据入参，在起始点与终点之间画一条线段 |
|strokeRect| (x: number , y: number , w: number , h: number) | void | 画矩形 |
|strokeEllipse| (x: number , y: number , trailX: number , trailY: number) | void | 画椭圆 |
|strokeCircle| (x: number , y : number , radius: number) | void | 画圆形 |
|arc| (x: number , y: number , radius: number , startAngle: number , endAngle:number ,clockwise: boolean) | void | 画弧形 |
|fillColor| (colorHex: string) | void | 设置填充颜色 |
|fillRect| (x: number, y: number, w: number, h: number) | void | 填充矩形 |
|fillEllipse| (x: number, y: number, trailX: number, trailY: number) | void | 填充椭圆 |
|fillCircle| (x: number, y: number, radius: number) | void | 填充圆形 |
|fontSize| (size: number) | void | 设置绘制文本字号 |
|textColor| (colorHex: string) | void | 设置绘制文本字色 |
|fillText| (x: number, y: number, maxWidth: number) | void | 绘制文本 |
|drawImage| (src: string, x: number, y: number, width: number, height: number) | void | 绘制图片 |

### Vue示例
```
  <ex-canvas ref="canvas"></ex-canvas>
```

