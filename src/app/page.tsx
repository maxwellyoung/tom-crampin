import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="bg-video-wrap absolute inset-0 z-[-1]">
				<video
					className="h-full w-full bg-white object-cover"
					src="/toms_desk.mp4"
					loop
					muted
					autoPlay
					preload="true"
				/>
			</div>
		</main>
	)
}
