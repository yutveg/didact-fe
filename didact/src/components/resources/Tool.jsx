import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { ToolWrapper } from "./resourceStyles";
import discord from "../../images/discord.png";
const Tool = props => {
  const tool = props.tool;
  const [expanded, setExpanded] = useState(false);
  const state = useSelector(state => state);
  const user = state.onboardingReducer.user;

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <ToolWrapper>
      <div
        className={
          user.owner || user.admin
            ? !expanded
              ? "tool-admin"
              : "tool-admin-plus"
            : !expanded
            ? "tool"
            : "tool-plus"
        }
      >
        {user.owner || user.admin ? (
          <div className="edit-div">
            <h1>{tool.name}</h1>
            <Link to={`/tools/${tool.id}/edit`}>Edit</Link>
          </div>
        ) : (
          <div className="no-edit">
            <h1>{tool.name}</h1>
          </div>
        )}
        <div className="img-div">
          <img src={discord} />
        </div>
        {/* This will be hidden by dropdown */}
        {!expanded ? (
          <ExpandMoreIcon onClick={handleExpand} />
        ) : (
          <ExpandLessIcon onClick={handleExpand} />
        )}
        {!expanded ? null : (
          <div
            className="drop"
            style={{
              display: "flex",
              flexFlow: "column wrap",
              alignItems: "center",
              justifyContent: "space-between",
              maxHeight: "1000px",
              transition: `max-height 1s ease`,
              overflow: "visible"
            }}
          >
            {tool.description && <p>{tool.description}</p>}
            {tool.link && <a href={tool.link}>Visit Tool</a>}
          </div>
        )}
      </div>
    </ToolWrapper>
  );
};

export default Tool;
