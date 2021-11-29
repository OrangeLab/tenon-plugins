import { Base } from '@hummer/tenon-vue';

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
    CanvasView = _GLOBAL__.CanvasView;

var ExCanvas = /*#__PURE__*/function (_Base) {
  _inherits(ExCanvas, _Base);

  var _super = _createSuper(ExCanvas);

  function ExCanvas() {
    var _this;

    _classCallCheck(this, ExCanvas);

    _this = _super.call(this);

    _this.initElement();

    return _this;
  }

  _createClass(ExCanvas, [{
    key: "initElement",
    value: function initElement() {
      this.element = new CanvasView();
    }
    /**
     * 设置stroke的线粗细
     * @param widthValue 粗细值，支持px，hm 单位， 如果不写单位就是dp
     */

  }, {
    key: "lineWidth",
    value: function lineWidth(widthValue) {
      this.element.lineWidth(widthValue);
    }
    /**
     * 设置stroke的线颜色
     * @param colorHex 色值
     */

  }, {
    key: "lineColor",
    value: function lineColor(colorHex) {
      this.element.lineColor(colorHex);
    }
    /**
     * 设置线头样式
     * @param value 0 : LineCapButt, ， 1:LineCapRound   2:LineCapSquare
     */

  }, {
    key: "lineCap",
    value: function lineCap(value) {
      this.element.lineCap(value);
    }
    /**
     * 设置折线折点样式
     * @param value 0 : LineJoinMiter, ， 1: LineJoinRound  2:LineJoinBevel
     */

  }, {
    key: "lineJoin",
    value: function lineJoin(value) {
      this.element.lineJoin(value);
    }
    /**
     * 根据入参，在起始点与终点之间画一条线段
     * @param fromX 起点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param fromY 起点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param toX 终点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param toY 终点的y值，支持px，hm 单位， 如果不写单位就是dp
     */

  }, {
    key: "drawLine",
    value: function drawLine(fromX, fromY, toX, toY) {
      this.element.drawLine(fromX, fromY, toX, toY);
    }
    /**
     * 画矩形
     * @param x 矩形左上角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 矩形左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param w 矩形宽，支持px，hm 单位， 如果不写单位就是dp
     * @param h 矩形高，支持px，hm 单位， 如果不写单位就是dp
     */

  }, {
    key: "strokeRect",
    value: function strokeRect(x, y, w, h) {
      this.element.strokeRect(x, y, w, h);
    }
    /**
     * 画椭圆
     * @param x 椭圆所在矩形左上角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 椭圆所在矩形左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param trailX 椭圆所在矩形右下角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param trailY 椭圆所在矩形右下角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     */

  }, {
    key: "strokeEllipse",
    value: function strokeEllipse(x, y, trailX, trailY) {
      this.element.strokeEllipse(x, y, trailX, trailY);
    }
    /**
     * 画圆形
     * @param x 圆心坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 圆心坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param raduis 半径 ， 支持px，hm 单位， 如果不写单位就是dp
     */

  }, {
    key: "strokeCircle",
    value: function strokeCircle(x, y, radius) {
      this.element.strokeCircle(x, y, radius);
    }
    /**
     * 画弧形
     * @param x 圆心坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 圆心坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param raduis 半径 ， 支持px，hm 单位， 如果不写单位就是dp
     * @param startAngle 起始弧度 ， 
     * @param endAngle 结束弧度 ，
     * @param clockwise ture 顺时针 ， false 逆时针
     */

  }, {
    key: "arc",
    value: function arc(x, y, radius, startAngle, endAngle, clockwise) {
      this.element.arc(x, y, radius, startAngle, endAngle, clockwise);
    }
    /**
     * 设置填充颜色
     * @param colorHex 颜色16进制
     */

  }, {
    key: "fillColor",
    value: function fillColor(colorHex) {
      this.element.fillColor(colorHex);
    }
    /**
     * 填充矩形
     * @param x 矩形左上角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 矩形左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param w 矩形宽，支持px，hm 单位， 如果不写单位就是dp
     * @param h 矩形高，支持px，hm 单位， 如果不写单位就是dp
     */

  }, {
    key: "fillRect",
    value: function fillRect(x, y, w, h) {
      this.element.fillRect(x, y, w, h);
    }
    /**
     * 填充椭圆
     * @param x 椭圆所在矩形左上角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 椭圆所在矩形左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param trailX 椭圆所在矩形右下角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param trailY 椭圆所在矩形右下角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     */

  }, {
    key: "fillEllipse",
    value: function fillEllipse(x, y, trailX, trailY) {
      this.element.fillEllipse(x, y, trailX, trailY);
    }
    /**
     * 填充圆形
     * @param x 圆心坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 圆心坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param raduis 半径 ， 支持px，hm 单位， 如果不写单位就是dp
     */

  }, {
    key: "fillCircle",
    value: function fillCircle(x, y, radius) {
      this.element.fillCircle(x, y, radius);
    }
    /**
     * 设置绘制文本字号
     * @param size 字号大小
     */

  }, {
    key: "fontSize",
    value: function fontSize(size) {
      this.element.fontSize(size);
    }
    /**
     * 设置绘制文本颜色
     * @param colorHex 字号色值
     */

  }, {
    key: "textColor",
    value: function textColor(colorHex) {
      this.element.textColor(colorHex);
    }
    /**
     * 绘制文字
     * @param text 文案
     * @param x 文本左上角坐标x值 , 支持px，hm 单位， 如果不写单位就是dp
     * @param y 文本左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param maxWidth 文本换行的最大宽度, 0 代表不换行,支持px，hm 单位， 如果不写单位就是dp
     */

  }, {
    key: "fillText",
    value: function fillText(text, x, y, maxWidth) {
      this.element.fillText(text, x, y, maxWidth);
    }
    /**
     * 绘制图片
     * @param src 图片资源链接,远程url或本地图片名
     * @param x 图片左上角坐标x值 , 支持px，hm 单位， 如果不写单位就是dp
     * @param y 图片左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param width 图片宽 ,支持px，hm 单位， 如果不写单位就是dp
     * @param height 图片高 ,支持px，hm 单位， 如果不写单位就是dp
     */

  }, {
    key: "drawImage",
    value: function drawImage(src, x, y, width, height) {
      this.element.drawImage(src, x, y, width, height);
    }
  }]);

  return ExCanvas;
}(Base);

var index = {
  name: 'canvas',
  factory: function factory() {
    var component = new ExCanvas();
    return component;
  }
};

export default index;
