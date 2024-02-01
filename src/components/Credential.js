import React from "react";

const Credential = ({}) => {
  return (
    <>
      <div style={{float: "left"}}>
        <b>Login</b>
        <br />
        <br />
        <form action="login" method="post">
          <input type="hidden" name="goto" value="news" />
          <table border="0">
            <tr>
              <td>username:</td>
              <td>
                <input
                  type="text"
                  name="acct"
                  size="20"
                  autocorrect="off"
                  spellcheck="false"
                  autocapitalize="off"
                  autofocus="true"
                />
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input type="password" name="pw" size="20" />
              </td>
            </tr>
          </table>
          <br />
          <button type="submit" >login</button>
        </form>
        <a href="forgot">Forgot your password?</a>
        <br />
        <br />
        <b>Create Account</b>
        <br />
        <br />
        <form action="login" method="post">
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
                  autocorrect="off"
                  spellcheck="false"
                  autocapitalize="off"
                />
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input type="password" name="pw" size="20" />
              </td>
            </tr>
          </table>
          <br />
          <button type="submit">create account</button>
        </form>
      </div>
    </>
  );
};

export default Credential;
