import { getFetchUrl } from "@/lib/getFetchUrl";
import { StarIcon } from "@heroicons/react/24/solid";
import { notFound } from "next/navigation";

export const revalidate = 300;

type Props = { params: { id: string } };

const ProductPage = ({ params: { id } }: Props) => {
  return <div></div>;
};

export default ProductPage;
