import { createStore } from 'vuex';

export default createStore({
  state: {
    picShow: false,
  },
  mutations: {
    togglePic: (state) => {
      state.picShow = !state.picShow;
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
});
