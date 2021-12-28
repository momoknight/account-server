/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1638763350390_2732';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: [ '*' ],
  };

  config.view = {
    mapping: {'.html': 'ejs'}
  };

  config.mysql = {
    client: {
      host: '47.103.140.189', 
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'jue-cost',
    },
    app: true,
    agent: false,
  }

  config.jwt = {
    secret: 'knight',
  },

  config.multipart = {
    mode: 'file'
  },

  config.cors = {
    // origin: '*',
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    uploadDir: 'app/public/upload'
  };

  // config.cluster = {
  //   listen: {
  //     path: '',
  //     port: 8000,
  //     hostname: '127.0.0.1'
  //   }
  // }

  return {
    ...config,
    ...userConfig,
  };
};
