import { BsBook } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import aboutImage from "../../assets/media/images/about.jpg";

const About = () => {
  return (
    <>
      <div className="my-5 flex flex-col items-center justify-center gap-20 md:flex-row">
        <div>
          <img src={aboutImage} alt="" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-red-600">About Us</h1>
          <p className="w-1/2 py-3.5 text-3xl font-bold text-neutral-900">
            We are Taking Small Steps to Make Earth Better Planet
          </p>
          <div className="my-6 flex gap-10">
            <div>
              <span>
                <FaHeart className="h-10 w-10 rounded-full p-1.5 text-red-400 outline outline-neutral-300 hover:bg-emerald-200" />
              </span>
              <h2 className="my-3.5 text-base font-bold text-neutral-900">
                Place Of Heaven
              </h2>
              <p className="text-base font-medium text-neutral-600/40">
                In Zegen you will feel divinity, piety, goodness, faith or right
                beliefs.
              </p>
            </div>
            <div>
              <span>
                <BsBook className="h-10 w-10 rounded-full p-1 outline outline-amber-200 hover:bg-emerald-200" />
              </span>
              <h2 className="my-3.5 text-base font-bold text-neutral-900">
                Place Of Heaven
              </h2>
              <p className="text-base font-medium text-neutral-600/40">
                In Zegen you will feel divinity, piety, goodness, faith or right
                beliefs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
