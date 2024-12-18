import DefaultButton from "../Buttons/DefaultButton"
import { useProductPage } from "../Pages/ProductPage"
import { useEffect, useRef, useState } from "react"
import UseIcon from "../UI/UseIcon"

function ProductInfoAccordion() {
  const { info: content, productInfoActiveIndex, openAccordionTab } = useProductPage()

  const [activeTab, setActiveTab] = useState(productInfoActiveIndex)
  const refs = useRef([])

  const handleToggle = (index) => {
    setActiveTab((prev) => (prev === index ? null : index))
    openAccordionTab(null)
  }

  useEffect(() => {
    if (productInfoActiveIndex === null) return

    setActiveTab((prev) => (prev === productInfoActiveIndex ? null : productInfoActiveIndex))
  }, [productInfoActiveIndex])

  return (
    <div className="grid grid-cols-2 gap-24">
      <div className="col-span-1 ">
        {content.map((tab, index) => (
          <div id={`accordion-tab-${index}`} key={index} className={`transition-all  text-h5 ${activeTab === index && 'shadow-xl'}`}>  
            <DefaultButton type="iconEnd" onClick={() => handleToggle(index)} className={`text-small uppercase tracking-widest font-black transition-all border-b border-b-greyDark w-full px-6 py-5 ${activeTab === index && 'bg-gradient-to-b from-background to-white'}`}>
              {tab.label}
              <UseIcon id="plus" w="5" className={`text-greyDark transition-all ${activeTab === index && 'rotate-45'}`} />
            </DefaultButton>
            <div
              ref={(el) => (refs.current[index] = el)}
              className="transition-[max-height] duration-300 overflow-hidden"
              style={{
                maxHeight:
                  activeTab === index
                    ? `${refs.current[index]?.scrollHeight || 0}px`
                    : "0",
              }}
            >
                <div className={`p-6 transition-all text-body ${activeTab === index && 'bg-white'}`}>{tab.content}</div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductInfoAccordion;