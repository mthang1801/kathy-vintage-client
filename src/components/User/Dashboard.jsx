import React, {useState} from 'react'
import {Wrapper, Button, Header} from "./styles/DashBoard.styles"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {navigate} from "gatsby"
import {AiOutlineHome} from 'react-icons/ai';
import SettingDialog from "../Setting/SettingDialog"
import {useTheme} from "../../theme";
const DashBoard = ({options, selectedOption, setSelectedOption}) => {
  const {theme} = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const onChangeOption = (selectedOption) => {
    if(selectedOption.key === "setting-mode"){
      return setOpenDialog(true);
    }
    setSelectedOption(selectedOption.key);
  }
  return (
    <>
    <SettingDialog open={openDialog} setOpen={setOpenDialog}/>
    <Wrapper theme={theme}>      
      <Header>
        <Button rounded onClick={() => navigate("/")}><AiOutlineHome/></Button>        
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
