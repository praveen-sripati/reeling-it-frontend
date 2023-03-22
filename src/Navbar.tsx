import './Navbar.css';

import { useCallback, useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/icons/trailer-play.svg';

export const Navbar = () => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const navigate = useNavigate();

  const element = useRef<HTMLHeadingElement>(null);

  const handleScroll = useCallback(() => {
    window.scrollY > 10 ? setSticky(true) : setSticky(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      ref={element}
      className={`sticky top-0 z-10 transition-colors ${
        isSticky ? 'bg-ps-first-color shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav>
        <section className="flex items-center max-w-[1280px] px-8 m-auto">
          <div
            role={'link'}
            tabIndex={0}
            className="flex items-center mr-10 p-3 pl-0 cursor-pointer"
            onClick={() => navigate('/')}
            onKeyDown={() => navigate('/')}
          >
            <Logo className="inline mr-2" width={23} height={23} />
            <p className="text-ps-h1-font-size text-ps-title-color">
              Reeling<span className="text-ps-fourth-color">It</span>
            </p>
          </div>
          <ul className="flex">
            <li className="mr-6 p-4">
              <NavLink to="/movies" className="ps-nav-link">
                <span className="inline-block relative text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
                  <span>Movies</span>
                </span>
              </NavLink>
            </li>
            <li className="mr-6 p-4">
              <NavLink to="/tvshows" className="ps-nav-link">
                <span className="inline-block relative text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
                  <span>Tv Shows</span>
                </span>
              </NavLink>
            </li>
            <li className="mr-6 p-4">
              <NavLink to="/">Actors</NavLink>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};
