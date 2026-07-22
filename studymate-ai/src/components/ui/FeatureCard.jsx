const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
      <div className="mb-5 text-5xl text-blue-600">
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;