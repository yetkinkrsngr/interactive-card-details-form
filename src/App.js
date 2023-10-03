import "./App.css";
import LeftHero from "./components/LeftHero";
import RightHero from "./components/RightHero";
function App() {
  return (
    <>
      <div className="container">
        <div className="leftside">
          <LeftHero />
        </div>
        <div className="rightside">
          <RightHero />
        </div>
      </div>
    </>
  );
}

export default App;
