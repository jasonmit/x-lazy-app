import Engine from 'ember-engines/engine';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';

const { modulePrefix } = config;

class Eng extends Engine {
  get modulePrefix() {
    return modulePrefix;
  }

  get Resolver() {
    return Resolver;
  }
}

loadInitializers(Eng, modulePrefix);

export default Eng;
