Package.describe({
  summary: "Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript."
});

Package.on_use(function (api, where) {
  api.add_files('async/lib/async.js', 'server');
});
