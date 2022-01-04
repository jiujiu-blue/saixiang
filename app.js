App({
  /**可以在全局使用 */
  globalData: {
    userInfo: {},
    apiUrl: "https://saixiang.kifroom.icu/api/",
    // apiUrl: "http://121.41.79.176/api/",
    // apiUrl: "http://426x8r6735.zicp.vip/api/",
    token: null,
    isAuth: false,
    tab:0,
    ColorList: [
      {
        title: "嫣红",
        name: "red",
        color: "#e54d42",
      },
      {
        title: "桔橙",
        name: "orange",
        color: "#f37b1d",
      },
      {
        title: "明黄",
        name: "yellow",
        color: "#fbbd08",
      },
      {
        title: "橄榄",
        name: "olive",
        color: "#8dc63f",
      },
      {
        title: "森绿",
        name: "green",
        color: "#39b54a",
      },
      {
        title: "天青",
        name: "cyan",
        color: "#1cbbb4",
      },
      {
        title: "海蓝",
        name: "blue",
        color: "#0081ff",
      },
      {
        title: "姹紫",
        name: "purple",
        color: "#6739b6",
      },
      {
        title: "木槿",
        name: "mauve",
        color: "#9c26b0",
      },
      {
        title: "桃粉",
        name: "pink",
        color: "#e03997",
      },
      {
        title: "棕褐",
        name: "brown",
        color: "#a5673f",
      },
      {
        title: "玄灰",
        name: "grey",
        color: "#8799a3",
      },
      {
        title: "草灰",
        name: "gray",
        color: "#aaaaaa",
      },
      {
        title: "墨黑",
        name: "black",
        color: "#333333",
      },
      {
        title: "雅白",
        name: "white",
        color: "#ffffff",
      },
    ],
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.getSystemInfo({
      success: (e) => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar =
          custom.bottom + custom.top - e.statusBarHeight;
      },
    });
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {},

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {},

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {},
});
