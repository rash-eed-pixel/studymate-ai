// -----------------------------------------------------------------------------
// Component: SectionTitle
// Description:
// Reusable heading component used across all landing page sections.
// -----------------------------------------------------------------------------

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-8 text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;