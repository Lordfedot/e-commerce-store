"use client";

import { useEffect, useState } from "react";

type Props = {
  value: number;
};

const formater = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Currency = ({ value }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const formatedValue = formater.format(Number(value));
  return <div className="font-semibold">{formatedValue}</div>;
};

export default Currency;
