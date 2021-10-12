import { View as View$1, renderCustomSlot, Base } from '@hummer/tenon-vue';

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
    Dialog = _GLOBAL__.Dialog,
    View = _GLOBAL__.View;

var ExPopup = /*#__PURE__*/function (_Base) {
  _inherits(ExPopup, _Base);

  var _super = _createSuper(ExPopup);

  function ExPopup() {
    var _this;

    _classCallCheck(this, ExPopup);

    _this = _super.call(this);
    _this.render = null;
    _this.show = false;
    _this.innerView = null;
    _this.id = 0;
    _this.insertTimer = null;
    _this.dialogReady = false;
    _this.todoList = [];

    _this.initElement();

    return _this;
  }

  _createClass(ExPopup, [{
    key: "initElement",
    value: function initElement() {
      // 占位用
      this.element = new View();
      this.dialog = new Dialog();
      this.dialog.cancelable = false;
      this.dialog.lowLayer = true;
      this.innerView = new View$1();
      this.innerView.element.style = {
        height: '100%',
        width: '100%',
        backgroundColor: '#ffffff00'
      };
    } // 页面布局的变化，会导致重新绘制，重新设定属性

  }, {
    key: "_setAttribute",
    value: function _setAttribute(key, value) {
      var _this2 = this;

      switch (key) {
        case 'render':
          if (!this.render) {
            this.render = value;
            this.renderElement();
          }

          break;

        case 'show':
          this.show = value;
          this.dialogReady ? this.show ? this.dialog.custom(this.innerView.element) : this.dialog.dismiss() : this.todoList.push(function () {
            _this2.show ? _this2.dialog.custom(_this2.innerView.element) : _this2.dialog.dismiss();
          });
          break;
      }
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var defaultRender = this.render["default"];
      defaultRender && this.renderDefaultElement(defaultRender);
      this.allChildInsert();
    }
  }, {
    key: "renderDefaultElement",
    value: function renderDefaultElement(render) {
      renderCustomSlot({
        render: render
      }, this.innerView);
    }
  }, {
    key: "allChildInsert",
    value: function allChildInsert() {
      var _this3 = this;

      this.dialogReady = true;
      this.todoList.forEach(function (element) {
        element.call(_this3);
      });
      this.todoList = [];
    }
  }]);

  return ExPopup;
}(Base);

var index = {
  name: 'popup',
  factory: function factory() {
    var component = new ExPopup();
    return component;
  }
};

export default index;
