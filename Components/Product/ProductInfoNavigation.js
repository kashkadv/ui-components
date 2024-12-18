import DefaultButton from "../Buttons/DefaultButton"
import { useProductPage } from "../Pages/ProductPage"
import UseIcon from "../UI/UseIcon"

function ProductInfoNavigation() {
  const { info, openAccordionTab } = useProductPage()

  return (
    <div className="grid grid-cols-2 gap-4">
      {info.map((feature, i) => (
        <DefaultButton onClick={() => openAccordionTab(i, true)} key={`info-nav-${i}`} className="uppercase text-small font-black tracking-widest text-greyDark group hover:text-grey transition-all duration-500">
          <span>{feature.label}</span>
          <UseIcon id="arrow-right" w="4" className="group-hover:ml-2 group-hover:rtl:mr-2 transition-all" />
        </DefaultButton>
      ))}
    </div>
  )
}
export default ProductInfoNavigation