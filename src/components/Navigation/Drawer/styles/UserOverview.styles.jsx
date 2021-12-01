import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const Container = styled.div`
  width: 100%;
  .MuiAccordionSummary-root {
    padding: 0;
  }
  .MuiAccordionSummary-content {
    margin: 0;
  }
  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0;
  }
  .MuiPaper-elevation1 {
    box-shadow: unset;
  }
  .MuiAccordionDetails-root {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    & > * {
      width: 100%;
    }
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem 0.5rem 0.75rem;
  cursor: pointer;
  &:hover {
    background-color: var(--light-gray-1);
  }
`;

export const AvatarContainer = styled.div`
  width: 2rem;
  height: 2rem;
  & img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const UserName = styled.h3`
  font-size: 1rem;
  margin-left: 1rem;
`;
