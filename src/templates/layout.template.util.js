import _ from 'lodash';

export const getProductsCounter = (products, tab, numberPerPage) => {
  let totalCount = 0;
  switch (tab) {
    case 'all':
      totalCount = products.length;
      break;
    case 'recommended':
      totalCount = products.filter((product) => product.isRecommended).length;
      break;
    case 'latest':
      totalCount = products.filter(
        (product) =>
          new Date().getMonth() - new Date(product.updatedAt).getMonth() <= 1
      ).length;
      break;
    default:
      totalCount = products.length;
  }
  return { totalCount, numPages: Math.ceil(totalCount / numberPerPage) };
};

export const filterProductsListByTab = (
  products,
  tab,
  currentPage,
  numberProductsPerPage = 15
) => {
  let startAt = (currentPage - 1) * numberProductsPerPage;
  let endAt = currentPage * numberProductsPerPage;
  const productsCounter = getProductsCounter(
    products,
    tab,
    numberProductsPerPage
  );
  if (productsCounter.totalCount < startAt) {
    startAt = Math.max(productsCounter.totalCount - numberProductsPerPage, 0);
    endAt = startAt + numberProductsPerPage;
  }
  switch (tab) {
    case 'all':
      return products.map((product) => product).slice(startAt, endAt);
    case 'recommended':
      return products
        .filter((product) => product.isRecommended)
        .slice(startAt, endAt);
    case 'latest':
      return products
        .filter(
          (product) =>
            new Date().getMonth() - new Date(product.updatedAt).getMonth() <= 1
        )
        .slice(startAt, endAt);
    default:
      return products.map((product) => product).slice(startAt, endAt);
  }
};

export const sortingProductsList = (products, sortingIndex) => {
  // case 3 : discount desc
  switch (sortingIndex) {
    case 0: //price asc
      return _.sortBy(
        products.map((product) => ({
          ...product,
          price:
            product.isDiscount && product.discountPercentage
              ? (product.unitPrice * (100 - +product.discountPercentage)) / 100
              : product.unitPrice,
        })),
        ['price'],
        ['asc']
      );
    case 1: //price desc
      return _.sortBy(
        products.map((product) => ({
          ...product,
          price:
            product.isDiscount && product.discountPercentage
              ? (product.unitPrice * (100 - +product.discountPercentage)) / 100
              : product.unitPrice,
        })),
        [(o) => -o.price]
      );
    case 2: //discount asc
      return _.sortBy(
        products.map((product) => product),
        [(o) => o.discountPercentage]
      );
    case 3: //discount desc
      return _.sortBy(
        products.map((product) => product),
        [(o) => -o.discountPercentage]
      );
    default:
      return products;
  }
};

export const getProductsListByPriceScope = (products, from, to) =>
  products
    .map((product) => ({
      ...product,
      price:
        product.isDiscount && product.discountPercentage
          ? (product.unitPrice * (100 - +product.discountPercentage)) / 100
          : product.unitPrice,
    }))
    .filter((product) => product.price >= from && product.price <= to);

export const filterProductsListByDiscount = (products, discountIndex) => {
  switch (discountIndex) {
    case 1: //is discount
      return products.filter((product) => product.isDiscount);
    case 2: //is not discount
      return products.filter((product) => !product.isDiscount);
    default:
      return products;
  }
};

export const filterProductsListByManufactor = (products, manufactor) =>
  products.filter((product) =>
    manufactor === 'all' ? true : product.manufactor === manufactor
  );
