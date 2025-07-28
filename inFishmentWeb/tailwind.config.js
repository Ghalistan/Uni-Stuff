module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter',
        'visby': 'VisbyRoundCF-DemiBold',
        'NunitoSans': 'NunitoSans'
      },
      backgroundColor: theme => ({
        'primary-blue': '#0c80ef',
        'light-blue': '#f3f7fa',
        'divider': '#e8e8e8',
        'gray': '#f4f4f4',
        'midyellow': '#f7bb08',
      }),
      backgroundImage: theme => ({
        'mainpage': "url(/bg-mainpage.png)",
        'mainpage-parts': "url(/bg-mainpage-parts.png)",
        'blue-part': "url(/blue-part.svg)",
        'remove': "url(/ic-remove.svg)"
      }),
      textColor: {
        'primaryblue': '#0c80ef',
        'secondarygrey': '#737373',
        'goodgreen': '#5cb85c',
        'midyellow': '#f7bb08',
        'gray': '#474747',
        'light-gray': '#4a4a4a',
        'dark-gray': '#666666',
        'dark': '#292c33'
      },
      borderColor: theme => ({
        'divider': '#c4c4c4',
        'primaryblue': '#0c80ef',
      }),
      height: {
        '75': '75vh',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
