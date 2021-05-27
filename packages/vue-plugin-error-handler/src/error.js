export function postException(err){
  // 上报给 Hummer， Hummer 侧统一处理统一接口
  let hummerError = new HummerError(err);
  if(Hummer.postException){
    Hummer.postException(hummerError);
  }else {
    logError(hummerError);
  }
}

export function logError(err){
  console.error(`JsError: ${err.message}\n${err.stack}`)
}

export class HummerError{
  constructor(err){
    let {line, column, message, stack, sourceURL, name} = err
    this.name = name
    this.line = line
    this.column = column
    this.message = message
    this.stack = stack
    this.sourceURL = sourceURL
  }
}