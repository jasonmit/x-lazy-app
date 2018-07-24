'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'x-engine',

  lazyLoading: {
    enabled: true
  }
});
