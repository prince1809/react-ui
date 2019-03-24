const bpmr = require('babel-plugin-module-resolver');

function resolvePath(sourcePath, currentFile, opts) {
  if(sourcePath === 'markdown') {
    const base = currentFile.substring(__dirname.length).slice(0, -3);
    return `${__dirname}/docs/src/${base}/`;
  }
  return bpmr.resolvePath(sourcePath, currentFile, opts);
}

let defaultPresets;

if (process.env.BABEL_ENV === 'es') {
    defaultPresets = [];
} else {
    defaultPresets = [
        [
            '@babel/preset-env',
            {
                modules: ['modules', 'production-umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
            },
        ],
    ];
}

const defaultAlias = {

};

module.exports = {
  presets: defaultPresets.concat(['@babel/preset-react']),
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true}],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-runtime',
  ],
  ignore: [/@babel[\\|/]runtime/],
  env: {
    development: {
      plugins: [
        'babel-plugin-module-resolver',
        {
          alias: {
            modules: './modules'
          }
        }
      ],
    },
    'docs-development': {
      plugins: [
        'babel-plugin-preval',
        [
          'babel-plugin-module-resolver',
          {
            alias: {
              ...defaultAlias,
              docs: './docs',
              modules: './modules',
              pages: './pages',
            },
            transformFunctions: ['require', 'require.context'],
            resolvePath,
          },
        ],
        'transform-react-constant-elements',
        'transform-dev-warning',
        ['react-remove-properties', {properties: ['data-mui-test']}],
        ['transform-react-remove-prop-types', {mode: 'remove'}],
      ],
    },
  },

};