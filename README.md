# Tenon Plugins
主要是面向 Tenon 侧的插件库，其包含插件集，可以直接使用。


### 已支持的插件
#### vue-plugin-list
> 长列表组件（Tenon Vue Plugin For List）


原生 ListView 组件的拓展
#### vue-plugin-popup
> 弹窗组件（Tenon Vue Plugin For Dialog）


原生 Dialog 组件的拓展

#### vue-plugin-viewpager
> 轮播组件（Tenon Vue Plugin For Viewpager）

原生 Viewpager 组件的拓展

### 已支持的插件集
#### vue-preset-base
> Tenon Vue 基础插件集

### 插件使用
#### 单页面中引入 Vue Plugin
页面引入插件
```javascript
import * as Tenon from '@hummer/tenon-vue';
import app from './app.vue';
import List from '@hummer/vue-plugin-list';
Tenon.register(List); // 注册插件
Tenon.render(app);
```
使用插件
```html
<template>
  <view class="page" style="width:100%">
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
          <text>item: {{item.data.name}}</text>
        </view>
      </template>
    </ex-list>
  </view>
</template>
```
### 插件集引入
主入口注册
```javascript
import * as Tenon from '@hummer/tenon-vue';
import app from './app.vue';
import {install as installBase} from '@hummer/vue-preset-base';
installBase(Tenon); // 进行插件集的安装

Tenon.render(app);
```
