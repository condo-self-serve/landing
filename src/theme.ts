import type { ThemeConfig } from 'antd';

// Condoclar brand tokens (condoclar-brand/tokens.json), the same as the app's,
// so the landing site and the product read as one family.
export const brandColors = {
  navy: '#0E2A47',
  navyRaised: '#1A3D63',
  teal: '#1F7A8C',
  tealDark: '#0F4C58',
  tealLight: '#6FC0CE',
  amber: '#F2B33D', // a signal only; never text on a light background
  paper: '#FAF8F4',
  stone: '#E9E4DB',
  ink: '#1B2430',
  slate: '#5B6573',
};

const FONT_BODY = 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export const landingTheme: ThemeConfig = {
  token: {
    colorPrimary: brandColors.navy,
    colorInfo: brandColors.teal,
    colorTextBase: brandColors.ink,
    colorTextHeading: brandColors.navy,
    colorLink: brandColors.teal,
    colorLinkHover: brandColors.tealDark,
    colorBorderSecondary: brandColors.stone,
    borderRadius: 10,
    borderRadiusLG: 14,
    fontFamily: FONT_BODY,
    fontSize: 16,
  },
  components: {
    Button: {
      controlHeightLG: 52,
      fontSizeLG: 17,
      fontWeight: 600,
      primaryShadow: 'none',
      defaultShadow: 'none',
      defaultColor: brandColors.navy,
      defaultBorderColor: brandColors.stone,
    },
    Collapse: {
      headerBg: 'transparent',
    },
  },
};
