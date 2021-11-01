import Header from "./components/Header";
import Buttons from "./components/Buttons";

const generateUser = () => {
  console.log("Generating user");
};

const clearUsers = () => {
  console.log("Clearing users");
};

function App() {
  return (
    <>
      <Header />
      <Buttons functions={{generateUser, clearUsers}}/>
    </>
  );
}

export default App;
