import { useParams } from "react-router-dom";
import { Button } from "../../../../components/button";
import {
  IconCheckCircleRed,
  IconImage,
  IconSendMessage,
} from "../../../../components/icons/icons";
import { Messenger } from "../../../../components/messenger";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux-hooks";
import { getTaskDetail } from "../../../../redux/actions/helpAndSupport/task-detail";
import messages from "../../../../data/support-ticket-chat.json";

const TicketDetails = () => {

  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getTaskDetail({
        pageNumber: 0,
        pageSize: 0,
        id: id,
        referanceToken: "b552c6d4-511c-4579-9bb4-2b53ab3fd66d",
      })
    );
  }, []);

  return (
    <div className="outlet w-full h-full container p-4 mt-4 pb-8">
      <div className="w-full h-auto bg-actual-white rounded-2.5xl p-6">
        <div className="w-full h-full flex flex-col mb-7">
          <div className="w-full flex justify-between items-center">
            <div>
              <p className="text-xs text-base-content-40 mb-2">Detaylar</p>
              <h1 className="text-[20px] text-base-content font-semibold">
                Param 5 Gündür Hesabıma Geçmiyor... 😡
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <Button variant="error" className="!text-error" isInTop isLight>
                <IconCheckCircleRed
                  width={24}
                  hanging={24}
                  viewBox="0 0 24 24"
                />
                Talebi Sonlandır
              </Button>
            </div>
          </div>
        </div>
        <hr />

        <Messenger messageList={messages} />
      </div>
      <div className="flex justify-between rounded-full mt-5 bg-actual-white h-16 p-1">
        <div className="flex mt-4 ml-5">
          <IconImage width={50} className="cursor-pointer" />
          <span className="after:border-r-2 after:h-10 ml-5"></span>
          <input
            placeholder="Yaz..."
            className="w-[800px] outline-none mx-5 -mt-3 text-sm font-medium placeholder:text-base-content"
          />
        </div>
        <Button
          isLight
          isInTop
          variant="primary"
          className="!text-primary !rounded-full"
        >
          <IconSendMessage width={20} />
          Gönder
        </Button>
      </div>
    </div>
  );
};

export default TicketDetails;
