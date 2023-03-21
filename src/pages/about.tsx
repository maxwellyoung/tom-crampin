// create a responsive about page with little text headers on the left and larger body text on the right side of the page

import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center bg-white py-4 pt-28 text-black">
        <main className="flex flex-1 flex-row justify-center px-40  ">
          <div className="text-left">
            <div className="mt-16 flex  flex-row justify-between">
              <p className="white mt-3 w-3/12 text-xl">So, who are you?</p>
              <p className="white mt-3 w-9/12 text-3xl sm:text-6xl">
                Hello, <br />
                <br />I am a Motion Designer from Auckland, New Zealand telling
                stories and building character through animation, sound, and
                other mediums. <br />
                Cheers, <br />
                <br />
                Tom Crampin.
                <hr className="mt-28 h-px border-0 bg-gray-200 dark:bg-gray-700" />
              </p>
            </div>

            <div className="mt-16 flex justify-between">
              <p className="white mt-3 w-3/12 text-xl">What do you do?</p>
              <p className="white mt-3 w-9/12 text-3xl sm:text-6xl">
                Motion Graphics <br />
                Product Renders
                <br />
                Sound Design
                <hr className="mt-28 h-px border-0 bg-gray-200 dark:bg-gray-700" />
              </p>
            </div>

            <div className="mt-16 flex justify-between">
              <p className="white mt-3 w-3/12 text-xl">
                What do you do with it?
              </p>
              <p className="white mt-3 w-9/12 text-3xl sm:text-6xl">
                Milk
                <br />
                Designworks
                <br />
                Studio South
                <br />
                McCarthy Studio
                <br />
                Likeminds
                <br />
                HeyYou Sussudio
                <br />
                WorkGroup
                <hr className="mt-28 h-px border-0 bg-gray-200 dark:bg-gray-700" />
              </p>
            </div>
            <div className="mt-16 flex justify-between">
              <p className="white mt-3 w-3/12  text-xl">Don&apos;t be shy</p>
              <div className="w-9/12 ">
                <Link
                  className="white mt-3 text-3xl sm:text-6xl"
                  href="mailto:tom@tomcrampin.com"
                >
                  tom@tomcrampin.com
                </Link>
                <br />
                <Link
                  className="white mt-3 pb-28 text-3xl sm:text-6xl"
                  href="https://www.instagram.com/tomcrampin/"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
