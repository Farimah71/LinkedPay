import { MessengerProps } from "./messenger.types";

export const Messenger: React.FC<MessengerProps> = ({ messageList }) => {
  return (
    <div className="py-5 flex flex-col gap-y-10 overflow-y-scroll h-[60vh] pe-3">
      {messageList.messages.map((msg) => (
        <p
          key={msg.id}
          className={`flex flex-col gap-y-3 w-1/2 ${
            msg.isAdmin === "true" && "ml-auto"
          }`}
        >
          <span className="text-base-content-60 text-sm">{msg.sender}</span>
          <span
            className={`p-4 rounded-2xl font-medium text-sm ${
              msg.isAdmin === "true"
                ? "bg-primary text-white"
                : "bg-base-content-3"
            }`}
          >
            {msg.text}
            <div
              className={`text-xs mt-3 font-light ${
                msg.isAdmin === "false" && "text-base-content-60"
              }`}
            >
              {msg.date} - {msg.time}
            </div>
          </span>
        </p>
      ))}
    </div>
  );
};
