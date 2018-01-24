const bunyan = require('bunyan');

const appname = 'Waston';

module.exports = {
  applicationName: appname,
  logger: bunyan.createLogger({
    name: appname,
    streams: [
      {
        level: 'info',
        stream: process.stdout // log INFO and above to stdout
      },
      {
        level: 'error',
        path: './server/bin/tmp/error.log' // log ERROR and above to a file
      }
    ]
  }),
  mongodb: {
    uri: 'mongodb://watson:password@ds111618.mlab.com:11618/watson'
  }
};
