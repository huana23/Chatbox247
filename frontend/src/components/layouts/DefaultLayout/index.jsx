import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import ChatWidget from "./ChatWidget";
import Zalo from "./Zalo";
import Messenger from "./Meassge";




function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <main className="flex-1">
            {children}
        </main>

        

          <BackToTop />
          <Messenger />
          <Zalo />
          <ChatWidget />


        <Footer />
    </div>
  );
}

export default DefaultLayout;