const webpack = require('webpack');
const pkg = require('./package.json');
const withTM = require('@weco/next-plugin-transpile-modules');
const { findPages } = require('./docs/src/modules/utils/find');


process.env.LIB_VERSION = pkg.verison;

module.exports = {

    webpack: (config, options) => {
        // Alias @material-ui/core peer dependency imports from the following modules to our sources.
        config = withTM({
            transpileModules: ['notistack', 'material-ui-pickers'],
        }).webpack(config, options);

        const plugins = config.plugins.concat([
            new webpack.DefinePlugin({
                'process.env': {
                    LIB_VERSION: JSON.stringify(process.env.LIB_VERSION),
                },
            }),
        ]);

        return Object.assign({}, config, {
            plugins,
            node: {
                fs: 'empty',
            },
            module: Object.assign({}, config.module, {
                rules: config.module.rules.concat([
                    {
                        test: /\.(css|md)$/,
                        loader: 'emit-file-loader',
                        options: {
                            name: 'dis/[path][name].[ext]',
                        },
                    },
                    {
                        test: /\.(css|md)$/,
                        loader: 'raw-loader',
                    },
                ]),
            }),
        });
    },

    webpackDevMiddleware: config => config,

    exportPathMap: () => {
        const map = {};

        function generateMap(pages) {
            pages.forEach(page => {
                if(!page.children) {
                    map[page.pathname] = {
                        page: page.pathname,
                    };
                    return;
                }
                generateMap(page.children);
            });
        }

        generateMap(findPages());

        return map;
    },

    onDemandEntries: {
        maxInactiveAge: 120 * 1e3,
        pagesBufferLength: 3,
    }
};