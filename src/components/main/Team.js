import React from "react";

import Rasuljon from "../../image/team/RasuljonRasulov.jpg";
import Alisher from "../../image/team/AlisherZayniddinov.jpg";
import Samandar from "../../image/team/SamandarBozorboyev.jpg";
import Ezoza from "../../image/team/EzozaNomozova.jpg";
import Shoxrux from "../../image/team/ShoxruxAsadov.jpg";
import User from "../../image/team/user.jpg";

export default function Team() {
  return (
    <section id="team">
      <div className="container">
        <div className="title" data-aos="fade-up">
          <h2>Bizning jamoa</h2>
          <p>
            Dunyoqarashlari va orzulari bir-biri bilan to’liq ug’unlashib
            ketgan, bir-birini juda hurmat qiladigan, samimiy insonlardan
            tashkil topgan iqtidorli mutaxassislar jamoasi.
          </p>
        </div>
        <div className="mates">
          <div className="people" data-aos="zoom-in-up">
            <div className="image">
              <img src={Rasuljon} alt=" " />
            </div>
            <div className="name">
              <h3>Rasuljon Rasulov</h3>
              <h4>Asoschi</h4>
            </div>
          </div>
          <div className="people" data-aos="zoom-in-up">
            <div className="image">
              <img src={Alisher} alt=" " />
            </div>
            <div className="name">
              <h3>Alisher Zayniddinov</h3>
              <h4>Marketolog</h4>
            </div>
          </div>
          <div className="people" data-aos="zoom-in-up">
            <div className="image">
              <img src={Samandar} alt=" " />
            </div>
            <div className="name">
              <h3>Samandar Bozorboyev</h3>
              <h4>Back-end dasturchi</h4>
            </div>
          </div>
          <div className="people" data-aos="zoom-in-up">
            <div className="image">
              <img src={Ezoza} alt=" " />
            </div>
            <div className="name">
              <h3>E'zoza Nomozova</h3>
              <h4>Administrator</h4>
            </div>
          </div>
          <div className="people" data-aos="zoom-in-up">
            <div className="image">
              <img src={Shoxrux} alt=" " />
            </div>
            <div className="name">
              <h3>Shoxrux Asadov</h3>
              <h4>Front-end dasturchi</h4>
            </div>
          </div>
          <div className="people" data-aos="zoom-in-up">
            <div className="image">
              <img src={User} alt=" " />
            </div>
            <div className="name">
              <h3>???</h3>
              <h4> </h4>
            </div>
          </div>
          <div className="people" data-aos="zoom-in-up">
            <div className="image">
              <img src={User} alt=" " />
            </div>
            <div className="name">
              <h3>???</h3>
              <h4> </h4>
            </div>
          </div>
          <div className="people" data-aos="zoom-in-up">
            <div className="image">
              <img src={User} alt=" " />
            </div>
            <div className="name">
              <h3>???</h3>
              <h4> </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
