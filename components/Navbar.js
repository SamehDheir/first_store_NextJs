import Link from "next/link";
import Styles from "./../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.container + " container"}>
        <h1 className={Styles.logo}>Sameh Market</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
