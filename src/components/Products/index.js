import { Component } from "react";
import { RotatingLines } from 'react-loader-spinner';


import './index.css';
import ProductItems from '../ProductItems';

class Products extends Component {
  state = {
    productList: [],
    isLoadingScreen: false,
    fetchError: false
  };

  componentDidMount() {
    this.fetchGetProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sortOption !== this.props.sortOption) {
      this.applySorting(this.props.sortOption);
    }
  }

  fetchGetProducts = async () => {
    this.setState({ isLoadingScreen: true, fetchError: false });

    const getProductApi = "https://fakestoreapi.com/products";

    try {
      const response = await fetch(getProductApi);

      if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format");
      }

      const productsData = await response.json();

      const updateProductsData = productsData.map(eachProduct => ({
        category: eachProduct.category,
        description: eachProduct.description,
        id: eachProduct.id,
        image: eachProduct.image,
        price: eachProduct.price,
        rating: eachProduct.rating,
        title: eachProduct.title,
        isLike: false,
      }));

      this.setState(
        {
          productList: updateProductsData,
          isLoadingScreen: false,
          fetchError: false
        },
        () => {
          this.applySorting(this.props.sortOption);
        }
      );
    } catch (error) {
      console.error("Fetch products failed:", error.message);
      this.setState({ isLoadingScreen: false, fetchError: true });
    }
  };

  applySorting = (option) => {
    const { productList } = this.state;
    let sortedList = [...productList];

    switch (option) {
      case "HIGH_TO_LOW":
        sortedList.sort((a, b) => b.price - a.price);
        break;
      case "LOW_TO_HIGH":
        sortedList.sort((a, b) => a.price - b.price);
        break;
      case "NEWEST_FIRST":
        sortedList.sort((a, b) => b.id - a.id);
        break;
      case "POPULAR":
        sortedList.sort((a, b) => b.rating.count - a.rating.count);
        break;
      default:
        break;
    }

    this.setState({ productList: sortedList });
  };

  onClickLike = (id) => {
    this.setState(prevState => ({
      productList: prevState.productList.map(eachProduct =>
        eachProduct.id === id
          ? { ...eachProduct, isLike: !eachProduct.isLike }
          : eachProduct
      )
    }));
  };

  render() {
    const { isLoadingScreen, productList, fetchError } = this.state;

    if (isLoadingScreen) {
      return (
        <div className="Loading-screen-container">
          <RotatingLines color="rgb(49, 7, 216)" height="70" width="70" />
        </div>
      );
    }

    if (fetchError) {
      return (
        <div className="error-message-container">
          <p className="error-text">Oops! Failed to load products. Please try again later.</p>
        </div>
      );
    }

    return (
      <div className="product-section-container">
        <ul className="product-main-container">
          {productList.map(eachProduct => (
            <ProductItems
              key={eachProduct.id}
              productItems={eachProduct}
              onClickLike={this.onClickLike}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
