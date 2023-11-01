"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "./components/RootLayout/Header";
import cn from "classnames";
import Footer from "./components/RootLayout/Footer";
import { TicketsProvider } from "./hooks/useTickets";
import i18n from "../../i18n";
import { I18nextProvider } from "react-i18next";
import { OrderProvider } from "./hooks/useOrder";
import { CurrencyProvider } from "./hooks/useCurrency";

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Perelit",
  description: "Buy tickets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(openSans.className)}>
        <CurrencyProvider>
          <Header />
          <main>
            <OrderProvider>
              <TicketsProvider>
                <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
              </TicketsProvider>
            </OrderProvider>
          </main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
