var elixir = require('laravel-elixir');

elixir.config.appPath = '';
elixir.config.publicPath = 'assets';

elixir(function (mix) {
    mix.sass('app.scss');
});
