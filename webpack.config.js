const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './frontend/src/js/index.js',
    output: {
      filename: 'bundle.js',
      publicPath: '/', 
      //assetModuleFilename: 'fonts/[name][ext]',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx'],  
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(ttf|otf|eot|woff(2)?)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
        {
          test: /\.svg$/,
            oneOf: [
          {
            // If imported in JS/JSX with ?react query, use @svgr/webpack
            resourceQuery: /react/,
            use: ['@svgr/webpack'],
          },
          {
            // Otherwise, use as asset/resource for CSS
            type:'asset/resource',
            generator: {
            filename: 'icons/[name][ext]',
            },
          },
        ],
        },
        {
          test: /\.(jpeg|png|jpg|ico)$/,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]',
          },
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './frontend/public/index.html',
        minify: false, 
        minimizerOptions: {
        ignoreCustomFragments: [/link rel="icon"/],
      },
      }),
      new MiniCssExtractPlugin({
        filename: 'app.css',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'frontend/public/favicon.ico', to: 'favicon.ico' },
          { from: 'frontend/public/manifest.json', to: 'manifest.json' },
          { from: './frontend/src/img', to: 'img' },
        ],
      }),
      
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      }, 
      historyApiFallback: true, 
      port: 3001,
        open: process.platform == 'darwin' ? {
          app: {
            name: 'google chrome',
          },
      } : {
        app: {
          name: 'brave-browser',
        },
      },
    },
  };
  