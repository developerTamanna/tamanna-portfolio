import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';

export const metadata = {
  title: 'Tamanna Akter - Frontend & Backend Developer',
  description: 'Portfolio built with Next.js and Tailwind',
  icons: {
    icon: '/public/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="font-sans">
        <Header />
        <div className="min-h-screen mt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
