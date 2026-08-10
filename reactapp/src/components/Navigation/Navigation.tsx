import ListMenu from "../ListMenu";

const Navigation = () => {
  return (
    //fixed top-12
    <div className="h-10 bg-white w-full border-red-500 flex flex-row  top-12 sticky ">
      <ListMenu></ListMenu>
    </div>
  );
};

export default Navigation;
