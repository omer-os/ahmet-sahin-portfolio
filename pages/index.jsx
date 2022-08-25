import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import { ButtonBase, ToggleButton } from "@mui/material";

export default function index() {
  return (
    <div className="">
      <div className="h-[10em] relative ">
        <Image src="/images/cover.jpg" objectFit="cover" layout="fill" />
      </div>

      <div className="w-full bg-white relative -top-5 rounded-t-3xl">
        <div className="absolute -top-16 left-[50%] -translate-x-2/4">
          <div className="w-[9em] h-[9em] m-auto relative">
            <Image
              src="/images/person-img.png"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>

        <div className="text-xl pt-20 font-bold  text-center">Ahmet Sahin</div>
        <div className="text-center text-md text-gray-500">
          this is my personal <br /> website
        </div>

        <div className="relative flex gap-8 mt-2 w-max m-auto">
          <ButtonBase sx={{ borderRadius: "50%" }}>
            <div className="rounded-full flex items-center justify-center border-2 border-blue-300 p-3 w-max ">
              <CallRoundedIcon className="fill-blue-300" />
            </div>
          </ButtonBase>
          <ButtonBase sx={{ borderRadius: "50%" }}>
            <div className="rounded-full flex items-center justify-center border-2 border-blue-300 p-3 w-max ">
              <TelegramIcon className="fill-blue-300" />
            </div>
          </ButtonBase>
          <ButtonBase sx={{ borderRadius: "50%" }}>
            <div className="rounded-full flex items-center justify-center border-2 border-blue-300 p-3 w-max ">
              <InstagramIcon className="fill-blue-300" />
            </div>
          </ButtonBase>
          <ButtonBase sx={{ borderRadius: "50%" }}>
            <div className="rounded-full flex items-center justify-center border-2 border-blue-300 p-3 w-max ">
              <FacebookRoundedIcon className="fill-blue-300" />
            </div>
          </ButtonBase>
        </div>

        <div className="line my-[.5em] mx-auto w-3/6 h-1 rounded-full bg-blue-300" />

        <div className="flex h-52 mx-5 insta-bg rounded-xl py-2 text-white px-3">
          <div className="left flex flex-col">
            <div className="text-2xl font-bold">Study</div>
            <div className="">
              I study anesthesia techniques at Al-Kitab University in Kirkuk. My
              section is related to anesthesia of patients in the operating room
              in hospitals
            </div>

            <button
              className="w-max rounded-xl py-1 px-2 
            bg-gradient-to-r from-purple-500 to-pink-500
            "
            >
              see my university
            </button>
          </div>

          <div className="w-max bg-red-600 m-auto relative">
            <img className="w-[30em]" src="/images/person-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
