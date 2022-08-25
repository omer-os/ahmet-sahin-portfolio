import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useEffect, useState } from "react";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Bottom() {
  const [value, setValue] = useState(0);
  const router = useRouter()


  
  

  return (
    <div className="fixed bottom-0 left-0 w-full">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="About Me"
          icon={
            <Link href="/">
              <a>
                <HomeRoundedIcon />
              </a>
            </Link>
          }
        />

        <BottomNavigationAction
          label="Gallery"
          icon={
            <Link href="/gallery">
              <a>
                <ImageRoundedIcon />
              </a>
            </Link>
          }
        />

        <BottomNavigationAction
          label="my music"
          icon={
            <Link href="/my-music">
              <a>
                <HeadphonesRoundedIcon />
              </a>
            </Link>
          }
        />
      </BottomNavigation>
    </div>
  );
}
