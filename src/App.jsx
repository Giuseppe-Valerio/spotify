import "./App.css";
import Page from "./components/Page";
import Player from "./components/Players";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <Page />
      <div>
        <Player />
      </div>
    </>
  );
}

export default App;
