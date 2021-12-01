import React, { useState, createContext, useEffect, useRef } from 'react';
import {
  ContentContainer,
  Sidebar,
  ProductCount,
  ProductsList,
  MainContent,
  ButtonFilter,
  FilterList,
} from '../styles/layout.template.styles';
import SidebarNavigations from '../components/Sidebar/SidebarNavigations';
import SidebarFilter from '../components/Sidebar/SidebarFilter';
import { useLanguage } from '../locales';
import { useTheme } from '../theme';
import TabProductsList from '../components/UI/Tabs/TabProductsList';
import ProductItem from '../components/Product/ProductItem';
import ProductsPagination from '../components/UI/Pagination/ProductsPagination';
import { getParams } from '../utils/checkUrl';
import { PRODUCTS_TEMPLATE_PER_PAGE } from '../constants/client';
import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import {
  filterProductsListByTab,
  getProductsCounter,
  sortingProductsList,
  getProductsListByPriceScope,
  filterProductsListByDiscount,
  filterProductsListByManufactor,
} from './layout.template.util';
import NavigattionAndFilterProductsDialog from '../components/UI/FeedBacks/Dialog/NavigattionAndFilterProductsDialog';
import FilterListIcon from '@material-ui/icons/FilterList';

const initialState = {
  currentTab: 'all',
  currentPage: 1,
  sortingIndex: -1,
  priceIndex: -1,
  selectedPriceScope: [-Infinity, Infinity],
  discountIndex: 0,
  manufactor: { index: 0, value: 'all' },
};

export const LayoutTemplateContext = createContext({});

const LayoutTemplate = ({ data, pageLocation }) => {
  const { theme } = useTheme();
  const {
    translation: {
      page: { template },
    },
    lang,
  } = useLanguage();
  const location = useLocation();

  const sidebarNavigations =
    pageLocation === 'portfolio'
      ? data.categories.edges.map(({ node: category }) => category)
      : pageLocation === 'category'
      ? data.productGroups.edges.map(({ node: productGroup }) => productGroup)
      : null;
  const slugParentForNavigation =
    pageLocation === 'portfolio'
      ? `/${data?.portfolio?.slug}`
      : 'category'
      ? `/${data?.portfolio?.slug}/${data?.category?.slug}`
      : null;

  const contentRef = useRef(null);
  const [
    openNavigationAndFilterDialog,
    setOpenNavigationAndFilterDialog,
  ] = useState(false);
  const [currentTab, setCurrentTab] = useState(
    !!getParams('tab') ? getParams('tab') : initialState.currentTab
  );
  const [initialProducts, setInitialProducts] = useState(
    data.products.edges.map(({ node }) => node)
  );
  const [currentPage, setCurrentPage] = useState(
    +getParams('page') !== 0 ? +getParams('page') : initialState.currentPage
  );
  const [products, setProducts] = useState(
    filterProductsListByTab(
      initialProducts,
      currentTab,
      currentPage,
      PRODUCTS_TEMPLATE_PER_PAGE
    )
  );
  const [productsCounter, setProductsCounter] = useState(
    getProductsCounter(initialProducts, currentTab, PRODUCTS_TEMPLATE_PER_PAGE)
  );
  const [sortingIndex, setSortingIndex] = useState(initialState.sortingIndex);
  const [priceIndex, setPriceIndex] = useState(initialState.priceIndex);
  const [selectedPriceScope, setSelectedPriceScope] = useState(
    initialState.selectedPriceScope
  );
  const [discountIndex, setDiscountIndex] = useState(
    initialState.discountIndex
  );
  const [manufactor, setManufactor] = useState(initialState.manufactor);

  useEffect(() => {
    //when tab index changed, reset all fields
    setSortingIndex(initialState.sortingIndex);
    setPriceIndex(initialState.priceIndex);
    setSelectedPriceScope(initialState.selectedPriceScope);
    setDiscountIndex(initialState.discountIndex);
    setManufactor(initialState.manufactor);
    setProductsCounter(
      getProductsCounter(
        initialProducts,
        currentTab,
        PRODUCTS_TEMPLATE_PER_PAGE
      )
    );
    setInitialProducts(data.products.edges.map(({ node }) => node));
  }, [currentTab]);

  useEffect(() => {
    setProducts(
      filterProductsListByTab(
        initialProducts,
        currentTab,
        currentPage,
        PRODUCTS_TEMPLATE_PER_PAGE
      )
    );
    setProductsCounter(
      getProductsCounter(
        initialProducts,
        currentTab,
        PRODUCTS_TEMPLATE_PER_PAGE
      )
    );
  }, [initialProducts]);

  useEffect(() => {
    setInitialProducts(
      filterProductsListByManufactor(
        filterProductsListByDiscount(
          sortingProductsList(
            getProductsListByPriceScope(
              data.products.edges.map(({ node }) => node),
              selectedPriceScope[0],
              selectedPriceScope[1]
            ),
            sortingIndex
          ),
          discountIndex
        ),
        manufactor.value
      )
    );

    if (contentRef.current && typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [selectedPriceScope, discountIndex, sortingIndex, manufactor]);

  useEffect(() => {
    setProducts(
      filterProductsListByTab(
        initialProducts,
        currentTab,
        currentPage,
        PRODUCTS_TEMPLATE_PER_PAGE
      )
    );
  }, [currentPage]);

  useEffect(() => {
    const newTab = !!getParams('tab')
      ? getParams('tab')
      : initialState.currentTab;
    const newPage = +getParams('page');
    if (newTab !== currentTab) {
      setCurrentTab(newTab);
      setCurrentPage(1);
    }
    if (newPage !== currentPage && newPage) {
      setCurrentPage(newPage);
    }
  });

  const states = {
    sortingIndex,
    priceIndex,
    selectedPriceScope,
    discountIndex,
    manufactor,
  };
  const actions = {
    setSortingIndex,
    setPriceIndex,
    setSelectedPriceScope,
    setDiscountIndex,
    setManufactor,
  };

  const handlePageClick = (data) => {
    const { selected } = data;
    const pathname =
      location.pathname[location.pathname.length - 1] === '/'
        ? location.pathname.slice(0, -1)
        : location.pathname;

    if (currentTab === 'all' && selected === 0) {
      return navigate(`${pathname}`);
    } else if (currentTab === 'all') {
      return navigate(`${pathname}?page=${selected + 1}`);
    }
    // setIsFreshPage(false)

    navigate(`${pathname}?tab=${currentTab}&page=${selected + 1}`);
  };
  return (
    <LayoutTemplateContext.Provider value={{ states, actions }}>
      <NavigattionAndFilterProductsDialog
        open={openNavigationAndFilterDialog}
        setOpen={setOpenNavigationAndFilterDialog}
        templateTranslation={template}
      >
        {sidebarNavigations && (
          <SidebarNavigations
            lang={lang}
            slugParent={slugParentForNavigation}
            navigations={sidebarNavigations}
            title={template?.sidebar?.navigation?.title(pageLocation)}
          />
        )}
        <SidebarFilter data={data} templateTranslation={template} />
      </NavigattionAndFilterProductsDialog>
      <ContentContainer>
        <ButtonFilter onClick={() => setOpenNavigationAndFilterDialog(true)}>
          <FilterList>
            <span>
              {sortingIndex !== -1 &&
                template.sidebar.sort.fields[sortingIndex].value}
            </span>
            <span>
              {priceIndex !== -1 &&
                template.sidebar.prices.range(
                  selectedPriceScope[0],
                  selectedPriceScope[1]
                )}
            </span>
            <span>{template.sidebar.discount.fields[discountIndex].value}</span>
            <span>{manufactor.index !== 0 && manufactor.value}</span>
          </FilterList>
          <FilterListIcon />
        </ButtonFilter>
        <Sidebar theme={theme}>
          {sidebarNavigations && (
            <SidebarNavigations
              lang={lang}
              slugParent={slugParentForNavigation}
              navigations={sidebarNavigations}
              title={template?.sidebar?.navigation?.title(pageLocation)}
            />
          )}
          <SidebarFilter data={data} templateTranslation={template} />
        </Sidebar>
        <MainContent theme={theme} ref={contentRef}>
          <TabProductsList products={products} />
          <ProductCount>
            {template.content.productCount.icon}
            <span
              dangerouslySetInnerHTML={{
                __html: template.content.productCount.name(
                  productsCounter.totalCount
                ),
              }}
            ></span>
          </ProductCount>
          <ProductsList theme={theme}>
            {products.map((product) => (
              <ProductItem key={product.contentful_id} product={product} />
            ))}
          </ProductsList>
          {productsCounter?.numPages > 1 && (
            <ProductsPagination
              currentPage={currentPage}
              numPages={productsCounter?.numPages}
              handlePageClick={(data) => handlePageClick(data)}
            />
          )}
        </MainContent>
      </ContentContainer>
    </LayoutTemplateContext.Provider>
  );
};

export default LayoutTemplate;
