"use client"

import Typography from "@/app/components/common/Typography";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";
import { useState } from "react";
import { AdditionalService } from "@/app/hooks/useOrder";

interface ServiceItemProps {
  label: string;
  description: string;
  services: ServiceCardProps[];
  onClick: (service: AdditionalService) => void
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  label,
  description,
  services,
  onClick
}) => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="flex md:justify-between md:items-center flex-col md:flex-row gap-[20px]">
      <div className="flex flex-col gap-[10px]">
        <Typography semibold>{label}</Typography>
        <Typography className="text-secondaryText">{description}</Typography>
      </div>

      <div className="flex gap-[20px]">
        {services.map((props, idx) => (
          <ServiceCard
            {...props}
            key={idx}
            onClick={() => {
              setSelectedService(idx)
              onClick({ description: props.description, price: props.price})
            }}
            active={selectedService === idx}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceItem;
