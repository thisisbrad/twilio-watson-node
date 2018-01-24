const bunyan = require('bunyan');

const appname = 'Waston';

module.exports = {
  applicationName: appname,
  logger: bunyan.createLogger({ name: appname }),
  mongodb: {
    uri: 'mongodb://watson:password@ds111618.mlab.com:11618/watson'
  }
};
