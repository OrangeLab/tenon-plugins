import { View, createVNode, renderCustomSlot, Base } from '@hummer/tenon-vue';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var _GLOBAL__ = __GLOBAL__,
    ViewPagerComponent = _GLOBAL__.ViewPager;

var ViewPager = /*#__PURE__*/function (_Base) {
  _inherits(ViewPager, _Base);

  var _super = _createSuper(ViewPager);

  function ViewPager() {
    var _this;

    _classCallCheck(this, ViewPager);

    _this = _super.call(this);
    _this.render = null;
    _this.data = [];

    _this.initElement();

    _this._cacheView = [];
    _this.id = 0;
    return _this;
  }

  _createClass(ViewPager, [{
    key: "initElement",
    value: function initElement() {
      this.element = new ViewPagerComponent();
    }
  }, {
    key: "_setAttribute",
    value: function _setAttribute(key, value) {
      switch (key) {
        case 'render':
          if (!this.render) {
            this.render = value;
            this.renderElement();
            this.element.data = new Array(this.data.length);
          }

          break;

        case 'data':
          this.data = value;

          if (this.render) {
            this.element.data = new Array(this.data.length);
          }

          break;

        default:
          this.element.style = _defineProperty({}, key, value);
          break;
      }
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var item = this.render.item;
      item && this.renderBannerView(item);
    }
  }, {
    key: "renderBannerView",
    value: function renderBannerView(render) {
      var _this2 = this;

      this.element.onItemView(function (position, view) {
        if (view) {
          var data = _this2.data[position];
          var id = view._id;
          var itemInstance = _this2._cacheView[id];
          itemInstance.data.data = data;
          itemInstance.data.item = data;
          itemInstance.data.index = position;
        } else {
          var itemView = new View();
          var _data = _this2.data[position];
          var component = createVNode({
            data: function data() {
              return {
                data: _data,
                item: _data,
                index: position
              };
            },
            render: render
          });
          renderCustomSlot(component, itemView);
          var cell = itemView.element;
          cell._id = _this2.id++;

          _this2._cacheView.push(component.component);

          return cell;
        }
      });
    }
    /**
     * 处理事件的传递，方法的传递
     * @param {*} event 绑定方法
     * @param {*} func 函数
     */

  }, {
    key: "addEventListener",
    value: function addEventListener(event, func) {
      var _this3 = this;

      switch (event) {
        case 'pagechange':
          this.element.onPageChange(function (current, total) {
            func.call(_this3, current, total);
          });
          break;

        case 'pagescroll':
          this.element.onPageScroll(function (position, percent) {
            func.call(_this3, position, percent);
          });
          break;

        case 'pagescrollstatechange':
          this.element.onPageScrollStateChange(function (state) {
            func.call(_this3, state);
          });
          break;

        case 'itemclick':
          this.element.onItemClick(function (position) {
            func.call(_this3, position);
          });
          break;
      }
    }
    /**
     * 设定当前显示的页面
     * @param {*} position 位置
     */

  }, {
    key: "setCurrentItem",
    value: function setCurrentItem(position) {
      this.element.setCurrentItem(position);
    }
  }]);

  return ViewPager;
}(Base);

var index = {
  name: 'viewpager',
  factory: function factory() {
    var component = new ViewPager();
    return component;
  }
};

export default index;
