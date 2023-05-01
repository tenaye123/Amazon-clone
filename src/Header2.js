import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";

function Header2() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex  items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6"></div>
        <div className="link">
          <p>Hello</p>
          <p className="font-extrabold ">Account & lists</p>
        </div>
        <div className="link">
          <p>Returns</p>
          <p>& Orders</p>
        </div>
        <div className="link">
          <ShoppingBasketIcon className="h-10" />
          <p>basket</p>
        </div>
        <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
          <p className="link flex items-center">
            <MenuIcon className="h-6 mr-1" />
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Today's Deals</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Food &Grocery</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy Again</p>
          <p className="link hidden lg:inline-flex">Shoper toolkit</p>
          <p className="link hidden lg:inline-flex">Health & parsonal Care</p>
        </div>
      </div>
    </header>
  );
}

<source src="https://m.media-amazon.com/images/I/A1JryB-lKoL.mp4" type="video/mp4"></source>

export default Header2;
