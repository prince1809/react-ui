export default ({ theme, red, white, attach, nest, BUTTON, ICON }) => ({
  MuiButton: {
    label: {
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700,
      [nest(ICON.root)]: {
        fontSize: 20,
      },
      [nest(ICON.left)]: {
        marginRight: theme.spacing.unit,
      },
      [nest(ICON.right)]: {
        marginLeft: theme.spacing.unit,
      },
    },
    outlined: {
      borderRadius: 100,
      '&disabled': {
        [attach(BUTTON.inverted)]: {
          borderColor: white.text,
          color: white.text,
        },
      },
    },
    outlinedPrimary: {

    },
    contained: {

    },
    containedPrimary: {

    },
    extendedFab: {
      
    },
  },
});