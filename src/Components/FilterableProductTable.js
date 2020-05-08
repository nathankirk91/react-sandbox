import React, { useState } from "react";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

import PRODUCTS from "../PRODUCTS";

const FilterableProductTable = props => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = filterText => {
    setFilterText(filterText);
  };

  const handleInStockChange = inStockOnly => {
    setInStockOnly(inStockOnly);
  };

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
