import {
    Base
} from '@hummer/tenon-vue'
const {
    CanvasView
} = __GLOBAL__
class ExCanvas extends Base {
    constructor() {
        super()
        this.initElement()
    }
    initElement() {
        this.element = new CanvasView()
    }
    /**
     * 设置stroke的线粗细
     * @param widthValue 粗细值，支持px，hm 单位， 如果不写单位就是dp
     */
    lineWidth(widthValue) {
        this.element.lineWidth(widthValue)
    }
    /**
     * 设置stroke的线颜色
     * @param colorHex 色值
     */
    lineColor(colorHex) {
        this.element.lineColor(colorHex)
    }
    /**
     * 设置线头样式
     * @param value 0 : LineCapButt, ， 1:LineCapRound   2:LineCapSquare
     */
    lineCap(value) {
        this.element.lineCap(value)
    }
    /**
     * 设置折线折点样式
     * @param value 0 : LineJoinMiter, ， 1: LineJoinRound  2:LineJoinBevel
     */
    lineJoin(value) {
        this.element.lineJoin(value)
    }
    /**
     * 根据入参，在起始点与终点之间画一条线段
     * @param fromX 起点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param fromY 起点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param toX 终点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param toY 终点的y值，支持px，hm 单位， 如果不写单位就是dp
     */
    drawLine(fromX, fromY, toX, toY) {
        this.element.drawLine(fromX, fromY, toX, toY)
    }
    /**
     * 画矩形
     * @param x 矩形左上角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 矩形左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param w 矩形宽，支持px，hm 单位， 如果不写单位就是dp
     * @param h 矩形高，支持px，hm 单位， 如果不写单位就是dp
     */
    strokeRect(x, y, w, h) {
        this.element.strokeRect(x, y, w, h)
    }
    /**
     * 画椭圆
     * @param x 椭圆所在矩形左上角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 椭圆所在矩形左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param trailX 椭圆所在矩形右下角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param trailY 椭圆所在矩形右下角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     */
    strokeEllipse(x, y, trailX, trailY) {
        this.element.strokeEllipse(x, y, trailX, trailY)
    }
    /**
     * 画圆形
     * @param x 圆心坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 圆心坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param raduis 半径 ， 支持px，hm 单位， 如果不写单位就是dp
     */
    strokeCircle(x, y, radius) {
        this.element.strokeCircle(x, y, radius)
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
    arc(x, y, radius, startAngle, endAngle, clockwise) {
        this.element.arc(x, y, radius, startAngle, endAngle, clockwise)
    }
    /**
     * 设置填充颜色
     * @param colorHex 颜色16进制
     */
    fillColor(colorHex) {
        this.element.fillColor(colorHex)
    }
    /**
     * 填充矩形
     * @param x 矩形左上角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 矩形左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param w 矩形宽，支持px，hm 单位， 如果不写单位就是dp
     * @param h 矩形高，支持px，hm 单位， 如果不写单位就是dp
     */
    fillRect(x, y, w, h) {
        this.element.fillRect(x, y, w, h)
    }
    /**
     * 填充椭圆
     * @param x 椭圆所在矩形左上角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 椭圆所在矩形左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param trailX 椭圆所在矩形右下角坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param trailY 椭圆所在矩形右下角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     */
    fillEllipse(x, y, trailX, trailY) {
        this.element.fillEllipse(x, y, trailX, trailY)
    }
    /**
     * 填充圆形
     * @param x 圆心坐标点的x值，支持px，hm 单位， 如果不写单位就是dp
     * @param y 圆心坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param raduis 半径 ， 支持px，hm 单位， 如果不写单位就是dp
     */
    fillCircle(x, y, radius) {
        this.element.fillCircle(x, y, radius)
    }
    /**
     * 设置绘制文本字号
     * @param size 字号大小
     */
    fontSize(size) {
        this.element.fontSize(size)
    }
    /**
     * 设置绘制文本颜色
     * @param colorHex 字号色值
     */
    textColor(colorHex) {
        this.element.textColor(colorHex)
    }
    /**
     * 绘制文字
     * @param text 文案
     * @param x 文本左上角坐标x值 , 支持px，hm 单位， 如果不写单位就是dp
     * @param y 文本左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param maxWidth 文本换行的最大宽度, 0 代表不换行,支持px，hm 单位， 如果不写单位就是dp
     */
    fillText(text,x,y,maxWidth) {
        this.element.fillText(text,x,y,maxWidth)
    }
    /**
     * 绘制图片
     * @param src 图片资源链接,远程url或本地图片名
     * @param x 图片左上角坐标x值 , 支持px，hm 单位， 如果不写单位就是dp
     * @param y 图片左上角坐标点的y值，支持px，hm 单位， 如果不写单位就是dp
     * @param width 图片宽 ,支持px，hm 单位， 如果不写单位就是dp
     * @param height 图片高 ,支持px，hm 单位， 如果不写单位就是dp
     */
    drawImage(src, x, y, width, height) {
        this.element.drawImage(src, x, y, width, height)
    }
}

export default {
    name: 'canvas',
    factory() {
        let component = new ExCanvas()
        return component
    }
}