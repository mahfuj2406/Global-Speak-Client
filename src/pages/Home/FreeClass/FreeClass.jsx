
import { Fade } from "react-awesome-reveal";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const FreeClass = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mb-20">
      <SectionTitle heading={"Get Your Free Classes"}></SectionTitle>
      <Fade direction="down">
        <div className="bg-violet-300 p-10 rounded-xl shadow-xl">
          <form action="">
            <Fade direction="left" delay={500}>
              <div className="md:flex gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered  text-white border-white w-full "
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered  text-white border-white  w-full "
                />
                <div className="flex gap-5">
                  <input
                    type="date"
                    placeholder=""
                    className="input input-bordered  text-white border-white  w-full "
                  />
                  <input
                    type="time"
                    placeholder="Type here"
                    className="input input-bordered  text-white border-white  w-full "
                  />
                </div>
              </div>
            </Fade>
            <Fade direction="right" delay={500}>
              <textarea
                type="textarea"
                placeholder="Your Message"
                className="input input-bordered  text-white border-white h-[150px] mt-10 py-2 w-full "
              />
            </Fade>

            <input type="submit" value="Submit" className="btn bg-violet-500 hover:bg-violet-700 w-full mt-5" />
          </form>
        </div>
      </Fade>
    </div>
  );
};

export default FreeClass;
