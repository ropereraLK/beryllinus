import logoImage from "../../assets/beryllinus-logo.png";
const Logo = () => {
  return (
     //fixed top-0 left-0
    <div className="h-12 w-12 flex items-center justify-center">
      <img
        src={logoImage}
        alt="Logo"
        className="w-8 h-8 object-cover rounded-full border-2 border-white"
      />
    </div>
  );
};

export default Logo;
