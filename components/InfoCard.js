import Image from 'next/image';
import {HeartIcon} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import "react-date-range/dist/styles.css";
function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) {
  return <div className="flex hover:opacity-80 cursor-pointer px-2 py-7 pr-4 border-b first:border-t hover:shadow-lg transition duration-200 ease-out">
      <div className="relative w-40 h-24 md:h-52 md:w-80 flex-shrink-0">
          <Image className="rounded-2xl" src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
          <div className="flex justify-between">
            <p>{location}</p>
            <HeartIcon className="h-7 cursor-pointer" />
          </div>
          <h4 className="text-xl">{title}</h4>
          <div className="border-b w-10 pt-2"></div>
          <div className="pt-2 text-sm text-gray-500 flex-grow">
              {description}
          </div>
          <div className="flex justify-between items-end">
              <div className="flex items-center">
                  <StarIcon className="h-5 text-red-400"/>
                  {star}
              </div>
              <div>
                  <p className="text-lg lg:text-2xl font-semibold pb-2">
                      {price}
                  </p>
                  <p className="text-right font-extralight">
                      {total}
                  </p>
              </div>
          </div>
      </div>

  </div>;
}

export default InfoCard;
