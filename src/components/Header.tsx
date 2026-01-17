import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600">Corosal</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 fle">
            <Link
              href="/"
              className="text-green-700  hover:text-amber-600 font-medium"
            ></Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              About
            </Link>
            <Link
              href="/signup"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Login
            </Link>
          </nav>

          {/* Action Button */}
          <div className="flex items-center  ">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
