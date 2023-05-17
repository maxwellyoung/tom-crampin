import './globals.css'
import localFont from 'next/font/local'
const ppMori = localFont({ src: '/assets/PPMori.otf' })

export const metadata = {
	title: 'Tom Crampin',
	description: 'Motion Designer from Auckland, New Zealand',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={ppMori.className}>{children}</body>
		</html>
	)
}
