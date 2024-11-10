import { useEffect } from "react";
import { GridSupport } from "./components/grid";
import { getAllTask } from "../../../redux/actions/helpAndSupport/task";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { NoContentSupport } from "./components/no-content";
import { TopLoader } from "../../../components/top-loader";

const HelpAndSupport = () => {
  const { info: tasks } = useAppSelector((state) => state.taskSlice);
  const { isContentLoading } = useAppSelector(
    (state) => state.contentLoadingSlice
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTask());
  }, []);

  return isContentLoading ? (
    <TopLoader />
  ) : tasks.length > 0 ? (
    <GridSupport data={tasks} />
  ) : (
    <NoContentSupport />
  );
};

export default HelpAndSupport;
