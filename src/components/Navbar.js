import { NavLink } from "react-router-dom";

// const hideNav = (navbar) => {
//   const hide = () => {
//     let lastScrollTop = 0;
//     const currentScrollTop = navbar.scrollTop;

//     // scroll down
//     if (currentScrollTop > lastScrollTop) {
//       navbar.classList.add("hidden");
//     } else {
//       // scroll up
//       navbar.classList.remove("hidden");
//     }
//     lastScrollTop = currentScrollTop;
//   };

//   window.addEventListener("scroll", hide);
// };

export const Navbar = () => {
  return (
    <>
      <div
        className="lg:flex w-full h-[10%] bg-white z-50 hidden "
        // ref={hideNav()}
      >
        <div
          id="navbar-shape"
          className="bg-darkblue w-[30%] xl:w-[35%] flex items-center justify-center animate__animated animate__slideInLeft"
        >
          <h1 className="text-gold text-2xl xl:text-4xl tracking-[.30em]">
            ORTHODOX
          </h1>
        </div>
        <div
          id="navlink1"
          className="w-[70%] xl:w-[65%] flex items-center justify-center space-x-32 text-lg text-gold font-bold tracking-widest"
        >
          <NavLink id="link" to="/">
            HOME
          </NavLink>
          <NavLink id="link" to="/pfp">
            PFP
          </NavLink>
          <NavLink id="link" to="/division">
            DIVISION
          </NavLink>
          <NavLink id="link" to="/titlebelt">
            TITLE BELT
          </NavLink>
        </div>
      </div>
    </>
  );
};
