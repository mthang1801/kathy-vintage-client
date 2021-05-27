export const theme = {
  initialColorModeName: "light",
  modes: {
    light: {
      name : "light",
      body: "#ededed",
      text: "#000000",
      button: {
        text: "#FFFFFF",
        background: "#000000",
      },
      link: {
        text: "teal",
        opacity: 1,
      },
      header: {
        background: "#fff",
        color : "#000"
      },
      navigation: {
        background: "#f5f5f5",
        active: {
          background: "#f5f5f5",
          color: "#ffc107",
        },
      },
      background: "#f0f0f0",
      card: "#fff",      
      form : {
        background : "#e0e0e0"
      },
      hover : {
        background : "#f5f5f5",
        text : "#ffc107"
      },      
      breadcrumb : {
        background : "#dedede",
        link : {
          background : "#f0f0f0",                    
          color : "#757575",
        }
      },     
      border: "#e0e0e0",
      boxShadow: "0 0 3px 3px #f5f5f5",     
      dashboard : {
        background : "#e0f2f1",
        color : "#060717",     
        background2 : "#fff", 
        color2 : "#000"   
      },
    
    },
    dark: {
      name : "dark",
      body: "#202020",
      text: "#fff",
      button: {
        text: "#ffffff",
        background: "#0d47a1",
      },
      link: {
        text: "#0d47a1",
        opacity: 0.8,
      },
      header: {
        background: "linear-gradient(to right bottom,#202020, #212121)",
        color : "#f0f0f0"
      },
      navigation: {
        background: "#424242",
        active: {
          background: "#424242",
          color: "#ffc107",
        },
      },
      background: "#2c2c2c",
      card: "#2d2f31",
      form : {
        background : "#242424"
      },
      hover: {
        background : "#343a40",
        text: "#ffc107"
      },      
      breadcrumb : {
        background : "#363636",
        link : {
          background : "#2c2c2c",   
          color : "#f5f5f5",                    
        }
      },
      border: "#616161",
      boxShadow: "0 0 3px 3px #302f2f",
      dashboard : {
        background : "#242444",
        color : "#e9e9ec",
        background2 : "#20203d", 
        color2 : "#d3d3da"
      },
      
    },
  },
}
