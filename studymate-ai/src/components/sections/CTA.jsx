import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to Learn Smarter?
        </h2>

        <p className="mt-8 text-xl leading-8 text-blue-100">
          Join thousands of students preparing for WAEC,
          NECO, JAMB and university exams using AI.
        </p>

        <Link
          to="/login"
          className="mt-10 inline-block rounded-2xl bg-white px-10 py-5 text-lg font-bold text-blue-700 shadow-lg transition hover:scale-105"
        >
          Start Learning Free
        </Link>

      </div>
    </section>
  );
};

export default CTA;