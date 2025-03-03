import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import ImageHubPage from "../../sections/Projects/Image-Hub";
import Footer from "../../sections/General/Footer";

import { GlobalStyle } from "../../sections/app.style";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";
const ImageHub = () => {
  const [theme, setTheme] = useState();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Prevent Flash</div>;
  }
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Image Hub"
          description="Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters."
          image="/images/layer5-image-hub.png" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <ImageHubPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default ImageHub;
