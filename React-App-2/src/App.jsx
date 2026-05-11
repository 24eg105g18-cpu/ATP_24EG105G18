import './App.css'
import UserList from "./Components/UsersList";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Counter from './Components/Counter';
import APIDemo from './Components/APIDemo';
import FormDemo from './Components/FormDemo';
import FormTask from './Components/FormTask';

function App() {
  return (
    <div>
      {/* Navigation Header */}
      <Navbar />
      
      {/* Main Content Area */}
      <div>
        <FormDemo />
      </div>

      {/* Footer Section */}
      <Footer />

      {/* Additional Form Task Section */}
      <div>
        <FormTask />
      </div>
    </div>
  );
}

export default App;