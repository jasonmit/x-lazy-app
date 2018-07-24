import Route from '@ember/routing/route';

/**
 * importing ember-fetch, ends up loading ember-fetch's fastboot shim
 * https://github.com/ember-cli/ember-fetch/blob/master/public/fastboot-fetch.js
*/
import 'fetch';

export default class ProjectsRoute extends Route {}
