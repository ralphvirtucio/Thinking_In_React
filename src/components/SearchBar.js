import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleChangeFilterText = this.handleChangeFilterText.bind(this);
    this.handleChangeInStockOnly = this.handleChangeInStockOnly.bind(this);
  }
  handleChangeFilterText(e) {
    this.props.changeFilterText(e.target.value);
  }

  handleChangeInStockOnly(e) {
    this.props.changeInStockOnly(e.target.checked);
  }
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input
          type='text'
          placeholder='Search...'
          value={filterText}
          onChange={this.handleChangeFilterText}
        />
        <p>
          <input
            type='checkbox'
            checked={inStockOnly}
            onChange={this.handleChangeInStockOnly}
          />
          {""}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
