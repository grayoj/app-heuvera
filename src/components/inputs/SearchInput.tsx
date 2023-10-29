import { useSearchParams } from "next/navigation";
import { BiSearch } from "react-icons/bi";

export const SearchInput = () => {
  const params = useSearchParams();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  return (
    <div
      className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-1
        rounded-full 
        shadow-sm 
        transition 
        cursor-pointer
      "
    >
      <div
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <div
          className="
            hidden 
            sm:block 
            text-sm 
            px-6 
            flex-1 
            text-center
          "
        >
          Location
        </div>

        <div
          className="
            text-sm 
            pl-6 
            pr-2 
            flex 
            flex-row 
            border-l-[1px]
            items-center 
            gap-3
          "
        >
          <div className="hidden sm:block">Property</div>
          <div
            className="
              p-2 
              bg-[#8000FF] 
              rounded-full 
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};
