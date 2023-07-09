import { getFetchUrl } from "@/lib/getFetchUrl";
import { ProductData } from "@/typings";
import { StarIcon } from "@heroicons/react/24/solid";
import { notFound } from "next/navigation";

export const revalidate = 300;

type Props = { params: { id: string } };

const ProductPage = async ({ params: { id } }: Props) => {
  const response = await fetch(getFetchUrl(`api/shopping/product/${id}`));
  const productData = (await response.json()) as ProductData;

  if (!productData.content.pricing) {
    notFound();
  }

  return (
    <div className="p-12 pt-0">
      <h1 className="text-2xl">{productData.content.title}</h1>
      {productData.content.reviews && (
        <div className="flex space-x--1">
          {[
            ...Array.from({
              length: Math.round(productData.content.reviews.rating),
            }),
          ].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
          ))}
          {[
            ...Array.from({
              length: 5 - Math.round(productData.content.reviews.rating),
            }),
          ].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 text-gray-200" />
          ))}
        </div>
      )}
      <section className="flex flex-col lg:flex-row mt-5 md:mt-0">
        <div className="md:p-10 md:pl-0 mx-auto">
          <div className="flex gap-4">
            <img
              className="h-80 w-80 rounded-md border p-5 object-contain"
              src={productData.content.images?.full_size[0]}
              alt="image-1"
            />
            <div className="flex flex-col justify-between">
              {productData.content.images.full_size
                ?.slice(1, 3)
                .map((image, i) => (
                  <img
                    src={image}
                    alt={`image-${i + 2}`}
                    key={i}
                    className="w-[9.5rem] h-[9.5rem] object-contain border rounded-md"
                  />
                ))}
            </div>
          </div>
          <div className="flex soace-x-6 overflow-x-scroll py-2 md:w-[30rem]">
            {productData.content.images.full_size.slice(3).map((image, i) => (
              <img
                src={image}
                alt={`image-${i + 5}`}
                key={i}
                className="w-20 h-20 object-contain"
              />
            ))}
          </div>
        </div>
        <div className="pt-10 flex-1">
          <div>
            {productData.content.pricing.online[0]?.details && (
              <>
                <h3 className="font-bold text-2xl">Product Deails</h3>
                <p className="text-lg">
                  {productData.content.pricing.online[0]?.price_total}{" "}
                  {productData.content.pricing.online[0]?.currency}
                </p>
                <div className="flex space-x-4">
                  <p className="text-sm text-gray-600">
                    ({productData.content.pricing.online[0]?.price}{" "}
                    {productData.content.pricing.online[0]?.currency} +{" "}
                    {productData.content.pricing.online[0]?.price_tax}{" "}
                    {productData.content.pricing.online[0]?.currency} tax)
                  </p>
                  {productData.content.pricing.online.length > 1 && (
                    <p className="text-sm text-blue-600">
                      + {productData.content.pricing.online.length - 1} more
                      prices
                    </p>
                  )}
                </div>
                <p className="text-sm text-gray-600 ml5">
                  {productData.content.pricing.online[0]?.details}
                </p>
              </>
            )}
            <hr className="my-3" />
            <p className="text-justify">{productData.content.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
