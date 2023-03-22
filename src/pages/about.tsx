import { motion } from "framer-motion";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Tom Crampin</title>
        <meta name="description" content="Tom Crampin Website" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex min-h-screen flex-col justify-center bg-white py-4 pt-28 text-black">
        <main className="flex flex-1 flex-row justify-center px-10 sm:px-40  ">
          <div className="text-left">
            <motion.div
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-16 flex justify-between"
            >
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
                <br />
                Tom Crampin.
                <hr className="mt-28 h-px border-0 bg-gray-200 dark:bg-gray-700" />
              </p>
            </motion.div>

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
                <hr className="mt-28 h-px border-0 bg-gray-200 dark:bg-gray-700" />
              </p>
            </div>

            <div className="mt-16 flex justify-between">
              <p className="white text-md mt-3 w-3/12 sm:text-xl">
                What do you do with it?
              </p>
              <p className="white mt-3 w-9/12 text-3xl sm:text-6xl">
                <motion.a
                  whileHover={{ opacity: 0.3 }}
                  href="https://milk.co.nz/"
                >
                  Milk
                </motion.a>
                <br />
                <motion.a
                  whileHover={{ opacity: 0.3 }}
                  href="https://designworks.com/"
                >
                  Designworks
                </motion.a>
                <br />
                <motion.a
                  whileHover={{ opacity: 0.3 }}
                  href="https://www.studiosouth.co.nz/"
                >
                  Studio South
                </motion.a>
                <br />
                <motion.a
                  whileHover={{ opacity: 0.3 }}
                  href="https://www.mccarthy.studio/"
                >
                  McCarthy Studio
                </motion.a>
                <br />
                <motion.a
                  whileHover={{ opacity: 0.3 }}
                  href="https://www.hellolikeminds.co.nz/"
                >
                  Likeminds
                </motion.a>
                <br />
                <motion.a
                  whileHover={{ opacity: 0.3 }}
                  href="https://sussudio.co.nz/"
                >
                  HeyYou Sussudio
                </motion.a>
                <br />
                <motion.a
                  whileHover={{ opacity: 0.3 }}
                  href="https://www.workgroupstudio.com/"
                >
                  WorkGroup
                </motion.a>
                <hr className="mt-28 h-px border-0 bg-gray-200 dark:bg-gray-700" />
              </p>
            </div>
            <div className="mt-16 flex justify-between">
              <p className="white text-md mt-3 w-3/12 sm:text-xl">
                Don&apos;t be shy
              </p>
              <div className="w-9/12 ">
                <motion.a
                  whileHover={{ opacity: 0.3 }}
                  className="white mt-3 text-xl sm:text-6xl"
                  href="mailto:tom@tomcrampin.com"
                >
                  tom@tomcrampin.com
                </motion.a>
                <br />
                <motion.a
                  whileHover={{ opacity: 0.3 }}
                  className="white mt-3 pb-28 text-3xl sm:text-6xl"
                  href="https://www.instagram.com/tomcrampin/"
                >
                  Instagram
                </motion.a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
