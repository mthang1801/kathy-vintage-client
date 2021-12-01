import React from 'react';
import Layout from '../containers/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import ProductsList from '../components/Product/ProductsList';
import { useLanguage } from '../locales';
import { ProductsWrapper } from '../styles/new-products.styles';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation/BreadcrumbNavigation';
function NewProductsPage() {
  let { newProducts } = useStaticQuery(query);
  const {
    translation: { product },
  } = useLanguage();
  //format static data
  const newProductsEdges = newProducts?.edges?.map(({ node }) => node);
  const newProductsTotalCount = newProducts?.totalCount;
  return (
    <Layout>
      <BreadcrumbNavigation staticData={[product.newProducts]} />
      <ProductsWrapper>
        {newProductsEdges?.length ? (
          <ProductsList
            header={product.newProducts}
            products={newProductsEdges}
            isAllProducts={newProductsTotalCount === newProductsEdges.length}
          />
        ) : null}
      </ProductsWrapper>
    </Layout>
  );
}

const query = graphql`
  query {
    newProducts: allContentfulProduct(
      sort: { fields: updatedAt, order: DESC }
    ) {
      edges {
        node {
          name_en
          name_vi
          slug
          unitPrice
          isDiscount
          discountPercentage
          images {
            fluid {
              src
            }
          }
          portfolio {
            name_en
            name_vi
            slug
          }
          category {
            name_en
            name_vi
            slug
          }
          productGroup {
            name_en
            name_vi
            slug
          }
          updatedAt(formatString: "DD/MM/YYYY")
        }
      }
      totalCount
    }
  }
`;

export default NewProductsPage;
