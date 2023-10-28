import React, { useEffect, useState } from "react";
import Rodal from "rodal";
import expertMates from "../../utility/team";

import { IoCloseSharp } from "react-icons/io5";
import { FaTelegram, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Team() {
  const [openModal, setOpenModal] = useState(false);
  const [selectMate, setSelectMate] = useState(0);

  useEffect(() => {
    if (openModal) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "visible";
    }
  }, [openModal]);

  useEffect(() => {
    let sidebar_content = document.getElementsByClassName("content-mate");
    console.log(sidebar_content);
    return console.log(sidebar_content);
  }, [document.getElementsByClassName("content-mate").onscroll]);

  return (
    <section id="team">
      <div className="container">
        <div className="title" data-aos="fade-up">
          <h2 className="heading">Bizning jamoa</h2>
          <p className="subtitle">
            Dunyoqarashlari va orzulari bir-biri bilan to’liq ug’unlashib
            ketgan, bir-birini juda hurmat qiladigan, samimiy insonlardan
            tashkil topgan iqtidorli mutaxassislar jamoasi.
          </p>
        </div>
        <div className="mates">
          {expertMates.map((item, index) => (
            <div className="people accsess" data-aos="zoom-in-up" key={index}>
              <div className="front">
                <div className="image">
                  <img src={item.main} alt=" " />
                </div>
                <div className="name">
                  <h3>{item.name}</h3>
                  <h4>{item.job}</h4>
                </div>
              </div>
              <div className="back">
                <div className="banner">
                  <div className="image">
                    <img src={item.image} alt=" " />
                  </div>
                </div>
                <div className="name">
                  <h3>{item.name}</h3>
                  <h4>{item.job}</h4>
                </div>
                <div className="social">
                  {item.socialnet.instagram ? (
                    <a href={item.socialnet.instagram} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                          fill="#F00073"
                        />
                        <path
                          d="M16 9.20001C18.2 9.20001 18.5 9.20001 19.4 9.20001C20.2 9.20001 20.6 9.40001 20.9 9.50001C21.3 9.70001 21.6 9.80001 21.9 10.1C22.2 10.4 22.4 10.7 22.5 11.1C22.6 11.4 22.7 11.8 22.8 12.6C22.8 13.5 22.8 13.7 22.8 16C22.8 18.3 22.8 18.5 22.8 19.4C22.8 20.2 22.6 20.6 22.5 20.9C22.3 21.3 22.2 21.6 21.9 21.9C21.6 22.2 21.3 22.4 20.9 22.5C20.6 22.6 20.2 22.7 19.4 22.8C18.5 22.8 18.3 22.8 16 22.8C13.7 22.8 13.5 22.8 12.6 22.8C11.8 22.8 11.4 22.6 11.1 22.5C10.7 22.3 10.4 22.2 10.1 21.9C9.8 21.6 9.6 21.3 9.5 20.9C9.4 20.6 9.3 20.2 9.2 19.4C9.2 18.5 9.2 18.3 9.2 16C9.2 13.7 9.2 13.5 9.2 12.6C9.2 11.8 9.4 11.4 9.5 11.1C9.7 10.7 9.8 10.4 10.1 10.1C10.4 9.80001 10.7 9.60001 11.1 9.50001C11.4 9.40001 11.8 9.30001 12.6 9.20001C13.5 9.20001 13.8 9.20001 16 9.20001ZM16 7.70001C13.7 7.70001 13.5 7.70001 12.6 7.70001C11.7 7.70001 11.1 7.90001 10.6 8.10001C10.1 8.30001 9.6 8.60001 9.1 9.10001C8.6 9.60001 8.4 10 8.1 10.6C7.9 11.1 7.8 11.7 7.7 12.6C7.7 13.5 7.7 13.8 7.7 16C7.7 18.3 7.7 18.5 7.7 19.4C7.7 20.3 7.9 20.9 8.1 21.4C8.3 21.9 8.6 22.4 9.1 22.9C9.6 23.4 10 23.6 10.6 23.9C11.1 24.1 11.7 24.2 12.6 24.3C13.5 24.3 13.8 24.3 16 24.3C18.2 24.3 18.5 24.3 19.4 24.3C20.3 24.3 20.9 24.1 21.4 23.9C21.9 23.7 22.4 23.4 22.9 22.9C23.4 22.4 23.6 22 23.9 21.4C24.1 20.9 24.2 20.3 24.3 19.4C24.3 18.5 24.3 18.2 24.3 16C24.3 13.8 24.3 13.5 24.3 12.6C24.3 11.7 24.1 11.1 23.9 10.6C23.7 10.1 23.4 9.60001 22.9 9.10001C22.4 8.60001 22 8.40001 21.4 8.10001C20.9 7.90001 20.3 7.80001 19.4 7.70001C18.5 7.70001 18.3 7.70001 16 7.70001Z"
                          fill="white"
                        />
                        <path
                          d="M16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
                          fill="white"
                        />
                        <path
                          d="M20.4 12.6C20.9523 12.6 21.4 12.1523 21.4 11.6C21.4 11.0477 20.9523 10.6 20.4 10.6C19.8477 10.6 19.4 11.0477 19.4 11.6C19.4 12.1523 19.8477 12.6 20.4 12.6Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  ) : (
                    ""
                  )}

                  {item.socialnet.facebook ? (
                    <a href={item.socialnet.facebook} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                          fill="#1877F2"
                        />
                        <path
                          d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  ) : (
                    ""
                  )}

                  {item.socialnet.telegramChannel ? (
                    <a href={item.socialnet.telegramChannel} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                          fill="#0088CC"
                        />
                        <path
                          d="M8.09992 15.7083C12.3949 13.8371 15.2589 12.6034 16.6919 12.0074C20.7834 10.3056 21.6335 10.01 22.1877 10.0001C22.3095 9.99805 22.582 10.0283 22.7586 10.1715C22.9076 10.2924 22.9486 10.4558 22.9683 10.5705C22.9879 10.6851 23.0123 10.9464 22.9929 11.1505C22.7712 13.4801 21.8118 19.1335 21.3237 21.7427C21.1172 22.8468 20.7105 23.217 20.3168 23.2532C19.4613 23.3319 18.8116 22.6878 17.9829 22.1446C16.6862 21.2946 15.9537 20.7654 14.695 19.936C13.2404 18.9774 14.1834 18.4506 15.0124 17.5896C15.2293 17.3643 18.999 13.9355 19.0719 13.6244C19.0811 13.5855 19.0895 13.4405 19.0034 13.3639C18.9172 13.2874 18.7901 13.3136 18.6983 13.3344C18.5683 13.3639 16.4968 14.7331 12.4839 17.4419C11.8959 17.8457 11.3633 18.0424 10.8862 18.0321C10.3601 18.0207 9.34822 17.7346 8.59598 17.4901C7.67333 17.1902 6.94002 17.0316 7.00388 16.5223C7.03714 16.257 7.40248 15.9856 8.09992 15.7083Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  ) : (
                    ""
                  )}

                  {item.socialnet.youtube ? (
                    <a href={item.socialnet.youtube} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                          fill="#FF0000"
                        />
                        <path
                          d="M23.6 12.1C23.4 11.4 22.9 10.9 22.2 10.7C21 10.4 15.9 10.4 15.9 10.4C15.9 10.4 10.9 10.4 9.60001 10.7C8.90001 10.9 8.4 11.4 8.2 12.1C8 13.4 8 16 8 16C8 16 8 18.6 8.3 19.9C8.5 20.6 9 21.1 9.7 21.3C10.9 21.6 16 21.6 16 21.6C16 21.6 21 21.6 22.3 21.3C23 21.1 23.5 20.6 23.7 19.9C24 18.6 24 16 24 16C24 16 24 13.4 23.6 12.1ZM14.4 18.4V13.6L18.6 16L14.4 18.4Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  ) : (
                    ""
                  )}

                  {item.socialnet.linkedin ? (
                    <a href={item.socialnet.linkedin} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                          fill="#2867B2"
                        />
                        <path
                          d="M11.6 24H8.2V13.3H11.6V24ZM9.9 11.8C8.8 11.8 8 11 8 9.9C8 8.8 8.9 8 9.9 8C11 8 11.8 8.8 11.8 9.9C11.8 11 11 11.8 9.9 11.8ZM24 24H20.6V18.2C20.6 16.5 19.9 16 18.9 16C17.9 16 16.9 16.8 16.9 18.3V24H13.5V13.3H16.7V14.8C17 14.1 18.2 13 19.9 13C21.8 13 23.8 14.1 23.8 17.4V24H24Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  ) : (
                    ""
                  )}

                  {item.socialnet.github ? (
                    <a href={item.socialnet.github} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                          fill="#231E1B"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.9755 8.19199C11.5719 8.19199 8 11.7639 8 16.1675C8 19.6905 10.2997 22.6752 13.4312 23.7516C13.8226 23.8005 13.9694 23.5559 13.9694 23.3602C13.9694 23.1645 13.9694 22.6752 13.9694 21.9902C11.7676 22.4794 11.2783 20.9137 11.2783 20.9137C10.9358 19.984 10.3976 19.7394 10.3976 19.7394C9.66361 19.2501 10.4465 19.2501 10.4465 19.2501C11.2294 19.299 11.6697 20.0819 11.6697 20.0819C12.4037 21.3051 13.5291 20.9626 13.9694 20.7669C14.0183 20.2287 14.263 19.8862 14.4587 19.6905C12.6972 19.4947 10.8379 18.8097 10.8379 15.7272C10.8379 14.8464 11.1315 14.1614 11.6697 13.5742C11.6208 13.4275 11.3272 12.5957 11.7676 11.5192C11.7676 11.5192 12.4526 11.3235 13.9694 12.351C14.6055 12.1553 15.2905 12.1064 15.9755 12.1064C16.6606 12.1064 17.3456 12.2042 17.9817 12.351C19.4985 11.3235 20.1835 11.5192 20.1835 11.5192C20.6239 12.5957 20.3303 13.4275 20.2813 13.6232C20.7706 14.1614 21.1131 14.8953 21.1131 15.7761C21.1131 18.8587 19.2538 19.4947 17.4924 19.6905C17.7859 19.9351 18.0306 20.4244 18.0306 21.1583C18.0306 22.2348 18.0306 23.0666 18.0306 23.3602C18.0306 23.5559 18.1774 23.8005 18.5688 23.7516C21.7492 22.6752 24 19.6905 24 16.1675C23.9511 11.7639 20.3792 8.19199 15.9755 8.19199Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  ) : (
                    ""
                  )}

                  {item.socialnet.tiktok ? (
                    <a href={item.socialnet.tiktok} target="_blank">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                          fill="black"
                        />
                        <path
                          d="M14.4984 14.3003V13.6774C14.285 13.6489 14.068 13.6311 13.844 13.6311C11.173 13.6276 9 15.8024 9 18.4792C9 20.1201 9.818 21.5724 11.0699 22.4516C10.2626 21.5867 9.76821 20.4227 9.76821 19.1484C9.76821 16.5108 11.8808 14.3608 14.4984 14.3003Z"
                          fill="#25F4EE"
                        />
                        <path
                          d="M14.6157 21.3624C15.8072 21.3624 16.7817 20.412 16.8244 19.2303L16.8279 8.66919H18.7555C18.7164 8.45206 18.6951 8.22781 18.6951 8H16.0633L16.0597 18.5611C16.017 19.7428 15.0425 20.6932 13.8511 20.6932C13.4812 20.6932 13.1327 20.6007 12.8233 20.4369C13.2216 20.9958 13.876 21.3624 14.6157 21.3624Z"
                          fill="#25F4EE"
                        />
                        <path
                          d="M22.3584 12.2536V11.6663C21.6222 11.6663 20.9393 11.4492 20.3632 11.0718C20.8753 11.6592 21.5688 12.0863 22.3584 12.2536Z"
                          fill="#25F4EE"
                        />
                        <path
                          d="M20.3631 11.0718C19.8012 10.4276 19.4633 9.58754 19.4633 8.66919H18.7592C18.9405 9.67297 19.538 10.5344 20.3631 11.0718Z"
                          fill="#FE2C55"
                        />
                        <path
                          d="M13.8475 16.2616C12.6276 16.2616 11.6354 17.2547 11.6354 18.4756C11.6354 19.3264 12.1191 20.0667 12.8232 20.4369C12.5601 20.0738 12.4036 19.6289 12.4036 19.1448C12.4036 17.9239 13.3958 16.9308 14.6158 16.9308C14.8434 16.9308 15.0638 16.9699 15.2701 17.034V14.343C15.0567 14.3145 14.8398 14.2967 14.6158 14.2967C14.5766 14.2967 14.541 14.3003 14.5019 14.3003V16.3648C14.2921 16.3007 14.0751 16.2616 13.8475 16.2616Z"
                          fill="#FE2C55"
                        />
                        <path
                          d="M22.3582 12.2536V14.3003C20.9925 14.3003 19.7264 13.8625 18.695 13.1221V18.4792C18.695 21.1524 16.522 23.3308 13.8475 23.3308C12.8161 23.3308 11.8558 23.0033 11.0698 22.4516C11.9554 23.402 13.218 24 14.6157 24C17.2866 24 19.4632 21.8251 19.4632 19.1484V13.7913C20.4946 14.5317 21.7607 14.9695 23.1264 14.9695V12.3355C22.8596 12.3355 22.6036 12.307 22.3582 12.2536Z"
                          fill="#FE2C55"
                        />
                        <path
                          d="M18.695 18.4792V13.1221C19.7264 13.8625 20.9925 14.3003 22.3582 14.3003V12.2536C21.5687 12.0863 20.8751 11.6592 20.363 11.0718C19.5379 10.5344 18.944 9.67297 18.7554 8.66919H16.8278L16.8243 19.2302C16.7816 20.412 15.8071 21.3624 14.6157 21.3624C13.8759 21.3624 13.2251 20.9958 12.8196 20.4405C12.1155 20.0667 11.6318 19.3299 11.6318 18.4792C11.6318 17.2583 12.624 16.2652 13.8439 16.2652C14.0715 16.2652 14.292 16.3043 14.4983 16.3684V14.3039C11.8807 14.3608 9.76816 16.5108 9.76816 19.1484C9.76816 20.4227 10.2625 21.5831 11.0698 22.4516C11.8558 23.0033 12.8161 23.3308 13.8475 23.3308C16.5184 23.3308 18.695 21.1524 18.695 18.4792Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  ) : (
                    ""
                  )}

                  {item.socialnet.portfolio ? (
                    <a href={item.socialnet.portfolio} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M0 16V32H16H32V16V1.43051e-06H16H0V16ZM17.0937 8.09375C17.3 8.14375 17.6812 8.29375 17.9375 8.41875C18.525 8.7 19.3125 9.4625 19.6125 10.0438C19.825 10.45 20.0625 11.2625 20.0625 11.5875V11.7813L19.825 11.5188C19.075 10.675 18.0125 10.3688 16.9937 10.6875C15.9125 11.0313 15.2562 12.025 15.325 13.2063C15.3812 14.1 15.7687 14.725 16.4875 15.075C16.8687 15.2625 16.9562 15.2813 17.5937 15.3C18.4 15.325 19.1562 15.1625 20.0187 14.7813C21.175 14.2688 21.4937 14.175 22.1812 14.1375C22.9812 14.1 23.3625 14.1813 24.0625 14.5188C24.4875 14.725 24.7 14.8875 25.1562 15.3375L25.7187 15.9L25.375 15.95C24.1125 16.125 23.3375 16.5313 22.4 17.5063C21.975 17.9563 21.7187 18.325 20.1875 20.75C18.9812 22.65 18.5437 23.175 17.8312 23.55C15.8812 24.5813 13.2812 23.7563 12.3375 21.7938C12.1375 21.375 11.9687 20.6438 12.0125 20.3688C12.0312 20.25 12.0625 20.275 12.2812 20.5688C12.4812 20.8375 12.6312 20.9563 13 21.1375C14.0375 21.6563 15.1375 21.525 15.925 20.7875C17.15 19.6375 16.95 17.55 15.55 16.9C15.175 16.725 15.1187 16.7188 14.2812 16.725C13.3 16.7313 12.7312 16.85 11.625 17.2813C10.3125 17.7875 9.63125 17.9 8.8125 17.725C8.06875 17.5688 7.49375 17.25 6.89375 16.6563C6.60625 16.375 6.375 16.1125 6.375 16.075C6.375 16.0313 6.475 16 6.6125 16C7.3875 15.9938 8.4625 15.55 9.1125 14.9625C9.53125 14.5875 9.825 14.1563 11.5812 11.4C12.0875 10.6063 12.6687 9.76875 12.8812 9.54375C13.5562 8.80625 14.3687 8.29375 15.1625 8.1C15.6625 7.98125 16.6312 7.975 17.0937 8.09375Z"
                          fill="url(#paint0_linear_1_10)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_10"
                            x1="42.5"
                            y1="14"
                            x2="-4.5"
                            y2="23"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#376DA3" />
                            <stop offset="1" stopColor="#1B2535" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
                <a
                  type="button"
                  target="_blank"
                  onClick={() => {
                    setOpenModal(true);
                    setSelectMate(index);
                  }}
                >
                  Profile
                </a>
              </div>
            </div>
          ))}

          <Rodal visible={openModal} onClose={() => setOpenModal(false)}>
            <div className="rodal-closed" onClick={() => setOpenModal(false)}>
              <IoCloseSharp />
            </div>
            <div className="content-mate">
              <div className="personal">
                <div className="title">
                  <p>{expertMates[selectMate].expert}</p>
                  <img
                    src={expertMates[selectMate].image}
                    alt={expertMates[selectMate].name}
                  />
                  <h1>{expertMates[selectMate].name} </h1>
                  <h3>{expertMates[selectMate].city} </h3>

                  <div className="dagree-mate">
                    <span>Jamoada ishlash</span>
                    <div className="rate">
                      <div
                        className={`circle ${
                          expertMates[selectMate].communication >= 1
                            ? "active"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`circle ${
                          expertMates[selectMate].communication >= 2
                            ? "active"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`circle ${
                          expertMates[selectMate].communication >= 3
                            ? "active"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`circle ${
                          expertMates[selectMate].communication >= 4
                            ? "active"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`circle ${
                          expertMates[selectMate].communication >= 5
                            ? "active"
                            : ""
                        }`}
                      ></div>
                    </div>
                  </div>
                  <div className="dagree-mate">
                    <span>Texnik mahorat</span>
                    <div className="rate">
                      <div
                        className={`circle ${
                          expertMates[selectMate].technicalSkill >= 1
                            ? "active"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`circle ${
                          expertMates[selectMate].technicalSkill >= 2
                            ? "active"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`circle ${
                          expertMates[selectMate].technicalSkill >= 3
                            ? "active"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`circle ${
                          expertMates[selectMate].technicalSkill >= 4
                            ? "active"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`circle ${
                          expertMates[selectMate].technicalSkill >= 5
                            ? "active"
                            : ""
                        }`}
                      ></div>
                    </div>
                  </div>
                  <div className="message">
                    {expertMates[selectMate].contact.telegram ? (
                      <a
                        href={expertMates[selectMate].contact.telegram}
                        target="_blank"
                        className={`${
                          (expertMates[selectMate].contact.telegram &&
                            expertMates[selectMate].contact.call) ||
                          (expertMates[selectMate].contact.telegram &&
                            expertMates[selectMate].contact.email) ||
                          (expertMates[selectMate].contact.call &&
                            expertMates[selectMate].contact.email)
                            ? "dual"
                            : ""
                        }`}
                      >
                        <FaTelegram />
                        <span>Telegram</span>
                      </a>
                    ) : (
                      ""
                    )}
                    {expertMates[selectMate].contact.call ? (
                      <a
                        href={`tel:${expertMates[selectMate].contact.call}`}
                        className={`${
                          (expertMates[selectMate].contact.telegram &&
                            expertMates[selectMate].contact.call) ||
                          (expertMates[selectMate].contact.telegram &&
                            expertMates[selectMate].contact.email) ||
                          (expertMates[selectMate].contact.call &&
                            expertMates[selectMate].contact.email)
                            ? "dual"
                            : ""
                        }`}
                      >
                        <FaPhoneVolume />
                        <span>Contact</span>
                      </a>
                    ) : (
                      ""
                    )}
                    {expertMates[selectMate].contact.email ? (
                      <a
                        href={`mailto:${expertMates[selectMate].contact.email}`}
                        className={`${
                          (expertMates[selectMate].contact.telegram &&
                            expertMates[selectMate].contact.call) ||
                          (expertMates[selectMate].contact.telegram &&
                            expertMates[selectMate].contact.email) ||
                          (expertMates[selectMate].contact.call &&
                            expertMates[selectMate].contact.email)
                            ? "dual"
                            : ""
                        }`}
                      >
                        <MdEmail />
                        <span>Email</span>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="skills">
                  <h2>Ko'nikmalar</h2>
                  <div className="skill-all">
                    {expertMates[selectMate].skills.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="data">
                {expertMates[selectMate].aboutme ? (
                  <div className="aboutme">
                    <h2>{selectMate == 0 ? "Asoschi" : "Xodim"} haqida!</h2>
                    <p>{expertMates[selectMate].aboutme}</p>
                  </div>
                ) : (
                  ""
                )}

                {expertMates[selectMate].experience ? (
                  <div
                    className={`${
                      selectMate == 1 ? "experience dual" : "experience"
                    }`}
                  >
                    <h2>Professional Tajriba</h2>
                    {selectMate == 0 ? (
                      expertMates[selectMate].experience.map((item, index) => (
                        <div className="proexp" key={index}>
                          <div className="heading">
                            <div className="nameisjob">
                              <div className="comanjob">
                                <span className="asoschi">{item.name}</span>
                              </div>
                            </div>
                            <p>{item.time}</p>
                          </div>

                          {item.companys.length !== 0 ? (
                            <ul className="asoschi">
                              {item.companys.map((category, ind) => (
                                <li key={ind}>
                                  {category.image ? (
                                    <img src={category.image} alt=" " />
                                  ) : (
                                    ""
                                  )}
                                  <span>{category.name}</span>{" "}
                                  <h4>{category.duration}</h4>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            ""
                          )}

                          <div className="skills">
                            {item.skills.map((skill, ind) => (
                              <span key={ind}>{skill}</span>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : selectMate == 1 ? (
                      <div className="forsmm">
                        {expertMates[selectMate].experience.map(
                          (item, index) => (
                            <div className="smmexp" key={index}>
                              <img src={item.image} />
                              <div className="comanjob">
                                <h3>{item.company}</h3>
                                <span>{item.name}</span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      expertMates[selectMate].experience.map((item, index) => (
                        <div className="proexp" key={index}>
                          <div className="heading">
                            <div className="nameisjob">
                              <div className="title">
                                {item.image ? (
                                  <img src={item.image} alt=" " />
                                ) : (
                                  ""
                                )}
                                <div className="comanjob">
                                  <h3>
                                    {item.company} <b>//</b>
                                  </h3>
                                  <span>{item.name}</span>
                                </div>
                              </div>
                              <h5>{item.duration}</h5>
                            </div>
                            <p>{item.time}</p>
                          </div>

                          {item.category.length !== 0 ? (
                            <ul>
                              {item.category.map((category, ind) => (
                                <li key={ind}>{category}</li>
                              ))}
                            </ul>
                          ) : (
                            ""
                          )}

                          <div className="skills">
                            {item.skills.map((skill, ind) => (
                              <span key={ind}>{skill}</span>
                            ))}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                ) : (
                  ""
                )}

                {expertMates[selectMate].education ? (
                  <div className="education">
                    <h2>Educations</h2>
                    {expertMates[selectMate].education.map((item, index) => (
                      <div className="proedu" key={index}>
                        <img src={item.image} alt=" " />
                        <div className="title">
                          <h3>{item.name}</h3>
                          <h4>{item.bachelor}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Rodal>
        </div>
      </div>
    </section>
  );
}
