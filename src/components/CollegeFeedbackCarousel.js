"use client";
import { useState, useEffect } from "react";

const CollegeFeedbackCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const testimonials = [
		{
			college: "IMS Engineering College",
			rating: 5,
			text: "Exceptional curriculum delivery. Students showed remarkable improvement in analytical thinking and practical skills.",
		},
		{
			college: "Amity University",
			rating: 5,
			text: "The training program perfectly bridged the gap between academic theory and industry requirements.",
		},
		{
			college: "IGDTUW",
			rating: 5,
			text: "Outstanding hands-on approach. Our students are now confident in tackling real-world data challenges.",
		},
		{
			college: "Christ university",
			rating: 5,
			text: "Comprehensive program that enhanced our data science curriculum significantly. Highly recommended.",
		},
		{
			college: "Jaipuria institute",
			rating: 5,
			text: "The sessions were highly engaging and tailored to industry needs. Students gained both confidence and practical expertise.",
		},
		{
			college: "Delhi University",
			rating: 5,
			text: "A transformative learning experience. The program equipped our students with the skills to excel in data-driven roles.",
		},
	];

	// Auto-rotate testimonials every 4 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
		}, 4000);

		return () => clearInterval(interval);
	}, [testimonials.length]);

	const goToNext = () => {
		setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
	};

	const goToPrev = () => {
		setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
	};

	return (
		<div className="relative">
			{/* Carousel Container */}
			<div className="h-32 overflow-hidden relative">
				<div
					className="transition-transform duration-500 ease-in-out"
					style={{
						transform: `translateY(-${currentIndex * 128}px)`, // 128px = h-32
					}}
				>
					{testimonials.map((testimonial, index) => (
						<div key={index} className="h-32 flex flex-col justify-center">
							<div className="flex items-center mb-2">
								<span className="text-yellow-300 font-semibold text-sm mr-3">{testimonial.college}</span>
								<div className="flex">
									{[...Array(testimonial.rating)].map((_, i) => (
										<svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
							</div>
							<p className="text-slate-300 text-sm leading-relaxed">"{testimonial.text}"</p>
						</div>
					))}
				</div>
			</div>

			{/* Navigation Controls */}
			<div className="flex items-center justify-between mt-4">
				{/* Previous Button */}
				<button onClick={goToPrev} className="text-slate-400 hover:text-yellow-400 transition-colors" aria-label="Previous testimonial">
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
					</svg>
				</button>

				{/* Dots Indicator */}
				<div className="flex space-x-2">
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-yellow-400" : "bg-slate-600"}`}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div>

				{/* Next Button */}
				<button onClick={goToNext} className="text-slate-400 hover:text-yellow-400 transition-colors" aria-label="Next testimonial">
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default CollegeFeedbackCarousel;
