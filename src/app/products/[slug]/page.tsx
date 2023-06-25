import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}
const PantsPage = ({ params }: Props) => {
  if (params.slug === "nothing") {
    notFound();
  }
  return <div>{params.slug} 상품 소개 페이지</div>;
};

export default PantsPage;

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
