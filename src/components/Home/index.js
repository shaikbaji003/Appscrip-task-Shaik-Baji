import { Component } from "react";
import { LuArrowBigDownDash, LuArrowBigUpDash } from "react-icons/lu";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Header from '../Header';
import Footer from "../Footer";
import Products from '../Products';

import './index.css';

class Home extends Component {
  state = {
    filterToggle: false,
    selectedSortOption: 'RECOMMENDED',
    filters: {
      idealFor: { men: false, women: false, kids: false },
      occasion: { casual: false, formal: false },
      work: { office: false, party: false },
      fabric: { cotton: false, silk: false },
      segment: { luxury: false, budget: false },
      suitableFor: { summer: false, winter: false },
      rawMaterials: { organic: false, synthetic: false },
      pattern: { solid: false, printed: false },
    },
  };

  onCLickFilterToggle = () => {
    this.setState(prevState => ({
      filterToggle: !prevState.filterToggle
    }));
  };

  onChangeSortOption = (event) => {
    this.setState({ selectedSortOption: event.target.value });
  };

  toggleCheckbox = (category, option) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [category]: {
          ...prevState.filters[category],
          [option]: !prevState.filters[category][option],
        },
      },
    }));
  };

  unselectAll = (category) => {
    const resetCategory = {};
    Object.keys(this.state.filters[category]).forEach(option => {
      resetCategory[option] = false;
    });
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [category]: resetCategory,
      },
    }));
  };

  renderFilterSection = (title, category, optionsMap) => (
    <div className="filter-section-block">
      <div className="filter-title">{title.toUpperCase()}</div>
      <div
        className="filter-unselect"
        onClick={() => this.unselectAll(category)}
      >
        Unselect all
      </div>
      {Object.keys(optionsMap).map(option => (
        <div key={option} className="filter-checkbox">
          <input
            type="checkbox"
            id={`${category}-${option}`}
            checked={this.state.filters[category][option]}
            onChange={() => this.toggleCheckbox(category, option)}
          />
          <label htmlFor={`${category}-${option}`} className="filter-label">
            {option.charAt(0).toUpperCase() + option.slice(1).replace(/_/g, ' ')}
          </label>
        </div>
      ))}
    </div>
  );

  render() {
    const { filterToggle, selectedSortOption, filters } = this.state;

    const isUpArrow = filterToggle ? (
      <LuArrowBigUpDash className="arrow-icons" size={20} />
    ) : (
      <LuArrowBigDownDash className="arrow-icons" size={20} />
    );

    const isDisplayFilterItems = filterToggle
      ? "filter-items-main-container"
      : "not-display-filter-items-conntainer";

    const isShowFilterText = filterToggle ? 'HIDE FILTER' : 'SHOW FILTER';

    return (
      <div className="home-main-container">
        <Header />
        <div className="home-container">
          <div className='indicate-nav-container'>
            <p className='indicate-home-item'>HOME</p>
            <p className='indicate-shop-item'>SHOP</p>
          </div>

          <div className='home-heading-and-description'>
            <h1 className='home-heading'>DISCOVER OUR PRODUCTS</h1>
            <p className='home-description'>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementun dolor.
            </p>
          </div>

          {/* Mobile Filters */}
          <div className="small-device-filters-section-container">
            <div className="filter-heading-container" onClick={this.onCLickFilterToggle}>
              <h1 className='filter-heading-button'>FILTER</h1>
              {isUpArrow}
            </div>
            <div className='filter-select-container'>
              <select className='filter-select' value={selectedSortOption} onChange={this.onChangeSortOption}>
                <option value="RECOMMENDED">RECOMMENDED</option>
                <option value="NEWEST_FIRST">NEWEST FIRST</option>
                <option value="POPULAR">POPULAR</option>
                <option value="HIGH_TO_LOW">HIGH TO LOW</option>
                <option value="LOW_TO_HIGH">LOW TO HIGH</option>
              </select>
            </div>
          </div>

          {/* Desktop Filters */}
          <div className="large-device-filters-section-container">
            <div className="filter-section-container">
              <h1 className='filter-item-count'>3425 ITEMS</h1>
              <div className="showFilter-heading-container">
                {filterToggle ? (
                  <MdChevronLeft className="arrow-icons" size={23} />
                ) : (
                  <MdChevronRight className="arrow-icons" size={23} />
                )}
                <h1 className="showFilter-heading" onClick={this.onCLickFilterToggle}>{isShowFilterText}</h1>
              </div>
            </div>
            <div className='filter-select-container'>
              <select className='filter-select' value={selectedSortOption} onChange={this.onChangeSortOption}>
                <option value="RECOMMENDED">RECOMMENDED</option>
                <option value="NEWEST_FIRST">NEWEST FIRST</option>
                <option value="POPULAR">POPULAR</option>
                <option value="HIGH_TO_LOW">HIGH TO LOW</option>
                <option value="LOW_TO_HIGH">LOW TO HIGH</option>
              </select>
            </div>
          </div>

          {/* Filters + Products */}
          <div className="filter-and-product-section-container">
            <div className={isDisplayFilterItems}>
              <div className="filter-items-container">

                {/* Customizable static */}
                <div className="filter-checkbox">
                  <input type="checkbox" id="customizable" />
                  <label htmlFor="customizable" className="filter-label">CUSTOMIZABLE</label>
                </div>

                {/* Dynamic filter categories */}
                {this.renderFilterSection("Ideal For", "idealFor", filters.idealFor)}
                {this.renderFilterSection("Occasion", "occasion", filters.occasion)}
                {this.renderFilterSection("Work", "work", filters.work)}
                {this.renderFilterSection("Fabric", "fabric", filters.fabric)}
                {this.renderFilterSection("Segment", "segment", filters.segment)}
                {this.renderFilterSection("Suitable For", "suitableFor", filters.suitableFor)}
                {this.renderFilterSection("Raw Materials", "rawMaterials", filters.rawMaterials)}
                {this.renderFilterSection("Pattern", "pattern", filters.pattern)}
              </div>
            </div>

            <Products
              filterToggle={filterToggle}
              sortOption={selectedSortOption}
              filters={filters}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
