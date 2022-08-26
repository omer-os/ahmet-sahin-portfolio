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
  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setValue(0);
        break;
      case "/gallery":
        setValue(1);
        break;
      case "/my-music":
        setValue(2);
        break;

      default:
        break;
    }
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full">
      <BottomNavigation value={value}>
        {[
          {
            link: "/",
            label: "About Me",
            icon: <HomeRoundedIcon color={value === 0 ? "primary" : ""} />,
          },
          {
            link: "/gallery",
            label: "My Gallery",
            icon: <ImageRoundedIcon color={value === 1 ? "primary" : ""} />,
          },
          {
            link: "/my-music",
            label: "My Music",
            icon: (
              <HeadphonesRoundedIcon color={value === 2 ? "primary" : ""} />
            ),
          },
        ].map((item, index) => (
          <Link href={item.link} key={"link : " + item.label}>
            <a>
              <BottomNavigationAction
                label={item.label}
                icon={item.icon}
                onClick={() => setValue(index)}
              />
            </a>
          </Link>
        ))}
      </BottomNavigation>
    </div>
  );
}
