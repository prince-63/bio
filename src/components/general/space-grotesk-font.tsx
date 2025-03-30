import { PT_Sans, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


const pt_sans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt-sans",
});

export default pt_sans;
