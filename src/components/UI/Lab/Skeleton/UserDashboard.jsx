import React from 'react';
import { Wrapper, Header, Title } from './styles/UserDashboard.styles';
import Skeleton from '@material-ui/lab/Skeleton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useTheme } from '../../../../theme';
import Divider from '@material-ui/core/Divider';
const UserDashboard = () => {
  const { theme } = useTheme();
  return (
    <Wrapper theme={theme}>
      <Header justify="space-between">
        <Skeleton variant="circle" animation="wave" width={40} height={40} />
        <Skeleton variant="circle" animation="wave" width={40} height={40} />
      </Header>
      <Divider />
      <List>
        {Array.from({ length: 4 }).map((_, idx) => (
          <ListItem key={`user-dashboard-skeleton-${idx}`}>
            <Skeleton variant="text" animation="wave" />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default UserDashboard;
