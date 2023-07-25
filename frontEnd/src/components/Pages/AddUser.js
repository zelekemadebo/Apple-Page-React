import React, { useState, useEffect } from 'react'

function AddUser() {
    const [allUser, setAllUser] = useState([]);
    const [user, setUser] = useState({});
    const [refresh, setRefresh] = useState(true);



  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => {
        setUser(() => data.results[0] );
      });
  }, [refresh]);

  const newUser = (e) => {
    e.preventDefault();
    setRefresh(!refresh)
    setAllUser([...allUser, user]);
   
}
    

  return (
    <>
      <button onClick={newUser} >Add User</button>
        {allUser.map((eachUser, i) => 
        <div key={i} >
            <img style={{clipPath: "circle()"}} src={eachUser.picture.medium} alt="images" />
            {/* <h5>{`${eachUser.name.first} ${eachUser.name.last}`}</h5> */}
            <h5>{eachUser.name.title} {eachUser.name.first} {eachUser.name.last}</h5>

        </div>
        )}
      
    </>
  )
}

export default AddUser
