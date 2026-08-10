import Logo from "../Logo";
import UserProfile from "../UserProfile";
import HeaderTitle from "../HeaderTitle";
import Setting from "../Setting";
import Notification from "../Notification";

const Header = () => {
  return (
    //w-full
    <div className="h-12  w-full bg-black  flex flex-row items-center justify-between   px-2 sticky top-0 min-w-[600px] ">
      <div className="flex items-center gap-3">
        <Logo />
        <HeaderTitle />
      </div>
      <div className="flex items-center gap-3">
        <Notification />
        <Setting />
        <UserProfile />
      </div>
    </div>
  );
};

export default Header;
