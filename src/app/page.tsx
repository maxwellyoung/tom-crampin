import Image from 'next/image'

export default function Home() {
	return (
		<main className="">
			<div className="absolute inset-0 z-[-1]">
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
