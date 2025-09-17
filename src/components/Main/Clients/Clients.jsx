import { useContext } from "react";
import { myContect } from "../../../main";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        >
          {clientData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <img
                  src={item?.imgSrc}
                  alt="imgLogo"
                  style={{
                    width: "50%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
                <div>
                  <h3>{item?.name}</h3>
                  <p>{item?.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
