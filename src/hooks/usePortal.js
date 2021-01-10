import { useState, useEffect } from "react";

const portalRoot = document.getElementById("portal-root");

const usePortal = () => {
  const [container] = useState(document.createElement("div"));

  useEffect(() => {
    portalRoot.appendChild(container);

    return () => {
      portalRoot.removeChild(container);
    };
  }, [container]);

  return container;
};

export default usePortal;
