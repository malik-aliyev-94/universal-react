import path from 'path';
import nodeExternals from 'webpack-node-externals';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import nib from 'nib';

const client = {
  entry: {
    js: './src/app-client.js',
  },
  output: {
    filename: './src/static/js/bundle.js',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache',
        },
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            }, 'autoprefixer-loader?{browsers:["last 20 version", "Firefox 15"]}', {
              loader: 'stylus-loader',
              options: {
                use: [nib()],
                'resolve url': true,
              },
            },
          ],
        }),
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-inline-loader',
        },
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './src/static/css/style.css',
    }),
  ],
};

const server = {
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals({
    modulesFromFile: true,
  })],
  entry: {
    js: './src/server.js',
  },
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'server-es5.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache',
        },
      },
    ],
  },
};

export default [client, server];
