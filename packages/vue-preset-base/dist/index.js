'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var List = require('@hummer/vue-plugin-list');
var ViewPager = require('@hummer/vue-plugin-viewpager');
var Popup = require('@hummer/vue-plugin-popup');
var Canvas = require('@hummer/vue-plugin-canvas');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var List__default = /*#__PURE__*/_interopDefaultLegacy(List);
var ViewPager__default = /*#__PURE__*/_interopDefaultLegacy(ViewPager);
var Popup__default = /*#__PURE__*/_interopDefaultLegacy(Popup);
var Canvas__default = /*#__PURE__*/_interopDefaultLegacy(Canvas);

function install(Tenon) {
  Tenon.register(List__default['default']);
  Tenon.register(ViewPager__default['default']);
  Tenon.register(Popup__default['default']);
  Tenon.register(Canvas__default['default']);
}
var index = {
  List: List__default['default'],
  ViewPager: ViewPager__default['default'],
  Popup: Popup__default['default'],
  Canvas: Canvas__default['default']
};

exports.default = index;
exports.install = install;
