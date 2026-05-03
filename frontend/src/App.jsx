import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/layouts/DefaultLayout";
import { useEffect } from "react";
import { scrollToTop } from "./constants";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {publicRoutes.map((route) => {
          const Page = route.component;
          const Layout = route.layout === null ? null : DefaultLayout;

          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                Layout ? (
                  <Layout>
                    <Page />
                  </Layout>
                ) : (
                  <Page />
                )
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
