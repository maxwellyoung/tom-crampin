import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tom Crampin | Home',
	description: 'Tom Crampin. Motion designer based in Auckland, New Zealand',
	keywords:
		'motion design, creative, new zealand, auckland, artist, sound design, creative',
	creator: 'Maxwell Young',
	referrer: 'origin-when-cross-origin',
}

export default function Home() {
	return (
		<>
			<main className="">
				<div className="inset-0 z-[-1] fixed top-0 left-0 w-screen h-screen">
					<video
						className="h-full w-full bg-[#c0bbbe] object-cover"
						src="/toms_desk.mp4"
						loop
						muted
						autoPlay
						preload="auto"
					/>
				</div>
			</main>
		</>
	)
}
