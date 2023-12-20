import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

function DialogResources(props: DialogResourcesProps) {
  const { isOpen, handleClosing } = props;

  return (
    <>
    <Dialog 
      open={isOpen}
      onClose={handleClosing}
    >
      <DialogTitle id="resources-dialog-title">
        {'Resources'}
      </DialogTitle>
      <List sx={{ width: '100%', maxWidth: 500, padding: .5 }}>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <LocalPhoneIcon />
          </ListItemIcon>
          <ListItemText
            primary="800-784-8669"
            secondary={
              <>
                <span>Free national CDC QuitLine.</span>
                <br/>
                <span>You can speak confidentially with a highly trained quit coach.</span>
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <SmsOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary="Text QUITNOW to 333888"
            secondary={
              <>
                <span>Free state or national SMS services.</span>
                <br/>
                <span>Receive messages of encouragement, tips and advice.</span>
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <ListItemText
            primary="SmokeFree"
            secondary={
              <>
                <a className="resource-link" href="https://smokefree.gov/">https://smokefree.gov/</a>
              </>
            }
          />
        </ListItem>
      </List>
      <DialogActions>
        <button className="btn cancel-btn" onClick={handleClosing}>Close</button>
      </DialogActions>
    </Dialog>
    </>
  );
}

type DialogResourcesProps = {
  isOpen: boolean;
  handleClosing: () => void;
}

export default DialogResources;