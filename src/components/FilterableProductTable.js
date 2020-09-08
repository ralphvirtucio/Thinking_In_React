import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      inStockOnly: false,
    };

    this.changeFilterText = this.changeFilterText.bind(this);
    this.changeInStockOnly = this.changeInStockOnly.bind(this);
  }

  changeFilterText(filterText) {
    this.setState({ filterText: filterText });
  }

  changeInStockOnly(inStockOnly) {
    this.setState({ inStockOnly: inStockOnly });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          changeFilterText={this.changeFilterText}
          inStockOnly={this.state.inStockOnly}
          changeInStockOnly={this.changeInStockOnly}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
