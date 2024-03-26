import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "../../assets/images/logo-bg.png";
import CustomButton from "../../components/CustomButton";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="h2"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-black"
      >
        <a href="#" className="flex items-center text-[20px]">
          Solution
        </a>
      </Typography>
      <Typography
        as="h2"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-black"
      >
        <a href="#" className="flex items-center text-[20px]">
          Industries
        </a>
      </Typography>
      <Typography
        as="h2"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-black"
      >
        <a href="#" className="flex items-center text-[20px]">
          Products
        </a>
      </Typography>
      <Typography
        as="h2"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-black"
      >
        <a href="#" className="flex items-center text-[20px]">
          Resources
        </a>
      </Typography>
      <Typography
        as="h2"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium text-black"
      >
        <a href="#" className="flex items-center text-[20px]">
          Pricing
        </a>
      </Typography>
      <Typography
        as="h2"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium bg-black text-white px-8 py-3 rounded-md shadow-bottom cursor-pointer w-[127px]"
      >
        <a href="#" className="flex items-center text-[20px] ">
          Login
        </a>
      </Typography>
      {/* <CustomButton name="log" width="127px" height="56px" /> */}
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center">
          <Typography className="">
            <img
              src={logo}
              alt="Logo"
              className="mr-4 cursor-pointer h-[60px] rounded bg-[#F4F4F4] shadow-bottom"
            />
          </Typography>
          <Typography
            as="h1"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold text-[40px] text-black"
          >
            PrimeCRM
          </Typography>
        </div>

        <div className="hidden lg:block">{navList}</div>
        {/* <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Sign in</span>
          </Button>
        </div> */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-black"
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
              className="h-6 w-6 text-black"
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
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          {/* <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div> */}
        </div>
      </MobileNav>
    </Navbar>
  );
}
