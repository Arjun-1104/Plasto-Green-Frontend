import ply1 from "./images/ply1.jpg";
import ply2 from "./images/ply2.jpg";
import ply3 from "./images/ply3.jpg";
import ply4 from "./images/ply4.jpg";
import ply5 from "./images/ply5.jpg";
import ply6 from "./images/ply6.jpg";
import ply7 from "./images/ply7.jpg";
import ply8 from "./images/ply8.jpg";
import ply9 from "./images/ply9.jpg";
import ply10 from "./images/ply10.jpg";

import ply1flip from "./images/ply1flip.jpg";
// console.log(ply1)
export const assets = {
  ply1,
  ply2,
  ply3,
  ply4,
  ply5,
  ply6,
  ply7,
  ply8,
  ply9,
  ply10,
  ply1flip,
};

import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiMiniBanknotes } from "react-icons/hi2";
import { TbReplaceFilled } from "react-icons/tb";

export const reactIcons = {
  SearchIcon: CiSearch,
  DownArrowIcon: MdKeyboardArrowDown,
  RightArrowIcon: MdKeyboardArrowRight,
  TruckIcon: FaTruckFast,
  ServiceIcon: RiCustomerService2Fill,
  BankNoteIcon: HiMiniBanknotes,
  ReplaceIcon: TbReplaceFilled,
};

import mainBannerImage1 from "./images/mainBannerImage1.webp";
import mainBannerImage2 from "./images/mainBannerImage2.webp";
import mainBannerImage3 from "./images/mainBannerImage3.jpeg";
import mainBannerImage4 from "./images/mainBannerImage4.jpeg";

export const mainBannerImages = {
  mainBannerImage1: mainBannerImage1,
  mainBannerImage2: mainBannerImage2,
  mainBannerImage3: mainBannerImage3,
  mainBannerImage4: mainBannerImage4,
};

import productBanner1 from "./images/productBanner1.jpg";
import productBanner2 from "./images/productBanner2.jpg";
import productBanner3 from "./images/productBanner3.jpg";
import productBanner4 from "./images/productBanner4.jpg";
import productBanner5 from "./images/productBanner5.jpg";
import productBanner6 from "./images/productBanner6.jpg";

export const productBannerImages = [
  {
    id: 1,
    name: 'plywood',
    image: productBanner1,
  },
  {
    id: 2,
    name: 'blockboard',
    image: productBanner2,
  },
  {
    id: 3,
    name: 'particle board',
    image: productBanner3,
  },
  {
    id: 4,
    name: 'veneers',
    image: productBanner4,
  },
  {
    id: 5,
    name: 'mdf',
    image: productBanner5,
  },
  {
    id: 6,
    name: 'laminate',
    image: productBanner6,
  }
];

const folders = {
    plywood: import.meta.glob('./images/plywood/*.{png,jpg}', {eager: true, import : 'default'}),
    laminate: import.meta.glob('./images/laminate/*.{png,jpg}', {eager: true, import : 'default'}),
    blockboard: import.meta.glob('./images/blockboard/*.{png,jpg}', {eager: true, import : 'default'}),
    mdf: import.meta.glob('./images/mdf/*.{png,jpg}', {eager: true, import : 'default'}),
    veneers: import.meta.glob('./images/veneers/*.{png,jpg}', {eager: true, import : 'default'}),
    "particle board": import.meta.glob('./images/particle_board/*.{png,jpg}', {eager: true, import : 'default'}),

}
export function givePathTakeImamges(folder){
  // console.log(path)
  const image = folders[folder]
  // console.log(image)
  const imageObj = {};

  for(const path in image){
    const parts = path.split('/');
    const filename = parts.pop();
    const key = filename.split('.')[0];
    imageObj[key] = image[path];
  }
  return imageObj;
}



