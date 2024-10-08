import { Inika } from 'next/font/google';
import { Header, Footer, Views } from '../../shared/layout';
import '../../assets/styles/global.scss';
import './global.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inika({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
  icons: {
    icon: '/logo.png',
  },
};

interface IProps {
  children: ReactNode;
  params: { locale: string };
}

export default async function RootLayout({ children, params: { locale } }: IProps) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          params: {locale}
          <Header />
          <main className="main">{children}</main>
          <Footer />
          <Views />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
