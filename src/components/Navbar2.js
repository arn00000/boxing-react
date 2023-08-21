export const Navbar2 = ({ setShow }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full h-[10%] bg-darkblue lg:hidden px-5">
        <h1 className="text-gold text-2xl tracking-[.30em]">ORTHODOX</h1>
        <button
          id="menubtn"
          onClick={() => setShow(true)}
          className="material-symbols-outlined text-gold text-5xl"
        >
          menu
        </button>
      </div>
    </>
  );
};
