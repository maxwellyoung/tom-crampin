export default function Home() {
	return (
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
	)
}
