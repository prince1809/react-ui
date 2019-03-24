const webpack = require('webpack');
const pkg = require('./package.json');
const { findPages } = require('./docs/src/modules/utils/find');


module.exports = {

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