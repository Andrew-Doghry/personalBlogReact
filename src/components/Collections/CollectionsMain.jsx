
const collection={
  description:"collection of individual writings that may touch",
  // realtedWritings:[],
  tags:["sad","mind_blowing","welcome_soul"],
   time:"3",
   views:"1,412"
}

import { NavLink, Outlet, useParams } from 'react-router-dom';
import collectionContent from './collectionsdata.jsx'



function Collections() {
  const {collectionId} = useParams()
  let collectionData = Object.entries( collectionContent);
  return (
<>
{collectionId?<Outlet/>:
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 text-white">
	<article className="space-y-8 ">
		<div className="space-y-6">
			<h1 className="font-bold md:tracking-tight md:text-5xl  text-center capitalize tracking-tighter text-2xl lg:text-8xl">collections</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
				<div className="flex items-center md:space-x-2">
					<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
					<p className="text-sm">{collection.description}</p>
				</div>
				<p className="flex-shrink-0 mt-3 text-sm md:mt-0">Average {collection.time} min read • {collection.views} views</p>
			</div>
		</div>
			<h4 className="text-lg font-semibold text-flareOrange border-b pb-5 border-dashed">Related titles </h4>
		<div className="">
    {
      
        collectionData.map(ele=>{return(
          <NavLink key={ele[0]} to={`/collections/${ele[0]}`}>
        <Post  imgSrc={ele[1].imgsLink.type} time={ele[1].time} description={ele[1].content.slice(0,120)+'...'} title={ele[1].title} />
        <br />
      </NavLink>
      ) 
    })
  }

    </div>
	</article>
	<div>
    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600 " >
    {collection.tags.map(function(tag ,index){
      return(
          <a key={index} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-flarePurple/60 dark:text-gray-50">#{tag}</a>
        )
      })}
      </div>

	</div>
</div>
}

</>
  )
}

export default Collections

 // eslint-disable-next-line react/prop-types
 function Post({title,description,time,imgSrc}) {
  return (
    <div className="dark:bg-[#020C12] text-white container rounded-2xl overflow-hidden cursor-pointer ">
    <div className="container grid grid-cols-12  dark:bg-[#020C12]">
      <div className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4 " style={{backgroundImage: `url(${imgSrc})`, backgroundPosition: "center center", backgroundBlendMode:" multiply", backgroundSize: "cover"}}></div>
      <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
        <div className="flex justify-start">
          <span className="px-2 py-1 text-xs rounded-full dark:bg-flarePurple dark:text-gray-50">collection</span>
        </div>
        <h1 className="text-3xl font-semibold hover:underline transition-underline my-2">{title}</h1>
        <p className="flex-1 pt-2">{description}</p>
        <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600">
          <span>Read more</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </a>
        <div className="text-end">

          <span className="text-xs ">{time} min read</span>
        </div>
      </div>
    </div>
  </div>
  )
}

/*
the structure will be as follows 
array of objects 
the array will be maped and the values of each object and render the post 


*/


// let a = [1,2,34,5,8,9]
