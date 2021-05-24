import React from "react"
import {withStyles} from "@material-ui/core/styles"
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import styled from "styled-components"
import PropTypes from 'prop-types';

export const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: 'var(--blue-1)',
  },
})(Tabs);

export const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),        
    '&:hover': {
      color: 'var(--blue-1)',
      opacity: 1,
    },
    '&$selected': {
      color: 'var(--blue-1)',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: 'var(--blue-1)',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export const Wrapper = styled.div`
  .MuiTab-wrapper{
    text-transform : capitalize ; 
  }
  .MuiTabs-root{
    border-bottom : 1px solid ${({theme}) => theme.border};
  }
`