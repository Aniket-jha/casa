import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Logo from "../asset/logoblack.png"
import { IoMdArrowRoundUp } from "react-icons/io";
export function NavbarTwo() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col font-[NeueMedium] text-black gap-2 lg:mb-0 lg:mt-0 lg:justify-center lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider text-[17px]"
      >
        <a href="https://www.unionliving.in" className="flex items-center">
        Home
        </a>
      </Typography>
    
      <Typography
        as="li"
       
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider text-[17px]"
      >
        <a href="https://www.unionliving.in/#/properties" className="flex items-center">
         Properties
        </a>
      </Typography>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider text-[17px]"
      >
        <a href="https://www.unionliving.in/#/community" className="flex items-center">
         Community
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider text-[17px]"
      >
        <a href="https://www.unionliving.in/#/dailyStays" className="flex items-center">
         Daily Stays
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider text-[17px]"
      >
        <a href="https://www.unionliving.in/#/ourstory" className="flex items-center">
         Our Story
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className=" fixed z-[999] opacity-100 bg-opacity-100 w-[100vw !important] max-w-full  border-none shadow-none  rounded-none  py-2 px-4 lg:px-16 lg:py-6">
      <div className="  grid grid-cols-2 lg:grid-cols-5 justify-between items-center text-blue-gray-900">
       <a className="col-span-1" to="https://www.unionliving.in">
        <img className="w-[70px] lg:w-[120px]" src={Logo} alt="" />
       </a>
        <div className="hidden lg:block  col-span-3 ">{navList}</div>
       <div className="col-span-1 flex items-center justify-end " >
       <a href='https://form.jotform.com/241691749314462'> <button className="uppercase flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" >Book Now  </button></a>
     
        <IconButton
              variant="text"
              className="lg:ml-auto ml-2 h-6 w-6 col-span-4 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
            </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
         
        </div>
      </MobileNav>
    </Navbar>
  );
}