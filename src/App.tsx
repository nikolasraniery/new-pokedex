import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="mt-6">
        <Card />
      </div>
    </div>
  );
}

export default App;
