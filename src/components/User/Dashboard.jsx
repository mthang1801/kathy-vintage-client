import React, {useState} from 'react'
import {Wrapper, Button, Header, AvatarContainer} from "./styles/DashBoard.styles"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {navigate} from "gatsby"
import {AiOutlineHome} from 'react-icons/ai';
import SettingDialog from "../Setting/SettingDialog"
import {useTheme} from "../../theme";
import {LazyLoadImage} from "react-lazy-load-image-component"
const DashBoard = ({options, selectedOption, setSelectedOption, user, isDialog, setOpenDashboardDialog}) => {
  const {theme} = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const onChangeOption = (selectedOption) => {
    if(selectedOption.key === "setting-mode"){
      return setOpenDialog(true);
    }
    setSelectedOption(selectedOption.key);
    setOpenDashboardDialog(false)
  }
  return (
    <>
    <SettingDialog open={openDialog} setOpen={setOpenDialog}/>
    <Wrapper theme={theme}>      
      <Header justify="space-between" isDialog={isDialog}>
        <Button theme={theme} rounded onClick={() => navigate("/")}><AiOutlineHome/></Button>        
        <AvatarContainer title={user.email}>
          <LazyLoadImage src={user.photoURL} alt={user.photoURL} effect="blur"/>
        </AvatarContainer>
      </Header>
      <Divider/>
      <List component="nav">
        {options.map(optionItem => (
          <ListItem key={optionItem.key} button onClick={() => onChangeOption(optionItem)} selected={optionItem.key === selectedOption}>
            <ListItemIcon>{optionItem.icon}</ListItemIcon>
            <ListItemText primary={optionItem.name} />
          </ListItem>
        ))}
      </List>
    </Wrapper>
    </>
  )
}

export default DashBoard
