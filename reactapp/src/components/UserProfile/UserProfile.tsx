// import logoImage from "../../assets/beryllinus-logo.png";
import Icon from "@cloudscape-design/components/icon";

const UserProfile = () => {
  return (
    <div className="h-12 w-40 flex items-center justify-center">
      <div className="h-7 w-7 rounded-full border-black flex items-center justify-center p-2">
        <Icon name="user-profile"  variant="inverted"/>
      </div>

      <h4 className="flex text-white">Rohan Perera</h4>

      <div className="h-7 w-7 rounded-full border-black flex items-center justify-center p-2">
        <Icon name="caret-down-filled"  variant="inverted" />
      </div>
    </div>
  );
};

export default UserProfile;
