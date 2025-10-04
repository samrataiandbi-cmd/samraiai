import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Samrat Mukherjee - Data Analytics & Machine Learning Expert",
  description:
    "Transform your career with data analytics and machine learning courses from industry expert Samrat Mukherjee. 2000+ students trained, 95% success rate. Start your data journey today!",
  keywords:
    "data analytics, machine learning, data science, career transformation, online courses, python, sql, tableau, data visualization",
  author: "Samrat Mukherjee",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Samrat Mukherjee - Data Analytics & Machine Learning Expert",
    description:
      "Transform your career with data analytics and machine learning courses from industry expert Samrat Mukherjee.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samrat Mukherjee - Data Analytics & Machine Learning Expert",
    description:
      "Transform your career with data analytics and machine learning courses from industry expert Samrat Mukherjee.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
