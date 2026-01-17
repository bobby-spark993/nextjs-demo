import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-grey-900 text-shadow-white-300">
        <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Support
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 flex justify-between items-center">
            <p className="text-sm">&copy; Brand Inc. All rights reserved.</p>
            <div className="flex space-x-6">
              {/* Social Icons would go here */}
              <span className="text-sm">Follow us</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
