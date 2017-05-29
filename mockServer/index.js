var mockServer = require('node-mock-server');
mockServer({
  restPath: __dirname + '/rest',
  dirName: __dirname,
  title: 'Api mock server test',
  version: 2,
  urlBase: 'http://localhost:4200',
  urlPath: '/rest/v2',
  port: 4200,
  swaggerImport: {
    protocol: 'http',
    authUser: 'u6',
    authPass: '6',
    host: 'pclle139.gft.com',
    port: 8080,
    path: '/v2/api-docs?group=api',
    dest: __dirname + '/rest',
    replacePathsStr: '/v2/{baseSiteId}',
    createErrorFile: true,
    createEmptyFile: true,
    overwriteExistingDescriptions: true
  }
});
