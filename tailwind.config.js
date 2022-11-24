/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html","./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      'dongle': ['Dongle', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
  
    lineHeight: {
      '75': '75px',
      '46':'46px',
      '35':'35px',   
      '26':'26px',
     },
    maxWidth: {
      '1536': '1536px',
      '491':'491px',
      '758':'758px',
    },
    minWidth: {
      '1536': '1536px',
      '491':'491px',
    },
    extend: {
      width: {
        '15':'15px',
        '21': '84px',
        '12':'12px',
        '66':'66px',
        '270':'270px',
        '491':'491px',
        '366':'366px',
        '375':'375px',
      },
      height: {
        '15':'15px',
        '21':'84px',
        '7':'7px',
        '66':'66px',
        '466':'466.94px',
        
      },
      margin:{
        '13px': '13px',
        '90m':'-90px',
      },
      colors: {
        'purple': '#6371F4',
        'dark-purple': '#251F6E',
        'grey': '#848484',
        'light-blue':'#8A94F7',
        'arow':'#6371F4',
      },
      fontSize: {
        '96': '96px',
        '64': '64px',
        '52':'52px',
        '24': '24px',
        '22':'22px',
        '32':'32px',
        '18':'18px',
      },
      padding:{
        '16px':'16px'
      } 
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}




