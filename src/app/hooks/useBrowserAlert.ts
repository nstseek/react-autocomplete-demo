import { useEffect } from "react";

export const useBrowserAlert = () => {
  useEffect(() => {
    const storageKey = "hasSeenAlert";
    const hasSeenAlert = sessionStorage.getItem(storageKey);

    if (!hasSeenAlert) {
      alert(
        "Please, make sure you are using an updated version of Chrome or Safari, Firefox does not yet support the CSS rules used here!"
      );
      sessionStorage.setItem(storageKey, "yes");
    }
  }, []);
};
