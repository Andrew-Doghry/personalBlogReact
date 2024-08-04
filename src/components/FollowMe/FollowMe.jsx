import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function FollowMe() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center text-white space-y-8">
      <div className="flex justify-center items-center">
        <div className="capitalize">about the <span className="text-flareOrange">
          author:
        </span></div>
        <a target="_blank" className="mx-2 hover:text-blue-600 transition" title="facebook"
          href="https://facebook.com/ahmed-mostafa"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a target="_blank" title="instagram" className="mx-2 hover:text-orange-600 transition" href="https://insagram.com/ahmedmk.1">
          <FontAwesomeIcon icon={faInstagram} />

        </a>
        <a target="_blank" title="x.com" className="mx-2 hover:text-black transition" href="https://x.com/ahmedmk.1">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>
      <div className="flex justify-center items-center">
        <div className="capitalize">about the <span className="text-flareOrange">
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
    </div >
  )
}

export default FollowMe