import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <main className="flex-1">
            {children}
        </main>

        <BackToTop /> 
        <Footer />
    </div>
  );
}

export default DefaultLayout;