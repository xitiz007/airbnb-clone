import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from "react-date-range";
import { useState } from 'react';
import { useRouter } from 'next/router';

function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState('');
    const [guestNumber, setGuestNumber] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const router = useRouter();

    const resetSearchInput = () => {
      setSearchInput('');
    }

    const selectionRange = {
          startDate,
          endDate,
          key: "selection",
    };

    const dateChangeHandler = (ranges) =>
    {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const onSearchHandler = () => {
      router.push({
        pathname: '/search',
        query: {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          guests: guestNumber
        }
      });
    }

    return (
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5">
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className="relative flex items-center h-10 cursor-pointer my-auto"
        >
          <Image
            src="https://links.papareact.com/qd3"
            objectFit="contain"
            layout="fill"
            objectPosition="left"
          />
        </div>

        {/* middle */}
        <div className="flex items-center md:border-2 rounded-full md:shadow-md py-2">
          <input
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            className="pl-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-text-gray-400"
            type="text"
            placeholder={placeholder || "Start your search"}
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white cursor-pointer p-2 md:mx-2" />
        </div>

        {/* right */}
        <div className="flex items-center space-x-4 text-gray-500 justify-end">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />
          <div className="flex items-center border-2 p-2 rounded-full space-x-2">
            <MenuIcon className="h-6 cursor-pointer" />
            <UserCircleIcon className="h-6 cursor-pointer" />
          </div>
        </div>

        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto mt-2">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={dateChangeHandler}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                min={1}
                value={guestNumber}
                onChange={(event) => setGuestNumber(event.target.value)}
                type="number"
                className="w-12 pl-2 text-lg outline-none text-red-400"
              />
            </div>
            <div className="flex">
              <button
                onClick={resetSearchInput}
                className="flex-grow text-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={onSearchHandler}
                className="flex-grow text-red-400"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </header>
    );
}

export default Header