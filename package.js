var fs = Npm.require('fs');
var path = Npm.require('path');

Package.describe({
  "summary": "Render SEO data for all bots and users",
  "version": "1.0.1",
  "git": "https://github.com/meteorhubdotnet/seo-meteor-package",
  "name": "meteorhubdotnet:seo"
});

Npm.depends({
  "connect": "3.7.0"
});

Package.onUse(function(api) {
  configure(api);
  api.export('InitialIronMeta', ['client', 'server']);
});

function configure (api) {
  api.versionsFrom('1.8.1');
  api.use('meteorhacks:inject-initial@1.0.4', ['client', 'server']);
  api.use('iron:router@1.1.2', ['client', 'server'], {weak: true});

  api.use('meteorhacks:picker@1.0.3', 'server');

  api.use(['minimongo', 'livedata', 'ejson', 'underscore', 'webapp', 'routepolicy'], ['server']);
  api.use(['minimongo', 'underscore', 'deps', 'ejson'], ['client']);

  api.addFiles([
    'lib/server/routes.js',
    'lib/server/iron_router_support.js',
  ], 'server');

}
