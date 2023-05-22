'use client'

import { useEffect, useState } from 'react'
import './globals.css'
import localFont from 'next/font/local'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ppMori = localFont({ src: '/assets/PPMori.otf' })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [color, setColor] = useState('#000000')
	const pathname = usePathname()
	const [isModalOpen, setIsModalOpen] = useState(false)

	useEffect(() => {
		if (pathname === '/' && !isModalOpen) {
			setColor('#FFFFFF')
		} else {
			setColor('#000000')
		}
	}, [pathname, isModalOpen])

	useEffect(() => {
		const body = document.getElementsByTagName('body')[0]
		if (isModalOpen) {
			body.style.backgroundColor = '#FFFFFF' // Set the background color to white when the modal is open
			body.style.overflow = 'hidden' // Disable scrolling when the modal is open
		} else {
			body.style.backgroundColor = '' // Reset the background color
			body.style.overflow = '' // Enable scrolling
		}
	}, [isModalOpen])

	return (
		<html lang="en" className="antialiased">
			<body className={ppMori.className}>
				<div className="flex items-center justify-between h-1/4  space-6  sm:ml-32 ml-4">
					<Link href="/">
						<svg
							id="Layer_1"
							width="300"
							height="100"
							style={{ fill: color }}
							className="z-10 sm:w-auto w-2/3"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1057.4 155.5"
							onClick={() => setIsModalOpen(false)}
							// className="absolute top-5 left-5 z-10 w-3/12"
						>
							{/* SVG paths */}
							<path d="m42.92,52.29v72.09H14.2V52.29H0v-21.22h14.2V0h28.72v31.07h13.87v21.17h-13.87v.05Z" />
							<path d="m107,127.21c-29.43,0-51.76-20.99-51.76-49.6s22.33-49.6,51.76-49.6,51.76,20.99,51.76,49.6-22.33,49.6-51.76,49.6Zm0-73.1c-13.35,0-23.04,10.9-23.04,23.54s9.68,23.54,23.04,23.54,23.04-10.91,23.04-23.54-9.68-23.54-23.04-23.54Z" />
							<path d="m286.92,124.38v-49.6c0-10.27-1.36-20.67-14.72-20.67s-15.94,8.76-15.94,19.35v50.92h-28.72v-50.78c0-9.58-2.26-19.48-14.39-19.48-13.35,0-16.27,9.76-16.27,20.67v49.6h-28.72V31.07h26.84v9.9h.33c5.55-9.58,15.61-13.1,26.51-13.1,12.46,0,21.81,6.07,27.69,16.65,6.91-10.59,17.49-16.65,30.46-16.65,9.54,0,18.52,2.69,25.29,9.4,10.91,10.77,10.39,21.86,10.39,36.14v50.92h-28.77v.05Z" />
							<path d="m422.36,127.39c-28.72,0-51.43-22.04-51.43-49.92s22.19-49.6,50.73-49.6c24.59,0,45.88,15.47,50.92,39.15h-29.1c-4.14-8.76-11.61-13.1-21.48-13.1-13.87,0-22.19,11.09-22.19,23.68s8.84,23.68,22.85,23.68c9.54,0,16.45-4.38,20.78-12.46h29.29c-5.5,22.95-26.09,38.56-50.35,38.56Z" />
							<path d="m510.18,73.1v51.29h-28.72V31.07h27.03v9.9h.33c5.03-9.58,12.98-13.1,24.07-13.1v28.06c-12.69.36-22.71,2.74-22.71,17.16Z" />
							<path d="m608.34,124.38v-10.08h-.33c-5.22,9.58-17.67,13.28-28.07,13.28-29.62,0-48.33-22.18-48.33-49.92s19.42-49.73,48.33-49.73c10.58,0,22.33,3.88,28.07,13.1h.33v-9.95h28.73v93.26h-28.73v.05Zm-24.26-70.45c-14.01,0-23.74,10.77-23.74,24.05s10.39,23.54,23.88,23.54,24.07-10.4,24.07-23.86c.04-13.64-10.16-23.73-24.21-23.73Z" />
							<path d="m769.92,124.38v-49.6c0-10.27-1.36-20.67-14.71-20.67s-15.94,8.76-15.94,19.35v50.92h-28.73v-50.78c0-9.58-2.25-19.48-14.39-19.48-13.35,0-16.27,9.76-16.27,20.67v49.6h-28.72V31.07h26.84v9.9h.33c5.55-9.58,15.61-13.1,26.51-13.1,12.46,0,21.81,6.07,27.69,16.65,6.91-10.59,17.49-16.65,30.46-16.65,9.54,0,18.53,2.69,25.29,9.4,10.91,10.77,10.39,21.86,10.39,36.14v50.92h-28.77v.05Z" />
							<path d="m869.68,127.58c-11.42,0-21.11-3.38-28.91-11.59v39.51h-28.73V31.07h27.03v10.27h.52c7.43-9.08,18.19-13.46,29.95-13.46,29.8,0,46.92,23.68,46.92,50.74-.05,26.1-18.71,48.96-46.78,48.96Zm-6.06-73.64c-13.87,0-24.07,10.59-24.07,23.86s10.39,23.68,24.07,23.68,24.07-10.59,24.07-23.68-10.2-23.86-24.07-23.86Z" />
							<path d="m925.77,21.17V0h28.72v21.17h-28.72Zm0,103.21V31.07h28.72v93.26h-28.72v.05Z" />
							<path d="m1028.63,124.38v-50.92c0-10.4-2.07-19.35-15.04-19.35s-16.45,8.4-16.45,19.48v50.74h-28.73V31.07h26.84v9.9h.33c6.06-9.58,14.53-13.1,26.14-13.1,8.13,0,18.34,3.01,24.59,8.08,9.17,7.39,11.09,19.16,11.09,30.07v58.31h-28.77v.05Z" />
						</svg>
					</Link>

					{isModalOpen ? (
						<>
							<svg
								width="29"
								height="29" // Adjust the height to fit the SVG lines
								viewBox="0 0 25 25" // Adjust the viewBox to fit the SVG lines
								xmlns="http://www.w3.org/2000/svg"
								className="z-10 cursor-pointer sm:mr-32 mr-4"
								onClick={() => setIsModalOpen(false)} // Close the modal by setting isModalOpen to false
							>
								{/* SVG lines */}
								<line
									x1="2.12132"
									y1="3.13173"
									x2="22.6274"
									y2="23.6378"
									stroke={color}
									strokeWidth="6" // Use "strokeWidth" instead of "stroke-width"
								/>
								<line
									x1="2.12477"
									y1="23.3848"
									x2="22.6309"
									y2="2.87868"
									stroke={color}
									strokeWidth="6" // Use "strokeWidth" instead of "stroke-width"
								/>
							</svg>
						</>
					) : (
						<svg
							width="25"
							height="26"
							viewBox="0 0 25 26"
							xmlns="http://www.w3.org/2000/svg"
							className="z-10 cursor-pointer sm:mr-32 mr-4"
							onClick={() => setIsModalOpen(true)} // Open the modal by setting isModalOpen to true
						>
							{/* SVG lines */}
							<line y1="3" x2="29" y2="3" stroke={color} stroke-width="6" />
							<line y1="15" x2="29" y2="15" stroke={color} stroke-width="6" />
						</svg>
					)}
				</div>

				{isModalOpen ? (
					<div className="">
						{/* <div className="modal-content flex flex-col text-9xl justify-end  sm:text-[150px] font-bold">
							
							<a
								href="/work"
								className="modal-link duration-700 hover:opacity-50 "
							>
								work
							</a>
							<a
								href="/about"
								className="modal-link duration-700 hover:opacity-50 "
							>
								about
							</a>
							<a
								href="mailto:tom@tomcrampin.com"
								className="modal-link duration-700 hover:opacity-50 "
							>
								contact
							</a>
						</div> */}
						<div className="modal-content font-medium mb-6 ml-4 flex h-screen flex-col justify-end pb-28 sm:ml-32 sm:mb-4">
							<motion.div>
								<Link
									href="/work"
									className="text-7xl  text-black duration-700 hover:opacity-50 sm:text-[150px]"
									onClick={() => setIsModalOpen(false)}
								>
									work
								</Link>
							</motion.div>
							<Link
								href="/about"
								className="text-7xl  text-black duration-700 hover:opacity-50 sm:text-[150px]"
								onClick={() => setIsModalOpen(false)}
							>
								about
							</Link>
							<Link
								href="mailto:tom@tomcrampin.com"
								className="text-7xl  text-black duration-700 hover:opacity-50 sm:text-[150px]"
								onClick={() => setIsModalOpen(false)}
							>
								contact
							</Link>
						</div>
					</div>
				) : (
					children // Render the children when the modal is closed
				)}
			</body>
		</html>
	)
}
