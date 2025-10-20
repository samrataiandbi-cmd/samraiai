"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { db, auth } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export default function AdminPanel() {
	const [queries, setQueries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState("all");
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginError, setLoginError] = useState("");
	const [loggingIn, setLoggingIn] = useState(false);

	// Check authentication state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user && (user.email === "yashkm@gmail.com" || user.email === "samrataiandbi@gmail.com")) {
				setIsAuthenticated(true);
				setLoading(false);
			} else {
				setIsAuthenticated(false);
				setLoading(false);
			}
		});

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		if (!isAuthenticated) return;

		// Set up real-time listener for queries
		const q = query(collection(db, "queries"), orderBy("timestamp", "desc"));

		const unsubscribe = onSnapshot(
			q,
			(querySnapshot) => {
				const queriesData = [];
				querySnapshot.forEach((doc) => {
					queriesData.push({
						id: doc.id,
						...doc.data(),
					});
				});
				setQueries(queriesData);
				setLoading(false);
			},
			(error) => {
				console.error("Error fetching queries:", error);
				setLoading(false);
			}
		);

		// Cleanup subscription on unmount
		return () => unsubscribe();
	}, [isAuthenticated]);

	// Handle login
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoginError("");
		setLoggingIn(true);

		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const allowedEmails = ["yashkm@gmail.com", "samrataiandbi@gmail.com"];
			if (!allowedEmails.includes(userCredential.user.email)) {
				await signOut(auth);
				setLoginError("Unauthorized access. Access denied.");
			}
		} catch (error) {
			console.error("Login error:", error);
			if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
				setLoginError("Invalid email or password");
			} else {
				setLoginError("An error occurred. Please try again.");
			}
		} finally {
			setLoggingIn(false);
		}
	};

	// Handle logout
	const handleLogout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.error("Logout error:", error);
		}
	};

	// Filter queries based on selected filter
	const filteredQueries = queries.filter((query) => {
		if (filter === "all") return true;
		return query.reasonForContact === filter;
	});

	// Format timestamp
	const formatDate = (timestamp) => {
		if (!timestamp) return "N/A";
		const date = timestamp.toDate();
		return date.toLocaleString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	// Get badge color based on query type
	const getBadgeColor = (reasonForContact) => {
		switch (reasonForContact) {
			case "Corporate Training enquiry":
				return "bg-blue-500/20 text-blue-300 border-blue-500/30";
			case "College Training enquiry":
				return "bg-purple-500/20 text-purple-300 border-purple-500/30";
			case "Course enquiry":
				return "bg-green-500/20 text-green-300 border-green-500/30";
			case "Batch enquiry":
				return "bg-orange-500/20 text-orange-300 border-orange-500/30";
			case "Corporate Consultation":
				return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";
			default:
				return "bg-gray-500/20 text-gray-300 border-gray-500/30";
		}
	};

	// Show login screen if not authenticated
	if (!isAuthenticated) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-red-900 via-red-950 to-red-900 flex items-center justify-center px-4">
				{/* Background Effects */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
					<div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="w-full max-w-md relative z-10"
				>
					<div className="glass-card rounded-3xl p-8 backdrop-blur-xl bg-white/5 border border-white/10">
						<div className="text-center mb-8">
							<h1 className="text-4xl font-bold text-white mb-2">
								Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Login</span>
							</h1>
							<p className="text-gray-300">Access the admin panel</p>
						</div>

						<form onSubmit={handleLogin} className="space-y-6">
							<div>
								<label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
									placeholder="Enter your email"
								/>
							</div>

							<div>
								<label htmlFor="password" className="block text-sm font-semibold text-gray-200 mb-2">
									Password
								</label>
								<input
									type="password"
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
									placeholder="Enter your password"
								/>
							</div>

							{loginError && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									className="p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-sm"
								>
									{loginError}
								</motion.div>
							)}

							<button
								type="submit"
								disabled={loggingIn}
								className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{loggingIn ? "Logging in..." : "Login"}
							</button>
						</form>
					</div>
				</motion.div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-red-900 via-red-950 to-red-900">
			<Navigation />

			<section className="relative pt-32 pb-20 px-4 overflow-hidden">
				{/* Background Effects */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
					<div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
				</div>

				<div className="container mx-auto max-w-7xl relative z-10">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center mb-12"
					>
						<div className="flex justify-end mb-4">
							<button
								onClick={handleLogout}
								className="px-4 py-2 rounded-lg font-semibold bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 transition-all"
							>
								Logout
							</button>
						</div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
							Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Panel</span>
						</h1>
						<p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">Manage and review all enquiries from users</p>
					</motion.div>

					{/* Filter Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="flex flex-wrap gap-3 justify-center mb-8"
					>
						<button
							onClick={() => setFilter("all")}
							className={`px-4 py-2 rounded-lg font-semibold transition-all ${
								filter === "all"
									? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
									: "bg-white/10 text-gray-300 hover:bg-white/20"
							}`}
						>
							All ({queries.length})
						</button>
						<button
							onClick={() => setFilter("Corporate Training enquiry")}
							className={`px-4 py-2 rounded-lg font-semibold transition-all ${
								filter === "Corporate Training enquiry"
									? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
									: "bg-white/10 text-gray-300 hover:bg-white/20"
							}`}
						>
							Corporate Training
						</button>
						<button
							onClick={() => setFilter("College Training enquiry")}
							className={`px-4 py-2 rounded-lg font-semibold transition-all ${
								filter === "College Training enquiry"
									? "bg-purple-500 text-white shadow-lg shadow-purple-500/50"
									: "bg-white/10 text-gray-300 hover:bg-white/20"
							}`}
						>
							College Training
						</button>
						<button
							onClick={() => setFilter("Course enquiry")}
							className={`px-4 py-2 rounded-lg font-semibold transition-all ${
								filter === "Course enquiry"
									? "bg-green-500 text-white shadow-lg shadow-green-500/50"
									: "bg-white/10 text-gray-300 hover:bg-white/20"
							}`}
						>
							Course
						</button>
						<button
							onClick={() => setFilter("Batch enquiry")}
							className={`px-4 py-2 rounded-lg font-semibold transition-all ${
								filter === "Batch enquiry"
									? "bg-orange-500 text-white shadow-lg shadow-orange-500/50"
									: "bg-white/10 text-gray-300 hover:bg-white/20"
							}`}
						>
							Batch
						</button>
						<button
							onClick={() => setFilter("Corporate Consultation")}
							className={`px-4 py-2 rounded-lg font-semibold transition-all ${
								filter === "Corporate Consultation"
									? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
									: "bg-white/10 text-gray-300 hover:bg-white/20"
							}`}
						>
							Consultation
						</button>
					</motion.div>

					{/* Loading State */}
					{loading && (
						<div className="text-center py-20">
							<div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
							<p className="text-gray-300 mt-4">Loading queries...</p>
						</div>
					)}

					{/* No Queries */}
					{!loading && filteredQueries.length === 0 && (
						<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
							<div className="glass-card rounded-3xl p-12 backdrop-blur-xl bg-white/5 border border-white/10 max-w-md mx-auto">
								<svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
									/>
								</svg>
								<h3 className="text-xl font-semibold text-white mb-2">No Queries Found</h3>
								<p className="text-gray-400">
									{filter === "all" ? "No enquiries have been submitted yet." : `No ${filter} enquiries found.`}
								</p>
							</div>
						</motion.div>
					)}

					{/* Queries List */}
					{!loading && filteredQueries.length > 0 && (
						<div className="grid gap-6">
							{filteredQueries.map((queryItem, index) => (
								<motion.div
									key={queryItem.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.05 }}
									className="glass-card rounded-2xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
								>
									{/* Query Header */}
									<div className="flex flex-wrap items-start justify-between gap-4 mb-4">
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-3 mb-2">
												<span
													className={`px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeColor(
														queryItem.reasonForContact
													)}`}
												>
													{queryItem.reasonForContact}
												</span>
												<span className="text-sm text-gray-400">{formatDate(queryItem.timestamp)}</span>
											</div>
											<h3 className="text-xl font-bold text-white mb-1">{queryItem.name}</h3>
											<div className="flex flex-wrap gap-4 text-sm">
												<a href={`mailto:${queryItem.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
													📧 {queryItem.email}
												</a>
												<a href={`tel:${queryItem.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
													📞 {queryItem.phone}
												</a>
											</div>
										</div>
									</div>

									{/* Query Details */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
										{queryItem.organisationName && (
											<div>
												<p className="text-xs text-gray-400 mb-1">
													{queryItem.reasonForContact === "College Training enquiry" ? "College Name" : "Organisation Name"}
												</p>
												<p className="text-white font-semibold">{queryItem.organisationName}</p>
											</div>
										)}

										{queryItem.selectedCourse && (
											<div>
												<p className="text-xs text-gray-400 mb-1">Selected Course</p>
												<p className="text-white font-semibold">
													{queryItem.selectedCourse}
													{queryItem.otherCourse && ` - ${queryItem.otherCourse}`}
												</p>
											</div>
										)}

										{queryItem.scheduleTraining && (
											<div>
												<p className="text-xs text-gray-400 mb-1">Schedule Training For</p>
												<p className="text-white font-semibold">{queryItem.scheduleTraining}</p>
											</div>
										)}

										{queryItem.preferredMode && (
											<div>
												<p className="text-xs text-gray-400 mb-1">Preferred Mode</p>
												<p className="text-white font-semibold">{queryItem.preferredMode}</p>
											</div>
										)}

										{queryItem.numberOfParticipants && (
											<div>
												<p className="text-xs text-gray-400 mb-1">Number of Participants</p>
												<p className="text-white font-semibold">{queryItem.numberOfParticipants}</p>
											</div>
										)}

										{queryItem.enquiryDetails && (
											<div className="md:col-span-2">
												<p className="text-xs text-gray-400 mb-1">Enquiry Details</p>
												<p className="text-white">{queryItem.enquiryDetails}</p>
											</div>
										)}

										{queryItem.requirements && (
											<div className="md:col-span-2">
												<p className="text-xs text-gray-400 mb-1">Requirements</p>
												<p className="text-white">{queryItem.requirements}</p>
											</div>
										)}

										{queryItem.additionalComments && (
											<div className="md:col-span-2">
												<p className="text-xs text-gray-400 mb-1">Additional Comments</p>
												<p className="text-white">{queryItem.additionalComments}</p>
											</div>
										)}
									</div>
								</motion.div>
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
}
