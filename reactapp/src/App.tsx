import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SideNavigation from "./components/SideNavigation";
 
// import DefaultPage from "./pages/DefaultPage";
import  AccountsPage  from "./features/account/pages/AccountsPage";

function App() {
  return (
    <div className="grid grid-rows-[48px_40px_1fr_60px]">
      <Header />
      <Navigation />
      <div className="grid grid-cols-[240px_1fr]">
        <SideNavigation />
        <div className="bg-[#f2f3f3]">
          {/* <DefaultPage/> */}
          <AccountsPage />
        </div>
      </div>
       
    </div>
  );
}

export default App;
