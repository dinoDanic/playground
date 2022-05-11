import React, { useEffect, useState } from "react";

export const useKeyboard = () => {
  const [w, setW] = useState(false);
  const [a, setA] = useState(false);
  const [s, setS] = useState(false);
  const [d, setD] = useState(false);
  console.log(w);

  useEffect(() => {
    const handleKeydown = (e: any) => {
      setW(e.key === "w" && true);
      setA(e.key === "a" && true);
      setS(e.key === "s" && true);
      setD(e.key === "d" && true);
    };

    addEventListener("keydown", handleKeydown);
    return () => {
      removeEventListener("keydown", handleKeydown);
    };
  }, []);
  useEffect(() => {
    if (w || a || s || d)
      setTimeout(() => {
        setW(false);
        setA(false);
        setD(false);
        setS(false);
      }, 100);
  }, [w, a, s, d]);
  return { w, a, s, d };
};
