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
    List = _GLOBAL__.List;
var RenderType = {
  REFRESH: 'refresh',
  LODAMORE: 'loadmore',
  ITEM: 'item'
};

var ExList = /*#__PURE__*/function (_Base) {
  _inherits(ExList, _Base);

  var _super = _createSuper(ExList);

  function ExList() {
    var _this;

    _classCallCheck(this, ExList);

    _this = _super.call(this);
    _this.list = null;
    _this.render = null;
    _this.data = [];

    _this.initElement();

    _this.itemRenderMap = {};
    _this.defaultItemRender = null;
    return _this;
  }

  _createClass(ExList, [{
    key: "initElement",
    value: function initElement() {
      this.list = this.element = new List(); // HACK: 设定样式时，才会真实创建List

      this.list.style = {
        width: "1px"
      };
    }
    /**
     * 结束下拉刷新
     */

  }, {
    key: "stopPullRefresh",
    value: function stopPullRefresh() {
      this.element.stopPullRefresh();
    }
    /**
     * 滚动到指定位置
     * @param {*} position 
     */

  }, {
    key: "scrollToPosition",
    value: function scrollToPosition(position) {
      this.element.scrollToPosition(position);
    }
    /**
     * 结束加载更多
     */

  }, {
    key: "stopLoadMore",
    value: function stopLoadMore(enable) {
      this.element.stopLoadMore(enable);
    }
    /**
     * 触发列表的刷新
     */

  }, {
    key: "refresh",
    value: function refresh() {
      this.list.refresh(this.data.length);
    } // 页面布局的变化，会导致重新绘制，重新设定属性

  }, {
    key: "_setAttribute",
    value: function _setAttribute(key, value) {
      switch (key) {
        case 'render':
          if (!this.render) {
            this.render = value;
            this.renderElement();
            this.data && this.refresh();
          }

          break;

        case 'data':
          this.data = value;
          this.render && this.refresh();
          break;

        case 'register':
          // 处理 List Type 方法
          this.handleListRegister(value);
          break;
      }
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this2 = this;

      Object.keys(this.render).forEach(function (key) {
        var render = _this2.render[key];

        switch (key) {
          case RenderType.REFRESH:
            _this2.renderRefreshView();

            break;

          case RenderType.LODAMORE:
            _this2.renderLoadMoreView();

            break;

          case RenderType.ITEM:
            _this2.defaultItemRender = render;
            break;

          default:
            // Type 类型渲染，进行收集
            _this2.itemRenderMap[key] = render;
            break;
        }
      });
      this.renderListView();
    }
  }, {
    key: "handleListRegister",
    value: function handleListRegister(func) {
      this.list.onRegister = func;
    }
  }, {
    key: "renderListView",
    value: function renderListView() {
      var _this3 = this;

      this.list.onCreate = function (type) {
        var itemView = new View();
        var cell = itemView.element;
        cell._view = itemView;
        cell.type = type;
        return cell;
      };

      this.list.onUpdate = function (position, cell) {
        var _data = _this3.data[position];
        var itemInstance = cell.instance;

        if (itemInstance) {
          itemInstance.data.data = _data;
          itemInstance.data.item = _data;
          itemInstance.data.index = position;
        } else {
          var type = cell.type,
              _view = cell._view;

          var itemRender = _this3.getItemRender(type);

          var component = createVNode({
            data: function data() {
              return {
                data: _data,
                item: _data,
                index: position
              };
            },
            render: itemRender
          });
          renderCustomSlot(component, _view);
          cell.instance = component.component;
        }
      };
    }
  }, {
    key: "renderRefreshView",
    value: function renderRefreshView() {
      var refresh = this.render.refresh;
      var refreshView = new View();
      renderCustomSlot({
        render: refresh
      }, refreshView);
      this.list.refreshView = refreshView.element;
    }
  }, {
    key: "renderLoadMoreView",
    value: function renderLoadMoreView() {
      var loadmore = this.render.loadmore;
      var loadMoreView = new View();
      renderCustomSlot({
        render: loadmore
      }, loadMoreView);
      this.list.loadMoreView = loadMoreView.element;
    }
  }, {
    key: "getItemRender",
    value: function getItemRender(type) {
      var renderKey = this.getItemRenderKey(type);

      if (this.itemRenderMap[renderKey]) {
        return this.itemRenderMap[renderKey];
      } else {
        return this.defaultItemRender;
      }
    }
  }, {
    key: "getItemRenderKey",
    value: function getItemRenderKey(type) {
      return "item_".concat(type);
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(event, func) {
      var _this4 = this;

      switch (event) {
        case 'refresh':
          this.element.onRefresh = function (state) {
            func.call(_this4, state, _this4);
          };

          break;

        case 'loadMore':
        case 'loadmore':
          this.element.onLoadMore = function (state) {
            func.call(_this4, state, _this4);
          };

          break;
      }
    }
  }]);

  return ExList;
}(Base);

var index = {
  name: 'list',
  factory: function factory() {
    var component = new ExList();
    return component;
  }
};

export default index;
