import { useRef, useState, useEffect } from "react";

const Login = () => {
  // References for our form.
  const userRef = useRef();
  const errRef = useRef();

  // States:
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState(""); // Error while we are authenticate.
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // If the user makes any changes or any sorts of adjustments in either userName or userPassword then we make the error message disappear.
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are Logged In</h1>

          <p>Go to home</p>
        </section>
      ) : (
        <section>
          {/* This will be used to display the error message. */}
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offScreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              id="userName"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="userPassword">Password:</label>
            <input
              type="password"
              id="userPassword"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />

            <button>Sign In</button>
          </form>
          <p>
            Don't have an Account?
            <span className="line">
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
