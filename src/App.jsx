import "./App.css";
import hill1 from "/hill1.png"
import hill2 from "/hill2.png"
import hill3 from "/hill3.png"
import hill4 from "/hill4.png"
import hill5 from "/hill5.png"
import tree from "/tree.png"
import plant from "/plant.png"
import leaf from "/leaf.png"
import login from "/login.png"

function App() {

  return (
    <>

      <img src={login} alt="image login" />
      <img src={hill1} alt="image hill" />
      <img src={hill2} alt="image hill2" />
      <img src={hill3} alt="image hill3" />
      <img src={hill4} alt="image hill4" />
      <img src={hill5} alt="image hill5" />
      <img src={tree} alt="image tree" />
      <img src={plant} alt="image pllant" />
      <img src={leaf} alt="image leaf" />
    </>
  );
}

export default App;
