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
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582095455990_1572';

  // add your middleware config here
  config.middleware = ['errorHandler'];
  config.jwt = {
    secret: '123456',
  };

  config.security = {
    csrf: {
      enable: false
    }
  };
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/GUETAlumnus',
    options: {
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    },
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'wjhAPI',
      description: 'GUET校友信息',
      version: '0.0.1',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    enableSecurity: false,
    routerMap: true,
    enable: true,
  };
  config.bcrypt = {
    saltRounds: 10
  }
  return {
    ...config,
    ...userConfig,
  };
};
