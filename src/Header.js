/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  // eslint-disable-next-line no-unused-vars
  // const [{ basket, user }, dispatch] = useStateValue();
  const [{ basket, user }, dispatch] = useStateValue()

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <section className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"} className="header_clearlink">
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders" className="header_clearlink">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </section>
      <section>
        <Link>
          <div className="secondHeader">
            <p className="flex items-center">
              <MenuIcon className="h-6 mr-1 menuu" />
            </p>
            <Link to="https://www.amazon.com/amazonprime?ref_=nav_cs_primelink_nonmember">
              <p className="link">Prime Video</p>
            </Link>
            <Link to={"/https://www.amazon.com/stores/node/20648519011?channel=discovbar?field-lbr_brands_browse-bin=AmazonBasics&ref_=nav_cs_amazonbasics"}
              className="link">Amazon Business
            </Link>
            <p className="link">Today's Deals</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Food &Grocery</p>
            <p className="link hidden lg:inline-flex">Prime</p>
            <Link to={"/orders"} className="link hidden lg:inline-flex">Buy Again</Link>
            <p className="link hidden lg:inline-flex">Shoper toolkit</p>
            <p className="link hidden lg:inline-flex">Health & parsonal Care</p>
          </div>
        </Link>
      </section>
    </>
  );
}

export default Header;
