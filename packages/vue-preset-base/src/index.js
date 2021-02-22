import List from '@hummer/vue-plugin-list';
import ViewPager from '@hummer/vue-plugin-viewpager';
import Popup from '@hummer/vue-plugin-popup';

export function install(Tenon){
  Tenon.register(List);
  Tenon.register(ViewPager);
  Tenon.register(Popup);
}

export default {
  List,
  ViewPager,
  Popup
}