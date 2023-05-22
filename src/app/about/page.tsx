import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Tom Crampin | About',
	description: 'Tom Crampin. Motion designer based in Auckland, New Zealand',
	keywords:
		'motion design, creative, new zealand, auckland, artist, sound design, creative',
	creator: 'Maxwell Young',
	referrer: 'origin-when-cross-origin',
}

export default function About() {
	return (
		<>
			<div className="flex  flex-col justify-center bg-white py-4 pt-28 text-black">
				<div className="flex flex-1 flex-row justify-center   sm:mx-32 mx-4">
					<div className="text-left">
						<div className="mt-16 flex justify-between">
							<p className="white text-md mt-3 w-3/12 sm:text-xl">
								So, who are you?
							</p>
							<p className="white mt-3 w-9/12 text-3xl sm:text-6xl">
								Hello, <br />
								<br />I am a Motion Designer from Auckland, New Zealand telling
								stories and building character through animation, sound, and
								other mediums. <br />
								<br />
								Cheers, <br />
								Tom Crampin.
							</p>
							<hr className="mt-28 h-px border-0 bg-gray-200 dark:bg-gray-700" />
						</div>

						<div className="mt-16 flex justify-between">
							<p className="white text-md mt-3 w-3/12 sm:text-xl">
								What do you do?
							</p>
							<p className="white mt-3 w-9/12 text-3xl sm:text-6xl">
								Motion Graphics
								<br />
								Product Renders
								<br />
								Sound Design
							</p>
							<hr className="mt-28 h-px border-0 bg-gray-200 dark:bg-gray-700" />
						</div>

						<div className="mt-16 flex justify-between">
							<p className="white text-md mt-3 w-3/12 sm:text-xl">
								What do you do with it?
							</p>
							<p className="white mt-3 w-9/12 text-3xl sm:text-6xl">
								<a className="line-through" href="https://milk.co.nz/">
									Milk
								</a>
								<br />
								<a className="line-through" href="https://designworks.com/">
									Designworks
								</a>
								<br />
								<a
									className="line-through"
									href="https://www.studiosouth.co.nz/"
								>
									Studio South
								</a>
								<br />
								<a className="line-through" href="https://www.mccarthy.studio/">
									McCarthy Studio
								</a>
								<br />
								<a
									className="line-through"
									href="https://www.hellolikeminds.co.nz/"
								>
									Likeminds
								</a>
								<br />
								<a className="line-through" href="https://heyyou.co/">
									HeyYou
								</a>
								<br />
								<a className="line-through" href="https://sussudio.co.nz/">
									Sussudio
								</a>
								<br />
								<a
									className="line-through"
									href="https://www.workgroupstudio.com/"
								>
									WorkGroup
								</a>
							</p>
							<hr className="mt-28 h-px border-0 bg-gray-200 dark:bg-gray-700" />
						</div>
						<div className="mt-16 flex justify-between">
							<p className="white text-md mt-3 w-3/12 sm:text-xl">
								Don&apos;t be shy
							</p>
							<div className="w-9/12 ">
								<a
									className="white mt-3 text-xl sm:text-6xl line-through"
									href="mailto:tom@tomcrampin.com"
								>
									tom@tomcrampin.com
								</a>
								<br />
								<a
									className="white mt-3 pb-28 text-3xl sm:text-6xl line-through"
									href="https://www.instagram.com/tomcrampin/"
								>
									Instagram
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
