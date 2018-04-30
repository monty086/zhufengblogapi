'use strict';
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = '_1525055330801_8356';

  // add your config here
  config.middleware = [];
  config.dbUrl = "mongodb://127.0.0.1/zhufengblog";
  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      headerName: 'csrftoken',
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    }
  }
  return config;
};
