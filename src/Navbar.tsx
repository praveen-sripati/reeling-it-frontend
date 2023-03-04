import { useCallback, useEffect, useRef, useState } from 'react';
import { ReactComponent as Logo } from './assets/icons/trailer-play.svg';

export const Navbar = () => {
  const [isSticky, setSticky] = useState<boolean>(false);
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
        isSticky ? 'bg-ps-first-color' : 'bg-transparent'
      }`}
    >
      <nav>
        <section className="flex items-center max-w-[1200px] m-auto">
          <div className="flex items-center mr-10 p-3 pl-0 cursor-pointer">
            <Logo className="inline mr-2" width={23} height={23} />
            <p className="text-ps-h1-font-size text-ps-title-color">
              Reeling<span className="text-ps-fourth-color">It</span>
            </p>
          </div>
          <ul className="flex">
            <li className="mr-6 p-4">
              <a href="/">Movies</a>
            </li>
            <li className="mr-6 p-4">
              <a href="/">Tv Shows</a>
            </li>
            <li className="mr-6 p-4">
              <a href="/">Actors</a>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};
