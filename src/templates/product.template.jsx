import React, { useEffect } from 'react';
import Layout from '../containers/Layout';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation/BreadcrumbNavigation';
import {
  ProductOverviewContainer,
  Box,
} from './styles/product.template.styles';
import { graphql } from 'gatsby';
import { useTheme } from '../theme';
import ProductImages from '../components/Product/ProductImages';
import ProductContent from '../components/Product/ProductContent';
import ProductInformation from '../components/Product/ProductInformation';
import ProductDescription from '../components/Product/ProductDescription';
import RelevantProducts from '../components/Product/RelevantProducts';
import Seo from '../components/Seo/Seo';
import { Disqus } from 'gatsby-plugin-disqus';
import { increaseProductViews } from '../database/product';
const ProductProduct = (props) => {
  const {
    product,
    productsByCategory,
    productsByProductGroup,
    site,
  } = props.data;
  const { theme } = useTheme();
  const { portfolio, category, productGroup, images } = product;
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      url: `${site.siteMetadata.siteUrl}/products/${product.slug}`,
      identifier: product.contentful_id,
      title: product.name_vi,
    },
  };

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      increaseProductViews(product);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo
        title={product.name_vi}
        description={`${product.description_vi.description_vi.slice(
          0,
          150
        )} ...`}
      />
      <Layout>
        <BreadcrumbNavigation
          contenfulData={[portfolio, category, productGroup, product]}
        />
        <ProductOverviewContainer theme={theme}>
          <ProductImages images={images} />
          <ProductContent product={product} />
        </ProductOverviewContainer>
        <Box theme={theme}>
          <ProductInformation product={product} />
        </Box>
        <Box theme={theme}>
          <ProductDescription product={product} />
        </Box>
        <Box theme={theme}>
          <RelevantProducts
            currentProduct={product}
            productsByCategory={productsByCategory}
            productsByProductGroup={productsByProductGroup}
          />
        </Box>
        <Box theme={theme}>
          <Disqus {...disqusConfig} />
        </Box>
      </Layout>
    </>
  );
};

export const query = graphql`
  query(
    $contentful_id: String
    $category_contentful_id: String
    $productGroup_contentful_id: String
  ) {
    product: contentfulProduct(contentful_id: { eq: $contentful_id }) {
      contentful_id
      slug
      name_vi
      name_en
      status
      slug
      quantity
      unitPrice
      isRecommended
      origin
      manufactor
      sizes
      isDiscount
      discountPercentage
      information_vi {
        key
        value
        values
      }
      information_en {
        key
        value
        values
      }
      description_vi {
        description_vi
      }
      description_en {
        description_en
      }
      colors {
        color
        image
      }
      images {
        file {
          url
          details {
            image {
              width
              height
            }
          }
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
      createdAt
      updatedAt
    }
    productsByCategory: allContentfulProduct(
      filter: { category: { contentful_id: { eq: $category_contentful_id } } }
      sort: { fields: updatedAt, order: DESC }
      limit: 20
    ) {
      edges {
        node {
          contentful_id
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
    }
    productsByProductGroup: allContentfulProduct(
      filter: {
        productGroup: { contentful_id: { eq: $productGroup_contentful_id } }
      }
      sort: { fields: updatedAt, order: DESC }
      limit: 20
    ) {
      edges {
        node {
          contentful_id
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
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default ProductProduct;
