reactjs+redux starter kit  
====

## 目录结构说明

├── build                   # webpack配置目录和相关的帮助方法
├── mock                    # 需要服务端模拟的接口，需要时需要单独启动
├── src                     # 所有开始编码的地方
├─── pages                  # 所有页面级别的组件
├───── app.jsx             # 默认的应用入口
├───── layout.jsx          # 最外层的布局页面，调整页面整体布局可以改这个页面
├───── app.html            # 挂载页面入口
├─── components             # 公共的控件和组件
├─── routes                 # 路由配置
├─── containers             # 根容器一般不需要调整
├─── apis                   # 一些公共的帮助方法和对服务端请求的封装
├─── redux                  # 相关的所有文件目录
├───── modules             # 鸭子模型中的业务代码，用于存放各模块业务Action和Reducer的实现
├───── configureStore.js   # 配置Redux的Store，添加默认的插件（redux-thunk）
├───── reducer.js          # 根Reducer方法
├── package.json            # package.json
├── README.md               # 说明文档
└── .babelrc                # babel的编译配置文件
