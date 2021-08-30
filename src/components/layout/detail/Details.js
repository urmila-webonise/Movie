import React from "react";
import BhansaliProdList from "../../features/admin/details/Bhansali/BhansaliProdList";
import ColumbiaProdList from "../../features/admin/details/Columbia/ColumbiaProdList";
import DreamworkworkProdList from "../../features/admin/details/Dreamwork/DreamworkProdList";
import ErosInternationalList from "../../features/admin/details/ErosInternational/ErosInternationalList";
import GooduniProdList from "../../features/admin/details/GoodUni/GooduniProdList";
import MetroProdList from "../../features/admin/details/Metro/MetroProdList";
import ParamountProdList from "../../features/admin/details/Paramount/ParamountProdList";
import TristarProdList from "../../features/admin/details/Tristar/TristarProdList";
import TwentiethcenProdList from "../../features/admin/details/TwentiethCen/TwentiethcenProdList";
import UniversalProdList from "../../features/admin/details/Universal/UniversalProdList";
const Details = () => {
  return (
    <>
      <BhansaliProdList />
      <ColumbiaProdList />
      <DreamworkworkProdList />
      <ErosInternationalList />
      <GooduniProdList />
      <MetroProdList />
      <ParamountProdList />
      <TristarProdList />
      <TwentiethcenProdList />
      <UniversalProdList />
    </>
  );
};

export default Details;
