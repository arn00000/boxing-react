import thering from "../images/thering.jpg";
import wbc from "../images/wbc.jpg";
import wbo from "../images/wbo.jpg";
import wba from "../images/wba.jpg";
import ibf from "../images/ibf.jpg";
import theringlogo from "../images/theringlogo.png";
import wbclogo from "../images/wbclogo.png";
import wbologo from "../images/wbologo.png";
import wbalogo from "../images/wbalogo.png";
import ibflogo from "../images/ibflogo.png";

export const TitleBelt = () => {
  return (
    <>
      <div className="h-[90vh] w-full bg-wbc grid grid-cols-1 lg:grid-cols-2 relative">
        <img
          src={wbc}
          alt=""
          className="place-self-center w-[70%] md:w-[60%] shadow-[0px_0px_20px_2px_rgba(20,33,61,1)]"
        />
        <div className="place-self-center w-[80%] space-y-4">
          <h1 className="font-bold text-4xl tracking-widest uppercase">wbc</h1>
          <h2 className="text-xl">
            The World Boxing Council is an international professional boxing
            organization. It is among the four major organizations which
            sanction professional boxing bouts, alongside the World Boxing
            Association, International Boxing Federation and World Boxing
            Organization.
          </h2>
          <a href="https://wbcboxing.com/en/">
            <button
              id="button"
              className="bg-darkblue text-white text-base w-32 h-8 md:text-lg md:w-36 md:h-10 mt-3 hover:text-gold"
            >
              Explore now
            </button>
          </a>
        </div>
        <img
          src={wbclogo}
          alt=""
          className="absolute w-20 lg:w-32 bottom-0 right-5"
        />
      </div>
      <div className="h-[90vh] w-full bg-wba grid grid-cols-1 lg:grid-cols-2 relative">
        <img
          src={wba}
          alt=""
          className="place-self-center w-[70%] md:w-[60%] shadow-[0px_0px_20px_2px_rgba(20,33,61,1)]"
        />
        <div className="place-self-center w-[80%] space-y-4">
          <h1 className="font-bold text-4xl tracking-widest uppercase">wba</h1>
          <h2 className="text-xl">
            The World Boxing Association, formerly known as the National Boxing
            Association, is the oldest and one of four major organizations which
            sanction professional boxing bouts, alongside the World Boxing
            Council, International Boxing Federation and World Boxing
            Organization.
          </h2>
          <a href="https://www.wbaboxing.com/">
            <button
              id="button"
              className="bg-darkblue text-white text-base w-32 h-8 md:text-lg md:w-36 md:h-10 mt-3 hover:text-gold"
            >
              Explore now
            </button>
          </a>
        </div>
        <img
          src={wbalogo}
          alt=""
          className="absolute w-20 lg:w-32 bottom-5 right-5"
        />
      </div>
      <div className="h-[90vh] w-full bg-ibf grid grid-cols-1 lg:grid-cols-2 relative">
        <img
          src={ibf}
          alt=""
          className="place-self-center w-[70%] md:w-[60%] shadow-[0px_0px_20px_2px_rgba(20,33,61,1)]"
        />
        <div className="place-self-center w-[80%] space-y-4">
          <h1 className="font-bold text-4xl tracking-widest uppercase">ibf</h1>
          <h2 className="text-xl">
            The International Boxing Federation is one of four major
            organizations recognized by the International Boxing Hall of Fame
            which sanctions professional boxing bouts, alongside the World
            Boxing Association, World Boxing Council and World Boxing
            Organization.
          </h2>
          <a href="https://www.ibf-usba-boxing.com/">
            <button
              id="button"
              className="bg-darkblue text-white text-base w-32 h-8 md:text-lg md:w-36 md:h-10 mt-3 hover:text-gold"
            >
              Explore now
            </button>
          </a>
        </div>
        <img
          src={ibflogo}
          alt=""
          className="absolute w-20 lg:w-32 bottom-5 right-5"
        />
      </div>
      <div className="h-[90vh] w-full bg-wbo grid grid-cols-1 lg:grid-cols-2 relative">
        <img
          src={wbo}
          alt=""
          className="place-self-center w-[70%] md:w-[60%] shadow-[0px_0px_20px_2px_rgba(20,33,61,1)]"
        />
        <div className="place-self-center w-[80%] space-y-4">
          <h1 className="font-bold text-4xl tracking-widest uppercase">wbo</h1>
          <h2 className="text-xl">
            The World Boxing Organization is an organization which sanctions
            professional boxing bouts. It is recognized by the International
            Boxing Hall of Fame as one of the four major world championship
            groups, alongside the World Boxing Association, World Boxing
            Council, and International Boxing Federation. Organization.
          </h2>
          <a href="https://wboboxing.com/">
            <button
              id="button"
              className="bg-darkblue text-white text-base w-32 h-8 md:text-lg md:w-36 md:h-10 mt-3 hover:text-gold"
            >
              Explore now
            </button>
          </a>
        </div>
        <img
          src={wbologo}
          alt=""
          className="absolute w-20 lg:w-32 bottom-5 right-5"
        />
      </div>
      <div className="h-[90vh] w-full bg-thering grid grid-cols-1 lg:grid-cols-2 relative">
        <img
          src={thering}
          alt=""
          className="place-self-center w-[70%] md:w-[60%] shadow-[0px_0px_20px_2px_rgba(20,33,61,1)]"
        />
        <div className="place-self-center w-[80%] space-y-4">
          <h1 className="font-bold text-4xl tracking-widest uppercase">
            the ring
          </h1>
          <h2 className="text-xl">
            The Ring is an American boxing magazine that was first published in
            1922 as a boxing and wrestling magazine. As the sporting legitimacy
            of professional wrestling came more into question, The Ring shifted
            to becoming exclusively a boxing-oriented publication.
          </h2>
          <a href="https://www.ringtv.com/">
            <button
              id="button"
              className="bg-darkblue text-white text-base w-32 h-8 md:text-lg md:w-36 md:h-10 mt-3 hover:text-gold"
            >
              Explore now
            </button>
          </a>
        </div>
        <img
          src={theringlogo}
          alt=""
          className="absolute w-20 lg:w-32 bottom-5 right-5"
        />
      </div>
    </>
  );
};
