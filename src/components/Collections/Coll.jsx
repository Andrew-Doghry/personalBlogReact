import { NavLink, } from 'react-router-dom'
import collData from "./CollData"



function Coll() {
    let collectionData = Object.entries(collData)
    console.log(collectionData)
    return (
        <div className=''>
            {/* {collId?<Outlet/>: */}
            {collectionData.map(ele => {
                return (
                    <div key={+ele[0]}>
                        <Collection MainTime={ele[1].time} MainTItle={ele[1].title} mainDescription={ele[1].Description} articles={ele[1].articles} collectionId={ele[0]} collectionImg={ele[1].collectionImg} />
                    </div>
                )
            })}
        </div>

    )
}
// eslint-disable-next-line react/prop-types
function Collection({ MainTItle, MainTime, mainDescription, articles, collectionId, collectionImg }) {
    let contents = Object.entries(articles)
    console.log(contents)
    return (
        <div className="bg-gray-100 text-gray-900 mt-16 container overflow-hidden lg:rounded-xl">
            <div className="container grid grid-cols-12 mx-auto">
                <div className="flex flex-col justify-center col-span-12 align-middle bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto" style={{ backgroundImage: `url(${collectionImg})`, backgroundPosition: " center center", backgroundBlendMode: "multiply", backgroundSize: " cover" }}>
                    <div className="flex flex-col items-center p-8 py-12 text-center text-white">
                        <span>{MainTime}</span>
                        <h1 className="py-4 text-5xl font-bold">{MainTItle}</h1>
                        <p className="pb-6">{mainDescription}!</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
                    {
                        contents.map(ele => {
                            return (
                                <NavLink key={ele[0]} to={`/coll/${collectionId}${ele[0]}`}>
                                    <CollectionPiece Title={ele[1].title} description={ele[1].description} time={ele[1].time} />
                                </NavLink>
                            )
                        })
                    }

                </div>
            </div>

        </div>

        // </>

    )
}

export default Coll









// eslint-disable-next-line react/prop-types
function CollectionPiece({ Title, description, time }) {
    return (
        <>
            <div className="pt-6 pb-4 space-y-2">
                <span>{time}</span>
                <h1 className="text-3xl font-bold">{Title}</h1>
                <p>{description}</p>
                <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm text-violet-600">
                    <NavLink to={'/coll/'}>Read more</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </>
    )
}