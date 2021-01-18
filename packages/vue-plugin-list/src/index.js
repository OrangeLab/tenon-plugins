import {Base, renderCustomSlot, View, createVNode} from '@hummer/tenon-vue'
const {List} = __GLOBAL__
class ExList extends Base{
  constructor(){
    super()
    this.list = null
    this.render = null
    this.data = []
    this.initElement()
    this._cacheView = []
    this.id = 0
  }
  initElement(){
    this.list = this.element = new List()
    // HACK: 设定样式时，才会真实创建List
    this.list.style = {
      width: "1px"
    }
  }
  /**
   * 结束下拉刷新
   */
  stopPullRefresh() {
    this.element.stopPullRefresh()
  }

  /**
   * 滚动到指定位置
   * @param {*} position 
   */
  scrollToPosition(position){
    this.element.scrollToPosition(position)
  }

  /**
   * 结束加载更多
   */
  stopLoadMore(enable) {
    this.element.stopLoadMore(enable)
  }

  /**
   * 触发列表的刷新
   */
  refresh(){
    this.list.refresh(this.data.length)
  }

  // 页面布局的变化，会导致重新绘制，重新设定属性
  _setAttribute(key, value){
    switch(key){
      case 'render':
        if(!this.render){
          this.render = value
          this.renderElement()
          this.data && this.refresh()
        }
        break;
      case 'data':
        this.data = value
        this.render && this.refresh()
        break;
      default:
        break;
    }
  }
  renderElement(){
    let {refresh, loadmore, item} = this.render
    refresh && this.renderRefreshView()
    loadmore && this.renderLoadMoreView()
    item && this.renderListView(item)
  }

  renderListView(render){
    this.list.onCreate = (type) => {
      let itemView = new View()
      let component = createVNode({
        data(){
          return {
            data: {},
            item: {},
            index: null
          }
        },
        render: render
      })
      renderCustomSlot(component, itemView)
      let cell = itemView.element
      cell._id = this.id++
      this._cacheView.push(component.component)
      return cell
    }
    this.list.onUpdate = (position, cell) => {
      let data = this.data[position]
      let id = cell._id
      let itemInstance = this._cacheView[id]
      itemInstance.data.data = data
      itemInstance.data.item = data
      itemInstance.data.index = position
    }
  }
  renderRefreshView(){
    let {refresh} = this.render
    let refreshView = new View()
    renderCustomSlot({
      render: refresh
    }, refreshView)
    this.list.refreshView = refreshView.element
  }

  renderLoadMoreView(){
    let {loadmore} = this.render
    let loadMoreView = new View()
    renderCustomSlot({
      render: loadmore
    }, loadMoreView)
    this.list.loadMoreView = loadMoreView.element
  }


  addEventListener(event, func){
    switch(event){
      case 'refresh':
        this.element.onRefresh = (state) => {
          func.call(this, state, this)
        }
        break;
      case 'loadmore':
        this.element.onLoadMore = (state) => {
          func.call(this, state, this)
        }
        break;
      default:
        break;
    }
  }
}

export default {
  name: 'list',
  factory(){
    let component = new ExList()
    return component
  }
}