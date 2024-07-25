import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    // bg-[#71387b]
    // [#71387b]/50
    <div className= "py-3 px-2 w-screen bg-blue-900 footer  text-white mt-4">
    <div className="flex justify-between container items-center ">
    <span className='logo text-white' >m<span className='text-orange-600'>k</span></span>
    <span className="capitalize">ahmedMK<span className="text-orange-600 font-thin ">&copy;</span>2024 </span>
      <div className=" ">

<a className="mx-2 hover:text-blue-600 transition"
href="https://facebook.com/ahmed-mostafa"
>
    <FontAwesomeIcon icon={faFacebook} />
</a>
 <a className="mx-2 hover:text-orange-600 transition" href="https://insagram.com/ahmedmk.1">
    <FontAwesomeIcon icon={faInstagram} />

 </a>
 <a className="mx-2 hover:text-black transition" href="https://x.com/ahmedmk.1">
    <FontAwesomeIcon icon={faXTwitter} />
 </a>
      </div>
       
    </div>
    </div>
  )
}

export default Footer