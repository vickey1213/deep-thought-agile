import React from "react";
import "../App.css";
import question from "../assets/question-mark.png";
import meeting from "../assets/meeting.svg";
import GroupsIcon from "@mui/icons-material/Groups";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerIcons">
        <GroupsIcon sx={{ color: "#fff" }} />
      </div>
      <div className="footerIcons">
        <QuestionMarkIcon sx={{ color: "#fff" }} />
      </div>
      <div className="footerIcons">
        <CalendarMonthIcon sx={{ color: "#fff" }} />
      </div>
    </div>
  );
};

export default Footer;
