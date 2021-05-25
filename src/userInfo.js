import {useState, useEffect} from 'react'

function UserInfo ({keycloak}) {
  const [user, setUser] = useState({})
  console.log("keycloak", keycloak)
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     email: "",
  //     id: ""
  //   };
    // this.props.keycloak.loadUserInfo().then(userInfo => {
    //     this.setState({name: userInfo.name, email: userInfo.email, id: userInfo.sub})
    // });
    useEffect(() => {
      keycloak.loadUserInfo().then(userInfo => {
        console.log("user", userInfo)
        setUser({name: userInfo.name, email: userInfo.email, id: userInfo.sub})
        });
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