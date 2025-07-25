import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <h1 className="text-4xl font-bold mb-4">Landing Page</h1>
      <Link to="/register">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Go to Register
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;