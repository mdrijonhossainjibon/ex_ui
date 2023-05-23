import { useState, useEffect } from "react";
import "./NewBottomNavbar.css";
export const NewBottomNavbar = () => {
  const [activeTab, setActiveTab] = useState("services");

  useEffect(() => {
    const tabItems = document.querySelectorAll(".tabbar li");
    tabItems.forEach((item) => {
      item.addEventListener("click", handleTabClick);
    });

    return () => {
      tabItems.forEach((item) => {
        item.removeEventListener("click", handleTabClick);
      });
    };
  }, []);

  const handleTabClick = (event) => {
    const clickedTab = event.currentTarget.getAttribute("data-where");
    setActiveTab(clickedTab);
  };

  return (
    <div className="container stage">
      <div className="container">
        <div className="tabbar tab-style1">
          <ul className="flex-center">
            <li
              className={`home ${activeTab === "home" ? "active" : ""}`}
              data-where="home"
            >
              <span className="material-icons-outlined">home</span>
            </li>
            <li
              className={`products ${activeTab === "products" ? "active" : ""}`}
              data-where="products"
            >
              <span className="material-icons-outlined">shopping_bag</span>
            </li>
            <li
              className={`services ${activeTab === "services" ? "active" : ""}`}
              data-where="services"
            >
              <span className="material-icons-outlined">plumbing</span>
            </li>
            <li
              className={`about ${activeTab === "about" ? "active" : ""}`}
              data-where="about"
            >
              <span className="material-icons-outlined">business</span>
            </li>
            <li
              className={`help ${activeTab === "help" ? "active" : ""}`}
              data-where="help"
            >
              <span className="material-icons-outlined">help_outline</span>
            </li>
            <li className="follow"> </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
