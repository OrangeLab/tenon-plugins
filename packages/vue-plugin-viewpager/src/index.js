import {Base, renderCustomSlot, View, createVNode} from '@hummer/tenon-vue'
const {ViewPager:ViewPagerComponent} = __GLOBAL__

class ViewPager extends Base{
  constructor(){
    super()
    this.render = null
    this.data = []
    this.initElement()
    this._cacheView = []
    this.id = 0
  }
  initElement(){
    this.element = new ViewPagerComponent()
  }

  _setAttribute(key, value){
    switch(key){
      case 'render':
        if(!this.render){
          this.render = value
          this.renderElement()
          this.element.data = new Array(this.data.length)
        }
        break;
      case 'data':
        this.data = value
        if(this.render){
          this.element.data = new Array(this.data.length)
        }
        break;
      default:
        this.element.style = {
          [key]:value
        }
        break;
    }
  }

  renderElement(){
    let {item} = this.render
    item && this.renderBannerView(item)
  }

  renderBannerView(render){
    this.element.onItemView((position, view) => {
      if(view){
        let data = this.data[position]
        let id = view._id
        let itemInstance = this._cacheView[id]
        itemInstance.data.data = data
        itemInstance.data.item = data
        itemInstance.data.index = position
      }else {
        let itemView = new View()
        let data = this.data[position]
        let component = createVNode({
          data(){
            return {
              data: data,
              item: data,
              index: position
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
    })
  }

  /**
   * 处理事件的传递，方法的传递
   * @param {*} event 绑定方法
   * @param {*} func 函数
   */
  addEventListener(event, func){
    switch(event){
      case 'pagechange':
      case 'pageChange':
        this.element.onPageChange((current,total) => {
          func.call(this, current, total)
        })
        break;
      case 'pagescroll':
      case 'pageScroll':
        this.element.onPageScroll((position,percent) => {
          func.call(this, position, percent)
        })
        break;
      case 'pagescrollstatechange':
      case 'pageScrollStateChange':
        this.element.onPageScrollStateChange((state) => {
          func.call(this, state)
        })
        break;
      case 'itemclick':
      case 'itemClick':
        this.element.onItemClick((position) => {
          func.call(this, position)
        })
        break;
      default:
        break;
    }
  }

  /**
   * 设定当前显示的页面
   * @param {*} position 位置
   */
  setCurrentItem(position){
    this.element.setCurrentItem(position)
  }

}

export default {
  name: 'viewpager',
  factory(){
    let component = new ViewPager()
    return component
  }
}