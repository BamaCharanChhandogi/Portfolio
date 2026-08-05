"use client";

import { useEffect, useState } from "react";

export function FooterStatus() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    }

    updateTime();
    const timer = window.setInterval(updateTime, 30000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <p className="footer-status">
      IST {time || "--:--"} · Currently building at ClipWise · Open to interesting work
    </p>
  );
}
