# Tenon Vue Plugin Viewpaer
## &lt;ex-viewpager&gt;

### 简介
&lt;ex-viewpager&gt;是 Tenon 中视图轮播组件

### 属性

| 属性名     |     类型 |   默认值   | 说明 |
| :-------- | :--------:| :------: | :-------:|
| data | Array | [] | 绑定的数据结构|
| itemSpacing  |   Number|String |  0  | 两个page之间的距离 | 
| edgeSpacing  |   Number|String |  0  | 正中间的page离手机边缘的距离（item宽度 = ViewPager.width - edgeSpacing * 2）| 
| scaleFactor  |   Number |  1  | 前后Item放缩的比例 | 
| alphaFactor  |   Number |  1  | 前后Item透明度的比例 | 
| canLoop  |   Boolean |  false  | 是否可以无限循环 | 
| autoPlay  |   Boolean |  false  | 是否自动播放 | 
| loopInterval  |   Number |  0  | 自动轮播的时间间隔，单位ms（0时autoPlay失效） | 

### 样式

- 通用样式，可参考[样式介绍](https://hummer.didi.cn/doc-tenon#/zh-CN/basic_style)

### 事件
#### itemClick 
备注：View Item点击事件

参数：**@param(position)**
| 属性名 | 类型 | 说明 | 示例 |
| ---- | ---- | ---- | ---- |
| position | Number | 当前索引 | `position:0`| 

#### pageChange 
备注：页面改动事件

参数：**@param(current,total)**
| 属性名 | 类型 | 说明 | 示例 |
| ---- | ---- | ---- | ---- |
| current | Number | 当前索引 | `current:0`| 
| total | Number | 总页数 | `total:0`| 

#### pageScroll 
备注：页面改动事件

参数：**@param(position,percent)**
| 属性名 | 类型 | 说明 | 示例 |
| ---- | ---- | ---- | ---- |
| position | Number | 当前索引 | `position:0`| 
| percent | Number | 当前滚动的百分比（0~1） | `percent:0`| 

### Vue示例
```
  <ex-viewpager
    class="banner"
    :list="list"
    :itemSpacing="10"
    :edgeSpacing="50"
    :scaleFactor="0.99"
    :alphaFactor="1"
    :canLoop="true"
    :autoPlay="true"
    :loopInterval="2000"
    @itemClick="handleItemClick"
    @pageChange="handlePageChange"
    @pageScroll="handlePageScroll"
  >
    <template v-slot:item="item">
      <view class="banner-item"  @tap="handleClickTap(item)">
        <image class="banner-image" :src="item.data.url"></image>
      </view>
    </template>
  </ex-viewpager>
```
