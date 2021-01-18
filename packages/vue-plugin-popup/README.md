# Tenon Vue Plugin Popup
## &lt;ex-popup&gt;

### 简介
&lt;ex-popup&gt;是 Tenon 中自定义弹窗组件

### 属性

| 属性名     |     类型 |   默认值   | 说明 |
| :-------- | :--------:| :------: | :-------:|
| show | Boolean | false | 是否展示弹窗|

### 样式

- 支持通用样式，可参考[样式介绍](https://hummer.didi.cn/doc-tenon#/zh-CN/basic_style)
- 
### Vue 示例
```
  <ex-popup
    :show="showDialog"
  >
    <view>
      <text>我是一个全屏的弹窗</text>
    </view>
  </ex-popup>
```

