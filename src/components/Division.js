import IBF from "../images/ibfmini.webp";
import WBO from "../images/wbomini.webp";
import WBA from "../images/wbamini.webp";
import WBC from "../images/wbcmini.webp";
import RING from "../images/ringmini.webp";

const fighters = {
  HEAVYWEIGHT: {
    WBA: "OLEKSANDR USYK",
    WBC: "TYSON FURY",
    IBF: "OLEKSANDR USYK",
    WBO: "OLEKSANDR USYK",
    "THE RING": "OLEKSANDR USYK",
  },
  BRIDGERWEIGHT: {
    WBC: "OSCAR RIVAS",
  },
  CRUISERWEIGHT: {
    WBA: "ARSEN GOULAMIRIAN",
    WBC: "ILUNGA MAKABU",
    IBF: "JAI OPETAIA",
    WBO: "LAWRENCE OKOLIE",
    "THE RING": "JAI OPETAIA",
  },
  "LIGHT HEAVYWEIGHT": {
    WBA: "DIMTRY BIVOL",
    WBC: "ARTUR BETERBIEV",
    IBF: "ARTUR BETERBIEV",
    WBO: "ARTUR BETERBIEV",
    "THE RING": "VACANT",
  },
  "SUPER MIDDLEWEIGHT": {
    WBA: "CANELO ALVARES",
    WBC: "CANELO ALVAREZ",
    IBF: "CANELO ALVARES",
    WBO: "CANELO ALVARES",
    "THE RING": "CANELO ALVARES",
  },
  MIDDLEWEIGHT: {
    WBA: "GENNADY GOLOVKIN",
    WBC: "JERMELL CHARLO",
    IBF: "GENNADY GOLOVKIN",
    WBO: "JANIBEK ALIMKHANULY",
    "THE RING": "VACANT",
  },
  "SUPER WELTERWEIGHT": {
    WBA: "JERMELL CHARLO",
    WBC: "JERMELL CHARLO",
    IBF: "JERMELL CHARLO",
    WBO: "JERMELL CHARLO",
    "THE RING": "JERMELL CHARLO",
  },
  WELTERWEIGHT: {
    WBA: "ERROL SPENCE JR",
    WBC: "TYSON FURY",
    IBF: "ERROL SPENCE JR",
    WBO: "TERENCE CRAWFORD",
    "THE RING": "VACANT",
  },
  "SUPER LIGHTWEIGHT": {
    WBA: "ALBERTO PUELLO",
    WBC: "VACANT",
    IBF: "VACANT",
    WBO: "JOSH TAYLOR",
    "THE RING": "JOSH TAYLOR",
  },
  LIGHTWEIGHT: {
    WBA: "DEVIN HANEY",
    WBC: "DEVIN HANEY",
    IBF: "DEVIN HANEY",
    WBO: "DEVIN HANEY",
    "THE RING": "DEVIN HANEY",
  },
  "SUPER FEATHERWEIGHT": {
    WBA: "HECTOR LUIS GARCIA",
    WBC: "VACANT",
    IBF: "SHAVKATDZHON RAKHIMOV",
    WBO: "VACANT",
    "THE RING": "VACANT",
  },
  FEATHERWEIGHT: {
    WBA: "LEO SANTA CRUZ",
    WBC: "REY VARGAS",
    IBF: "JOSH WARRINGTON",
    WBO: "EMANUEL NAVARRRETE",
    "THE RING": "VACANT",
  },
  "SUPER BANTAMWEIGHT": {
    WBA: "MURODJON AKHMADALIEV",
    WBC: "STEPHEN FULTON JR",
    IBF: "MURODJON AKHMADALIEV",
    WBO: "STEPHEN FULTON JR",
    "THE RING": "VACANT",
  },
  BANTAMWEIGHT: {
    WBA: "NAOYA INOUE",
    WBC: "NAOYA INOUE",
    IBF: "NAOYA INOUE",
    WBO: "PAUL BUTLER",
    "THE RING": "NAOYA INOUE",
  },
  "SUPER FLYWEIGHT": {
    WBA: "JOSHUA FRANCO",
    WBC: "VACANT",
    IBF: "FERNANDO MARTINEZ",
    WBO: "KAZUTO IOKA",
    "THE RING": "JUAN FRANCISCO ESTRADA",
  },
  FLYWEIGHT: {
    WBA: "ARTEM DALAKIAN",
    WBC: "JULIO CESAR MARTINEZ",
    IBF: "SUNNY EDWARDS",
    WBO: "VACANT",
    "THE RING": "VACANT",
  },
  "LIGHT FLYWEIGHT": {
    WBA: "KENSHIRO TERAJI",
    WBC: "KENSHIRO TERAJI",
    IBF: "SIVENATHI NONTSHINGA",
    WBO: "JONATHAN GONZALEZ",
    "THE RING": "KENSHIRO TERAJI",
  },
};

console.log(fighters);
export const Division = () => {
  return (
    <>
      <div className="pt-4 sm:p-10">
        {Object.entries(fighters).map(([weightDivision, fighter]) => (
          <div
            key={weightDivision}
            className="shadow-[0px_0px_20px_2px_rgba(20,33,61,0.4)] mb-4"
          >
            <div className="accordion-button w-full bg-darkblue text-gold text-sm md:text-xl py-4 px-5">
              <h1>{weightDivision}</h1>
            </div>
            {Object.entries(fighter).map(([organization, championName]) => (
              <div
                key={organization}
                className="py-4 px-5 space-y-2 text-gold font-bold uppercase text-xs md:text-lg"
              >
                <div className="flex items-center space-x-2">
                  <img src={getImage(organization)} alt="" className="w-10" />
                  <h1 className="w-24">+ {organization}:</h1>
                  <h2>{championName}</h2>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* <div className="pt-4 sm:p-10">
        <div
          class="accordion shadow-[0px_0px_20px_2px_rgba(20,33,61,0.4)] rounded-2xl"
          id="accordionExample"
        >
          <div class="accordion-item bg-white ">
            <h2 class="accordion-header mb-0" id="headingOne">
              <button
                class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        hover:bg-zinc-300
        uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                HEAVYWEIGHT
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show border-b border-gold"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>OLEKSANDR USYK</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>tyson fury</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>OLEKSANDR USYK</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>OLEKSANDR USYK</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>OLEKSANDR USYK</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingTwo">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        hover:bg-zinc-300
        uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                BRIDGERWEIGHT
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>oscar rivas</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingThree">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                CRUISERWEIGHT
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>arsen goulamirian</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>ilunga makabu</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>jai opetaia</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>lawrence okolie</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>jai opetaia</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingFour">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                light HEAVYWEIGHT
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>dimtry bivol</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>artur beterbiev</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>artur beterbiev</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>artur beterbiev</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>vacant</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingFive">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                super middleweight
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>canelo alvares</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>canelo alvarez</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>canelo alvares</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>canelo alvares</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>canelo alvares</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingSix">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                middleweight
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>gennady golovkin</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>jermell charlo</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>gennady golovkin</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>janibek alimkhanuly</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>vacant</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingSeven">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                super welterweight
              </button>
            </h2>
            <div
              id="collapseSeven"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>jermell charlo</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>jermell charlo</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>jermell charlo</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>jermell charlo</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>jermell charlo</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingEight">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                welterweight
              </button>
            </h2>
            <div
              id="collapseEight"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>errol spence jr</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>tyson fury</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>errol spence jr</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>terence crawford</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>vacant</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingNine">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                super lightweight
              </button>
            </h2>
            <div
              id="collapseNine"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingNine"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>alberto puello</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>vacant</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>vacant</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>josh taylor</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>josh taylor</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingTen">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                lightweight
              </button>
            </h2>
            <div
              id="collapseTen"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingTen"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>devin haney</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>devin haney</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>devin haney</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>devin haney</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>devin haney</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingTwelve">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwelve"
                aria-expanded="false"
                aria-controls="collapseTwelve"
              >
                super featherweight
              </button>
            </h2>
            <div
              id="collapseTwelve"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingTwelve"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>hector luis garcia</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>vacant</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>Shavkatdzhon Rakhimov</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>vacant</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>vacant</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingThirteen">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThirteen"
                aria-expanded="false"
                aria-controls="collapseThirteen"
              >
                featherweight
              </button>
            </h2>
            <div
              id="collapseThirteen"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingThirteen"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>leo santa cruz</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>rey vargas</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>josh warrington</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>emanuel navarrete</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>vacant</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingFourteen">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFourteen"
                aria-expanded="false"
                aria-controls="collapseFourteen"
              >
                super bantamweight
              </button>
            </h2>
            <div
              id="collapseFourteen"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingFourteen"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>murodjon akhmadaliev</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>stephen fulton jr</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>murodjon akhmadaliev</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>stephen fulton jr</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>vacant</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingFifteen">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFifteen"
                aria-expanded="false"
                aria-controls="collapseFifteen"
              >
                bantamweight
              </button>
            </h2>
            <div
              id="collapseFifteen"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingFifteen"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>naoya inoue</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>naoya inoue</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>naoya inoue</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>paul butler</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>naoya inoue</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingSixteen">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSixteen"
                aria-expanded="false"
                aria-controls="collapseSixteen"
              >
                super flyweight
              </button>
            </h2>
            <div
              id="collapseSixteen"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingSixteen"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>joshua franco</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>vacant</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>fernando martinez</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>kazuto ioka</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>juan francisco estrada</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingSeventeen">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeventeen"
                aria-expanded="false"
                aria-controls="collapseSeventeen"
              >
                flyweight
              </button>
            </h2>
            <div
              id="collapseSeventeen"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingSeventeen"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>artem dalakian</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>julio cesar martinez</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>sunny edwards</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>vacant</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>vacant</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white">
            <h2 class="accordion-header mb-0" id="headingEighteen">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-xl text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
         hover:bg-zinc-300
         uppercase
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEighteen"
                aria-expanded="false"
                aria-controls="collapseEighteen"
              >
                light flyweight
              </button>
            </h2>
            <div
              id="collapseEighteen"
              class="accordion-collapse collapse border-b border-gold"
              aria-labelledby="headingEighteen"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5 space-y-2 text-gold font-bold uppercase">
                <div className="flex items-center space-x-2">
                  <img src={WBA} alt="" className="w-10" />
                  <h1 className="w-24">+ WBA:</h1>
                  <h2>kenshiro teraji</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBC} alt="" className="w-10" />
                  <h1 className="w-24">+ WBC:</h1>
                  <h2>kenshiro teraji</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={IBF} alt="" className="w-10" />
                  <h1 className="w-24">+ IBF:</h1>
                  <h2>sivenathi nontshinga</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={WBO} alt="" className="w-10" />
                  <h1 className="w-24">+ WBO:</h1>
                  <h2>jonathan gonzalez</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={RING} alt="" className="w-10" />
                  <h1 className="w-24">+ The Ring:</h1>
                  <h2>kenshiro teraji</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
function getImage(organization) {
  const organizationImageMap = {
    "THE RING": RING,
    WBO,
    IBF,
    WBC,
    WBA,
  };

  return organizationImageMap[organization];
}
