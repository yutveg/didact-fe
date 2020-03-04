import React from "react";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
////

import InboxIcon from "@material-ui/icons/MoveToInbox";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
//Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsIcon from "@material-ui/icons/Settings";
import { SideListWrapper } from "./SideListStyles";

const SideList = ({ props }) => {
  const drawerStyles = makeStyles(theme => ({
    activeTab: {
      backgroundColor: "#ffffff",
      borderRadius: "0 7px 7px 0",
      width: "225px",
      // color: "white",
      height: "50px",
      margin: "10px 0px"
    },

    arrow: {
      textAlign: "right",
      marginRight: "10px",
      width: "100%",
      fontSize: "2rem",
      color: "#5b5b5b"
    },
    listing: {
      display: "flex",
      flexDirection: "column",
      margin: "10px 0px",
      padding: 0
    },
    listItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "225px"
    },

    // navigationLinks: {
    //   display: "flex",
    //   flexDirection: "column",
    //   paddingRight: "15%",
    //   paddingTop: "25%"
    // },

    iconImageProfile: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      // marginTop: '20px',
      objectFit: "cover"
    },
    collapseNav: {
      textDecoration: "none",
      textAlign: "left",
      marginRight: "20%"
    },

    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4),
      marginLeft: "20%",
      textDecoration: "none",
      color: "black"
    },
    nested: {
      paddingLeft: theme.spacing(4),
      marginLeft: "20%",
      textDecoration: "none",
      color: "black"
    }
  }));

  const classes = drawerStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [resOpen, resSetOpen] = React.useState(false);

  const resourcesHandleClick = () => {
    resSetOpen(!resOpen);
  };

  return (
    <SideListWrapper>
      <ul className={classes.listing}>
        <NavLink
          exact
          to="/"
          style={{
            textDecoration: "none",
            color: "#5b5b5b",
            outline: "none !important"
          }}
          activeStyle={{ color: "black" }}
          activeClassName={classes.activeTab}
          className={classes.listItem}
          key="Dashboard"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              outline: "none !important"
            }}
          >
            <DashboardIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
            <p style={{ marginLeft: "25px", fontWeight: "bold" }}>Dashboard</p>
            {props.props.location.pathname === "/" ? (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{ fontSize: "2.4rem", marginTop: "6px" }}
                />
              </p>
            ) : (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{
                    fontSize: "2.4rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                />
              </p>
            )}
          </div>
        </NavLink>
        <NavLink
          to="/courses"
          style={{
            textDecoration: "none",
            color: "#5b5b5b",
            outline: "none !important"
          }}
          activeStyle={{ color: "black" }}
          activeClassName={classes.activeTab}
          className={classes.listItem}
          key="Add Course"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center"
            }}
          >
            <FolderOpenIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
            <p style={{ marginLeft: "25px", fontWeight: "bold" }}>Courses</p>
            {props.props.match.path.includes("/courses") ? (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{ fontSize: "2.4rem", marginTop: "6px" }}
                />
              </p>
            ) : (
              <p className={classes.arrow}>
                <ChevronRightIcon
                  style={{
                    fontSize: "2.4rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                />
              </p>
            )}
          </div>
        </NavLink>

        <div className={classes.learningPathDiv}>
          {/* <List component="learning-path-nav" className={classes.root}> */}
          <nav onClick={handleClick}>
            <NavLink
              to="/learning-paths"
              style={{
                textDecoration: "none",
                color: "#5b5b5b",
                outline: "none !important"
              }}
              activeStyle={{ color: "black" }}
              activeClassName={classes.activeTab}
              className={classes.listItem}
              key="Learning Paths"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center"
                }}
              >
                <InboxIcon style={{ marginLeft: "17px", fontSize: "28px" }} />
                <p style={{ marginLeft: "25px", fontWeight: "bold" }}>
                  Learning Paths
                </p>

                {props.props.match.path.includes("/learning-paths") ? (
                  <p className={classes.arrow}>
                    <ChevronRightIcon
                      style={{ fontSize: "2.4rem", marginTop: "6px" }}
                    />
                  </p>
                ) : (
                  <p className={classes.arrow}>
                    <ChevronRightIcon
                      style={{
                        fontSize: "2.4rem",
                        marginTop: "6px",
                        color: "#5b5b5b"
                      }}
                    />
                  </p>
                )}
              </div>
              {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            </NavLink>
          </nav>
          <div className={classes.collapseNav}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {/* </List> */}
              <ListItem className={classes.nested}>
                <Link
                  to="/learning-paths/current"
                  style={{
                    fontSize: "1.3rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                >
                  Current
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/learning-paths/add"
                  style={{
                    fontSize: "1.3rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                >
                  Create
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/learning-paths/join"
                  style={{
                    fontSize: "1.3rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                >
                  Join
                </Link>
              </ListItem>
            </Collapse>
          </div>
        </div>

        <div className={classes.resourcesDiv}>
          <nav onClick={resourcesHandleClick}>
            <NavLink
              to={window}
              style={{
                textDecoration: "none",
                color: "#5b5b5b",
                outline: "none !important"
              }}
              activeStyle={{ color: "black" }}
              activeClassName={classes.activeTab}
              className={classes.listItem}
              key="Resources"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center"
                }}
              >
                <SettingsIcon
                  style={{ marginLeft: "17px", fontSize: "28px" }}
                />
                <p style={{ marginLeft: "25px", fontWeight: "bold" }}>
                  Resources
                </p>
                {props.props.match.path.includes("/") ? (
                  <p className={classes.arrow}>
                    <ChevronRightIcon
                      style={{ fontSize: "2.4rem", marginTop: "6px" }}
                    />
                  </p>
                ) : (
                  <p className={classes.arrow}>
                    <ChevronRightIcon
                      style={{
                        fontSize: "2.4rem",
                        marginTop: "6px",
                        color: "#5b5b5b"
                      }}
                    />
                  </p>
                )}
              </div>
            </NavLink>
          </nav>
          <div className={classes.collapseNav}>
            <Collapse in={resOpen} timeout="auto" unmountOnExit>
              {/* </List> */}
              <ListItem className={classes.nested}>
                <Link
                  to="/"
                  style={{
                    fontSize: "1.3rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                >
                  Tools
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/"
                  style={{
                    fontSize: "1.3rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                >
                  Sources
                </Link>
              </ListItem>
              <ListItem className={classes.nested}>
                <Link
                  to="/"
                  style={{
                    fontSize: "1.3rem",
                    marginTop: "6px",
                    color: "#5b5b5b"
                  }}
                >
                  Articles
                </Link>
              </ListItem>
            </Collapse>
          </div>

          <NavLink
            to="/about"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{ color: "black" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="about"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginLeft: "20%"
              }}
            >
              <p style={{ marginLeft: "25px", fontWeight: "bold" }}>About</p>
            </div>
          </NavLink>

          <NavLink
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#5b5b5b",
              outline: "none !important"
            }}
            activeStyle={{ color: "black" }}
            activeClassName={classes.activeTab}
            className={classes.listItem}
            key="about"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginLeft: "20%"
              }}
            >
              <p style={{ marginLeft: "25px", fontWeight: "bold" }}>Contact</p>
            </div>
          </NavLink>
        </div>
      </ul>
    </SideListWrapper>
  );
};

export default SideList;
