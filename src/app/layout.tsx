import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { GoogleTagManager } from "@next/third-parties/google";

const neulisLight = localFont({
  src: "../fonts/neulis-light.woff2",
  style: "normal",
  variable: "--font-neulis-light",
});

const neulisLightItalic = localFont({
  src: "../fonts/neulis-light-italic.woff2",
  style: "normal",
  variable: "--font-neulis-light-italic",
});

const neulisRegular = localFont({
  src: "../fonts/neulis-regular.woff2",
  style: "normal",
  variable: "--font-neulis-regular",
});

const neulisMedium = localFont({
  src: "../fonts/neulis-medium.woff2",
  style: "normal",
  variable: "--font-neulis-medium",
});

const neulisSemiBold = localFont({
  src: "../fonts/neulis-semibold.woff2",
  style: "normal",
  variable: "--font-neulis-semibold",
});

const neulisSemiBoldItalic = localFont({
  src: "../fonts/neulis-semibold-italic.woff2",
  style: "normal",
  variable: "--font-neulis-semibold-italic",
});

const neulisBold = localFont({
  src: "../fonts/neulis-bold.woff2",
  style: "normal",
  variable: "--font-neulis-bold",
});

const neulisBoldItalic = localFont({
  src: "../fonts/neulis-bold-italic.woff2",
  style: "normal",
  variable: "--font-neulis-bold-italic",
});

export const metadata: Metadata = {
  title: "Agência Newe",
  description: "Sua agência do universo imobiliário",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* <GoogleTagManager gtmId="GTM-M8WTPPN" /> */}
      <body
        className={`${neulisLight.variable} ${neulisLightItalic.variable} ${neulisRegular.variable} ${neulisMedium.variable} ${neulisSemiBold.variable} ${neulisSemiBoldItalic.variable} ${neulisBold.variable} ${neulisBoldItalic.variable} antialiased scrollbar overflow-x-hidden`}
      >
        {children}
        <script src="https://web3forms.com/client/script.js" async defer></script>
      </body>
    </html>
  );
}
