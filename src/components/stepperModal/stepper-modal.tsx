import { ReactNode } from "react";
import { StepperModalProps } from "./stepper-modal.types";
import { IconClose } from "../icons/icons";
import { Steps } from "antd";
import Popup from "reactjs-popup";
import CheckGreen from "../../assets/images/CheckFillGreen.svg";
import "reactjs-popup/dist/index.css";

export const StepperModal = ({
  state,
  title,
  subTitle,
  children,
  small,
  titlesList,
  current,
  hasCloseButton = true,
  onCloseModal,
}: StepperModalProps) => {
  // ---------- variables ----------
  const contentStyle = {
    borderRadius: "32px",
    border: "none",
    maxHeight: "95vh",
    width: small ? "500px" : "650px",
    overflow: "hidden",
    padding: "20px",
    fontFamily: "inter",
  };

  // Define a custom render function for progressDot
  const customDot = (dot: ReactNode, { status }: any) => {
    switch (status) {
      case "finish":
        return (
          <div className="bg-primary/10 w-3 h-3 rounded-full flex items-center justify-center">
            <img src={CheckGreen} className="w-20" width={100} />
          </div>
        );
      case "process":
        return (
          <div className="bg-primary/10 w-3 h-3 rounded-full flex items-center justify-center">
            <p className="bg-primary rounded-full w-1 h-1"></p>
          </div>
        );

      // case "wait":
      //   return <IconUser />; // Custom wait icon
      // case "error":
      //   return <IconSmallCircleGreen />; // Custom error icon
      default:
        return dot; // Default icon
    }
  };

  // ---------- render jsx ----------
  return (
    <Popup
      open={state}
      position="center center"
      modal
      onClose={onCloseModal}
      {...{ contentStyle }}
      closeOnDocumentClick={false}
    >
      <Steps
        current={current}
        progressDot={customDot}
        size="small"
        className={`py-3 ${!small && "sm:-mx-12"}`}
        items={titlesList}
        initial={1}
      />
      <hr />
      <div className="flex justify-between w-full my-3">
        <span className="text-lg font-semibold">
          {title}
          {subTitle && (
            <div className="text-sm mt-2 text-base-content-60 font-normal">
              {subTitle}
            </div>
          )}
        </span>

        {hasCloseButton && (
          <span className="cursor-pointer mt-1">
            <IconClose color="red" onClick={onCloseModal} />
          </span>
        )}
      </div>
      <div className="overflow-y-scroll max-h-[70vh]">{children}</div>
    </Popup>
  );
};
