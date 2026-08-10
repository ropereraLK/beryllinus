import Icon from "@cloudscape-design/components/icon";
const Notification = () => {
  return (
    //fixed top-0 right-40
    <div className="h-12 w-12 flex items-center justify-center ">
      <div className="h-7 w-7 rounded-full border-black flex items-center justify-center p-2 color-white">
        <Icon name="notification" variant="inverted" />
      </div>
    </div>
  );
};

export default Notification;
