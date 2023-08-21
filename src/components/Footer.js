export const Footer = () => {
  return (
    <>
      <div
        id="footer"
        className="bg-darkblue w-full h-48 md:h-32 mt-10 grid grid-cols-1 md:grid-cols-2"
      >
        <div className="order-last md:order-first text-white grid content-end p-2">
          <h1>© Copyright 2022 Orthodox Rights Reserved.</h1>
        </div>
        <div className="flex items-center justify-end text-gold text-3xl p-2 md:p-5 space-x-5 ">
          <h1 className="text-xl">MALAYSIA | PENANG</h1>
          <div className="flex text-gold text-3xl p-5 space-x-2 md:space-x-10">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
    </>
  );
};
