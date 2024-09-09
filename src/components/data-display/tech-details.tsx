"use client";

import { TechDetails } from "@/lib/types";
import Typography from "@/components/general/typography";
import spaceGrotesk from "../general/space-grotesk-font";

const TechDetail = ({ label, progress }: TechDetails) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full h-[80px] flex-row gap-10 pt-3 pb-3 pl-7 pr-7 rounded-lg ">
        <div className="w-full flex justify-between items-center">
          <Typography
            className={`${spaceGrotesk.className} sm:text-xs color-black-900`}
            variant="body1"
          >
            {label}
          </Typography>
          <span className="text-sm float-right">{progress}%</span>
        </div>
        <div className="pt-2">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-green-500 rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechDetail;
