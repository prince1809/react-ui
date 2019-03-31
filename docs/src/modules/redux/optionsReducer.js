import { ACTION_TYPES, CODE_VARIANTS } from 'docs/src/modules/constants';
//const getT = memoize(userLanguage => key => transitions)


const mapping = {
  [ACTION_TYPES.OPTIONS_CHANGE]: (state, action) => {

  }
};

const initialState = {
  codeVariant: CODE_VARIANTS.JS,
  userLanguage: 'en',
 // t: getThemeProps('en'),
};

function optionsReducer(state = initialState, action) {
  let newState = state;

  return newState;
}

export default optionsReducer;