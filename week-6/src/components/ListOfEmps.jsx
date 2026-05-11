import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmpoyee = (empObj) => {
    //navigate to /employee along with selected emp obj
    navigate("/employee", { state: empObj });
  };

  const gotoEditEmpoyee = (empObj) => {
    //navigate to /employee along with selected emp obj
    navigate("/empApp",{state:empObj});
  };

  const DeleteEmpByID=async (id) =>{
    let res=await axios.delete(`http://localhost:4000/empApp/employees/${id}`);
    if(res.status===200){
      //get latest emps data
      getEmps();
    }
  };
  //get all emps
   async function getEmps() {
      let res = await axios.get(`http://localhost:4000/empApp/employees`);
      if (res.status === 200) {
        let resObj = res.data;
        setEmps(resObj.payload);
      }
    }
  useEffect(() => {
    
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center text-1xl rounded-2xl shadow-2xl ">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            {/* 3 buttons */}
            <div className="flex justify-around">
              <button onClick={() => gotoEmpoyee(empObj)} className="bg-green-600 p-2 rounded-2xl text-white">
                View
              </button>
              <button onClick={()=>gotoEditEmpoyee(empObj)} className="bg-yellow-600 p-2 rounded-2xl text-white">
                Edit
              </button>
              <button onClick={()=>DeleteEmpByID(empObj._id)} className="bg-red-600 p-2 rounded-2xl text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;