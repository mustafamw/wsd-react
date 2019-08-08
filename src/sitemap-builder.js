require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("./components/route/route").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("http://www.wsdcourierservices.co.uk")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();