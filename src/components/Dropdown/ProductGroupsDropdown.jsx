import React from 'react';
import { List, ListItem, ListItemText } from './styles/DropdownList.styles';
import { useTheme } from '../../theme';
import { useLanguage } from '../../locales';
const ProductGroupsDropdown = ({ parentSlug, productGroups }) => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  if (!parentSlug || !productGroups?.length) return null;
  return (
    <List theme={theme}>
      {productGroups.map((productGroup) => (
        <ListItem
          key={productGroup.contentful_id}
          to={`${parentSlug}/${productGroup.slug}`}
          theme={theme}
        >
          <ListItemText>{productGroup[`name_${lang}`]}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductGroupsDropdown;
