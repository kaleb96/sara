"use client";
import { getAllProductsInfo } from "@/axios/fakeStore";
import { ArrowLeftIcon, ArrowRightIcon } from "flowbite-react";
import { useEffect, useState } from "react";
import { Spinner } from "./components/common/Spinner";

export default function MainCarousel() {
  const [carouselImg, setCarouselImg] = useState<string[]>([]);
  //mounted
  useEffect(() => {
    console.log("mounted");
    const fetchProducts = async () => {
      const { data: resData } = await getAllProductsInfo();
      const images = resData.map((data) => data.image);
      setCarouselImg(images);
    };
    fetchProducts();
  }, []);

  return (
    // <div className="flex flex-row items-center justify-center w-full bg-blue-500">
    <div className="flex items-center justify-center w-full">
      <ArrowLeftIcon
        fontSize={24}
        className="m-10 cursor-pointer text-gray-700"
      />
      {/* <div className="bg-red-500 w-full h-190 "> */}
      {/* TODO: Carousel은 구현해야함 */}
      <div className="w-full h-190">
        <>
          {carouselImg.length === 0 ? (
            <div className="w-full h-full flex justify-center items-center">
              <Spinner size="lg" />
            </div>
          ) : (
            <img
              src={carouselImg[0]}
              alt="products"
              className="w-full h-full object-contain"
            />
          )}
        </>
      </div>
      <ArrowRightIcon
        fontSize={24}
        className="m-10 cursor-pointer text-gray-700"
      />
    </div>
  );
}
