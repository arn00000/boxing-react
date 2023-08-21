import banner from "../images/banner.png";
import ali from "../images/ali.jpg";
import mayweather from "../images/mayweather.jpg";
import tyson from "../images/tyson.jpg";
import pacquaio from "../images/pacquaio.jpg";

export const Home = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center h-[50vh] xl:h-[90vh]">
          <div>
            <h1
              id="text"
              className="text-[50px] sm:text-[80px] md:text-[100px] xl:text-[200px]"
            >
              ORTHODOX
            </h1>
            <div className="flex items-center justify-center text-gold text-4xl p-2 md:p-5 space-x-5 ">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 pt-6">
          <img
            src={banner}
            alt=""
            className="w-full md:col-span-2 md:h-[82vh]"
          />
          <div
            id="scroll-banner"
            className="hidden md:block bg-darkblue w-full text-center text-5xl text-gold overflow-hidden h-[82vh]"
          >
            <div id="banner-text" className="space-y-20 overflow-hidden">
              <h1>ORTHODOX</h1>
              <h1>ORTHODOX</h1>
              <h1>ORTHODOX</h1>
              <h1>ORTHODOX</h1>
              <h1>ORTHODOX</h1>
              <h1>ORTHODOX</h1>
              <h1>ORTHODOX</h1>
              <h1>ORTHODOX</h1>
              <h1>ORTHODOX</h1>
              <h1>ORTHODOX</h1>
            </div>
          </div>
        </div> */}

        <div className="pt-10 px-2 md:p-10">
          <div className="w-40 md:w-64 md:text-center">
            <div className="h-2 bg-gold"></div>
            <h1 className="uppercase md:text-3xl">
              What is <span className="text-gold">Boxing </span>?
            </h1>
          </div>
          <div className="md:mx-32 mx-10">
            <p className="md:text-2xl mt-5 text-gray-600 tracking-wide leading-10">
              Boxing is a combat sport in which two people, usually wearing
              protective gloves and other protective equipment such as hand
              wraps and mouthguards, throw punches at each other for a
              predetermined amount of time in a boxing ring.
            </p>
            <button
              id="button"
              className="bg-darkblue text-white text-sm w-28 h-7 md:text-lg md:w-36 md:h-10 mt-5 hover:text-gold"
            >
              Learn more
            </button>
          </div>
        </div>

        <div className="mt-10 p-2 md:p-10">
          <div className="w-40 md:w-64 md:text-center">
            <div className="h-2 bg-gold"></div>
            <h1 className="uppercase md:text-3xl">
              HISTORIC <span className="text-gold">BOXER </span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 px-10 md:px-32 lg:px-0 xl:px-40 pt-5 text-gold md:text-lg gap-5">
            <div>
              <div className="historic">
                <img src={ali} alt="" />
                <h1 className="">Muhammad Ali</h1>
              </div>
              <button
                id="historic-btn"
                className="bg-darkblue text-white w-full h-10 flex items-center justify-center hover:text-gold"
              >
                <h1 className="">Learn more</h1>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div>
              <div className="historic">
                <img src={tyson} alt="" />
                <h1 className="">Mike Tyson</h1>
              </div>
              <button
                id="historic-btn"
                className="bg-darkblue text-white w-full h-10 flex items-center justify-center hover:text-gold"
              >
                <h1 className="">Learn more</h1>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div>
              <div className="historic">
                <img src={mayweather} alt="" />
                <h1 className="">Floyd Mayweather</h1>
              </div>
              <button
                id="historic-btn"
                className="bg-darkblue text-white w-full h-10 flex items-center justify-center hover:text-gold"
              >
                <h1 className="">Learn more</h1>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div>
              <div className="historic">
                <img src={pacquaio} alt="" />
                <h1 className="">Manny Pacquaio</h1>
              </div>
              <button
                id="historic-btn"
                className="bg-darkblue text-white w-full h-10 flex items-center justify-center hover:text-gold"
              >
                <h1 className="">Learn more</h1>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
