import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    // bg-[#71387b]
    // [#71387b]/50
    <div className="py-3 px-2 w-screen bg-blue-900 footer  text-white mt-4">
      <div className="flex justify-between container items-center ">
        <div>
          <div className=" ">

            <a target="_blank" className="mx-2 hover:text-blue-600 transition"
              href="https://facebook.com/ahmed-mostafa"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a target="_blank" className="mx-2 hover:text-orange-600 transition" href="https://insagram.com/ahmedmk.1">
              <FontAwesomeIcon icon={faInstagram} />

            </a>
            <a target="_blank" className="mx-2 hover:text-black transition" href="https://x.com/ahmedmk.1">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>

        </div>
        <span className="capitalize">            <span className='logo text-white' >m<span className='text-orange-600'>k</span></span>
          <span className="text-orange-600 font-normal text-2xl ">&copy;</span>2024 </span>
        <div className="flex justify-center items-center">
          <div className="capitalize"> <span className="text-flareOrange">
            developer:
          </span>
          </div>
          <a target="_blank" className="mx-2 hover:text-blue-600 transition" title="facebook"
            href="https://www.facebook.com/andrew.doghry"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a title="instagram" target="_blank" className="mx-2 hover:text-orange-600 transition" href="https://www.instagram.com/andrewdoghry">
            <FontAwesomeIcon icon={faInstagram} />

          </a>
          <a title="x.com" target="_blank" className="mx-2 hover:text-black hover:drop-shadow-lg hover:drop-shadow-white transition " href="https://x.com/its_Dohh">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Footer