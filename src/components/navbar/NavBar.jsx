import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";

const NavLink = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-violet-900" : "text-gray-700"
      }
         hover:text-violet-900  transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const NavBar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");

  return (
    <nav className="bg-white z-40 w-full fixed top-0 md:py-5 py-4 md:px-16 font-semibold">
      <div className="flex items-center justify-between md:mx-auto w-5/6">
        <Link to="/" >
          <img className="w-52 pl-10" src="./images/logo.png" alt="logo" />
        </Link>
        

        {/**DESKTOP NAV */}
        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-16 text-sm">
            <NavLink
              page="ABOUT"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page="PRODUCTS"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page="BLOG"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavLink
              page="GET STARTED"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <motion.button
            alt="menu"
            className="rounded-full text-violet-900 p-3 -mr-9 hover:text-violet-500 transition duration-100"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <FiMenu size={24} />
          </motion.button>
        )}

        {/* MOILE MENU POUP */}
        {!isAboveSmallScreen && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-violet-400 w-2/3">
            <div className="flex justify-end p-12">
              {/**Close btn */}
              <motion.button
                alt="menu"
                className="rounded-full text-white p-3 mr-7 -mt-5 hover:text-violet-300 transition duration-100"
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <AiOutlineClose size={35} />
              </motion.button>
            </div>
            <div className="flex flex-col gap-10 ml-[33%] text-xl">
              <NavLink
                page="ABOUT"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavLink
                page="PRODUCTS"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavLink
                page="BLOG"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavLink
                page="GET STARTED"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  selectedPage: PropTypes.bool.isRequired,
  setSelectedPage: PropTypes.bool.isRequired,
};

NavLink.propTypes = {
  page: PropTypes.string.isRequired,
  selectedPage: PropTypes.bool.isRequired,
  setSelectedPage: PropTypes.bool.isRequired,
};
