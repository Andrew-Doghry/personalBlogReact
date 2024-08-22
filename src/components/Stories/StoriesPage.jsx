import { NavLink, useParams } from "react-router-dom"
import collections from "./StoriesData"
import { useEffect } from "react"
import { motion, useScroll } from 'framer-motion'
export default function StoriesPage() {
	const { collectionId } = useParams()
	const target = collections[collectionId.toString()]
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	const { scrollYProgress } = useScroll()
	return (
		<>
			<motion.div className='fixed top-0 right-0 left-0 z-200 origin-left bg-flareOrange h-[5px] w-full' style={{ scaleX: scrollYProgress }}></motion.div>
			<div className="p-5 mt-10 mx-auto sm:p-10 md:p-16 dark:text-gray-800 container">
				<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
					<div alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" style={{ backgroundImage: `url(${target.imgsLink.type})`, backgroundPosition: "center center", backgroundSize: "cover" }}></div>
					<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-100">
						<div className="space-y-2">
							<div rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl capitalize">{target.title}</div>
							<p className="text-xs dark:text-gray-600">By
								<a rel="noopener noreferrer" href="#" className="text-xs hover:underline "> mk</a>
							</p>
						</div>
						<div className="dark:text-gray-800">
							<pre className="whitespace-pre-wrap">{target.content}</pre>
						</div>
					</div>
				</div>
			</div>
			<div className="container text-center text-white mx-auto my-10">
				<NavLink className={"Container"} to={"/stories"}>
					<buttion className="bg-blue-900 px-5 py-2 rounded-lg shadow-lg shadow-blue-400/10 ">
						Back to stories
					</buttion>
				</NavLink>
			</div>
		</>
	)
}

// eslint-disable-next-line no-undef
