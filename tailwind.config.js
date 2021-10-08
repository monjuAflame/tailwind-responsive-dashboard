module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "dash-purple": "#5267DF",
        "dash-red": "#FA5959",
        "dash-blue": "#242A45",
        "dash-grey": "#9194A2",
        "dash-white": "#f7f7f7",
        "dash-primary": "#fd3d57",
        "dash-secondary": "#2b2d42",
      },
    },
  },
  variants: {
    extend: {
      translate: ['responsive', 'group-hover', 'hover', 'focus'],
    },
  },
  plugins: [],
}
