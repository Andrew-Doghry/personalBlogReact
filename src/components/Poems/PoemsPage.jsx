import { NavLink, useParams } from "react-router-dom"
import collections from "./PoemsData" 

export default function PoemsPage() {
  const {collectionId} = useParams()  
  const target = collections[collectionId.toString()]
  
  return (
<>
<div className="p-5 mt-10 mx-auto sm:p-10 md:p-16 dark:text-gray-800 container">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<div alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" style={{backgroundImage:`url(${target.imgsLink.type})`,backgroundPosition:"center center",backgroundSize:"cover"}}></div>
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-100">
			<div className="space-y-2">
				<div rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl capitalize">{target.title}</div>
				<p className="text-xs dark:text-gray-600">By  
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline "> mk</a>
				</p>
			</div>
			<div className="dark:text-gray-800">
				<p>{target.content}</p>
			</div>
		</div>
	</div>
</div> 
<div className="container text-center text-white mx-auto my-10">
  <NavLink className={"Container"} to={"/collections"}>
    <buttion className="bg-blue-900 px-5 py-2 rounded-lg shadow-lg shadow-blue-400/10 ">
    Back to collections
    </buttion>
    </NavLink>
</div>
</>
  ) 
}

// eslint-disable-next-line no-undef
