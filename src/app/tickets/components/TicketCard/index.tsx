import Button from "@/app/components/common/Button";
import Typography from "@/app/components/common/Typography";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import TicketDivider from "@/icons/TicketDivider";
import FlightInfo from "@/app/components/FlightInfo";
import { Leg } from "@/services/tickets-service/types";
import { formatMinutes, formatTime } from "@/app/utils/date";

interface TicketCardProps {
  legs: Leg[];
  price: number
  currency?: string;
  status?: string
  bg?: string;
  color?: string;
  onBuyClick?: () => void;
  onClick: () => void;
  rootClassName?: string;
  withPrice?: boolean;
}

const TicketCard: React.FC<TicketCardProps> = ({
  currency = "$",
  bg,
  color,
  onBuyClick,
  onClick,
  rootClassName,
  withPrice = false,
  legs,
  price,
  status
}) => {
  const isTablet = useMediaQuery("md");

  return (
    <div
      className={cn(
        "bg-white rounded-[10px] flex items-center cursor-pointer w-full",
        rootClassName
      )}
      onClick={onClick}
    >
      <div className="w-full flex flex-col gap-[15px]">
        {legs.map(({ description, segments, elapsed_time }, idx) => (
          <FlightInfo
            key={idx}
            fromCity={segments[0].departure.city}
            toCity={segments[segments.length - 1].arrival.city}
            fromTime={formatTime(segments[0].departure.time)}
            toTime={formatTime(segments[segments.length - 1].arrival.time)}
            fromAirport={description.departure_location}
            toAirport={description.arrival_location}
            travelTime={formatMinutes(elapsed_time)}
            fromDate={description.departure_date}
            toDate={description.departure_date}
            stops=""
            className="px-[20px]"
          />
        ))}
      </div>

      <div className="flex ml-auto">
        {withPrice && (
          <>
            {isTablet && (
              <div className="bg-surfaces">
                <TicketDivider />
              </div>
            )}
            {isTablet && (
              <div className="flex items-center justify-end w-[145px] p-[20px]">
                <div className="flex flex-col gap-[10px] items-center justify-stretch w-full">
                  {status && (
                    <div
                      className={`px-[10px] py-[3px] rounded-[8px] flex items-center justify-center w-full`}
                      style={{ background: bg, color: color }}
                    >
                      <Typography variant="S" className="block w-full">{status}</Typography>
                    </div>
                  )}
                  <Typography
                    variant="XXL"
                    semibold
                    className="block"
                  >
                    {`${price}${currency}`}
                  </Typography>
                  <Link
                    href="/user-contacts"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full max-w-[150px]"
                  >
                    <Button className="bg-primary px-[20px] py-[6px] rounded-[8px] w-full flex justify-center items-center">
                      <Image
                        src="./icons/shopping-cart.svg"
                        width={20}
                        height={20}
                        alt="buy"
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TicketCard;
