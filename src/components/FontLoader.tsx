"use client";

import { useEffect } from "react";

export default function FontLoader() {
  useEffect(() => {
    // preconnect 추가
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";
    document.head.appendChild(preconnect2);

    // Material Symbols 폰트를 동적으로 로드
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
    document.head.appendChild(link);

    return () => {
      // cleanup
      if (document.head.contains(preconnect1)) {
        document.head.removeChild(preconnect1);
      }
      if (document.head.contains(preconnect2)) {
        document.head.removeChild(preconnect2);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return null;
}

