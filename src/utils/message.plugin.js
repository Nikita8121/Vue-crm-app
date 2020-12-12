/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    // eslint-disable-next-line no-param-reassign
    // eslint-disable-next-line func-names
    Vue.prototype.$message = function (html) {
      M.toast({ html });
    };

    // eslint-disable-next-line no-param-reassign
    // eslint-disable-next-line func-names
    Vue.prototype.$error = function (html) {
      M.toast({ html: `[ошибка]: ${html}` });
    };
  },
};
