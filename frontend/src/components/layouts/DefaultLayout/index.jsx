import { Header, Footer, BackToTop } from '../../common';
import { ChatWidget, Zalo, Messenger } from '../../ui';

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
