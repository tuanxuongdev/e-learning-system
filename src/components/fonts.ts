import { Manrope, Roboto } from "next/font/google";
import localFont from "next/font/local";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const dm_sans = localFont({
  src: [
    { path: "file", weight: "400", style: "italic" },
    { path: "file", weight: "700", style: "italic" },
    { path: "file", weight: "500" },
  ],
  display: "swap",
});

export { manrope, roboto, dm_sans };
