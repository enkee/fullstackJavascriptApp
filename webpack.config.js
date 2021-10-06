/* Importacion de MODULOS de NODE e Instalados */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Preguntamos si estamos en modo desarrollo antes de cargar las configuraciones
const devMode = process.env.NODE_ENV !== 'production';


/* Indicamos donde esta el codigo del frontend para poder exportarlo a otra carpeta */

module.exports ={
    mode: 'development',
    //Archivo principal js del proyecto.
    entry: '/frontend/app.js',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js'
    },

    // Configuracion para el empaquetamiento de archivos css
    module:{
        rules:[ 
            {
                //Examina los archivos css
                test: /\.css/,
                use:[
                    //Si se encuentra en modo desarrollo cargar stylos en js, si estoy en modo produccion cargarlos en su propio archivo css.
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    /*Pluging para empaquetar archivos html */
    plugins:[
        new HtmlWebpackPlugin({
            template: './frontend/index.html',
            minify: {
                // Quita todos los espacios del html
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype:true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],

    // Modulo para ver exactamente en que linea he cometido un error
    devtool: 'source-map'
};