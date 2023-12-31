import { useNavigate } from "react-router-dom";
import * as React from "react";
import { useRef } from "react";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import sanaf from "./assets/sanaf.png";
import images from "./assets/images.png";
import image from "./assets/Group_158_a@2x.png";
import line from "./assets/Line 117.png";
import Gimgae from "./assets/Group 483.png";
import pathimg from "./assets/Path 968.png";
import { Link, useLocation } from "react-router-dom";
import JSONFiles from "./Json Files/SchoolSubjects.json";
import { AuthContext } from "../App/context/AuthContext";
import { useContext } from "react";
// import JsonFiles from "../Json Files/SchoolSubjects.json";
import JsonFiles from "./Json Files/SchoolSubjects.json";

import "./Grades.css";

// const scrollBottom = ()=>{

//   bottom.current.scrollIntoView({behavier: "smooth"});
//   setScrollState("bottom")

//  }
//  const scrollTop = ()=>{
//    top.current.scrollIntoView({behavier: "smooth"});
//    setScrollState("top")
//   }
const Grads = ({ t }) => {
  const { userInfo, isLoading } = useContext(AuthContext);

  var data;
  if (t("sectionlang") == "dari") {
    data = JsonFiles.dari_curriculam;
  } else {
    data = JsonFiles.pashto_curriculam;
  }

  var primary = data.primary.grades;
  var secondary = data.secondary.grades;
  var high_school = data.high_school.grades;
  const { currentState, setCurrentState } = useContext(AuthContext);
  const [scrollState, setScrollState] = React.useState();
  const bottom = useRef(null);
  const top = useRef(null);
  const scrollBottom = () => {
    top.current.scrollIntoView({ behavier: "smooth" });
    setScrollState("bottom");
  };
  const scrollTop = () => {
    bottom.current.scrollIntoView({ behavier: "smooth" });
    setScrollState("top");
  };

  // const navigation = useNavigate();
  //   if (userInfo === null) {
  //     return navigation("/");
  //   } else if (isLoading) {
  //     return <h1>Loading.....</h1>;
  //   } else if(userInfo !== null){
  return (
    <div className="full-all-grade-n">
      <div className="all-grade-N">
        <div className="flesh-image-grade-b">
          <Link to="/Header">
            <img src={image} />
          </Link>
        </div>
        <div className="second-section-grade">
          <div className="grades-section">
            <div className="grade-container">
              <span className="p-one-grade-n">{t("grad1")} </span>
              <span className="p-two-grade-n">{t("grad2")}</span>
            </div>
            <div id="class-container-n">
              <div className="all_grade_wrapper_h">
                <div className="button-grade-N" ref={top}>
                  {primary.map((item) => {
                    return (
                      <Link
                        className="link-grade-n"
                        to="/books"
                        state={{ subjects: item.subjects }}
                      >
                        <div className="sanaf-grade-n">
                          {" "}
                          <img src={sanaf} />
                        </div>
                        <div
                          className="li-grade-b"
                          onClick={() => setCurrentState(item.label)}
                        >
                          {item.label}
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="button-grade-N" ref={bottom}>
                  {secondary.map((item) => {
                    return (
                      <Link
                        className="link-grade-n"
                        to="/books"
                        state={{ subjects: item.subjects }}
                      >
                        <div className="sanaf-grade-n">
                          {" "}
                          <img src={sanaf} />
                        </div>
                        <div
                          className="li-grade-b"
                          onClick={() => setCurrentState(item.label)}
                        >
                          {item.label}
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="button-grade-N">
                  {high_school.map((item) => {
                    return (
                      <Link
                        className="link-grade-n"
                        to="/books"
                        state={{ subjects: item.subjects }}
                      >
                        <div className="sanaf-grade-n">
                          {" "}
                          <img src={sanaf} />
                        </div>
                        <div
                          className="li-grade-b"
                          onClick={() => setCurrentState(item.label)}
                        >
                          {item.label}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="pathimg-G-wrapper">
              <img
                src={pathimg}
                className="pathimg-G"
                onClick={() => {
                  scrollState == "bottom" ? scrollTop() : scrollBottom();
                }}
              />
            </div>
          </div>
          <div className="icon-grade">
            <img src={Gimgae} />
          </div>
        </div>
      </div>
      <div className="all-grade-Nm">
        <div className="flesh-image-grade-b">
          <Link to="/Header">
            <img src={image} />
          </Link>
        </div>
        <div className="second-section-grade">
          <div className="grades-section">
            <div className="grade-container">
              <span className="p-one-grade-n">{t("grad1")} </span>
              <span className="p-two-grade-n">{t("grad2")}</span>
            </div>
            <div id="class-container-n">
              <div className="button-grade-N" ref={top}>
                {primary.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"
                      to="/books"
                      state={{ subjects: item.subjects }}
                    >
                      <div className="sanaf-grade-n">
                        {" "}
                        <img src={sanaf} />
                      </div>
                      <div
                        className="li-grade-b"
                        onClick={() => setCurrentState(item.label)}
                      >
                        {item.label}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="button-grade-N" ref={bottom}>
                {secondary.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"
                      to="/books"
                      state={{ subjects: item.subjects }}
                    >
                      <div className="sanaf-grade-n">
                        {" "}
                        <img src={sanaf} />
                      </div>
                      <div
                        className="li-grade-b"
                        onClick={() => setCurrentState(item.label)}
                      >
                        {item.label}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="button-grade-N">
                {high_school.map((item) => {
                  return (
                    <Link
                      className="link-grade-n"
                      to="/books"
                      state={{ subjects: item.subjects }}
                    >
                      <div className="sanaf-grade-n">
                        {" "}
                        <img src={sanaf} />
                      </div>
                      <div
                        className="li-grade-b"
                        onClick={() => setCurrentState(item.label)}
                      >
                        {item.label}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="line-g">
              <img src={line} />
            </div>
            <div>
              <img
                src={pathimg}
                className="pathimg-G"
                onClick={() => {
                  if (scrollState == "bottom") {
                    scrollTop();
                  } else {
                    scrollBottom();
                  }
                }}
              />
            </div>
          </div>
          <div className="icon-grade">
            <img src={Gimgae} />
          </div>
        </div>
      </div>
    </div>
  );
  // }
};
export default withNamespaces()(Grads);
