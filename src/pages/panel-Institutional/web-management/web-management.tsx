import { useEffect, useState } from "react";
import { NoContentInstitutionalWebManagement } from "./components/no-content";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { getAllWebsite } from "../../../redux/actions/institutional/website";
import { CreateInstitutionalWebsiteModal } from "./modal/create";
import { TopLoader } from "../../../components/top-loader";
import { GridInstitutionalWebManagement } from "./components/grid";
import { SuccessCreateInstitutionalWebsite } from "./modal/success";

const WebManagement: React.FC = () => {
  const { info:websites }=useAppSelector(state => state.websiteSlice);
  const { isContentLoading }=useAppSelector(state => state.contentLoadingSlice);
  const { showModal:{type} }=useAppSelector(state => state.showModalSlice);

  console.log(type);

  const dispatch=useAppDispatch();

  useEffect(() => {
    dispatch(getAllWebsite({
      pageNumber:1,
      pageSize:5
    }));
  } , []);

  

  return (
     <>
     {
       isContentLoading ? <TopLoader /> : (
         websites.length ? <GridInstitutionalWebManagement data={websites} /> :
         <NoContentInstitutionalWebManagement />
       )
     }
     <CreateInstitutionalWebsiteModal state={type === "create"} />
     <SuccessCreateInstitutionalWebsite state={type === "success"} />
    </>
  )
};

export default WebManagement;
