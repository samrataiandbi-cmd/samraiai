"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
	{
		name: "Shivika Gupta",
		role: "Data Analyst at TCS",
		prevRole: "From HR Executive",
		image: "👩‍💼",
		testimonial:
			"I had the pleasure of attending training under Samrat sir and he is an outstanding teacher. Clear explanation with examples, engaging teaching style.I highly recommend for anyone looking to gain solid understanding of concepts.",
	},
	{
		name: "Bhavya Bhatnagar",
		role: "ML Engineer at Flipkart",
		prevRole: "From Mechanical Engineer",
		image: "👨‍💻",
		testimonial:
			"It was a great honour to join the session. Samrat Sir is truly a master of data science and analytics. His teaching style is very clear, practical, and industry-focused. Each concept is explained with real-world examples which makes learning easier and more interesting.",
	},
	{
		name: "Anchal Tripathi",
		role: "Senior Data Scientist",
		prevRole: "From Finance Background",
		image: "👩‍🔬",
		testimonial:
			"Samrat Sir is a best mentor with a rare ability to make complex topics simple and practical. His real-world approach to teaching data science makes learning engaging and impactful. Highly recommended for anyone serious about mastering analytics",
	},
	{
		name: "Aditiya Bhandari",
		role: "Business Intelligence Analyst",
		prevRole: "From Marketing Background",
		image: "👨‍💼",
		testimonial:
			"I had a good experience in learning Power Bi Basics from Samrat. He was good with his content and was able to make us understand. He made us practice the basics multiple time with clarifying all doubts. Has good command over the subject. Really liked his sessions.",
	},
	{
		name: "Divya Bhardwaj",
		role: "AI Research Engineer",
		prevRole: "From Software Testing",
		image: "👩‍💻",
		testimonial: "Well-structured sessions, hands-on approach, and good industry relevant examples. Made analytics interesting and practical.",
	},
	{
		name: "Harsh Aggarwal",
		role: "Data Engineering Manager",
		prevRole: "From Civil Engineering",
		image: "👨‍🔧",
		testimonial:
			"Had an wonderful experience in training under samrat sir , which makes the concepts clear and the way he explain is very good which makes me understand complex topics.",
	},
	{
		name: "Yash Kumar",
		role: "Data Analyst at Alchemy",
		prevRole: "From Blockchain development",
		image: "👨‍🔧",
		testimonial:
			"Had an wonderful experience in training under samrat sir , which makes the concepts clear and the way he explain is very good which makes me understand complex topics.",
	},
	{
		name: "Kashvi Thakur",
		role: "AI model tester",
		prevRole: "From Electrical Engineering",
		image: "👨‍🔧",
		testimonial:
			"His teaching style is not only clear and structured, but also industry-focused, which helped me build strong foundational and practical skills. Every concept was explained with real-world examples, and he always ensured that I understood the logic behind the tools—not just the syntax.",
	},
	{
		name: "Taisha Yadav",
		role: "Data Analyst at Amazon",
		prevRole: "From Video editing",
		image: "👨‍🔧",
		testimonial:
			"I recently finished a 40-hour course on Computer Vision and Deep Learning and it was a great experience. The course was structured thoughtfully and delivered with clarity. It covered foundational and advanced concepts like perceptron, ANN, CNN and RNN in detail.",
	},
	{
		name: "Vipin Tiwari",
		role: "Data Analyst",
		prevRole: "From Graphic Design",
		image: "👨‍🔧",
		testimonial:
			"Samrat has some exceptional understanding of Power BI and has very good knowledge of how it can be delivered relating to the tools which generally people are using.",
	},
	{
		name: "Vrinda Maheshwari",
		role: "Ml Engineer",
		prevRole: "From Web development",
		image: "👨‍🔧",
		testimonial:
			"Learning Python and data analytics from Samrat sir was a great experience. His teaching style is clear, engaging, and full of real-life examples that make complex concepts easy to understand. He also keeps the class lively by rewarding students for active participation",
	},
	{
		name: "Aditiya Shrivastav",
		role: "Insignts Reporter",
		prevRole: "From software development",
		image: "👨‍🔧",
		testimonial:
			"I had the opportunity to learn Data Analytics under Mr. Samrat Mukherjee, and I must say — it was a truly enriching experience. His deep knowledge of tools like Power BI, Python (pandas, numpy, matplotlib), and data-driven decision-making is unmatched.",
	},
	{
		name: "Bhaumik Yadav",
		role: "Data Scientist at Agrusoft",
		prevRole: "Student",
		image: "👨‍🔧",
		testimonial:
			"Had a nice experience with samrat sir back in 2024, he gave me an excellent foundation on data analytics and built an interest for the domain. His services are suggested by me if you want to step into the world of data.",
	},
	{
		name: "Mahima Singh",
		role: "Student at IMS Ghaziabad",
		prevRole: "Consultant",
		image: "👨‍🔧",
		testimonial:
			"I had the opportunity to attend a few sessions with Samrat Sir, and his teaching style is truly commendable. He explains concepts with remarkable clarity, using a step-by-step approach and with real-world applications.",
	},
	{
		name: "Pavitra Yadav",
		role: "AI researcher",
		prevRole: "Fresher",
		image: "👨‍🔧",
		testimonial:
			"The session was very insightful and Samrat sir explain the concepts in easy way. He teaches with industry specific use cases. I would recommend to attend the PowerBI, Data Analytics training conducted by Samrat Sir.",
	},
];

export default function TestimonialsCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAutoPlay, setIsAutoPlay] = useState(true);
	const [windowWidth, setWindowWidth] = useState(null);

	// Determine testimonials per slide based on window width
	useEffect(() => {
		// Only run on client side
		if (typeof window === "undefined") return;

		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Set initial width
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Responsive testimonials per slide
	const getTestimonialsPerSlide = () => {
		if (windowWidth === null) return 1; // Default for SSR
		if (windowWidth < 640) return 1; // Mobile
		if (windowWidth < 1024) return 2; // Tablet
		return 3; // Desktop
	};

	const testimonialsPerSlide = getTestimonialsPerSlide();
	const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

	// Auto-advance carousel
	useEffect(() => {
		if (!isAutoPlay) return;

		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
		}, 5000);

		return () => clearInterval(interval);
	}, [isAutoPlay, totalSlides]);

	const goToSlide = (slideIndex) => {
		setCurrentSlide(slideIndex);
	};

	const goToPrevious = () => {
		setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
	};

	const goToNext = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
	};

	// Get testimonials for current slide
	const getCurrentSlideTestimonials = () => {
		const startIndex = currentSlide * testimonialsPerSlide;
		return testimonials.slice(startIndex, startIndex + testimonialsPerSlide);
	};

	return (
		<div className="relative px-2 sm:px-4" onMouseEnter={() => setIsAutoPlay(false)} onMouseLeave={() => setIsAutoPlay(true)}>
			{/* Carousel Container */}
			<div className="relative overflow-hidden">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentSlide}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
					>
						{getCurrentSlideTestimonials().map((testimonial, index) => (
							<motion.div
								key={`${currentSlide}-${index}`}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="testimonial-card p-4 sm:p-6 rounded-2xl transition-all duration-300 shadow-xl max-w-sm mx-auto w-full"
							>
								<div className="flex items-center mb-3 sm:mb-4">
									<div className="text-2xl sm:text-3xl mr-2 sm:mr-3">{testimonial.image}</div>
									<div>
										<h3 className="font-bold text-white text-sm sm:text-base drop-shadow-sm">{testimonial.name}</h3>
										<p className="text-orange-300 font-semibold text-xs sm:text-sm drop-shadow-sm">{testimonial.role}</p>
										<p className="text-gray-900 text-[10px] sm:text-xs drop-shadow-sm">{testimonial.prevRole}</p>
									</div>
								</div>
								<p className="text-gray-900 leading-relaxed italic text-xs sm:text-sm drop-shadow-sm line-clamp-4">
									"{testimonial.testimonial}"
								</p>
								<div className="flex text-yellow-300 mt-2 sm:mt-3 drop-shadow-sm">
									{[...Array(5)].map((_, i) => (
										<svg key={i} className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Navigation Arrows */}
			<button
				onClick={goToPrevious}
				className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 glass-card p-2 sm:p-3 rounded-full hover:bg-white/20 transition-all duration-300 group z-10"
				aria-label="Previous slide"
			>
				<svg
					className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-orange-300 transition-colors"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<button
				onClick={goToNext}
				className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 glass-card p-2 sm:p-3 rounded-full hover:bg-white/20 transition-all duration-300 group z-10"
				aria-label="Next slide"
			>
				<svg
					className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-orange-300 transition-colors"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
				</svg>
			</button>

			{/* Dots Indicator - Now shows slides instead of individual testimonials */}
			<div className="flex justify-center mt-6 sm:mt-8 space-x-2">
				{Array.from({ length: totalSlides }).map((_, slideIndex) => (
					<button
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className={`carousel-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
							slideIndex === currentSlide ? "bg-orange-400 w-6 sm:w-8" : "bg-white/30 hover:bg-white/50"
						}`}
						aria-label={`Go to slide ${slideIndex + 1}`}
					/>
				))}
			</div>

			{/* Progress Bar */}
			<div className="mt-3 sm:mt-4 w-full bg-white/20 rounded-full h-1">
				<motion.div
					className="bg-gradient-to-r from-orange-400 to-amber-500 h-full rounded-full"
					initial={{ width: "0%" }}
					animate={{
						width: `${((currentSlide + 1) / totalSlides) * 100}%`,
					}}
					transition={{ duration: 0.3 }}
				/>
			</div>
		</div>
	);
}
