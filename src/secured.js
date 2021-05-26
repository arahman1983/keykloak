import { useState, useEffect } from "react";
import Keycloak from "keycloak-js";
import UserInfo from './userInfo'
import { useHistory } from "react-router";

function Secured() {
  const [authenticated, setAuthenticated] = useState(null);
  const [keycloak, setkeyCloak] = useState(null);
  const history = useHistory()
  
  useEffect( () => {
    const keycloakInit = Keycloak("/keycloak.json");
    keycloakInit.init({ onLoad: "login-required","checkLoginIframe" : false }).success(auth => {
      setkeyCloak(keycloakInit);
      setAuthenticated(auth);
    })
  
  }, []);
  return (
    keycloak && (authenticated ? (
      <div>
        done
        <button onClick={()=>{history.push("/"); keycloak.logout()}}>logout</button>
        <UserInfo keycloak = {keycloak}/>
      </div>
    ) : (
      <div>Unable to authenticate!</div>
    )))
  ;

}
export default Secured;
