import ProductDetails from "@/components/ProductDetails";

interface PageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <>
      <ProductDetails id={id} />
    </>
  );
};

export default page;
