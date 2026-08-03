import ProductDetails from "@/components/ProductDetails"

const page = async ({params}) => {
    
    const {id} = await params
    
  return (
    <>
    <ProductDetails id={id}/>
    </>
  )
}

export default page