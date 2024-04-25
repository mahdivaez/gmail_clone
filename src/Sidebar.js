import React from "react";
import { Button, IconButton, Section } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import NoteIcon from "@mui/icons-material/Note";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
  const buttonStyle = {
    marginTop: "15px",
    marginLeft: "10px",
    marginBottom: "15px",
    textTransform: "capitalize",
    color: "gray",
    padding: "15px",
    borderRadius: "30px",
    boxShadow: "0px 2px 5px -2px rgba(0, 0, 0, 0.7)",
  };

  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon fontSize="large" />} style={buttonStyle}
      onClick={()=> dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOptions Icon={StarIcon} title="Starred" number={54} />
      <SidebarOptions Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOptions Icon={LabelImportantIcon} title="Important" number={54} />
      <SidebarOptions Icon={NearMeIcon} title="Send" number={54} />
      <SidebarOptions Icon={NoteIcon} title="Drafts" number={54} />
      <SidebarOptions Icon={ExpandMoreIcon} title="More" number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
     
    </div>
  );
};

export default Sidebar;
