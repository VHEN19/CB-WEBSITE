import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ServiceCard = ({
  service,
  isActive,
  onClick,
  activeRef,
  index,
}) => {
  return (
    <motion.article
      ref={isActive ? activeRef : null}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`
        service-card
        relative cursor-pointer rounded-2xl bg-white shadow-md
        p-6 transition-all duration-300
        ${isActive ? "ring-2 ring-blue-600 shadow-xl" : "hover:shadow-lg"}
      `}
      onClick={() => onClick(service.id)}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick(service.id);
        }
      }}
    >
      <div className="service-card__image mb-4 overflow-hidden rounded-xl">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-40 w-full object-cover"
        />
      </div>

      <h3 className="service-card__title mb-2 text-lg font-semibold text-gray-900">
        {service.title}
      </h3>

      <p className="service-card__description text-sm leading-relaxed text-gray-600">
        {service.description}
      </p>
    </motion.article>
  );
};

export default ServiceCard;
