import React from "react";
import Google from "../../public/Google.png";
function Navbar() {
  return (
    <div className="Navbar">
      <header className="navbar">
        <div className="logo">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
            alt="Google"
          />
        </div>

        <nav>
          <a href="#">Phones</a>
          <a href="#">Earbuds</a>
          <a href="#">Watches</a>
          <a href="#">Smart Home</a>
          <a href="#">Laptops</a>
          <a href="#">Accessories</a>
          <a href="#">Subscriptions</a>
          <a href="#">Offers</a>
        </nav>

        <div className="icons">
          <span>🔍</span>
          <span>❓</span>
          <span>🛒</span>
          <span>👤</span>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
