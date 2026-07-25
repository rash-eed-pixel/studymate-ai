// -----------------------------------------------------------------------------
// Component: FeatureCard
// Description:
// Reusable feature card for StudyMate AI.
// -----------------------------------------------------------------------------

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="
        group
        h-full
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-3
        hover:border-blue-200
        hover:shadow-2xl
      "
    >
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-blue-100
          text-3xl
          text-blue-600
          transition-all
          group-hover:bg-blue-600
          group-hover:text-white
        "
      >
        <Icon />
      </div>

      <h3 className="mb-4 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;