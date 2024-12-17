"use client";

import ProductGallery from "@/Components/Product/ProductGallery";

// TODO remove mockdata
const images = [
  "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
  "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
  "https://gushka.ua/_next/image?url=https%3A%2F%2Fgushka.1b.app%2Fmedia%2Fshop%2F%2Fee%2F1f%2Fee1f919283297fa421f9a8e849f4b02b.jpg&w=3840&q=75",
];

function Page() {
  

  return (
    <div className="p-24 flex flex-col gap-24">
      <div className="grid grid-cols-2 gap-24">        
        <div className="w-full h-[calc(80dvh)] flex justify-start">
          <ProductGallery images={images} />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Product Title</h1>
          <div className="mb-4">Sizes (size guide)</div>

          <div className="flex items-center gap-2 mb-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Add to Cart
            </button>
            <span className="text-lg font-bold">$100</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>Description</div>
            <div>Care</div>
            <div>Materials</div>
            <div>Shipping & Returns</div>
          </div>
        </div>
      </div>

      <div className="min-h-[400px]">
        <div className="flex gap-3 text-h5 [&>*]:p-3 [&>*]:tracking-wider">
          <div>Description</div>
          <div>Care</div>
          <div>Materials</div>
          <div>Shipping & Returns</div>
        </div>
        <div className="w-full grid grid-cols-2 gap-24">
          <div className="px-6 py-12 leading-loose text-p bg-white">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus augue at mi rutrum, sit amet lacinia justo imperdiet. Aliquam cursus orci vel efficitur efficitur. Suspendisse eleifend lorem at mauris dapibus varius. Suspendisse quis nisi consectetur, porttitor tortor vitae, ornare tellus. Vestibulum vel rhoncus quam. Phasellus fringilla sed est sit amet vestibulum. Donec convallis tortor sit amet ligula gravida, nec blandit nisi lacinia. Maecenas a varius ipsum. Mauris sagittis diam justo, non porttitor mi vehicula at. Nam arcu libero, facilisis et vehicula ac, dictum et sem. Phasellus congue risus eget bibendum ultricies. Aliquam erat volutpat. Duis vel tristique ex.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
