import { useEffect, useRef, useState } from "react";

function Accordion({ content, currentTab = null, callback = null }) {
  const [activeTab, setActiveTab] = useState(currentTab)
  const refs = useRef([])

  const handleToggle = (index) => {
    setActiveTab((prev) => (prev === index ? null : index))
    callback && callback(null)
  }

  useEffect(() => {
    if (currentTab === null) return

    setActiveTab((prev) => (prev === currentTab ? null : currentTab))
  }, [currentTab])

  return (
    <>
      {content.map((tab, index) => (
        <div id={`accordion-tab-${index}`} key={index} className="text-h5">
          <div onClick={() => handleToggle(index)} className="cursor-pointer bg-red-100">
            {tab.label}
          </div>
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
            {tab.content}
          </div>
        </div>
      ))}
    </>
  )
}

export default Accordion;