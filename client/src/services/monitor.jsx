import React, { useEffect, useRef } from "react";
import { monitorStatus } from "./main";
import { useLocation } from "react-router-dom";


const Monitor = () => {
  const location = useLocation();
  const previousPath = useRef('');
   console.log("monitor")
  useEffect(() => {
    const currentPath = location.pathname;
    if (previousPath.current === currentPath) return;

    monitorStatus({ note: `Moved from ${previousPath.current} → ${currentPath}` });
    console.log("Current path:", currentPath);
    previousPath.current = currentPath;
  }, [location.pathname]);

  return <ToastContainer position="top-right" autoClose={3000} />;
}


export default Monitor;
