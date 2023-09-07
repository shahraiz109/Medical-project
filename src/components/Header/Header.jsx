import React, { useEffect, useRef } from 'react'; // Import React and necessary hooks
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import medi from '../../assets/images/logo.png';
import user from '../../assets/images/avatar-icon.png';

const navLink = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/doctor',
    display: 'Find a doctor here',
  },
  {
    path: '/service',
    display: 'Services',
  },
  {
    path: '/contacts',
    display: 'Contact',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []); // Added an empty dependency array to run the effect only once on mount

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={medi} alt="empty" />
          </div>

          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-2.7rem">
              {navLink.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    activeClassName="text-primaryColor text-16px leading-7 font-600" // Use activeClassName for the active link
                    className="text-textColor text-16px leading-7 font-500 hover:text-cyan-600"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav right */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-35px h-35px rounded-full cursor-pointer">
                  <img src={user} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>

            <Link to="/logins">
              <button className="py-2 px-6 bg-blue-900 text-white font-600 h-44px flex items-center justify-center rounded-50px">
                Login
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
