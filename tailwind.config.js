/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#f9fafb',
        100: '#f4f5f7',
       
      },
      primary: {
        50: '#f0f5ff',
        100: '#dfefff',
        
      },
      secondary: {
        50: '#fff8f2',
        100: '#ffe9d9',
        
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
     
      'xl': {'max': '1279px'},
     
      'lg': {'max': '1023px'},
      
      'md': {'max': '767px'},
     
      'sm': {'max': '639px'},
      
    }, 
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

