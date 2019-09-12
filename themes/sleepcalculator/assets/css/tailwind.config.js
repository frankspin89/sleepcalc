const { maxHeight, maxWidth, colors, fontSize, height } = require('tailwindcss/defaultTheme')


module.exports = {
    theme: {

        fontFamily: {
            'sans': ['Lato,system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,sans-serif'],
        },

        extend: {
            maxHeight: {
                ...maxHeight,
                'logo-small': '2.5rem',
                'logo-medium': '3.5rem',
                'logo-large': '4.5rem',
          
            },

            maxWidth: {
                ...maxWidth,
                '7xl': '80rem'
            },

            height: {
                ...height,
                '128': '32rem',
            },


            fontSize: {
                ...fontSize,
                '5xl': '2.8rem'
            },

            colors: {
                

                blue: {
                    ...colors.blue,
                    '100': '#E9F2FD',
                    '200': '#D7E9FF',
                    '500': '#92DAFD',
                    '800': '#213E88',
                    '900': '#152c67',
                },
                indigo: {
                    ...colors.indigo,
                    '500': '#6c62b1',
                },
                green: {
                    ...colors.green,
                    '500': '#3eeaa1',
                    '900': '#143827',
                }
            }
        }

    },
    variants: {},
    plugins: []
}
