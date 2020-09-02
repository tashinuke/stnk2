module.exports = {
  corePlugins: {
    divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    borderCollapse: false,
    tableLayout: false,
    gradientColorStops: false,
    backgroundImage: false,
    backgroundAttachment: false,
    order: false,
    placeholderColor: false,
    placeholderOpacity: false,
  },
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",
    },
    colors: {
      black: "#000",
      white: "#fff",
      gray: {
        100: "#F7FAFC",
        200: "#EDF2F7",
        300: "#E2E8F0",
        400: "#CBD5E0",
        900: "#1A202C",
      },
      blue: {
        400: "#60A1F1",
        800: "#002741",
        900: "#001A2B",
      },
    },
  },
};
