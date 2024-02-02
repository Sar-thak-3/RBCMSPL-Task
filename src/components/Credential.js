import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Credential = ({}) => {

  const history = useHistory();

  const [newusername, setnewUsername] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleCreateAccount = async() => {
    let response = await fetch("https://rbcmspl-backend.vercel.app/createaccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: newusername, password: newpassword }),
    });
    response = await response.json();
    if(response.success){
      localStorage.setItem("username", response.username);
      history.push("/?page=1");
    }
    else{
      alert("Failed to create account. Username already exists.");
    }
  }

  const handleLogin = async() => {
    let response = await fetch("https://rbcmspl-backend.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    response = await response.json();
    if(response.success){
      localStorage.setItem("username", response.username);
      history.push("/news?page=1");
    }
    else{
      alert("Failed to login. Username does not exist or password is incorrect.");
    }
  }

  const handlePasswordChange = (event) => {
    setnewPassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setnewUsername(event.target.value);
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  return (
    <>
      <div style={{float: "left"}}>
        <b>Login</b>
        <br />
        <br />
        {/* <form action="login" method="post"> */}
          <input type="hidden" name="goto" value="news" />
          <table border="0">
            <tr>
              <td>username:</td>
              <td>
                <input
                  type="text"
                  name="acct"
                  size="20"
                  autoCorrect="off"
                  spellCheck="false"
                  autoCapitalize="off"
                  autoFocus={true}
                  value={username}
                  onChange={handleUsername}
                />
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input type="password" name="pw" size="20" value={password} onChange={handlePassword}/>
              </td>
            </tr>
          </table>
          <br />
          <button type="submit" onClick={handleLogin}>login</button>
          <br/>
        {/* </form> */}
        <a href="forgot">Forgot your password?</a>
        <br />
        <br />
        <b>Create Account</b>
        <br />
        <br />
        {/* <form action="login" method="post"> */}
          <input type="hidden" name="goto" value="news" />
          <input type="hidden" name="creating" value="t" />
          <table border="0">
            <tr>
              <td>username:</td>
              <td>
                <input
                  type="text"
                  name="acct"
                  size="20"
                  autoCorrect="off"
                  spellCheck="false"
                  autoCapitalize="off"
                  value={newusername}
                  onChange={handleUsernameChange}
                />
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input type="password" name="pw" size="20" value={newpassword} onChange={handlePasswordChange}/>
              </td>
            </tr>
          </table>
          <br />
          <button type="submit" onClick={handleCreateAccount}>create account</button>
        {/* </form> */}
      </div>
    </>
  );
};

export default Credential;
