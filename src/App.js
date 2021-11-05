import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
// import BaiTapComponent from "./components/BaiTapComponent/BaiTapComponent";
import BaiTapVeNha from "./components/BaiTapVeNha/BaiTapVeNha";
import Databinding from "./databinding/Databinding";
import HandleEvent from "./components/handlevent/HandleEvent";
import State from "./state/State";

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <Profile /> */}
      <BaiTapVeNha />
      {/* <Databinding /> */}
      {/* <HandleEvent />
      <State /> */}
    </div>
  );
}

export default App;
