import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../data/data";
import plastoGreen from "/plastoGreen.png";
import { reactIcons } from "../assets/assets/";
import { Link, useLocation } from "react-router-dom";
import useAppStore from "../store/store";
import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
const { SearchIcon, DownArrowIcon } = reactIcons;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const { activeNav, setActiveNav } = useAppStore();

  useEffect(() => {
    let path = location.pathname;
    let newNav = "";
    if (path === "/") newNav = "Home";
    else if (path.startsWith("/about")) newNav = "About";
    else if (path.startsWith("/contact")) newNav = "Contact";
    else if (path.startsWith("/products")) newNav = "Products";
    if (newNav !== activeNav) setActiveNav(newNav);
  }, [location.pathname, setActiveNav, activeNav]);

  return (
    <Disclosure as="nav" className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                alt="Plasto Green"
                src={plastoGreen}
                className="h-9 w-auto"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="flex space-x-8 p-0.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    activeNav === item.name
                      ? "border-b-2 border-green-600 text-green-700"
                      : "text-gray-500 hover:text-green-700 hover:border-b-2 hover:border-green-600",
                    "py-2 px-2 text-base font-medium"
                  )}
                  
                  onClick={() => setActiveNav(item.name)}
                
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Right Side Icons */}
          <div className="flex items-center gap-x-4">
            {/* Language Dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center gap-1 text-gray-700 hover:text-green-700 font-semibold">
                <span>English</span>
                <DownArrowIcon size={18} />
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem>
                  <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                    English
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                    Hindi
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
            {/* Search Icon */}
            <button
              type="button"
              className="text-gray-500 hover:text-green-700"
            >
              <SearchIcon aria-hidden="true" className="size-6" />
            </button>
            {/* User Icon */}
            <button
              type="button"
              className="rounded-full p-1 text-gray-600 hover:text-green-700"
            >
              <FaUser aria-hidden="true" className="size-6" />
            </button>
            {/* Mobile Menu Button */}
            <DisclosureButton className="sm:hidden inline-flex items-center justify-center rounded-md text-gray-500 hover:text-green-700">
              <Bars3Icon aria-hidden="true" className="block size-8" />
              <XMarkIcon aria-hidden="true" className="hidden size-8" />
            </DisclosureButton>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <DisclosurePanel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
          {navigation.map((item) => (
            <Link to={item.href} key={item.name}>
              <DisclosureButton
                className={classNames(
                  activeNav === item.name
                    ? "bg-green-50 text-green-700"
                    : "text-gray-500 hover:bg-green-50 hover:text-green-700",
                  "block rounded-md px-3 py-2 text-base font-medium w-full text-left transition-all duration-150"
                )}
                onClick={() => setActiveNav(item.name)}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
