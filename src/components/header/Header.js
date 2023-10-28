import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";
import logoBlack from "../../image/school.png";
import logoWhite from "../../image/schoolWhite.png";
import { toast } from "react-toastify";

export default function Header() {
  const [isScrolled, setScrolled] = useState(false);
  const [removeTesting, setRemoveTesting] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset > 100) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    toast.warning("Sayt test rejimida ishlamoqda!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`${isScrolled ? "active" : ""}`}>
      <div className="container" data-aos="fade-down">
        <Link
          className="logo"
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src={isScrolled ? logoBlack : logoWhite} alt=" " />
        </Link>

        <nav>
          <ul>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="founder"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Asoschi
              </Link>
            </li>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="course"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Kurslar
              </Link>
            </li>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Jamoa
              </Link>
            </li>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Aloqa
              </Link>
            </li>
          </ul>
        </nav>
        <div className="marketing">
          <a href="tel:998555003663">+998 55 500 3663</a>
        </div>

        <div className="menu">
          <div
            onClick={() =>
              document.querySelector(".menu").classList.toggle("active")
            }
            className={`toggle ${isScrolled ? "active" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="switch">
            <div className={`wrap ${isScrolled ? "active" : ""}`}></div>

            <div className={`list ${isScrolled ? "active" : ""}`}>
              <Link
                className="list-item"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Biz haqimizda
              </Link>
              <Link
                className="list-item"
                activeClass="active"
                to="founder"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Asoschi
              </Link>
              <Link
                className="list-item"
                activeClass="active"
                to="course"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Kurslar
              </Link>
              <Link
                className="list-item"
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Jamoa
              </Link>

              <Link
                className="list-item"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Aloqa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
