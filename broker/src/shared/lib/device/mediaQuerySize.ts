import { useMediaQuery } from "react-responsive";

export const useQuerySize = (width) => {
  return useMediaQuery({ maxWidth: width });
};
