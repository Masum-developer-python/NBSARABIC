import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";


function UsePageTitle() {
  const location = useLocation();

  useEffect(() => {
    let title = "NBS Special"; // default

    switch (location.pathname) {
      case "/":
        title = "NBS Special";
        break;
      case "/ict":
        title = "ICT - NBS Special";
        break;
      case "/math":
        title = "Math - NBS Special";
        break;
      case "/hisab":
        title = "Coaching Accounting System - NBS Special";
        break;
      case "/routine":
        title = "Class Routine Generator - NBS Special";
        break;
      case "/whiteboard":
        title = "Whiteboard - NBS Special";
        break;
      default:
        title = "others - NBS Special";
    }

    document.title = title;
  }, [location.pathname]);
}

export default UsePageTitle;
