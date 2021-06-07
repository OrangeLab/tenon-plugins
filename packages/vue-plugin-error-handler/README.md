# Tenon Vue Plugin Error Handler
`Tenon Vue Plugin Error Handler` 用于全局捕获生产环境的 Error 信息，调用原生 API，统一上报给原生。
### 简介
Error Handler 用于捕获生产环境中运行时 Error 信息，调用原生 API，统一上报给原生。
> 运行时错误，是指在 Vue 运行过程中发生的异常信息，主要包括生命周期处理、内部方法调用

> PS. 该插件无法捕获交互类错误，比如交互类事件的 Callback 函数，由原生调用的函数，异常由原生直接捕获。

### 使用方式
```javascript
import ErrorHandler from '@hummer/vue-plugin-error-handler';
Tenon.use(ErrorHandler);
```
