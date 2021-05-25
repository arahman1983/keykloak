import { useState, useEffect } from "react";
import Keycloak from "keycloak-js";
import UserInfo from './userInfo'

function Secured() {
  const [authenticated, setAuthenticated] = useState(null);
  const [keycloak, setkeyCloak] = useState(null);
  
  async function key () {
    try {
      const keycloakInit = await Keycloak("/keycloak.json");
      const auth = await keycloakInit.init({ onLoad: "login-required" })
      setkeyCloak(keycloakInit);
      setAuthenticated(auth);
    } catch (error) {
      console.log("error", error)
    }
  }
  useEffect( () => {
    key()
  }, []);
  return (
    keycloak && (authenticated ? (
      <div>
        <UserInfo keycloak = {keycloak}/>
      </div>
    ) : (
      <div>Unable to authenticate!</div>
    )))
  ;

}
export default Secured;
