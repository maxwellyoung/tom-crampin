import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tom Crampin | Work',
	description: 'Tom Crampin. Motion designer based in Auckland, New Zealand',
	keywords:
		'motion design, creative, new zealand, auckland, artist, sound design, creative',
	creator: 'Maxwell Young',
	referrer: 'origin-when-cross-origin',
}

export default function Work() {
	return (
		<>
			<div>
				<iframe
					src="https://player.vimeo.com/video/792070929?h=52e59801c3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
					allow="autoplay; fullscreen; picture-in-picture"
					allowFullScreen
					className="z-[-1]"
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
					}}
					title="Tom Crampin Motion Reel 2023"
				></iframe>
			</div>
		</>
	)
}
