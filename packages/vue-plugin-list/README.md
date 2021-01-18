# Tenon Vue Plugin List
## &lt;ex-list&gt;

### 简介
&lt;ex-list&gt;是 Tenon 中高性能的长列表组件

### 属性

| 属性名     |     类型 |   默认值   | 说明 |
| :-------- | :--------:| :------: | :-------:|
| data | Array | [] | 绑定的数据结构|

### 样式

- 支持通用样式，可参考[样式介绍](https://hummer.didi.cn/doc-tenon#/zh-CN/basic_style)

### 方法
| 方法名     |   参数  |   返回值   | 说明 |
| :-------- | :--------:| :------: | :-------:|
|scrollToPosition| (position:number) | void | 滚动到指位置（position是索引）|
|stopPullRefresh| () | void | 结束下拉刷新 |
|stopLoadMore| (enabled: boolean) | void | 结束加载更多(enabled: 下次能否继续触发加载更多) |
|refresh| () | void | 手动触发拉新 |


### 事件
#### refresh 
下拉刷新事件

**@param(state)**
| 属性名 | 类型 | 说明 | 示例 |
| ---- | ---- | ---- | ---- |
| state | String | 刷新状态<br>状态说明:<br>0:初始状态/结束刷新<br/>1:开始下拉<br/>2:正在刷新 | `state: 1`| 

#### loadMore 
加载更多事件

**@param(state)**
| 属性名 | 类型 | 说明 | 示例 |
| ---- | ---- | ---- | ---- |
| state | String | 加载状态<br>状态说明:<br>0:初始状态/结束加载<br/>1:正在加载<br/>2:无更多数据 | `state: 1`| 

### Vue示例
```
  <ex-list
    class="list"
    :data="list"
    @refresh="handleRefresh"
    @loadMore="handleLoadMore"
  >
    <template v-slot:refresh>
      <view>
        <text>Refresh View</text>
      </view>
    </template>
    <template v-slot:loadmore>
      <view>
        <text>Load More View</text>
      </view>
    </template>
    <template v-slot:item="item">
      <view class="list-item" @tap="handleItemTap(item)">
        <text class="default-text">I Am Default View!</text>
      </view>
    </template>
  </ex-list>
```

