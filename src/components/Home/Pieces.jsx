

import CollectionsImg from '../../assets/images/Collections.jpg'
import poemsImg from '../../assets/images/poems.jpg'
import storiesImg from '../../assets/images/stories.jpg'

// eslint-disable-next-line react/prop-types
 function Piece({sample,name,imgsrc,isRight}) {
  return (
    // ${isRight?"flex-row-reverse md:flex-col sm:flex-col lg:flex-col":"flex-row md:flex-col sm:flex-col"}
    <section className={`object-cover container flex items-center justify-center mt-10  flex-col   ${isRight?"lg:flex-row":"lg:flex-row-reverse"} my-4`}>
  <div className=" py-8  text-center lg:py-16 lg:px-6">
      <figure className="max-w-screen-md mx-auto relative">
          <blockquote>
          <svg className="inline-block mr-2 h-12   text-gray-400 dark:text-flareOrange/50" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
              <p className="inline text-2xl font-medium text-gray-900 dark:text-white">{sample}</p>
          <svg className="absolute right-0 h-12 mx-auto mb-3 text-gray-400 dark:text-flareOrange/50 rotate-180 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
              {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> */}
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-oragne-600 dark:text-orange-600">{name}</div>
              </div>
          </figcaption>
      </figure>
  </div>
  <img src={imgsrc} alt="" className='w-80 h-80 rounded-lg md:w-64 md:h-64 '/>

</section>
  )
}





 
 function Pieces() {
  return (
    < div className='autoCarousal '>
  <Piece sample={"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."} name={"Collections"} imgsrc={CollectionsImg} isRight={true}/>
<Piece sample={"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."} name={"Poems"} imgsrc={poemsImg} />
<Piece sample={"Flowbite  It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."} name={"Stories"} imgsrc={storiesImg} isRight={true}/>

    </div>
  );
}


export default Pieces




