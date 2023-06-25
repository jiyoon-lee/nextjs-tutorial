import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const PantsPage = ({ params }: Props) => {
  return <div>{params.slug} 상품 소개 페이지</div>;
};

export default PantsPage;
