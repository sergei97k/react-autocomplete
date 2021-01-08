import { useEffect } from "react";

const useClickOutside = (ref, onClickOutside) => {
  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (ref.current && !ref.current.contains(target)) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
