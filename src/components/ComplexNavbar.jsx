import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Collapse,
  Tooltip,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  PowerIcon,
  Bars2Icon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

// profile menu component
const profileMenuItems = [
  {
    action() {
      signOut(auth)
        .then(() => {
          toast.success("Tizimdan muvaffaqiyatli chiqdingiz");
        })
        .catch(() => {
          toast.error("Xatolik yuz berdi, qayta urunib ko'ring");
        });
    },
    label: "Chiqish",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useSelector((state) => state.userSlice);
  const closeMenu = () => setIsMenuOpen(false);
  const navigate = useNavigate();

  function handleRecipes() {
    if (user) {
      navigate("/create-recipes");
    } else {
      const confirmation = confirm(
        "Retsept qo'shish uchun saytdan ro'yhatdan o'tish kerak. Ro'yhatdan o'tasizmi ?",
      );
      if (confirmation) {
        navigate("/login");
      }
    }
  }

  return (
    <div className="flex items-center gap-5">
      <Tooltip content="Retsept yaratish">
        <Typography
          className="font-medium text-blue-gray-500"
          as="span"
          variant="small"
          color="gray"
          onClick={handleRecipes}
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(PlusCircleIcon, {
              className: "h-[18px] w-[18px] flex-shrink-0",
            })}{" "}
            <span className="hidden text-gray-900 sm:block">
              Retsept yaratish
            </span>
          </MenuItem>
        </Typography>
      </Tooltip>

      {user && (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <Tooltip content="Sozlamalar">
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 rounded-full py-0.5 pl-0.5 pr-2"
              >
                <Avatar
                  variant="circular"
                  size="sm"
                  alt={user.displaName}
                  className="border border-gray-900 p-0.5"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  }
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
          </Tooltip>
          <MenuList className="p-1">
            {profileMenuItems.map(({ label, icon, action }, key) => {
              const isLastItem = key === profileMenuItems.length - 1;
              return (
                <MenuItem
                  key={label}
                  onClick={() => {
                    action();
                    closeMenu();
                  }}
                  className={`flex items-center gap-2 rounded ${
                    isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                  }`}
                >
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    strokeWidth: 2,
                  })}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      )}
    </div>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "Bosh sahifa",
    description: `"Tarkib.uz"da mavjuda barcha retseptlar`,
    href: "/",
  },
  {
    title: "Statiska",
    description: "Taomlar va retseptlar statiskasi",
    href: "/statistics",
  },
  {
    title: "Men yozgan retseptlar",
    description: "Muallifligingizdagi barcha retseptlar",
    href: "/my-recipes",
  },
  {
    title: "Sevimlilar",
    description: "Siz sevgan retseptlar",
    href: "/lovely",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description, href }) => (
    <NavLink to={href} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </NavLink>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="span" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              Sahifalar{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] gap-3 overflow-hidden lg:flex">
          <img
            className="w-72 object-cover"
            src="https://media.istockphoto.com/id/513234288/vector/vector-vintage-salmon-drawing-hand-drawn-monochrome-seafood-ill.jpg?s=612x612&w=0&k=20&c=efNfkkQRR0Y5hyxFugHctQwzAmeZH22Sw-8O0_BW_Pw="
            alt="Baliq rasmi"
          />
          <ul className="flex w-full flex-col gap-1">{renderItems}</ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Pages{" "}
      </MenuItem>
      <ul className="flex w-full flex-col gap-1 lg:hidden">{renderItems}</ul>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
    </ul>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="ml-2 mr-4 cursor-pointer py-1.5 font-medium"
        >
          Tarkib.uz
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <Collapse open={isNavOpen} className="overflow-hidden">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
