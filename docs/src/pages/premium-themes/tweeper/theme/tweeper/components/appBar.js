export default ({ white, attach, nest, APP_BAR }) => ({
  MuiAppBar: {
    root: {
      [attach(APP_BAR.root)]: {
        backgroundColor: white.text,
      }
    }
  },
});