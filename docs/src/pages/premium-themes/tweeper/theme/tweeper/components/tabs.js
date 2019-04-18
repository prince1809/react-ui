import { root } from "postcss";

export default ({ theme, attach, nest, ICON, TABS, TAB }) => ({
  MuiTabs: {
    root: {
      [attach(TABS.underline)]: {
        borderBottom: '1px solid #e6ecf0',
      },
      [`& .${TAB.selected} .${TAB.wrapper} *`]: {
        color: theme.palette.primary.main,
      },
    },
    indicator: {
      backgroundColor: theme.palette.primary.main,
    },
  },
});