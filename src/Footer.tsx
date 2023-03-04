import { ReactComponent as Logo } from './assets/icons/trailer-play.svg';

export const Footer = ({ classes }: { classes?: string }) => {
  return (
    <footer className={`bg-ps-first-color py-10 ${classes}`}>
      <section className="max-w-[1200px] m-auto">
        <section className="flex mb-4">
          <section className="flex flex-col flex-1">
            <h3 className="text-ps-h3-font-size text-ps-text-color-light mb-2">
              Watch
            </h3>
            <ul>
              <li className="text-ps-text-color mb-1">
                <a href="/">Popular Movies</a>
              </li>
              <li className="text-ps-text-color mb-1">
                <a href="/">Popular TV</a>
              </li>
              <li className="text-ps-text-color mb-1">
                <a href="/">Popular Actors</a>
              </li>
            </ul>
          </section>
          <section className="flex flex-col flex-1">
            <h3 className="text-ps-h3-font-size text-ps-text-color-light mb-2">
              Company
            </h3>
            <ul>
              <li className="text-ps-text-color mb-1">
                <a href="/">Contact Us</a>
              </li>
              <li className="text-ps-text-color mb-1">
                <a href="/">Terms & Privacy</a>
              </li>
              <li className="text-ps-text-color mb-1">
                <a href="/">FAQ</a>
              </li>
            </ul>
          </section>
        </section>
        <div className="flex items-center">
          <Logo className="inline mr-2" width={23} height={23} />
          <p className="text-ps-h1-font-size text-ps-title-color mr-3">
            Reeling<span className="text-ps-fourth-color">It</span>
          </p>
          <p className="text-ps-normal-font-size text-ps-text-color-light">
            ©ReelingIt 2023
          </p>
        </div>
      </section>
    </footer>
  );
};
