import { Platform } from "react-native";

const theme = {
  roundness: 3,
  colors: {
    "primary": "#0366d6",
    "bgMain": "#e1e5e8",
    "bgSecondary": "#24292e",
    "textPrimary": "#24292e",
    "textSecondary": "#586069",
    "textPlaceholder": "#9CA3AF",
    "error": "#d73a4a",
    "accent": "#28a745",
    "white": "#ffffff"
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;