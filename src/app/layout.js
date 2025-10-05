import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	// Basic Metadata
	title: {
		default: "Samrat AI - Data Analytics, Machine Learning & AI Training",
		template: "%s | Samrat AI",
	},
	description:
		"Unlock your potential in Data Analytics, Machine Learning, and AI with expert-led, hands-on training designed to make you industry-ready.",
	keywords: [
		"data analytics",
		"machine learning",
		"artificial intelligence",
		"AI training",
		"data science",
		"business analytics",
		"data visualization",
		"big data",
		"generative AI",
		"python training",
		"industry-ready courses",
		"samrat ai",
		"samratai.com",
	],
	authors: [{ name: "Samrat Mukherjee" }],
	creator: "Samrat Mukherjee",
	publisher: "Samrat AI",

	// Robots and Indexing
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	// Open Graph (Facebook, LinkedIn, WhatsApp, Discord)
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://samratai.com",
		siteName: "Samrat AI",
		title: "Samrat AI - Data Analytics, Machine Learning & AI Training",
		description:
			"Unlock your potential in Data Analytics, Machine Learning, and AI with expert-led, hands-on training designed to make you industry-ready.",
		images: [
			{
				url: "https://samratai.com/images/preview.png",
				width: 1200,
				height: 630,
				alt: "Samrat AI - Expert-led Data Analytics & AI Training",
				type: "image/png",
			},
		],
	},

	// Twitter Card
	twitter: {
		card: "summary_large_image",
		site: "@samratai",
		creator: "@samratai",
		title: "Samrat AI - Data Analytics, Machine Learning & AI Training",
		description:
			"Unlock your potential in Data Analytics, Machine Learning, and AI with expert-led, hands-on training designed to make you industry-ready.",
		images: ["https://samratai.com/images/preview.png"],
	},

	// Additional Metadata
	alternates: {
		canonical: "https://samratai.com",
	},

	// Verification (add your verification codes when available)
	verification: {
		// google: 'your-google-verification-code',
		// yandex: 'your-yandex-verification-code',
		// bing: 'your-bing-verification-code',
	},

	// App-specific
	applicationName: "Samrat AI",
	category: "Education",

	// Additional Open Graph tags for better social sharing
	other: {
		"og:email": "contact@samratai.com",
		"article:author": "Samrat Mukherjee",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<Analytics />
			<SpeedInsights />
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
