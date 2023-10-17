import React from "react";
import rasuljon from "../../image/founder/RasuljonRasulov.jpg";
import top from "../../image/founder/top.svg";
import end from "../../image/founder/end.svg";

export default function Founder() {
  return (
    <section id="founder">
      <div className="container" data-aos="fade-up">
        <div className="photo" data-aos="fade-up">
          <img src={rasuljon} alt=" " />
        </div>

        <div className="title" data-aos="fade-left">
          <h2>Asoschi Rasulov Rasuljon</h2>
          <p>
            Juda ham izlanuvchan, yosh bo‘lishiga qaramasdan bir necha yutuqlar
            egasi. <span>“Tadbirkorlar maktabi”</span> ni hamda{" "}
            <span>“Tizimlashtirish”</span> sohasini ham tugallagan. Shuningdek,{" "}
            <span>O‘zDJTU Akademik litseyi</span>ning eng namunali bitiruvchisi
            va hisobchi. <span>Front-end dasturchisi</span>
          </p>
          <p>
            Xorijiy filmlarni ko‘rishni, shuningdek ochiq tabiatda yurishni
            yaxshi ko‘radi, Chunki uning ilg’or g’oya va fikrlarini shu
            jarayonda keladi. Ko‘proq vaqtini oila davrasida o‘tkazishni yaxshi
            ko‘radi.
          </p>
        </div>
      </div>

      <div className="background">
        <img src={top} alt=" " className="top" data-aos="fade-down-right" />
        <img src={end} alt=" " className="end" data-aos="fade-up-left" />
      </div>
    </section>
  );
}
