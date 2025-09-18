import { useContext } from "react";
import { myContect } from "../../../main";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./Clients.module.css";

export const Clients = () => {
  const { clientData } = useContext(myContect);
  return (
    <section id="clients">
      <div className="container">
        <SectionTitle bigTitle={"Our Clients"} title={"Our Clients"} />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{
            
          }}
        >
          {clientData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={style.box}>
                <img src={item?.imgSrc} alt="imgLogo" />
                <div>
                  <h3>{item?.name}</h3>
                  <p className={style.p}>{item?.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
