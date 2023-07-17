import react from "react";
import style from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const NavLink = ({ href, children }) => {
        const router = useRouter();

        // Check if the current route matches the link href or starts with the link href
        const isActive = router.pathname === href || router.asPath.startsWith(href);

        // Define the styles for the link based on its active state
        const linkStyles = {
            color: isActive ? "aqua" : "#cccccc",
            textDecoration: "none",
            cursor: "pointer"
        };

        // return (
        //   <Link href={href}>
        //     <span className={text} style={linkStyles}>
        //       {children}
        //     </span>
        //   </Link>
        // );
    };
    return (
        <div className={style.Nav}>
            <div className={style.Nav_logo}>
                <Image
                    className={style.logo}
                    src="/logo.svg"
                    height={26}
                    width={234}
                    alt="pic"
                />
            </div>
            <div className={style.Nav_frame}>
                <div className={style.Nav_links}>
                    <div className>About</div>
                    <div className>Vision</div>
                    <div className>Team</div>
                    <button className={style.btn} >Contact Us</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar;