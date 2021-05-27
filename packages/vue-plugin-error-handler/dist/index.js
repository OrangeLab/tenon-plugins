function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function postException(err) {
  // 上报给 Hummer， Hummer 侧统一处理统一接口
  var hummerError = new HummerError(err);

  if (Hummer.postException) {
    Hummer.postException(hummerError);
  } else {
    logError(hummerError);
  }
}
function logError(err) {
  console.error("JsError: ".concat(err.message, "\n").concat(err.stack));
}
var HummerError = function HummerError(err) {
  _classCallCheck(this, HummerError);

  var line = err.line,
      column = err.column,
      message = err.message,
      stack = err.stack,
      sourceURL = err.sourceURL,
      name = err.name;
  this.name = name;
  this.line = line;
  this.column = column;
  this.message = message;
  this.stack = stack;
  this.sourceURL = sourceURL;
};

function install(app) {
  app.config.errorHandler = function (err, vm, info) {
    postException(err);
  };
}

var index = {
  install: install
};

export default index;
export { HummerError, logError, postException };
