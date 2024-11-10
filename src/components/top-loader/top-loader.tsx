import LoadingBar from "react-top-loading-bar";
import { useAppSelector } from "../../hooks/redux-hooks";

export const TopLoader = () => {
  const { isContentLoading } = useAppSelector(
    (state) => state.contentLoadingSlice
  );
  return <LoadingBar color="#22B789" progress={isContentLoading ? 100 : 0} />;
};
