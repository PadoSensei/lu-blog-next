import Link from "next/link";
import { MdNightlightRound, MdWbSunny } from "react-icons/md";
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <strong>Efficient Marketing</strong>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pages/about">About us</Link>
        </li>
        <li>
          <Link href="/pages/contact">Contact</Link>
        </li>
        <li>
          <button
            id="theme-toggle"
            type="button"
            className="theme-toggle-button"
            data-theme-switcher="light"
          >
            <MdNightlightRound
              fill="black"
              // className={color}
              id="theme-toggle-dark-icon"
            />
            <MdWbSunny
              fill="white"
              // className={color}
              id="theme-toggle-light-icon"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
