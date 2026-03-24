import Navbar from "./components/navbar";
import UsersList from "./components/UsersList";
import Counter from "./components/counter";
import Footer from "./components/footer"
function App(){
  return(
  <div>
     <Navbar />
     <div className="m-16 min-h-screen">
        <UsersList />
        <Counter />
        </div>
        <Footer />
     </div>
  );
}
export default App;