import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useProductPage } from "../Pages/ProductPage";

function ProductGallery() {
  const { images } = useProductPage()

  const containerRef = useRef(null); // Ref for scroll container
  const [activeIndex, setActiveIndex] = useState(0); // Track active image index  

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

      <div ref={containerRef} className="bg-red-100 h-[calc(100%-200px)] w-[calc(100%-200px)] overflow-y-scroll no-scrollbar relative">
        {images.map((src, index) => (
          <div
            key={index}
            data-index={index}
            className="image-item aspect-[3/4] relative"
          >
            <Image src={src} alt={`Image ${index + 1}`} fill />
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 bottom-0 flex items-center justify-between -translate-x-1/2 z-10 w-full h-[100px] px-[100px]">
        <div className="flex items-center gap-2 font-semibold text-grey">
          <div>{activeIndex + 1}</div>
          <div className="w-[2px] bg-grey h-[20px] rotate-12"></div>
          <div>{images.length}</div>
        </div>
        <div className="flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToImage(index)}
              className={`!w-3 !h-3 flex rounded-full transition bg-grey border-grey ${
                activeIndex === index ? "bg-grey" : "opacity-10"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ProductGallery