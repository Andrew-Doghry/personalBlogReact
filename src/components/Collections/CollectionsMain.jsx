
const collection={
  description:"collection of individual writings that may touch",
  tags:["sad","mind_blowing","welcome_soul"],
   time:"3",
   views:"1,412"
}

import {  Outlet, useParams } from 'react-router-dom';
import Coll from './Coll.jsx';

function Collections() {
  const {collId} = useParams()

  return (
<>
{collId?<Outlet/>:
    <div className=" container px-6 py-16 mx-auto  space-y-12 text-white">
	<article className="space-y-8 ">
		<div className="space-y-6">
			<h1 className="font-bold md:tracking-tight md:text-5xl  text-center capitalize tracking-tighter text-2xl lg:text-8xl">collections</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
				<div className="flex items-center md:space-x-2">
					<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full bg-gray-500 border-gray-300" />
					<p className="text-sm">{collection.description}</p>
				</div>
				<p className="flex-shrink-0 mt-3 text-sm md:mt-0">Average {collection.time} min read • {collection.views} views</p>
			</div>
		</div>
			<h4 className="text-lg font-semibold text-flareOrange border-b pb-5 border-dashed">Related titles </h4>
		<div className="">
  <Coll/>

    </div>
	</article>
	<div>
    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600 " >
    {collection.tags.map(function(tag ,index){
      return(
          <a key={index} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline  bg-blue-900 text-gray-50">#{tag}</a>
        )
      })}
      </div>

	</div>
</div>
}

</>
  )
}

export default Collections;