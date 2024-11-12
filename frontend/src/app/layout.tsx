import localFont from "next/font/local";
import "./globals.css";
import "./main.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Provider from './Provider'
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
     <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_TAGMANAGER}`} />
     <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Header/>
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
    </>
  );
}
