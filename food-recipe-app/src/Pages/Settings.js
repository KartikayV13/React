import React from "react";
import "../PagesCss/Settings.css";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("dark");
  const primaryColors = [
    // yellow
    "rgb(255,255,0)",
    // red
    "rgb(255,0,0)",
    //  sky blue
    "rgb(0,191,255)",
    //lime green
    "rgb(0,255,0)",
    //dark maganta
    "rgb(139,0,139)",
  ];

  const fontSizes = [
    {
      title: "Small",
      value: "12px",
    },
    {
      title: "Medium",
      value: "16px",
    },
    {
      title: "Large",
      value: "20",
    },
  ];

  const [primaryColor, setPrimaryColor] = useState(3);
  const [fontSize, setFontSize] = useState(1);

  return (
    <div>
      <div className="sections d-block">
        {/* -----Preffered color ---------- */}

        <h2>Preffer Theme</h2>
        <div className="options-container">
          <div className="options light">
            {theme === "light" && (
              <div className="check">
                <FaRegCircleCheck className="chk" />
              </div>
            )}
          </div>
          <div className="options dark">
            {theme === "dark" && (
              <div className="check">
                <FaRegCircleCheck className="chk" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ------Primary color ------ */}

      <div className="sections d-block">
        <h2>Primary Color</h2>
        <div className="options-container">
          {primaryColors.map((color, index) => (
            <div className="options light" style={{ backgroundColor: color }}>
              {primaryColor == index && (
                <div className="check">
                  <FaRegCircleCheck className="chk" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --------Font Size--------- */}

      <div className="sections d-block">
        <h2>Font Size</h2>
        <div className="options-container">
          {fontSizes.map((size, index) => (
            <button className="btn  btn-1">
              {size.title}
              {fontSize === index && (
                <span>
                  <FaRegCircleCheck className="chk" />{" "}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ----Animation Speed------- */}
    </div>
  );
};

export default Settings;
