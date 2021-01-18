import {Base, renderCustomSlot, View as TenonView} from '@hummer/tenon-vue'
const {Dialog, View} = __GLOBAL__
class ExPopup extends Base{
  constructor(){
    super()
    this.render = null
    this.show = false
    this.innerView = null
    this.id = 0
    this.insertTimer = null
    this.dialogReady = false
    this.todoList = []

    this.initElement()

  }
  
  initElement(){
    // 占位用
    this.element = new View()

    this.dialog = new Dialog()
    this.dialog.cancelable = false
    this.innerView = new TenonView()
    this.innerView.element.style = {
      height: '100%',
      width: '100%',
      backgroundColor: '#ffffff00'
    }
  }
  // 页面布局的变化，会导致重新绘制，重新设定属性
  _setAttribute(key, value){
    switch(key){
      case 'render':
        if(!this.render){
          this.render = value
          this.renderElement()
        }
        break;
      case 'show':
        this.show = value
        this.dialogReady
          ? (this.show
            ? this.dialog.custom(this.innerView.element)
            : this.dialog.dismiss())
          : this.todoList.push(() => {
            this.show
              ? this.dialog.custom(this.innerView.element)
              : this.dialog.dismiss()
          })
        
        break;
      default:
        break;
    }
  }

  renderElement(){
    let {default: defaultRender} =this.render
    defaultRender && this.renderDefaultElement(defaultRender)
    this.allChildInsert()
  }

  renderDefaultElement(render){
    renderCustomSlot({
      render: render
    }, this.innerView)
  }

  allChildInsert() {
    this.dialogReady = true
    this.todoList.forEach(element => {
      element.call(this)
    });
    this.todoList = []
  }
}

export default {
  name: 'popup',
  factory(){
    let component = new ExPopup()
    return component
  }
}