"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";

import IconButton from "./IconButton";
import Currency from "./Currency";

type Props = {
  data: Product;
};

const ProductCard = ({ data }: Props) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          className="aspect-square object-cover rounded-md"
          src={data?.images?.[0].url}
          fill
          alt="image"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand />}
              className="text-gray-600"
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart />}
              className="text-gray-600"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-grey-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
