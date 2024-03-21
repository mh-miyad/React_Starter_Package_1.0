import NavComp from "./components/Navbar/NavComp";
import Home from "./Page/Home";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavComp />
      <Home />
    </div>
  );
};

export default App;
