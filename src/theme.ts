import type { ThemeConfig } from 'antd';

// Brand colours — mirrors the app's BRAND_COLOURS.md so the landing site and
// the product read as one family.
export const brandColors = {
  inkBlack: '#00171F',
  deepSpaceBlue: '#003459', // Primary colour
  cerulean: '#007EA7',
  freshSky: '#00A8E8',
  parchment: '#EEEBE7',
  goldenPollen: '#FDCA40',
  jellyBean: '#EF3E36',
};

const FONT_FAMILY = [
  '"Nunito Sans"',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
].join(',');

export const landingTheme: ThemeConfig = {
  token: {
    colorPrimary: brandColors.deepSpaceBlue,
    colorInfo: brandColors.cerulean,
    colorTextBase: brandColors.inkBlack,
    colorLink: brandColors.cerulean,
    borderRadius: 10,
    fontFamily: FONT_FAMILY,
    fontSize: 16,
  },
  components: {
    Button: {
      controlHeightLG: 52,
      fontSizeLG: 17,
      fontWeight: 700,
    },
    Collapse: {
      headerBg: 'transparent',
    },
  },
};
