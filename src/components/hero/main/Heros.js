import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

export default function Heros() {
  const [openRodal, setRodal] = useState(false);

  return (
    <section id="hero">
      <div className="container">
        <div className="title" data-aos="fade-right">
          <h1>
            <span>REGULAR IT</span> school zamonaviy kasblar maktabi
          </h1>
          <p>
            Biz bilan qiziqishingizga qarab zamonaviy kasablarni mukammal
            o'rganing! Bizning maqsad yoshlarni zamonaviy kasblarga qiziqtirib
            va ularga mutaxasislarimiz tomonidan sifatli va tushunarli ta'lim
            berish.
          </p>
          <Link
            className="logo"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Bepul kursga yozilish
          </Link>
        </div>
      </div>
    </section>
  );
}
