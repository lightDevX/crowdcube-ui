import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Registration = () => {
  return (
    <>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse lg:gap-12">
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
              <div className="card-body">
                <form className="fieldset">
                  <label className="fieldset-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full"
                    placeholder="Input your name"
                  />
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full"
                    placeholder="Email"
                  />
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input w-full"
                    placeholder="Password"
                  />
                  <div className="my-4">
                    <Link to="/login" className="text-base font-semibold">
                      If you already Register,{" "}
                      <span className="link text-teal-500 hover:text-red-300">
                        Login now!
                      </span>
                    </Link>
                  </div>
                  <div className="flex w-full flex-col">
                    <button
                      type="submit"
                      className="card bg-base-300 rounded-box grid place-items-center py-3 text-base font-medium"
                    >
                      Register
                    </button>
                    <div className="divider">OR</div>
                    <button
                      type="submit"
                      className="card bg-base-300 rounded-box grid place-items-center py-3 text-base font-medium"
                    >
                      <div className="flex items-center justify-center gap-2.5">
                        <FcGoogle /> <span>Register with Google</span>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
