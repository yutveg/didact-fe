import React, { useEffect, useState } from "react";
import { verifyToken } from "../../store/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { PageFlex, MainBorder } from "./PageStyles";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import { Mixpanel } from "../../utils/mixpanel";

//Material UI Icons
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchIcon from "@material-ui/icons/Search";

import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import DrawerComponent from "../drawer/Drawer";
import MobileDrawerComponent from "../drawer/MobileDrawer";
import MobileHeaderComponent from "../header/MobileHeader";
import Content from "../content/Content";
import { ProfileWrapper } from "./profileStyle";
import ProfilePopOver from "./ProfilePopover";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#EEEEEE"
  },
  content: {
    flexGrow: 1
  },
  contentMobile: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginLeft: "63px"
  },
  contentShadow: {
    background: "rgba(0, 0, 0, 0.8)",
    filter: "brightness(50%)",
    overflowX: "hidden",
    zIndex: 100,
    height: "100vh",
    top: 0,
    left: 0,
    paddingLeft: "80px",
    padding: theme.spacing(2)
  },

  mainDrawerComponent: {},

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  // Search Functionality Styles

  searchDivResults: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    width: "345px",
    borderRadius: "7px",
    border: "1px solid black",
    padding: "0 6px",
    paddingLeft: "0%",
    height: "57px",
    boxShadow: "1px 1px 1px 1px rgba(0,0,0,.5)"
  },

  searchDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    width: "345px",
    borderRadius: "7px",
    border: "1px solid black",
    padding: "0 6px",
    paddingLeft: "0%",
    height: "37px",
    boxShadow: "1px 1px 1px 1px rgba(0,0,0,.5)"
  },

  formPart: {
    display: "flex",
    flexDirection: "row",
    height: "57px",
    width: "370px"
  },

  searchInputResults: {
    backgroundColor: "inherit",
    width: "340px",
    outline: "none",
    height: "57px",
    border: "none",
    fontFamily: "Open-Sans",
    fontWeight: "bold",
    fontSize: "1.6rem",
    marginLeft: "-5%"
  },

  searchInput: {
    backgroundColor: "inherit",
    width: "340px",
    outline: "none",
    height: "57px",
    border: "none",
    fontFamily: "open-sans",
    fontWeight: "bold",
    fontSize: "1.6rem",
    marginLeft: "5%"
  },

  filterDiv: {
    backgroundColor: "#eeeeee",
    marginRight: "8%",
    marginTop: "3%",
    borderRadius: "7px 0 0 7px",
    height: "35px",
    // width: "107px",
    outline: "none",
    border: "none",
    display: "flex",
    justifyContent: "center",
    borderColor: "green",
    outline: "none !important"
  },

  dropFilter: {
    marginTop: "8%",
    border: "none",
    outline: "none",
    borderRight: "1px solid black",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "open-sans",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: "center",
    backgroundColor: "#eeeeee"
  },

  searchButtonResults: {
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
    height: "30px",
    marginTop: "3.4%",
    marginLeft: "-49%",
    borderRadius: "7px",
    background: "transparent",
    fontFamily: "open-sans",

    "&:hover": {
      background: "#ffffff"
      // border: "1px solid black"
    },
    "&:active": {
      boxShadow: "0 5px #666",
      transform: "translateY(4px)"
    },
    iconImageProfile: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      // marginTop: '20px',
      objectFit: "cover"
    }
  },

  searchButton: {
    display: "flex",
    alignItems: "center",
    border: "none",
    outline: "none",
    height: "30px",
    marginTop: "3.4%",
    marginLeft: "-25%",
    borderRadius: "7px",
    background: "transparent",
    fontFamily: "open-sans",

    "&:hover": {
      background: "#ffffff"
      // border: "1px solid black"
    },
    "&:active": {
      boxShadow: "0 5px #666",
      transform: "translateY(4px)"
    },
    iconImageProfile: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      // marginTop: '20px',
      objectFit: "cover"
    }
  },

  searchIcon: {
    marginTop: "-1%"
  },

  searcher: {
    marginTop: "13%",
    marginLeft: "-4%",
    fontFamily: "open-sans"
  },

  logoutClass: {
    border: "1px solid"
  }
}));

function MainPage(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const phoneSize = useMediaQuery("(max-width:600px)");
  const tabletSize = useMediaQuery("(max-width:770px, min-width: 601px");
  const mediumScreenSize = useMediaQuery("(max-width:920px)");
  const state = useSelector(state => state);
  const userName = state.onboardingReducer.user;
  const owner = state.onboardingReducer.user.owner;
  const admin = state.onboardingReducer.user.admin;
  const token = localStorage.getItem("token");
  const [open, setOpen] = React.useState(true);
  const [openMobile, setOpenMobile] = React.useState(false);
  const [values, setValues] = useState({
    search: "",
    filter: "title"
  });
  const [results, setResults] = useState();

  useEffect(
    _ => {
      dispatch(verifyToken(props.history));
    },
    [token, dispatch, props.history]
  );

  if (!localStorage.getItem("token")) {
    props.history.push("/landing");
  }

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    localStorage.clear("token");
    props.history.push("/login");
  };

  const firstName = userName.first_name
    ? userName.first_name.substring(0, 1).toUpperCase() +
      userName.first_name.substring(1)
    : null;
  const lastName = userName.last_name
    ? userName.last_name.substring(0, 1).toUpperCase() +
      userName.last_name.substring(1)
    : null;

  //Needed for Header Search Function
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    Mixpanel.track("Search Query");
    setResults(values);
    props.history.push("/results");
  };

  const handleDrawerOpenMobile = () => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenMobile(!openMobile);
  };

  const closeHandleClick = () => {
    if (openMobile) setOpenMobile(false);
  };

  // popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPop = Boolean(anchorEl);
  const id = openPop ? "simple-popover" : undefined;

  return (
    // MOBILE CODE ****************************************************************************
    <div className={classes.mainPageDiv}>
      <ProfileWrapper>
        <>
          {phoneSize || tabletSize ? (
            <div className={classes.root} onClick={() => closeHandleClick()}>
              <CssBaseline />
              <>
                <div>
                  <MobileDrawerComponent
                    handleDrawerOpenMobile={handleDrawerOpenMobile()}
                    openMobile={openMobile}
                    props={props}
                  />
                </div>
                <div>
                  <MobileHeaderComponent
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    values={values}
                    props={props}
                    tabletSize={tabletSize}
                    userName={userName}
                  />
                  <main
                    className={
                      openMobile ? classes.contentShadow : classes.contentMobile
                    }
                  >
                    <div className={classes.toolbar} />
                    <Content
                      phoneSize={phoneSize}
                      open={open}
                      {...props}
                      results={results}
                      values={values}
                      setValues={setValues}
                      setResults={setResults}
                    />
                    {/*************************ADD COMPONENTS HERE *********************** */}
                  </main>
                </div>
              </>
            </div>
          ) : (
            // END OF MOBILE CODE *******************************************************************
            // BEGINNING OF DESKTOP CODE ************************************************************
            <div className={classes.root}>
              <CssBaseline />
              <PageFlex>
                <div className="drawer">
                  <DrawerComponent
                    handleDrawerOpen={handleDrawerOpen}
                    open={open}
                    props={props}
                  />
                </div>
                <div className="headerMain">
                  <div className="header">
                    {/* Search Functionality for search Below */}
                    {props.location.pathname === "/results" ? (
                      <div className={classes.searchDivResults}>
                        <form
                          className={classes.formPart}
                          onSubmit={handleSubmit}
                        >
                          <div className={classes.filterDiv}>
                            <select
                              style={
                                "&.select & select"
                                  ? { backgroundColor: "white" }
                                  : { backgroundColor: "#eeeeee" }
                              }
                              className={classes.dropFilter}
                              value={values.filter}
                              onChange={handleChange("filter")}
                            >
                              <option value="title">Title</option>
                              <option value="topic">Topic</option>
                              <option value="creator">Creator</option>
                              <option value="description">Description</option>
                              <option value="tag">Tag</option>
                            </select>
                          </div>
                          <input
                            className={classes.searchInputResults}
                            type="text"
                            value={values.search}
                            onChange={handleChange("search")}
                          />
                          <button
                            className={classes.searchButtonResults}
                            type="submit"
                            onSubmit={handleSubmit}
                          >
                            <SearchIcon
                              className={classes.searchIcon}
                              style={{
                                fontSize: "1.8rem",
                                marginRight: "5px",
                                color: "black"
                              }}
                            />
                            <p className={classes.searcher}>Search</p>
                          </button>
                        </form>
                      </div>
                    ) : (
                      <div className={classes.searchDiv}>
                        <form
                          className={classes.formPart}
                          onSubmit={handleSubmit}
                        >
                          <input
                            className={classes.searchInput}
                            type="text"
                            value={values.search}
                            onChange={handleChange("search")}
                          />
                          <button
                            className={classes.searchButton}
                            type="submit"
                            onSubmit={handleSubmit}
                          >
                            <SearchIcon
                              className={classes.searchIcon}
                              style={{
                                fontSize: "1.8rem",
                                marginRight: "5px",
                                color: "black"
                              }}
                            />
                            <p className={classes.searcher}>Search</p>
                          </button>
                        </form>
                      </div>
                    )}
                    <div className="profileSection">
                      {(owner === true &&
                        props.location.pathname !== "/users") ||
                      (admin === true &&
                        props.location.pathname !== "/users") ? (
                        <p className="usersLink">
                          <Link to={`/users`} style={{ color: "#242424" }}>
                            Edit Users
                          </Link>
                        </p>
                      ) : null}

                      <p
                        className="profile-avatar"
                        style={{ cursor: "pointer" }}
                        onClick={handleClick}
                      >
                        {userName.photo ? (
                          <img
                            src={userName.photo}
                            alt="Profile"
                            className={classes.iconImageProfile}
                            style={{ cursor: "pointer" }}
                            onClick={handleClick}
                          />
                        ) : (
                          <PermIdentityIcon
                            className={classes.iconImageProfile}
                            style={{
                              color: "#242424BF"
                            }}
                          />
                        )}
                      </p>
                      <p
                        className="name"
                        style={{ cursor: "pointer" }}
                        onClick={handleClick}
                      >
                        {firstName + " " + lastName}
                      </p>
                      <p
                        aria-describedby={id}
                        variant="contained"
                        onClick={handleClick}
                      >
                        <MoreHorizIcon
                          style={{
                            cursor: "pointer",
                            fontSize: "1.8rem",
                            color: "#242424BF"
                          }}
                        />
                      </p>

                      <ProfilePopOver
                        handleClose={handleClose}
                        openPop={openPop}
                        id={id}
                        handleLogOut={handleLogOut}
                        anchorEl={anchorEl}
                        firstName={firstName}
                        lastName={lastName}
                        userName={userName}
                      />
                    </div>
                  </div>
                  {props.location.pathname === "/results" ? null : (
                    <MainBorder />
                  )}
                  <main className={classes.content}>
                    <Content
                      mediumScreenSize={mediumScreenSize}
                      phoneSize={phoneSize}
                      open={open}
                      setValues={setValues}
                      values={values}
                      tabletSize={tabletSize}
                      setResults={setResults}
                      {...props}
                      results={results}
                    />
                    {/*************************ADD COMPONENTS HERE *********************** */}
                  </main>
                </div>
              </PageFlex>
            </div>
          )}
        </>
      </ProfileWrapper>
    </div>
  );
}

export default MainPage;
