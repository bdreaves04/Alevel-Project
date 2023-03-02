import React from "react";
import { viewportContext } from "../context/viewportContext";

export const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};
