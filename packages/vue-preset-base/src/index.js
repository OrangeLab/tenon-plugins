import List from '@hummer/vue-plugin-list';
import ViewPager from '@hummer/vue-plugin-viewpager';
import Popup from '@hummer/vue-plugin-popup';
import Canvas from '@hummer/vue-plugin-canvas';

export function install(Tenon){
  Tenon.register(List);
  Tenon.register(ViewPager);
  Tenon.register(Popup);
  Tenon.register(Canvas);
}

export default {
  List,
  ViewPager,
  Popup,
  Canvas
}