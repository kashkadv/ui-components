import { useRef, useState, useEffect, use } from "react";
import Image from "next/image";
import { useProductPage } from "../Pages/ProductPage";
import UseIcon from "../UI/UseIcon";
import { toggleScrollbar } from "@/helpers";

function ProductGallery() {
  const { product } = useProductPage()
  const images = product?.images || []

  const containerRef = useRef(null); // Ref for scroll container
  const [activeIndex, setActiveIndex] = useState(0); // Track active image index
  
  const [isOpen, setIsOpen] = useState(false);

  const handlePopupState = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      }
    );

    const imageElements = containerRef.current?.querySelectorAll(".image-item");
    imageElements?.forEach((img) => observer.observe(img));

    return () => {
      imageElements?.forEach((img) => observer.unobserve(img));
    };
  }, []);

  const scrollToImage = (index) => {
    const container = containerRef.current;
    const image = container?.querySelector(`[data-index="${index}"]`);
    if (image) {
      container.scrollTo({
        top: image.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full bg-white/90  h-full shadow-xl">
      <div ref={containerRef} onClick={handlePopupState} className="cursor-pointer h-[calc(100%-200px)] w-[calc(100%-200px)] overflow-y-scroll no-scrollbar relative">
        {images.map((src, index) => (
          <div key={index} data-index={index} className="image-item aspect-[3/4] relative">
            <Image src={src} alt={`Image ${index + 1}`} fill />
          </div>
        ))}

      </div>

      <div className="absolute left-1/2 bottom-0 flex items-center justify-between -translate-x-1/2 z-10 w-full h-[100px] px-[100px]">

        <div className="flex items-center gap-2 font-semibold text-grey">
          <div className="text-greyDark">{activeIndex + 1}</div>
          <div className="w-[1px] bg-greyLight h-[20px] "></div>
          <div className="text-greyLight">{images.length}</div>
        </div>

        <PopupTrigger handlePopupState={handlePopupState} />
        
        <div className="flex items-center gap-2">
          {images.map((_, index) => (
            <button
            key={index}
            onClick={() => scrollToImage(index)}
            className={`w-2 h-2 flex transition-all rounded-full bg-grey border-grey ${
              activeIndex === index ? "bg-greyDark !w-3 !h-3" : "opacity-10"
            }`}
            ></button>
          ))}
        </div>
      </div>

      <GalleryPopup isOpen={isOpen} handlePopupState={handlePopupState} />
    </div>
  )
}

function PopupTrigger({ handlePopupState }) {
  return (
    <button className="z-10 bottom-0 right-0" onClick={handlePopupState}>
      <UseIcon id="search-plus" w="6" className="text-greyLight transition-all hover:text-greyDark" />
    </button>
  )
}

function GalleryPopup({isOpen, handlePopupState}) {
  const { product } = useProductPage()
  const images = product?.images || []

  useEffect(() => {
    toggleScrollbar(isOpen)
  }, [isOpen])

  if (!isOpen) return 

  return (
    <div
      className="fixed w-full left-0 top-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-12"
      onClick={handlePopupState}
    >
      <div
        className="overflow-y-auto max-h-[calc(100dvh-96px)] w-full no-scrollbar shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-16 right-16 text-3xl font-bold text-black bg-transparent border-none cursor-pointer"
          onClick={handlePopupState}
        >
          <UseIcon id="x" w="8" className="text-greyDark transition-all hover:text-grey" />
        </button>
        <div className="flex flex-col bg-red-100 w-full">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Image ${index}`} className="w-full h-auto object-cover" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGallery