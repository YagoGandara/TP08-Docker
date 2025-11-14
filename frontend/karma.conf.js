// frontend/karma.conf.js
const { join } = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      clearContext: false, // deja visible el reporte de Jasmine en el navegador
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      reporters: [
        { type: 'lcov', subdir: '.' },       // para SonarCloud
        { type: 'cobertura', subdir: '.', file: 'cobertura.xml' } // para Azure
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    restartOnFileChange: true,
  });
};
