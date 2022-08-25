import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import { ButtonBase, ToggleButton } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function index() {
  return (
    <div>
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
        className="h-[10em] relative "
      >
        <Image src="/images/cover.jpg" objectFit="cover" layout="fill" />
      </motion.div>

      <motion.div
        animate={{
          top: [0, -22],
          opacity: [0, 1],
        }}
        className="w-full bg-white relative  rounded-t-3xl"
      >
        <div className="absolute -top-16 left-[50%] -translate-x-2/4">
          <div className="w-[9em] h-[9em] m-auto relative">
            <Image
              src="/images/person-img.png"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>

        <div className="text-xl pt-20 font-bold  text-center">Ahmet Şahin</div>
        <div className="text-center text-sm text-gray-500">
          this is my personal <br /> website
        </div>

        <div className="relative flex gap-8 mt-2 w-max m-auto">
          {[
            {
              link: "tel:+9647737205456",
              icon: <CallRoundedIcon className="fill-blue-400" />,
            },
            {
              link: "https://web.telegram.org/z/#928839577",
              icon: <TelegramIcon className="fill-blue-400" />,
            },
            {
              link: "https://www.instagram.com/ahmet_sahin8/",
              icon: <InstagramIcon className="fill-blue-400" />,
            },
            {
              link: "https://facebook.com/ahmet.tezeli.7",
              icon: <FacebookRoundedIcon className="fill-blue-400" />,
            },
          ].map((item, index) => (
            <motion.div
              key={"icon " + index}
              className="relative"
              animate={{
                top: [20, 0],
                opacity: [0, 1],
              }}
              transition={{
                delay: index * 0.3 + 1,
              }}
            >
              <Link href={item.link}>
                <a>
                  <ButtonBase sx={{ borderRadius: "50%" }}>
                    <div className="rounded-full active:bg-blue-600 transition-all bg-white flex items-center justify-center border-2 border-blue-400 p-3 w-max">
                      {item.icon}
                    </div>
                  </ButtonBase>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="line my-[1em] mx-auto w-3/6 h-1 rounded-full bg-blue-400" />

        <motion.div
          animate={{
            paddingLeft: ["40em", "1em"],
            opacity: [0, 1],
          }}
          transition={{
            delay: 0.5,
          }}
          className="card-container flex  overflow-x-scroll gap-3 pl-10 snap-x"
        >
          <div className="min-w-[24em] snap-center flex text-sm h-max  insta-bg rounded-xl p-4 text-white relative">
            <div className="gap-2 max-w-[16.1em] flex flex-col">
              <div className="text-2xl font-bold">Study</div>
              <div>
                I study anesthesia techniques at Al-Kitab University in Kirkuk.
                My section is related to anesthesia of patients in the operating
                room in hospitals
              </div>

              <button
                className="w-max rounded py-1 px-2 
            bg-gradient-to-r from-purple-500 to-pink-500
            "
              >
                see my university
              </button>
            </div>

            <div className="absolute bottom-0 -right-9">
              <img
                className="w-[13em] object-contain h-[14em]"
                src="/images/person-2.png"
                alt=""
              />
            </div>
          </div>
          <div className="min-w-[24em] snap-center flex text-sm h-max  insta-bg rounded-xl p-4 text-white relative">
            <div className="gap-2 max-w-[16.1em] flex flex-col">
              <div className="text-2xl font-bold">Study</div>
              <div className="">
                I study anesthesia techniques at Al-Kitab University in Kirkuk.
                My section is related to anesthesia of patients in the operating
                room in hospitals
              </div>

              <button
                className="w-max rounded py-1 px-2 
            bg-gradient-to-r from-purple-500 to-pink-500
            "
              >
                see my university
              </button>
            </div>

            <div className="absolute bottom-0 -right-9">
              <img
                className="w-[12em] object-contain h-[13em]"
                src="/images/person-2.png"
                alt=""
              />
            </div>
          </div>
          <div className="min-w-[24em] snap-center flex text-sm h-max  insta-bg rounded-xl p-4 text-white relative">
            <div className="gap-2 max-w-[16.1em] flex flex-col">
              <div className="text-2xl font-bold">Study</div>
              <div className="">
                I study anesthesia techniques at Al-Kitab University in Kirkuk.
                My section is related to anesthesia of patients in the operating
                room in hospitals
              </div>

              <button
                className="w-max rounded py-1 px-2 
            bg-gradient-to-r from-purple-500 to-pink-500
            "
              >
                see my university
              </button>
            </div>

            <div className="absolute bottom-0 -right-9">
              <img
                className="w-[12em] object-contain h-[13em]"
                src="/images/person-2.png"
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
