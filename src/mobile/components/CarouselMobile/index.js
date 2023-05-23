import { Carousel } from "antd";
import { useEffect } from "react";
//import { APIREQ } from "../../../api/api";
const banners = [
  {
    id: 1,
    imageUrl:
      "https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2023-05-15/ad02257f-0f04-412b-91a4-174254509d9a.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://hotcoin-snp-idcard.oss-accelerate.aliyuncs.com/cms/support/2023-05-16/81d7b720-7ae1-4b7c-82bc-81f17d8d63d5.jpg",
  },
  {
    id: 3,
  },
];

export const CarouselMobile = async () => {
  return (
    <Carousel autoplay infinite>
      {banners.map((banner) => (
        <div key={banner.id}>
          <img
            src={banner.imageUrl}
            alt="Banner"
            className="banner-image"
            height="150px"
            width={"96%"}
            style={{ marginLeft: "2%", borderRadius: "5px" }}
          />
        </div>
      ))}
    </Carousel>
  );
};
