import React from 'react';
import { Wrapper, Title } from './styles/Sidebar.styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
  useLayoutTempateActions,
  useLayoutTemplateStates,
} from '../../hooks/useLayoutTemplate';
const SidebarFilterDiscount = ({ templateTranslation }) => {
  const { fields, title } = templateTranslation?.sidebar?.discount;
  const { setDiscountIndex } = useLayoutTempateActions();
  const { discountIndex } = useLayoutTemplateStates();

  return (
    <Wrapper>
      <Title>{title}</Title>
      {fields.map((field, idx) => (
        <FormControlLabel
          key={field.key}
          control={
            <Checkbox
              value={idx}
              color="primary"
              checked={discountIndex === idx}
              onChange={() => setDiscountIndex(idx)}
            />
          }
          label={field.value}
        />
      ))}
    </Wrapper>
  );
};

export default SidebarFilterDiscount;
