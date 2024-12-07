import './globals.css'; // Import from app directory
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Chatbot Hub - Your AI Solution',
  description: 'Sell customizable chatbots to website owners for enhanced services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
