function postException(err) {
  // 上报给 Hummer， Hummer 侧统一处理统一接口
  if (Hummer.postException) {
    Hummer.postException(err);
  } else {
    logError(err);
  }
}
function logError(err) {
  console.error("JsError: ".concat(err.message, "\n").concat(err.stack));
}

function install(app) {
  app.config.errorHandler = function (err, vm, info) {
    postException(err);
  };
}

var index = {
  install: install
};

export default index;
export { logError, postException };
