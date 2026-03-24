function Users(props){
    const user=props.user
   return( 
   <div className="border border-gray-200 p-5 rounded-xl shadow-sm bg-white text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img src={user.image} alt="image unavailable" className="block mx-auto rounded-3xl  block border-2 border-gray-100 " ></img>
    <h2 className="text-3xl text-red-400">{user.name}</h2>
    <p className="font-bold mt-5">{user.email}</p>
   </div>
   )
}
export default Users;