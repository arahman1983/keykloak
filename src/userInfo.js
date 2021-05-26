import {useState, useEffect} from 'react'

function UserInfo ({keycloak}) {
  const [user, setUser] = useState({})
  console.log("keycloak", keycloak)
    useEffect(() => {
      keycloak.loadUserInfo().then(userInfo => {
        console.log("user", userInfo)
        setUser({name: userInfo.name, email: userInfo.email, id: userInfo.sub})
        });
    }, [keycloak])

    return (
      <div className="UserInfo">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>ID: {user.id}</p>
      </div>
    );
}


export default UserInfo;