export function postException(err){
  // 上报给 Hummer， Hummer 侧统一处理统一接口
  if(Hummer.postException){
    Hummer.postException(err);
  }else {
    logError(err);
  }
}

export function logError(err){
  console.error(`JsError: ${err.message}\n${err.stack}`)
}