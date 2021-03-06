'use strict'
require('@babel/register')()

const crxFile = require('fs').readFileSync('apps/remix-ide/test-browser/extensions/chrome/metamask.crx')
const metamaskExtension = new Buffer.from(crxFile).toString('base64') // eslint-disable-line

module.exports = {
  'src_folders': ['apps/remix-ide/test-browser/tests'],
  'output_folder': 'apps/remix-ide/reports/tests',
  'custom_commands_path': ['apps/remix-ide/test-browser/commands'],
  'custom_assertions_path': '',
  'page_objects_path': '',
  'globals_path': '',

  'test_settings': {
    'default': {
      'selenium_port': 4444,
      'selenium_host': 'localhost',
      'globals': {
        'waitForConditionTimeout': 10000,
        'asyncHookTimeout': 100000
      },
      'screenshots': {
        'enabled': true,
        'path': 'apps/remix-ide/reports/screenshots',
        'on_failure': true,
        'on_error': true
      },
      'desiredCapabilities': {
        'browserName': 'firefox',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      },
      'exclude': ['apps/remix-ide/test-browser/tests/runAndDeploy.js']
    },

    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'goog:chromeOptions': {
          'args': ['window-size=2560,1440', 'start-fullscreen']
        }
      }
    },

    'chrome-runAndDeploy': {
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'goog:chromeOptions': {
          'args': ['window-size=2560,1440', 'start-fullscreen'],
          'extensions': [metamaskExtension]
        }
      }
    },

    'safari': {
      'desiredCapabilities': {
        'browserName': 'safari',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },

    'ie': {
      'desiredCapabilities': {
        'browserName': 'internet explorer',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    },

    'firefox': {
      'desiredCapabilities': {
        'browserName': 'firefox',
        'javascriptEnabled': true,
        'acceptSslCerts': true
      }
    }
  }
}
