"use client";

type Props = { src: string; className: string; altNumber: number };

const ProductPageImage = ({ src, className, altNumber }: Props) => {
  return (
    <img
      onClick={() => {}}
      className={className}
      src={src}
      alt={`image-${altNumber}`}
    />
  );
};

export default ProductPageImage;
