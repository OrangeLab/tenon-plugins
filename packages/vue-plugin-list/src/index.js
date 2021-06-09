import {Base, renderCustomSlot, View, createVNode} from '@hummer/tenon-vue'
const {List} = __GLOBAL__
const RenderType = {
  REFRESH: 'refresh',
  LODAMORE: 'loadmore',
  ITEM: 'item'
}
class ExList extends Base{
  constructor(){
    super()
    this.list = null
    this.render = null
    this.data = []
    this.initElement()
    this.itemRenderMap = {}
    this.defaultItemRender = null
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
      case 'register':
        // 处理 List Type 方法
        this.handleListRegister(value)
        break;
      default:
        break;
    }
  }
  renderElement(){
    Object.keys(this.render).forEach(key => {
      let render = this.render[key]
      switch(key){
        case RenderType.REFRESH:
          this.renderRefreshView();
          break;
        case RenderType.LODAMORE:
          this.renderLoadMoreView();
          break;
        case RenderType.ITEM:
          this.defaultItemRender = render
          break;
        default:
          // Type 类型渲染，进行收集
          this.itemRenderMap[key] = render
          break;
      }
    })
    this.renderListView()
  }

  handleListRegister(func){
    this.list.onRegister = func
  }

  renderListView(){
    this.list.onCreate = (type) => {
      let itemView = new View()
      let cell = itemView.element
      cell._view = itemView
      cell.type = type
      return cell
    }
    this.list.onUpdate = (position, cell) => {
      let data = this.data[position]
      let itemInstance = cell.instance
      if(itemInstance){
        itemInstance.data.data = data
        itemInstance.data.item = data
        itemInstance.data.index = position
      }else{
        let {type, _view} = cell
        let itemRender = this.getItemRender(type)
        let component = createVNode({
          data(){
            return {
              data: data,
              item: data,
              index: position
            }
          },
          render: itemRender
        })
        renderCustomSlot(component, _view)
        cell.instance = component.component
      }
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

  getItemRender(type){
    let renderKey = this.getItemRenderKey(type)
    if(this.itemRenderMap[renderKey]){
      return this.itemRenderMap[renderKey]
    }else {
      return this.defaultItemRender
    }
  }

  getItemRenderKey(type){
    return `item_${type}`
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