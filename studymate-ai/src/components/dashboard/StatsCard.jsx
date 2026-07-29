const StatsCard = () => {

  return (

    <div className="grid grid-cols-3 gap-6">

      <div className="rounded-2xl bg-white p-6 shadow">

        <h3 className="text-gray-500">

          Study Streak

        </h3>

        <h2 className="mt-2 text-3xl font-bold">

          🔥 7 Days

        </h2>

      </div>

      <div className="rounded-2xl bg-white p-6 shadow">

        <h3 className="text-gray-500">

          Quiz Score

        </h3>

        <h2 className="mt-2 text-3xl font-bold">

          82%

        </h2>

      </div>

      <div className="rounded-2xl bg-white p-6 shadow">

        <h3 className="text-gray-500">

          Questions Asked

        </h3>

        <h2 className="mt-2 text-3xl font-bold">

          124

        </h2>

      </div>

    </div>

  );

};

export default StatsCard;