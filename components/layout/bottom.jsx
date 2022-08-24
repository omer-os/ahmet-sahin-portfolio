import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";

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
        <BottomNavigationAction label="About" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction label="Gallery" icon={<ImageRoundedIcon />} />
        <BottomNavigationAction
          label="my music"
          icon={<HeadphonesRoundedIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
