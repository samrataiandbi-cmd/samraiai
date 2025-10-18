"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const courses = [
	"Data Science Course",
	"Data Analytics Course",
	"Business Analytics Course",
	"Machine Learning Mastery",
	"Artificial Intelligence",
	"Big Data & Cloud Analytics",
	"Advanced AI and Generative AI Program",
	"Applied Data Science with AI",
	"Applied Data Science with Python",
	"Mastering Data Science with R",
	"Mastering Data Visualizations with Power BI",
	"Big Data with Data Science",
];

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		role: "",
		reasonForContact: "",
		organisationName: "",
		selectedCourse: "",
		scheduleTraining: "",
		preferredMode: "",
		numberOfParticipants: "",
		enquiryDetails: "",
		additionalComments: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
		else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
			newErrors.phone = "Please enter a valid 10-digit phone number";
		}
		if (!formData.email.trim()) newErrors.email = "Email is required";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}
		if (!formData.role) newErrors.role = "Please select your role";
		if (!formData.reasonForContact) newErrors.reasonForContact = "Please select a reason for contact";

		// Conditional validation based on reason for contact
		if (formData.reasonForContact === "Corporate Training enquiry" || formData.reasonForContact === "College Training enquiry") {
			if (!formData.organisationName.trim()) newErrors.organisationName = "Organisation name is required";
			if (!formData.selectedCourse) newErrors.selectedCourse = "Please select a course";
			if (!formData.scheduleTraining.trim()) newErrors.scheduleTraining = "Please specify training schedule";
			if (!formData.preferredMode) newErrors.preferredMode = "Please select preferred mode";
			if (!formData.numberOfParticipants) newErrors.numberOfParticipants = "Please select number of participants";
		}

		if (formData.reasonForContact === "Course enquiry" || formData.reasonForContact === "Batch enquiry") {
			if (!formData.selectedCourse) newErrors.selectedCourse = "Please select a course";
			if (!formData.enquiryDetails.trim()) newErrors.enquiryDetails = "Please provide enquiry details";
			if (!formData.preferredMode) newErrors.preferredMode = "Please select preferred mode";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validateForm()) {
			// TODO: Firebase integration will be added here
			console.log("Form submitted:", formData);
			alert("Thank you for your enquiry! We will get back to you soon.");

			// Reset form
			setFormData({
				name: "",
				phone: "",
				email: "",
				role: "",
				reasonForContact: "",
				organisationName: "",
				selectedCourse: "",
				scheduleTraining: "",
				preferredMode: "",
				numberOfParticipants: "",
				enquiryDetails: "",
				additionalComments: "",
			});
		}
	};

	const showTrainingFields = formData.reasonForContact === "Corporate Training enquiry" || formData.reasonForContact === "College Training enquiry";
	const showCourseFields = formData.reasonForContact === "Course enquiry" || formData.reasonForContact === "Batch enquiry";

	return (
		<div className="min-h-screen bg-gradient-to-br from-red-900 via-red-950 to-red-900">
			<Navigation />

			{/* Hero Section */}
			<section className="relative pt-32 pb-20 px-4 overflow-hidden">
				{/* Background Effects */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
					<div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
				</div>

				<div className="container mx-auto max-w-6xl relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center mb-12"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
							Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Touch</span>
						</h1>
						<p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
							Have questions about our training programs? We're here to help you get started on your data analytics journey.
						</p>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="glass-card rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-xl bg-white/5 border border-white/10"
					>
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Basic Information */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* Name */}
								<div>
									<label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
										Full Name <span className="text-red-400">*</span>
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
										placeholder="Enter your full name"
									/>
									{errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
								</div>

								{/* Phone */}
								<div>
									<label htmlFor="phone" className="block text-sm font-semibold text-gray-200 mb-2">
										Phone Number <span className="text-red-400">*</span>
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
										placeholder="Enter your phone number"
									/>
									{errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
								</div>

								{/* Email */}
								<div>
									<label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
										Email Address <span className="text-red-400">*</span>
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
										placeholder="Enter your email address"
									/>
									{errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
								</div>

								{/* Role */}
								<div>
									<label htmlFor="role" className="block text-sm font-semibold text-gray-200 mb-2">
										Your Role <span className="text-red-400">*</span>
									</label>
									<select
										id="role"
										name="role"
										value={formData.role}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
									>
										<option value="" className="bg-slate-800">
											Select your role
										</option>
										<option value="Student" className="bg-slate-800">
											Student
										</option>
										<option value="Placement Officer" className="bg-slate-800">
											Placement Officer
										</option>
										<option value="Hiring Manager" className="bg-slate-800">
											Hiring Manager
										</option>
										<option value="Company Representative" className="bg-slate-800">
											Company Representative
										</option>
										<option value="Professional" className="bg-slate-800">
											Professional
										</option>
										<option value="Other" className="bg-slate-800">
											Other
										</option>
									</select>
									{errors.role && <p className="mt-1 text-sm text-red-400">{errors.role}</p>}
								</div>
							</div>

							{/* Reason for Contact */}
							<div>
								<label htmlFor="reasonForContact" className="block text-sm font-semibold text-gray-200 mb-2">
									Reason for Contact <span className="text-red-400">*</span>
								</label>
								<select
									id="reasonForContact"
									name="reasonForContact"
									value={formData.reasonForContact}
									onChange={handleChange}
									className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
								>
									<option value="" className="bg-slate-800">
										Select reason for contact
									</option>
									<option value="Corporate Training enquiry" className="bg-slate-800">
										Corporate Training Enquiry
									</option>
									<option value="College Training enquiry" className="bg-slate-800">
										College Training Enquiry
									</option>
									<option value="Course enquiry" className="bg-slate-800">
										Course Enquiry
									</option>
									<option value="Batch enquiry" className="bg-slate-800">
										Batch Enquiry
									</option>
								</select>
								{errors.reasonForContact && <p className="mt-1 text-sm text-red-400">{errors.reasonForContact}</p>}
							</div>

							{/* Conditional Fields for Training Enquiries */}
							{showTrainingFields && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									className="space-y-6 border-t border-white/10 pt-6"
								>
									<h3 className="text-xl font-semibold text-cyan-400 mb-4">Training Details</h3>

									{/* Organisation Name */}
									<div>
										<label htmlFor="organisationName" className="block text-sm font-semibold text-gray-200 mb-2">
											Organisation Name <span className="text-red-400">*</span>
										</label>
										<input
											type="text"
											id="organisationName"
											name="organisationName"
											value={formData.organisationName}
											onChange={handleChange}
											className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
											placeholder="Enter your organisation name"
										/>
										{errors.organisationName && <p className="mt-1 text-sm text-red-400">{errors.organisationName}</p>}
									</div>

									{/* Select Course */}
									<div>
										<label htmlFor="selectedCourse" className="block text-sm font-semibold text-gray-200 mb-2">
											Select Course <span className="text-red-400">*</span>
										</label>
										<select
											id="selectedCourse"
											name="selectedCourse"
											value={formData.selectedCourse}
											onChange={handleChange}
											className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
										>
											<option value="" className="bg-slate-800">
												Select a course
											</option>
											{courses.map((course) => (
												<option key={course} value={course} className="bg-slate-800">
													{course}
												</option>
											))}
										</select>
										{errors.selectedCourse && <p className="mt-1 text-sm text-red-400">{errors.selectedCourse}</p>}
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										{/* Schedule Training */}
										<div>
											<label htmlFor="scheduleTraining" className="block text-sm font-semibold text-gray-200 mb-2">
												Schedule Training For <span className="text-red-400">*</span>
											</label>
											<input
												type="date"
												id="scheduleTraining"
												name="scheduleTraining"
												value={formData.scheduleTraining}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
											/>
											{errors.scheduleTraining && <p className="mt-1 text-sm text-red-400">{errors.scheduleTraining}</p>}
										</div>

										{/* Preferred Mode */}
										<div>
											<label htmlFor="preferredMode" className="block text-sm font-semibold text-gray-200 mb-2">
												Preferred Mode of Training <span className="text-red-400">*</span>
											</label>
											<select
												id="preferredMode"
												name="preferredMode"
												value={formData.preferredMode}
												onChange={handleChange}
												className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
											>
												<option value="" className="bg-slate-800">
													Select mode
												</option>
												<option value="Online" className="bg-slate-800">
													Online
												</option>
												<option value="In-person" className="bg-slate-800">
													In-person
												</option>
												<option value="Hybrid" className="bg-slate-800">
													Hybrid
												</option>
											</select>
											{errors.preferredMode && <p className="mt-1 text-sm text-red-400">{errors.preferredMode}</p>}
										</div>
									</div>

									{/* Number of Participants */}
									<div>
										<label htmlFor="numberOfParticipants" className="block text-sm font-semibold text-gray-200 mb-2">
											Number of Participants <span className="text-red-400">*</span>
										</label>
										<select
											id="numberOfParticipants"
											name="numberOfParticipants"
											value={formData.numberOfParticipants}
											onChange={handleChange}
											className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
										>
											<option value="" className="bg-slate-800">
												Select number of participants
											</option>
											<option value="1-50" className="bg-slate-800">
												1-50
											</option>
											<option value="50-100" className="bg-slate-800">
												50-100
											</option>
											<option value="More than 100" className="bg-slate-800">
												More than 100
											</option>
										</select>
										{errors.numberOfParticipants && <p className="mt-1 text-sm text-red-400">{errors.numberOfParticipants}</p>}
									</div>

									{/* Additional Comments */}
									<div>
										<label htmlFor="additionalComments" className="block text-sm font-semibold text-gray-200 mb-2">
											Any Other Comments / Specific Requirements?
										</label>
										<textarea
											id="additionalComments"
											name="additionalComments"
											value={formData.additionalComments}
											onChange={handleChange}
											rows="4"
											className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
											placeholder="Share any additional information or specific requirements..."
										/>
									</div>
								</motion.div>
							)}

							{/* Conditional Fields for Course/Batch Enquiries */}
							{showCourseFields && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									className="space-y-6 border-t border-white/10 pt-6"
								>
									<h3 className="text-xl font-semibold  text-yellow-400 mb-4">Course Details</h3>

									{/* Select Course */}
									<div>
										<label htmlFor="selectedCourse" className="block text-sm font-semibold text-gray-200 mb-2">
											Select Course <span className="text-red-400">*</span>
										</label>
										<select
											id="selectedCourse"
											name="selectedCourse"
											value={formData.selectedCourse}
											onChange={handleChange}
											className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
										>
											<option value="" className="bg-slate-800">
												Select a course
											</option>
											{courses.map((course) => (
												<option key={course} value={course} className="bg-slate-800">
													{course}
												</option>
											))}
										</select>
										{errors.selectedCourse && <p className="mt-1 text-sm text-red-400">{errors.selectedCourse}</p>}
									</div>

									{/* Enquiry Details */}
									<div>
										<label htmlFor="enquiryDetails" className="block text-sm font-semibold text-gray-200 mb-2">
											Enquire About Batches / Availability <span className="text-red-400">*</span>
										</label>
										<textarea
											id="enquiryDetails"
											name="enquiryDetails"
											value={formData.enquiryDetails}
											onChange={handleChange}
											rows="4"
											className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
											placeholder="Please describe what you'd like to know about batches, timing, duration, fees, etc."
										/>
										{errors.enquiryDetails && <p className="mt-1 text-sm text-red-400">{errors.enquiryDetails}</p>}
									</div>

									{/* Preferred Mode */}
									<div>
										<label htmlFor="preferredMode" className="block text-sm font-semibold text-gray-200 mb-2">
											Preferred Mode of Training <span className="text-red-400">*</span>
										</label>
										<select
											id="preferredMode"
											name="preferredMode"
											value={formData.preferredMode}
											onChange={handleChange}
											className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
										>
											<option value="" className="bg-slate-800">
												Select mode
											</option>
											<option value="Online" className="bg-slate-800">
												Online
											</option>
											<option value="In-person" className="bg-slate-800">
												In-person
											</option>
											<option value="Hybrid" className="bg-slate-800">
												Hybrid
											</option>
										</select>
										{errors.preferredMode && <p className="mt-1 text-sm text-red-400">{errors.preferredMode}</p>}
									</div>
								</motion.div>
							)}

							{/* Submit Button */}
							<motion.button
								type="submit"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="w-full py-4 px-8 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
							>
								Submit Enquiry
							</motion.button>
						</form>
					</motion.div>

					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
					>
						{/* Email */}
						<div className="glass-card rounded-2xl p-6 text-center backdrop-blur-xl bg-white/5 border border-white/10">
							<div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-white font-semibold mb-2">Email</h3>
							<a
								href="mailto:samrataiandbi@gmail.com"
								className="text-white hover:text-red-300 transition-colors font-semibold text-sm sm:text-base"
								aria-label="Send email to Samrat Mukherjee"
							>
								samrataiandbi@gmail.com
							</a>
						</div>

						{/* Phone */}
						<div className="glass-card rounded-2xl p-6 text-center backdrop-blur-xl bg-white/5 border border-white/10">
							<div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
							</div>
							<h3 className="text-white font-semibold mb-2">Phone</h3>
							<a
								href="tel:+919810803676"
								className="text-white hover:text-red-300 transition-colors font-semibold text-sm sm:text-base"
								aria-label="Call Samrat Mukherjee"
							>
								+91 98108 03676
							</a>
						</div>

						{/* Location */}
						<div className="glass-card rounded-2xl p-6 text-center backdrop-blur-xl bg-white/5 border border-white/10">
							<div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<h3 className="text-white font-semibold mb-2">Location</h3>
							<p className="text-white text-sm font-bold">Ghaziabad, India</p>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
