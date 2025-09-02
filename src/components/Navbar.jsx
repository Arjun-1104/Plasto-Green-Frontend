import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation } from '../data/data'
import plastoGreen from '../../public/plastoGreen.png'
import {reactIcons} from '../assets/assets/'
import {Link, useLocation} from 'react-router-dom'
import { UseAppStore } from '../store/store'
import { useEffect } from 'react'

const {SearchIcon, DownArrowIcon} = reactIcons

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const {activeNav, setActiveNav} = UseAppStore()
  const location = useLocation();;

  // sync zustand with url path
  useEffect(()=> {
    console.log(location)
    if(location.pathname === "/") setActiveNav("Home")
    else if(location.pathname.startsWith("/about")) setActiveNav("About")
    else if(location.pathname.startsWith("/contact")) setActiveNav("Contact")
    else if(location.pathname.startsWith("/products")) setActiveNav("products")

  },[location, setActiveNav])

  return (
   
    <Disclosure as="nav" className="fixed top-0 z-50 w-full bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 gap-x-2 flex items-center sm:hidden">
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button> */}

           
            
          {/* </div>   */}
            {/*Search Icon */}
            <Menu as="div" className="relative">
              <MenuButton className="relative flex rounded-full">
                {/* <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span> */}
                <div className='text-sm font-semibold flex items-center justify-center gap-0.5'>
                  <span>English</span>
                  <DownArrowIcon size={20} className=""/>
                  {/* <Bars3Icon aria-hidden="true" className="block size-10 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-10 group-data-open:block" /> */}
                  </div>
              </MenuButton>
              <MenuItems
                transition
                className="absolute z-100 right-0 mt-2 w-20 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-1 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    English
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-1 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Hindi
                  </a>
                </MenuItem>
                {/* <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    
                  </a>
                </MenuItem> */}
              </MenuItems>
            </Menu>
             <button
              type="button"
              className="relative text-gray-500 hover:text-black"
            >
              <SearchIcon aria-hidden="true" className="size-8" />
            </button>
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md  text-gray-500 hover:text-black">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-10 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-10 group-data-open:block" />
            </DisclosureButton>
            
          </div>
          <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start ">
            <div className="flex shrink-0 items-center">
              <Link to="/">
                <img
                  alt="Plasto Green"
                  src={plastoGreen}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href}
                    // aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      activeNav === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                    onClick={()=> setActiveNav(item.name)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden relative">
        <div className="space-y-1 px-2 pt-2 pb-3 absolute z-50 w-full bg-white">
          {navigation.map((item) => (
            <Link to={item.href}>
            <DisclosureButton
              key={item.name}
             
            //aria-current={item.current ? 'page' : undefined}
              className={classNames(
                activeNav === item.name ? 'bg-gray-100 text-purple-600' : 'text-gray-500 hover:bg-gray-100 hover:text-purple-600',
                'block rounded-md px-3 py-2 text-base font-medium w-full text-left',
              )}
              onClick={()=> setActiveNav(item.name)}
            >
              
              {item.name}
            </DisclosureButton>
            </Link>
          ))}
        </div>
         
      </DisclosurePanel>
    </Disclosure>
   
  )
}
