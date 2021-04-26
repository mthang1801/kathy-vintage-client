export default {
  useCustomProperties: false,
  useColorSchemeMediaQuery: true,
  colors: {
    default: {
      id: "T_001",
      name: "Light",
      colors: {
        body: "#FFFFFF",
        text: "#000000",
        button: {
          text: "#FFFFFF",
          background: "#000000"
        },
        link: {
          text: "teal",
          opacity: 1
        },
        header : {
          background : "linear-gradient(to right bottom, #fff59d,#fff176, #ffeb3b  )",                
        },
        background : "#f0f0f0",
        card : "#e0e0e0",
        hover : "#f5f5f5",
        border : "#e0e0e0"
      },
      font: '"Roboto", "Helvetica", "Arial", sans-serif'
    },
    dark : {
      id: "T_007",
      name: "Dark",
      colors: {
        body: "#202020",
        text: "#fff",
        button: {
          text: "#ffffff",
          background: "#0d47a1",
        },
        link: {
          text: "#0d47a1",
          opacity: 0.8
        },
        header : {
          background : "linear-gradient(to right bottom,#202020, #212121)"
        },
        background : "#2c2c2c",
        card : "#2d2f31",
        hover : "#343a40",
        border : "#616161"
      },
      font: '"Roboto", "Helvetica", "Arial", sans-serif'
    }
  }
}
