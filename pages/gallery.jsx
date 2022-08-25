import Image from "next/image";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

export default function Gallery() {
  const [SelectedImage, setSelectedImage] = useState(0);

  return (
    <AnimateSharedLayout type="crossfade">
      <div className="h-full overflow-y-scroll">
        <div className="text-center z-20 left-[50%] fixed top-0 left-[50%] translate-x-[-50%] w-full bg-white shadow-xl text-2xl font-bold py-3">
          My Gallery
        </div>
        <div className="grid grid-cols-2 my-[4.5em] auto-rows-[13em] gap-4 p-3">
          {[
            "/images/gallery-1.jpg",
            "/images/gallery-2.jpg",
            "/images/gallery-3.jpg",
            "/images/gallery-4.jpg",
          ].map((img, index) => (
            <motion.div
              key={img + index}
              layoutId={"gallery-image" + img}
              className="rounded-xl relative shadow-lg overflow-hidden"
              onClick={() => {
                setSelectedImage(img);
              }}
            >
              <Image
                src={img}
                layout="fill"
                objectFit="cover"
                alt={"gallery image : " + img}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center">
        {SelectedImage && (
          <>
            <motion.div
              layoutId={"gallery-image" + SelectedImage}
              className="w-[90vw] z-50 h-[90vh] shadow-xl rounded-xl overflow-hidden absolute top-5 left-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute z-20 top-4 right-4">
                <IconButton onClick={() => setSelectedImage(0)} color="inherit">
                  <CloseRoundedIcon />
                </IconButton>
              </div>

              <div className="relative w-full h-full">
                <Image
                  src={SelectedImage}
                  alt={"gallery image : " + SelectedImage}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{
                opacity: [0, 1],
                scale: [0, 1],
              }}
              exit={{
                opacity: 0,
                scale: 0,
              }}
              onClick={() => setSelectedImage(0)}
              className="bg-black/50 w-full h-full absolute top-0 left-0 z-40"
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
