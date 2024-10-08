import { NavLink } from "react-router-dom"
import Pieces from "./Pieces";
function Home() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8 homeSection min-h-screen">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          {/* <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      /> */}
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 shadow-md">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="dropShadow relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 border-white border ring-gray-900/10 hover:ring-gray-900/20">
              Announcing my new writings .{' '}
              <NavLink to={'/coll'} className=" text-red-200 dropShadow font-bold ">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              feelings and toughts into <span className=' text-flareOrange  dropShadow font-extrabold'>
                words
              </span>
            </h1>
            {/* <p className="mt-6 text-lg leading-8 text-white">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="/coll"
                className="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 transition"
              >
                Start Reading
              </NavLink>
              <NavLink to="/stories" className="text-sm font-semibold leading-6 text-white">
                see Stories <span aria-hidden="true">→</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <Pieces />

    </>

  )
}

export default Home