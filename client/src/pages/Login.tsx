import { useState } from "react";
import { Redirect } from "react-router-dom";

export interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({ password: "" });
  const [statusMessage, setStatusMessage] = useState<string>("");

  const [toSignUp, setToSignUp] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("Coming soon 🌹");
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email: email, password: password }),
    // };
    // const response = await fetch(
    //   "http://localhost:8080/api/auth/signin",
    //   requestOptions
    // );
    // const data = await response.json();
  };

  const formElementClasses = "block mb-4";

  if (toSignUp) {
    return <Redirect to="/signup" />;
  }

  return (
    <div className="mt-8 mx-auto md:my-auto">
      <h3 className="text-3xl font-bold mb-4">Log In</h3>
      <form onSubmit={handleSubmit}>
        <label className="block">Email address:</label>
        <input
          className={`${formElementClasses}`}
          name="email"
          type="email"
          onChange={handleEmailChange}
        ></input>
        <label className="block">Password:</label>
        <input
          className={`${formElementClasses}`}
          name="password"
          type="password"
          onChange={handlePasswordChange}
        ></input>
        <input
          className={`bg-red text-white rounded p-3 ${formElementClasses} cursor-pointer`}
          type="submit"
          value="Submit"
        ></input>
      </form>
      <div>
        {statusMessage ? (
          <div
            className={`${
              statusMessage.indexOf("Error:") !== -1
                ? "bg-pink-200"
                : "bg-green-200"
            }  p-2 mb-2 rounded`}
          >
            {statusMessage}
          </div>
        ) : null}
      </div>
      <div>
        <p>
          New user?{" "}
          <span
            className="underline cursor-pointer"
            onClick={(event) => setToSignUp(true)}
          >
            Sign up here.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
