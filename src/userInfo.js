import {useState, useEffect} from 'react'

function UserInfo ({keycloak}) {
  const [user, setUser] = useState({})

    useEffect(() => {
      keycloak.loadUserInfo().success((userInfo =>{
        console.log("user", userInfo)
        setUser({name: userInfo.name, email: userInfo.email, id: userInfo.sub})
      }))
    }, [])

    return (
      <div className="UserInfo">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>ID: {user.id}</p>
      </div>
    );
}


export default UserInfo;