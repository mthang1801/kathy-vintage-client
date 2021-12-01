import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import {
  Wrapper,
  Header,
  Body,
} from '../../../Product/styles/ProductsList.styles';
import {
  Wrapper as Card,
  ImageContainer,
  ProductText,
  ProductName,
  ProductPrice,
} from '../../../Product/styles/ProductItem.styles';
// import {Card} from "./styles/HomeProductsList.styles"
import { useTheme } from '../../../../theme';
import { v4 as uuidv4 } from 'uuid';
const ProductsList = () => {
  const { theme } = useTheme();
  return (
    <Wrapper theme={theme}>
      <Header>
        <Skeleton variant="text" animation="wave" width={280} height={60} />
      </Header>
      <Body>
        {Array.from({ length: 10 }).map((_, idx) => (
          <Card theme={theme} key={uuidv4()}>
            <ImageContainer>
              <Skeleton variant="rect" animation="wave" height={160} />
            </ImageContainer>
            <ProductText>
              <ProductName>
                <Skeleton variant="text" animation="wave" height={40} />
              </ProductName>
              <ProductPrice>
                <Skeleton
                  variant="text"
                  animation="wave"
                  width={80}
                  height={40}
                />
              </ProductPrice>
            </ProductText>
          </Card>
        ))}
      </Body>
    </Wrapper>
  );
};

export default ProductsList;
