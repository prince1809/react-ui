export const attach = (...classNames) => `&.${classNames.join('.')}`;
export const nest = (...classNames) => `& .${classNames.join('.')}`;

export const APP_BAR = {
  root: 'app-bar__root',
  shaded: 'app-bar--shaded',
};

export default {
  APP_BAR,
  attach,
  nest,
};
