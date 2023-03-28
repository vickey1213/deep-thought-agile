import React from "react";
import logo from "../assets/logo.jpg";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import ConstructionIcon from "@mui/icons-material/Construction";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/material";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "lightGrey",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div>
        <img src={logo} alt="logo" />
      </div>

      <Stack direction="row" spacing={2}>
        <HouseOutlinedIcon style={{ color: "blue" }} />
        <ConstructionIcon style={{ color: "blue" }} />
        <NotificationsNoneIcon style={{ color: "blue" }} />
        <AccountCircleIcon />
        <MoreVertIcon style={{ color: "blue" }} />
      </Stack>
    </div>
  );
};

export default Header;
