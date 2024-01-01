import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Main.css";
import americanfoorball from "./image/americanfootball.png";
import basketball from "./image/basketball.png";

const content = [
  {
    header: "ATHLETS",
    detail: [
      {
        subHeaderLeft: "01",
        subHeaderRight: "CONNECTION",
        paragraph:
          "Connect With coaches directly, you can ping coaches to view",
      },
      {
        subHeaderLeft: "02",
        subHeaderRight: "COLLABORATION",
        paragraph:
          "Work with other student athletes to increase visability, When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
      },
      {
        subHeaderLeft: "03",
        subHeaderRight: "GROWTH",
        paragraph:
          "Resources and tools for you to get better as a student Athelte. Access to training classNamees, tutor session, etc",
      },
    ],
  },
  {
    header: "PLAYERS",
    detail: [
      {
        subHeaderLeft: "01",
        subHeaderRight: "CONNECTION",
        paragraph:
          "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
      },
      {
        subHeaderLeft: "02",
        subHeaderRight: "COLLABORATION",
        paragraph:
          "Work with recruiter to increase your chances of finding talented athlete",
      },
      {
        subHeaderLeft: "03",
        subHeaderRight: "GROWTH",
        paragraph: "Save your time, recruit proper athlets for your team",
      },
    ],
  },
];

const Main = () => {
  return (
    <div className="container">
      <div className="container-content1">
        <Content1></Content1>
      </div>
      <div className="container-content2">
        <Content2></Content2>
      </div>
    </div>
  );
};

function Content1() {
  return (
    <div>
      <div className="container-content1-1">
        <div className="row1">
          <div className="column1-1"></div>
          <div className="column1-2">
            <div className="header">{content[0].header}</div>
          </div>
        </div>
        <div className="detail-1-1">
          <div className="row2">
            <div className="column2-1"></div>
            <div className="column2-2">
              <div className="title-main">
                <div className="title-left-1">
                  {content[0].detail[0].subHeaderLeft}
                </div>
                <div className="title-right">
                  {content[0].detail[0].subHeaderRight}
                </div>
              </div>
              <div className="paragraph-black">
                {content[0].detail[0].paragraph}
              </div>
            </div>
          </div>
          <div className="row3">
            <div className="column3-1"></div>
            <div className="column3-2">
              <div className="title-main">
                <div className="title-left-1">
                  {content[0].detail[1].subHeaderLeft}
                </div>
                <div className="title-right">
                  {content[0].detail[1].subHeaderRight}
                </div>
              </div>
              <div className="paragraph-black">
                {content[0].detail[1].paragraph}
              </div>
            </div>
          </div>
          <div className="row4">
            <div className="column4-1"></div>
            <div className="column4-2">
              <div className="title-main">
                <div className="title-left-2">
                  {content[0].detail[2].subHeaderLeft}
                </div>
                <div className="title-right">
                  {content[0].detail[2].subHeaderRight}
                </div>
              </div>
              <div className="paragraph-white">
                {content[0].detail[2].paragraph}
              </div>
            </div>
          </div>
        </div>
        <div className="detail-1-2">
          <div className="mid-space">
            <img src={americanfoorball} alt="americanfoorball" width="180" />
          </div>
          <div className="slide-container">
            {/* <ContentSlider data={content[0]}></ContentSlider> */}
            <ContentSwiper data={content[0]}></ContentSwiper>
          </div>
        </div>
      </div>
      <div className="container-content1-2">
        <div className="header-2">
          <div className="column5-1">
            <div className="header">{content[1].header}</div>
          </div>
          <div className="column5-2"></div>
        </div>
        <div className="detail-2-1">
          <div className="row6">
            <div className="column6-1">
              <div className="title-main">
                <div className="title-left-1">
                  {content[1].detail[0].subHeaderLeft}
                </div>
                <div className="title-right">
                  {content[1].detail[0].subHeaderRight}
                </div>
              </div>
              <div className="paragraph-black">
                {content[1].detail[0].paragraph}
              </div>
            </div>
            <div className="column6-2"></div>
          </div>

          <div className="row7">
            <div className="column7-1">
              <div className="title-main">
                <div className="title-left-1">
                  {content[1].detail[1].subHeaderLeft}
                </div>
                <div className="title-right">
                  {content[1].detail[1].subHeaderRight}
                </div>
              </div>
              <div className="paragraph-black">
                {content[1].detail[1].paragraph}
              </div>
            </div>
            <div className="column7-2"></div>
          </div>
          <div className="row8">
            <div className="column8-1">
              <div className="title-main">
                <div className="title-left-3">
                  {content[1].detail[2].subHeaderLeft}
                </div>
                <div className="title-right">
                  {content[1].detail[2].subHeaderRight}
                </div>
              </div>
              <div className="paragraph-white">
                {content[1].detail[2].paragraph}
              </div>
            </div>
            <div className="column8-2"></div>
          </div>
        </div>
        <div className="detail-2-2">
          <div className="mid-space">
            <img src={basketball} alt="basketball" width="250" />
          </div>
          <div className="slide-container">
            {/* <ContentSlider data={content[1]}></ContentSlider> */}
            <ContentSwiper data={content[1]}></ContentSwiper>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="container-content2-con">
      <div className="container-content2-1">
        <div className="image-1">
          <img
            src={americanfoorball}
            alt="americanfoorball"
            // width="650"
            // max-height="1080px"
          />
        </div>
      </div>
      <div className="container-content2-2">
        <div className="image-2">
          <img src={basketball} alt="basketball" />
        </div>
      </div>
    </div>
  );
}

function ContentSlider(props) {
  const { data } = props;
  const { header } = data;
  console.log("### data", data);
  const [slide, setSlide] = useState(0);

  return (
    <div
      className={
        header === "ATHLETS"
          ? slide === 1
            ? "carousel-gray"
            : slide === 2
            ? "carousel-purple"
            : "carousel"
          : header === "PLAYERS"
          ? slide === 1
            ? "carousel-gray"
            : slide === 2
            ? "carousel-black"
            : "carousel"
          : "carousel"
      }
    >
      <div className="row-slide">
        <div className="title-main">
          {/* <div className="title-left-1"> */}
          <div
            className={
              header === "ATHLETS"
                ? slide === 2
                  ? "title-left-2"
                  : " title-left-1"
                : header === "PLAYERS"
                ? slide === 2
                  ? "title-left-3"
                  : " title-left-1"
                : ""
            }
          >
            {data?.detail[slide].subHeaderLeft}
          </div>
          <div className="title-right">
            {data?.detail[slide].subHeaderRight}
          </div>
        </div>
        <div className={slide === 2 ? "paragraph-white" : "paragraph-black"}>
          {data?.detail[slide].paragraph}
        </div>
      </div>
      <span className="indicators">
        {data?.detail.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}

function ContentSwiper(props) {
  const { data } = props;
  console.log("### data", data);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "" + "</span>";
    },
  };

  return (
    <div className="container-swiper">
      <Swiper pagination={pagination} modules={[Pagination]}>
        <SwiperSlide>
          <div className="column2-2">
            <div className="title-main">
              <div className="title-left-1">{data.detail[0].subHeaderLeft}</div>
              <div className="title-right">{data.detail[0].subHeaderRight}</div>
            </div>
            <div className="paragraph-black">{data.detail[0].paragraph}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="column3-2">
            <div className="title-main">
              <div className="title-left-1">{data.detail[1].subHeaderLeft}</div>
              <div className="title-right">{data.detail[1].subHeaderRight}</div>
            </div>
            <div className="paragraph-black">{data.detail[1].paragraph}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="column4-2">
            <div className="title-main">
              <div className="title-left-1">{data.detail[2].subHeaderLeft}</div>
              <div className="title-right">{data.detail[2].subHeaderRight}</div>
            </div>
            <div className="paragraph-black">{data.detail[2].paragraph}</div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
export default Main;
