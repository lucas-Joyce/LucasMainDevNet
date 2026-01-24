const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/js/index.js',
    devtool: 'source-map',
    // resolve: {
    //   alias: {
    //     public: path.resolve(__dirname, 'src'), //'public'
    //   },
    // },
    output: {
      filename: 'bundle.js',
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
    },
    // resolve: {
    //   modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    // },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                '@babel/preset-env'
            ],
            }
          }
          },
          // {
          //   test: /\.(ttf|otf|eot|woff(2)?)$/,
          //   type: 'asset/inline',
          //   exclude: /unwanted-fonts-folder/,
          // },
          // {
          //   test: /\.svg$/,
          //   type: 'asset/inline',
          //   exclude: /unwanted-icons-folder/,
          // },
          {
            test: /.(ttf|otf|eot|woff(2)?)$/,
            use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]',
              publicPath: './fonts',
              outputPath : 'fonts',
              esModule: false,
           },
         },
         //exclude: /unwanted-fonts-folder/,
        },
        {
          test: /\.svg$/,
          use: [
              '@svgr/webpack', 
              {
                  loader: 'file-loader',
                  options: {
                      name: '[name].[ext]',
                      publicPath: './icons',
                      outputPath: 'icons',
                      esModule: false,
                      
                  },
              },
          ],
         // exclude: /unwanted-icons-folder/,
        },
          {
            test: /\.s[ac]ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
            ],
          },
      //   {
      //     test: /.(ttf|otf|eot|woff(2)?)$/,
      //     use: {
      //     loader: 'url-loader',
      //     options: {
      //         limit: 8192,
      //         name: '[name].[ext]',
      //         outputPath: 'fonts/',
      //         esModule: false,
      //         mimetype: 'application/font-ttf', 
      //    },
      //  },
      //  exclude: /unwanted-fonts-folder/,
      // },
          ],
    },
    plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: 'app.[contenthash].css', 
    // }),
      new HtmlWebpackPlugin({
        template: './public/index.html', 
      }),
      new CleanWebpackPlugin(),
    //   new CopyWebpackPlugin({
    //     patterns: [
    //         { from: 'src/fonts', to: 'fonts' },
    //         { from: 'src/icons', to: 'icons' },
    //     ],
    // }),
    ],
    devServer: {
      historyApiFallback: true,
    },
};