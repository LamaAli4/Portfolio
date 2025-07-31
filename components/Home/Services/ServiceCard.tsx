import Image from "next/image";

type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ icon, name, description }: Props) => {
  return (
    <div className="text-center group">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center">
          <Image
            src={icon}
            alt={`${name} icon`}
            width={64}
            height={64}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-blue-400">
        {name}
      </h3>

      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
