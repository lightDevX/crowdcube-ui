import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email/Password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect or handle success
    } catch (error) {
      console.error("Login error:", error.message);
      // Handle errors (display to user)
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Redirect or handle success
    } catch (error) {
      console.error("Google login error:", error.message);
      // Handle errors
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-12">
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset" onSubmit={handleLogin}>
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="my-4">
                  <span className="text-base font-semibold">
                    If you are not a donor,{" "}
                    <Link
                      to="/register"
                      className="link text-teal-500 hover:text-red-300"
                    >
                      Register now!
                    </Link>
                  </span>
                </div>
                <div className="flex w-full flex-col">
                  <button
                    type="submit"
                    className="card bg-base-300 rounded-box grid place-items-center py-3 text-base font-medium"
                  >
                    Login
                  </button>
                  <div className="divider">OR</div>
                </div>
              </form>
              <button
                onClick={handleGoogleLogin}
                className="card bg-base-300 rounded-box grid w-full place-items-center py-3 text-base font-medium"
              >
                <div className="flex items-center justify-center gap-2.5">
                  <FcGoogle /> <span>Login with Google</span>
                </div>
              </button>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
