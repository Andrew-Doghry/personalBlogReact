'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon ,} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'


const navigation = [
  { name: 'Home', to: '' },
  { name: 'collections', to: 'coll' },
  { name: 'Poems', to: 'Poems' },
  { name: 'Stories', to: "Stories" },
  // { name: 'Coll', to: "coll" },
]




export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-b-white/20">
        <nav aria-label="Global" className="flex items-center justify-between px-6 py-2 lg:px-8">
          <div className="flex lg:flex-1">
            <NavLink to={'/'} className="-m-1.5 p-1.5">
            <span className='logo text-white' >m<span className='text-orange-600'>k</span></span>
              {/* <span className=" sr-only">Your Company</span> */}
              {/* <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className={`h-6 w-6 ${mobileMenuOpen?"hidden":""}`} />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink  key={item.name} to={item.to} className={({isActive})=>`text-sm font-semibold  transition leading-6 ${isActive?"text-orange-600 hover:text-orange-400":"text-white hover:text-gray-400"}`}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink to={"followme"} className={({isActive})=>`text-sm font-semibold leading-6 ${isActive?"text-orange-600 hover:text-orange-400":"text-white hover:text-gray-400"}`}>
              Follow me <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/90 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink to={"/"} className="-m-1.5 p-1.5">
{/* the logo  */}
                {/* <span className="sr-only">Your Company</span>
                <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
                /> */}
                            <span className='logo' >m<span className='text-orange-600'>k</span></span>

              </NavLink>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6 " />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({isActive})=>`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7   ${isActive?"text-orange-600":"text-blue-900"}`}
                      // text-gray-900
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="py-6">
                  <NavLink
                    to="followme"
                    className={({isActive})=>`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7   ${isActive?"text-orange-600":"text-blue-900"}`}
                  >
                    Follow me
                  </NavLink>
                </div>
              </div>
            </div>
          </DialogPanel>

        </Dialog>
      </header>
                

     
    </div>
  )
}
