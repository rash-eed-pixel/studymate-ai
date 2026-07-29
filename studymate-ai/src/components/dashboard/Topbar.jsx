import { useAuth } from "../../context/AuthContext";

const Topbar = () => {

  const { user } = useAuth();

  return (

    <div className="flex items-center justify-between border-b bg-white p-6">

      <input
        placeholder="Search..."
        className="w-96 rounded-xl border p-3"
      />

      <div className="font-semibold">

        {user?.email}

      </div>

    </div>

  );

};

export default Topbar;