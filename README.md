### 说明
  该插件主要作用是，添加只是在开发环境中存在的逻辑代码

### 安装
```
npm i -D babel-plugin-dev-exist
```

### 使用配置
在babel.config.js中配置
```
module.exports = {
  plugins: [['babel-plugin-dev-exist',{ flag: 'DEV_EXIST'}]]
}
```

### code案例
```
if (DEV_EXIST) {
  routes.push({
    path: '/component-demo',
    name: '组件demo',
    component: () => import('@/views/component-demo/index'),
    meta: { title: '组件demo' }
  })
}
```
以上代码表示 `组件demo` 路由只存在于开发环境中



### eslint配置
如果项目中使用eslint, 那么 `DEV_EXIST` 关键字会被eslint检测为错误，故需要在 `.eslintrc.js` 中进行配置
```
globals: {
  DEV_EXIST: true
}
```
