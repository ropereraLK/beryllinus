import Icon from "@cloudscape-design/components/icon";
const ListMenu = () => {
  return (
    <div className="fixed top-12 left-0 h-10  flex items-center justify-center">
      <div className="h-6 w-6 m-2 rounded-full border-black flex items-center justify-center p-1">
        <Icon name="menu" />
      </div>
      <h2 className="p-2">Bookings</h2>
      <div className="h-6 w-6 m-2 rounded-full border-black flex items-center justify-center">
        <Icon name="angle-right" />
      </div>
      <div className=" flex">
        <h5 className="p-1">Reserve</h5>
        <div className="h-6 w-6 m-2 rounded-full border-black flex items-center justify-center ">
        <Icon name="angle-right" />
      </div>
        <h5 className="p-1">Page</h5>
      </div>
    </div>
  );
};

export default ListMenu;
