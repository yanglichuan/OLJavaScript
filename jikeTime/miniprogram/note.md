#微信小程序
## 程序生命周期
* onLaunch
* onShow
* onHide
* onError
## 页面生命周期
* onLoad
* onShow
* onReady
* onHide
* onUnload

## 路由

| 路由方式   | 触发时机               | 路由前页面 | 路由后页面     |
| ---------- | ---------------------- | ---------- | -------------- |
| 初始化     | 小程序打开的第一个页面 |            | onLoad,onShow  |
| 打开新页面 | wx.navigateTo          | onHide     | onLoad, onShow |
| 页面重定向 | Wx.redirectTo          | onUnload   | onLoad, onShow |
| 页面返回   | Wx.navigateBack        | onUnload   | onShow         |
| Tab切换    | wx.switchTab           |            | 各种情况       |
| 重启动     | wx.reLaunch            | onUnload   | onLoad, onShow |

## 组件

### 视图容器

* view
* scroll-view
* swiper
* movable-view
* cover-view