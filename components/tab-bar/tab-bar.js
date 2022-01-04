var app = getApp();
Component({
  data: {
    // 菜单列表
    list: [{
        pagePath: '/pages/index/index',
        text: '首页',
        name: 'subscriptions',
        icon: 'home',
        selecticon: 'homefill'
      },
      {
        pagePath: '/pages/community/community',
        text: '社区',
        name: 'subscriptions',
        icon: 'community',
        selecticon: 'communityfill'
      },
      {
        pagePath: '/pages/message/message',
        text: '消息',
        name: 'subscriptions',
        icon: 'message',
        selecticon: 'messagefill'
      },
      {
        pagePath: '/pages/user/user',
        text: '我的',
        name: 'profile',
        icon: 'my',
        selecticon: 'myfill'
      }
    ],
   
    tab: 0
  },
  lifetimes:{
    attached: function () {
     this.setData({
       tab :app.globalData.tab
     })
    },

  },

  methods: {
    // 标签切换
    onChange: function (event) {
      app.globalData.tab =  event.currentTarget.dataset.index
      wx.switchTab({
        url: event.currentTarget.dataset.path
      })
    }
  }
})