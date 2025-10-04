"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import { useState } from "react";
import Link from "next/link";

export default function CoursesPage() {
	const [activeTab, setActiveTab] = useState("All");

	const tabs = ["All", "Artificial Intelligence", "Data Science", "Machine Learning", "Big Data & Cloud", "Business Intelligence"];

	const courses = [
		{
			title: "Data Science Course",
			image: "/images/courses/data-science.png",
			classes: "60 Classes",
			hours: "650 Hours",
			level: "Experience",
			category: "Data Science",
			description:
				"Master the complete data science pipeline from data collection to machine learning deployment. This comprehensive course covers statistical analysis, data visualization, and predictive modeling.",
			skills: [
				"Python Programming & Libraries",
				"Statistical Analysis & Hypothesis Testing",
				"Machine Learning Algorithms",
				"Data Visualization with Tableau/Power BI",
				"SQL Database Management",
				"Deep Learning with TensorFlow",
			],
		},
		{
			title: "Data Analytics Course",
			image: "/images/courses/data-analytics.png",
			classes: "38 Classes",
			hours: "500 Hours",
			level: "Experience",
			category: "Data Science",
			description:
				"Transform raw data into actionable business insights. Learn to analyze trends, create compelling visualizations, and make data-driven recommendations for business growth.",
			skills: [
				"Excel Advanced Functions & Pivot Tables",
				"SQL Queries & Database Analysis",
				"Python for Data Analysis",
				"Business Intelligence Tools",
				"Statistical Modeling",
				"Dashboard Creation & Reporting",
			],
		},
		{
			title: "Business Analytics Course",
			image: "/images/courses/business-analytics.png",
			classes: "38 Classes",
			hours: "475 Hours",
			level: "Experience",
			category: "Business Intelligence",
			description:
				"Bridge the gap between business strategy and data insights. Learn to identify business problems, analyze performance metrics, and drive strategic decision-making through analytics.",
			skills: [
				"Business Intelligence & KPI Analysis",
				"Financial Modeling & Forecasting",
				"Market Research & Customer Analytics",
				"Process Optimization Techniques",
				"Strategic Planning with Data",
				"Stakeholder Communication",
			],
		},
	];

	const additionalCourses = [
		{
			title: "Machine Learning Mastery",
			image: "/images/courses/machine-learning.png",
			classes: "45 Classes",
			hours: "580 Hours",
			level: "Advanced",
			category: "Machine Learning",
			description:
				"Dive deep into machine learning algorithms and artificial intelligence. Build, train, and deploy ML models that solve real-world problems and automate decision-making processes.",
			skills: [
				"Supervised & Unsupervised Learning",
				"Neural Networks & Deep Learning",
				"Feature Engineering & Selection",
				"Model Optimization & Tuning",
				"MLOps & Model Deployment",
				"Computer Vision & NLP Basics",
			],
		},
		{
			title: "Artificial Intelligence",
			image: "/images/courses/artificial-intelligence.png",
			classes: "52 Classes",
			hours: "720 Hours",
			level: "Expert",
			category: "Artificial Intelligence",
			description:
				"Explore the cutting-edge of AI technology. Master deep learning, natural language processing, and computer vision to build intelligent systems that can see, understand, and interact.",
			skills: [
				"Deep Learning Architectures",
				"Natural Language Processing",
				"Computer Vision & Image Recognition",
				"Reinforcement Learning",
				"AI Ethics & Responsible AI",
				"Large Language Models (LLMs)",
			],
		},
		{
			title: "Big Data & Cloud Analytics",
			image: "/images/courses/big-data-cloud.png",
			classes: "40 Classes",
			hours: "550 Hours",
			level: "Advanced",
			category: "Big Data & Cloud",
			description:
				"Handle massive datasets and leverage cloud computing power. Learn to process, analyze, and extract insights from big data using modern distributed computing frameworks.",
			skills: [
				"Apache Spark & Hadoop Ecosystem",
				"Cloud Platforms (AWS, Azure, GCP)",
				"Data Warehousing & ETL Processes",
				"Real-time Data Streaming",
				"NoSQL Databases (MongoDB, Cassandra)",
				"Data Lake Architecture & Management",
			],
		},
		{
			title: "Advanced AI and Generative AI Program",
			image: "/images/courses/generative-ai.png",
			classes: "48 Classes",
			hours: "600 Hours",
			level: "Expert",
			category: "Artificial Intelligence",
			description:
				"Master cutting-edge AI models like GPT, DALL·E 2, and GANs. Learn to train, fine-tune, and deploy generative AI models with frameworks like Hugging Face and Transformers, bringing your creative AI ideas to life.",
			skills: [
				"Generative AI & GANs",
				"Prompt Engineering",
				"LLM Fine-Tuning & Deployment",
				"Transformers & Hugging Face",
				"AI for Image & Text Generation",
				"Ethics & Safety in Generative AI",
			],
		},
		{
			title: "Applied Data Science with AI",
			image: "/images/courses/data-science-with-ai.png",
			classes: "50 Classes",
			hours: "650 Hours",
			level: "Advanced",
			category: "Data Science",
			description:
				"Gain hands-on experience with the complete AI & ML pipeline. Learn to build, evaluate, and deploy models using industry-relevant tools and technologies, solving real-world business problems.",
			skills: [
				"Exploratory Data Analysis",
				"Machine Learning Algorithms",
				"Deep Learning Basics",
				"Model Evaluation & Deployment",
				"Data Wrangling & Feature Engineering",
				"Industry-Grade Project Workflows",
			],
		},
		{
			title: "Applied Data Science with Python",
			image: "/images/courses/data-science-with-python.png",
			classes: "46 Classes",
			hours: "600 Hours",
			level: "Advanced",
			category: "Data Science",
			description:
				"Learn Python for data science from the ground up, covering statistics, ML, and DL. Gain hands-on experience through projects and master practical skills to analyze data and build intelligent solutions.",
			skills: [
				"Python Programming for Data Science",
				"Descriptive & Inferential Statistics",
				"Supervised & Unsupervised ML",
				"Deep Learning for AI",
				"Data Visualization (Matplotlib, Seaborn)",
				"Pandas & NumPy for Data Manipulation",
			],
		},
		{
			title: "Mastering Data Science with R",
			image: "/images/courses/data-science-with-r.png",
			classes: "46 Classes",
			hours: "600 Hours",
			level: "Advanced",
			category: "Data Science",
			description:
				"Learn R programming and its applications in data science, statistics, and machine learning. Work on hands-on projects to gain practical experience and prepare for real-world AI and analytics roles.",
			skills: [
				"R Programming for Data Science",
				"Statistical Modeling",
				"Machine Learning with R",
				"Data Visualization with ggplot2",
				"Deep Learning Integration with R",
				"Project-Based Learning",
			],
		},
		{
			title: "Mastering Data Visualizations with Power BI",
			image: "/images/courses/data-visualization-with-bi.png",
			classes: "35 Classes",
			hours: "400 Hours",
			level: "Intermediate",
			category: "Business Intelligence",
			description:
				"Master Power BI to transform raw data into interactive dashboards and actionable insights. Build professional-grade reports and visualizations that drive data-informed decisions.",
			skills: [
				"Power BI Fundamentals",
				"Data Modeling & DAX",
				"Interactive Dashboards",
				"Real-Time Data Visualization",
				"Data Cleaning & Transformation",
				"Storytelling with Data",
			],
		},
		{
			title: "Big Data with Data Science",
			image: "/images/courses/big-data.png",
			classes: "55 Classes",
			hours: "750 Hours",
			level: "Expert",
			category: "Big Data & Cloud",
			description:
				"Gain expertise in handling large-scale datasets with modern big data tools and frameworks. Learn to integrate data science techniques with big data systems to build scalable AI-powered solutions.",
			skills: [
				"Hadoop & Spark Ecosystem",
				"SQL & NoSQL Databases",
				"Python for Big Data",
				"Machine Learning on Large Datasets",
				"Real-Time Data Processing",
				"End-to-End Big Data Project Implementation",
			],
		},
	];

	const allCourses = [...courses, ...additionalCourses];

	// Filter courses based on active tab
	const filteredCourses = activeTab === "All" ? allCourses : allCourses.filter((course) => course.category === activeTab);

	return (
		<div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red text-white">
			{/* Navigation */}
			<Navigation />

			{/* Header Section */}
			<section className="pt-32 pb-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-lg font-medium mb-8"
					>
						🎓 Our Courses
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
					>
						<span className="text-white">With Placement Readiness</span>
						<br />
						<span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">Program</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
					>
						Comprehensive programs designed to transform you from beginner to industry-ready professional
					</motion.p>
				</div>
			</section>

			{/* Course Tabs */}
			<section className="py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-center mb-12">
						<div className="bg-red-900/40 backdrop-blur-sm border border-red-700/50 rounded-full p-2 overflow-x-auto">
							<div className="flex space-x-1 min-w-fit">
								{tabs.map((tab) => (
									<button
										key={tab}
										onClick={() => setActiveTab(tab)}
										className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap text-sm lg:text-base ${
											activeTab === tab
												? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
												: "text-white/70 hover:text-white hover:bg-white/10"
										}`}
									>
										{tab}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Courses Grid */}
			<section className="pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{filteredCourses.map((course, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-gradient-to-br from-red-900/60 to-red-950/60 border border-red-700/40 rounded-3xl overflow-hidden backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
								style={{
									filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
								}}
							>
								{/* Course Image */}
								<div className="relative h-48 overflow-hidden">
									<Image
										src={course.image}
										alt={course.title}
										fill
										className="object-cover transition-transform duration-500 hover:scale-110"
									/>
								</div>

								{/* Course Content */}
								<div className="p-6">
									<h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>

									{/* Course Stats */}
									<div className="flex justify-between items-center mb-6">
										<div className="flex space-x-4">
											<span className="text-white/70 text-sm">
												<span className="text-orange-400 font-semibold">{course.classes}</span>
											</span>
											<span className="text-white/70 text-sm">
												<span className="text-orange-400 font-semibold">{course.hours}</span>
											</span>
											<span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs border border-emerald-500/30">
												{course.level}
											</span>
										</div>
									</div>

									{/* Course Description */}
									<div className="mb-6">
										<p className="text-white/80 text-sm leading-relaxed">{course.description}</p>
									</div>

									{/* Skills You'll Learn */}
									<div className="mb-6">
										<h4 className="text-white font-semibold mb-3 text-sm">🎯 Skills You'll Master:</h4>
										<div className="space-y-2">
											{course.skills.slice(0, 4).map((skill, skillIndex) => (
												<div key={skillIndex} className="flex items-center">
													<div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 flex-shrink-0"></div>
													<span className="text-white/70 text-xs leading-relaxed">{skill}</span>
												</div>
											))}
											{course.skills.length > 4 && (
												<div className="text-orange-400 text-xs font-medium mt-2">
													+{course.skills.length - 4} more skills...
												</div>
											)}
										</div>
									</div>

									{/* Explore Button */}
									{/* <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
										Explore Course
									</button> */}
									<Link
										href="https://forms.gle/JrS5NyqdWMvBM46d7"
										className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
									>
										Explore Course
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-400/30 rounded-3xl p-12 backdrop-blur-sm"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
						<p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
							Join thousands of professionals who have transformed their careers with our comprehensive training programs.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/#start"
								className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg inline-block"
							>
								Get Started Today
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-red-950/60 backdrop-blur-sm border-t border-red-800/30 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div>
							<h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-4">
								Samrat Mukherjee
							</h3>
							<p className="text-white/70 mb-4">
								Lead Data Analyst & Educator helping professionals transform their careers through data analytics and machine
								learning.
							</p>
						</div>

						<div>
							<h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
							<ul className="space-y-2 text-white/70">
								<li>
									<a href="/" className="hover:text-white transition-colors">
										Home
									</a>
								</li>
								<li>
									<a href="/courses" className="hover:text-white transition-colors">
										All Courses
									</a>
								</li>
								<li>
									<a href="/#about" className="hover:text-white transition-colors">
										About
									</a>
								</li>
								<li>
									<a href="/#testimonials" className="hover:text-white transition-colors">
										Success Stories
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
							<div className="space-y-2 text-white/70">
								<p>📧 samrat@dataanalytics.com</p>
								<p>📱 +91 98765 43210</p>
								<p>🌐 Available for corporate training</p>
							</div>
						</div>
					</div>

					<div className="border-t border-red-800/30 mt-12 pt-8 text-center text-white/60">
						<p>&copy; 2025 Samrat Mukherjee. All rights reserved. Transform your career with data.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
