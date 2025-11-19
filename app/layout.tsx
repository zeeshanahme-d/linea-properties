import type { Metadata } from "next";
import { Raleway, Poppins } from "next/font/google";
import "./style/globals.css";

/* Set proper variable names */
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "Linea Properties – Verified Real Estate in Cameroon | Buy & Rent Safely",
  description:
    "Find verified apartments, houses, land, and commercial properties across Cameroon. Linea offers trusted agents, secure escrow, smart alerts, and a safer way to rent or buy.",
  keywords: [
    "Cameroon real estate",
    "properties in Cameroon",
    "Cameroon apartments",
    "verified properties Africa",
    "rent house Cameroon",
    "buy land Cameroon",
    "Linea real estate app",
    "secure escrow Cameroon",
  ],
  openGraph: {
    title: "Linea Properties – Find Verified Real Estate in Cameroon",
    description:
      "Cameroon’s most trusted real estate app. Browse verified listings, use secure escrow, connect with trusted agents, and find your next home with confidence.",
    url: "https://lineaproperties.com",
    siteName: "Linea Properties",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${raleway.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
