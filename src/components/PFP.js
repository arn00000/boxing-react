import pfp1 from "../images/pfp1.jpg";
import pfp2 from "../images/pfp2.jpg";
import pfp3 from "../images/pfp3.jpg";
import pfp4 from "../images/pfp4.jpg";
import pfp5 from "../images/pfp5.jpg";
import pfp6 from "../images/pfp6.jpg";
import pfp7 from "../images/pfp7.jpg";
import pfp8 from "../images/pfp8.jpg";
import pfp9 from "../images/pfp9.jpg";
import pfp10 from "../images/pfp10.jpg";
import america from "../images/america.png";
import japan from "../images/japan.png";
import russia from "../images/russia.png";
import mexico from "../images/mexico.png";
import ukraine from "../images/ukraine.png";

export const Pfp = () => {
  return (
    <>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 p-2 lg:p-10 gap-5 pt-10">
        <div
          id="pfp"
          className="flex space-x-5 bg-gold p-2 h-32 w-full xl:w-[80%]"
        >
          <img src={pfp1} alt="" className="" />
          <div className="p-1 space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="bg-white text-gold w-6 text-center h-6 font-bold">
                #1
              </h1>
              <h1 className="text-darkblue font-bold text-sm lg:text-base antialiased">
                POUND FOR POUND
              </h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <h1 className="text-white font-bold text-sm lg:text-base lg:tracking-[.10em]">
                OLEKSANDR USYK
              </h1>
              <h2 className="text-darkblue font-bold text-xs lg:text-sm">
                "THE CAT"
              </h2>
            </div>
            <div className="flex items-center space-x-1">
              <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
                UKRAINE
              </h3>
              <img src={ukraine} alt="" className="w-6 h-4" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
              20-0-0
            </h3>
          </div>
        </div>

        <div
          id="pfp"
          className="flex space-x-5 bg-darkblue p-2 h-32 w-full xl:w-[80%]"
        >
          <img src={pfp2} alt="" className="" />
          <div className="p-1 space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="bg-white text-gold w-6 text-center h-6 font-bold">
                #2
              </h1>
              <h1 className="text-gold font-bold text-sm lg:text-base antialiased">
                POUND FOR POUND
              </h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <h1 className="text-white font-bold text-sm lg:text-base lg:tracking-[.10em]">
                SAUL ALVAREZ
              </h1>
              <h2 className="text-zinc-500 font-bold text-xs lg:text-sm">
                "CANELO"
              </h2>
            </div>
            <div className="flex items-center space-x-1">
              <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
                MEXICO
              </h3>
              <img src={mexico} alt="" className="w-6 h-4" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
              58-2-2
            </h3>
          </div>
        </div>

        <div
          id="pfp"
          className="flex space-x-5 bg-darkblue p-2 h-32 w-full xl:w-[80%]"
        >
          <img src={pfp3} alt="" className="" />
          <div className="p-1 space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="bg-white text-gold w-6 text-center h-6 font-bold">
                #3
              </h1>
              <h1 className="text-gold font-bold text-sm lg:text-base antialiased">
                POUND FOR POUND
              </h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <h1 className="text-white font-bold text-sm lg:text-base lg:tracking-[.10em]">
                NAOYA INOUE
              </h1>
              <h2 className="text-zinc-500 font-bold text-xs lg:text-sm">
                "THE MONSTER"
              </h2>
            </div>
            <div className="flex items-center space-x-1">
              <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
                JAPAN
              </h3>
              <img src={japan} alt="" className="w-6 h-4" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
              23-0-0
            </h3>
          </div>
        </div>

        <div
          id="pfp"
          className="flex space-x-5 bg-darkblue p-2 h-32 w-full xl:w-[80%]"
        >
          <img src={pfp4} alt="" className="" />
          <div className="p-1 space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="bg-white text-gold w-6 text-center h-6 font-bold">
                #4
              </h1>
              <h1 className="text-gold font-bold text-sm lg:text-base antialiased">
                POUND FOR POUND
              </h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <h1 className="text-white font-bold text-sm lg:text-base lg:tracking-[.10em]">
                ERROL SPENCE
              </h1>
              <h2 className="text-zinc-500 font-bold text-xs lg:text-sm">
                "THE TRUTH"
              </h2>
            </div>
            <div className="flex items-center space-x-1">
              <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
                AMERICA
              </h3>
              <img src={america} alt="" className="w-6 h-4" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
              28-0-0
            </h3>
          </div>
        </div>

        <div
          id="pfp"
          className="flex space-x-5 bg-darkblue p-2 h-32 w-full xl:w-[80%]"
        >
          <img src={pfp5} alt="" className="" />
          <div className="p-1 space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="bg-white text-gold w-6 text-center h-6 font-bold">
                #5
              </h1>
              <h1 className="text-gold font-bold text-sm lg:text-base antialiased">
                POUND FOR POUND
              </h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <h1 className="text-white font-bold text-sm lg:text-base lg:tracking-[.10em]">
                DMITRY BIVOL
              </h1>
            </div>
            <div className="flex items-center space-x-1">
              <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
                RUSSIA
              </h3>
              <img src={russia} alt="" className="w-6 h-4" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
              21-0-0
            </h3>
          </div>
        </div>

        <div
          id="pfp"
          className="flex space-x-5 bg-darkblue p-2 h-32 w-full xl:w-[80%]"
        >
          <img src={pfp6} alt="" className="" />
          <div className="p-1 space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="bg-white text-gold w-6 text-center h-6 font-bold">
                #6
              </h1>
              <h1 className="text-gold font-bold text-sm lg:text-base antialiased">
                POUND FOR POUND
              </h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <h1 className="text-white font-bold text-sm lg:text-base lg:tracking-[.10em]">
                TERENCE CRAWFORD
              </h1>
              <h2 className="text-zinc-500 font-bold text-xs lg:text-sm">
                "BUD"
              </h2>
            </div>
            <div className="flex items-center space-x-1">
              <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
                AMERICA
              </h3>
              <img src={america} alt="" className="w-6 h-4" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
              38-0-0
            </h3>
          </div>
        </div>

        <div
          id="pfp"
          className="flex space-x-5 bg-darkblue p-2 h-32 w-full xl:w-[80%]"
        >
          <img src={pfp7} alt="" className="" />
          <div className="p-1 space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="bg-white text-gold w-6 text-center h-6 font-bold">
                #7
              </h1>
              <h1 className="text-gold font-bold text-sm lg:text-base antialiased">
                POUND FOR POUND
              </h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <h1 className="text-white font-bold text-sm lg:text-base lg:tracking-[.10em]">
                DEVIN HANEY
              </h1>
              <h2 className="text-zinc-500 font-bold text-xs lg:text-sm">
                "THE DREAM"
              </h2>
            </div>
            <div className="flex items-center space-x-1">
              <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
                AMERICA
              </h3>
              <img src={america} alt="" className="w-6 h-4" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
              29-0-0
            </h3>
          </div>
        </div>

        <div
          id="pfp"
          className="flex space-x-5 bg-darkblue p-2 h-32 w-full xl:w-[80%]"
        >
          <img src={pfp8} alt="" className="" />
          <div className="p-1 space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="bg-white text-gold w-6 text-center h-6 font-bold">
                #8
              </h1>
              <h1 className="text-gold font-bold text-sm lg:text-base antialiased">
                POUND FOR POUND
              </h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <h1 className="text-white font-bold text-sm lg:text-base lg:tracking-[.10em]">
                JERMELL CHARLO
              </h1>
              <h2 className="text-zinc-500 font-bold text-xs lg:text-sm">
                "IRON MAN"
              </h2>
            </div>
            <div className="flex items-center space-x-1">
              <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
                AMERICA
              </h3>
              <img src={america} alt="" className="w-6 h-4" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
              37-1-1
            </h3>
          </div>
        </div>

        <div
          id="pfp"
          className="flex space-x-5 bg-darkblue p-2 h-32 w-full xl:w-[80%] overscroll-auto"
        >
          <img src={pfp9} alt="" className="" />
          <div className="p-1 space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="bg-white text-gold w-6 text-center h-6 font-bold">
                #9
              </h1>
              <h1 className="text-gold font-bold text-sm lg:text-base antialiased">
                POUND FOR POUND
              </h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <h1 className="text-white font-bold text-sm lg:text-base lg:tracking-[.10em]">
                VASILIY LOMACHENKO
              </h1>
              <h2 className="text-zinc-500 font-bold text-xs lg:text-sm">
                "HI-TECH"
              </h2>
            </div>
            <div className="flex items-center space-x-1">
              <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
                UKRAINE
              </h3>
              <img src={ukraine} alt="" className="w-6 h-4" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
              17-2-0
            </h3>
          </div>
        </div>

        <div
          id="pfp"
          className="flex space-x-5 bg-darkblue p-2 h-32 w-full xl:w-[80%]"
        >
          <img src={pfp10} alt="" className="" />
          <div className="p-1 space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="bg-white text-gold w-7 text-center h-6 font-bold">
                #10
              </h1>
              <h1 className="text-gold font-bold text-sm lg:text-base antialiased">
                POUND FOR POUND
              </h1>
            </div>
            <div className="flex items-center space-x-2 ">
              <h1 className="text-white font-bold text-sm lg:text-base lg:tracking-[.10em]">
                GERVONTA DAVIS
              </h1>
              <h2 className="text-zinc-500 font-bold text-xs lg:text-sm">
                "TANK"
              </h2>
            </div>
            <div className="flex items-center space-x-1">
              <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
                AMERICA
              </h3>
              <img src={america} alt="" className="w-6 h-4" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base lg:tracking-widest">
              27-0-0
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
