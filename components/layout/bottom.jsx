import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useEffect, useState } from "react";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";
import Link from "@mui/material";

export default function Bottom() {
  const [value, setValue] = useState(0);

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
          icon={<HomeRoundedIcon />}
          component={Link}
          href="/"
        />

        <BottomNavigationAction
          label="Gallery"
          icon={<ImageRoundedIcon />}
          component={Link}
          href="/gallery"
        />

        <BottomNavigationAction
          label="my music"
          icon={<HeadphonesRoundedIcon />}
          component={Link}
          href="/my-music"
        />
      </BottomNavigation>
    </div>
  );
}
