  //例子父路由
  const mine = r => require.ensure([], () => r(require('../pages/mine/mine.vue')), 'mine')
    // 例子首页
  export default [{
    name: 'mine',
    path: 'mine',
    component: mine,
    children: []
  }]