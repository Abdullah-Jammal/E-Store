import React from "react";
import { FaStar } from "react-icons/fa";

const ProductRating = ({ productID }: { productID: string }) => {
  const rating = 4.2;
  const reviews = 22;
  const reviewText = `(${reviews}) Reviews`;
  return (
    <span className="flex gap-1 items-center text-md mt-1 mb-4">
      <FaStar className="w-3 h-3" />
      {rating} {reviewText}
    </span>
  );
};

export default ProductRating;
