import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import WorkshopsPage from "../../sections/Learn/Workshop-grid";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import { useState } from "react";
import lighttheme from "../../theme/app/themeStyles";
import { darktheme } from "../../theme/app/themeStyles";



const WorkshopsGridPage = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Prevent Flash</div>;
  }
  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Service Mesh Workshops" description="Service mesh workshops and tutorials for Istio, Envoy, Linkerd, Consul, App Mesh, Open Service Mesh, Cilium, Kuma, NGINX" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <WorkshopsPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default WorkshopsGridPage;
