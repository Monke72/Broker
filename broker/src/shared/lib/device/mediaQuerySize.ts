import { useMediaQuery } from "react-responsive";

export const useQuerySize = (width: number) => {
  return useMediaQuery({ maxWidth: width });
};
