import Link from "next/link";
import React from "react";
import { NavLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";

type props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* Enhanced overlay with backdrop blur */}
      <div
        className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-[100002] 
        bg-black/60 backdrop-blur-sm w-full h-screen`}
        onClick={closeNav}
      ></div>

      {/* Enhanced navigation panel */}
      <div
        className={`${navOpen} fixed flex flex-col h-full transform transition-all
        duration-500 delay-150 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[35%] z-[100050] right-0
        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
        shadow-2xl border-l border-slate-700/50`}
      >
        {/* Header section with close button */}
        <div className="relative p-6 border-b border-slate-700/30">
          <div className="flex items-center justify-end">
            {/* <h2
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 
            bg-clip-text text-transparent"
            >
              Navigation
            </h2> */}
            <button
              onClick={closeNav}
              className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 
              transition-colors duration-200 group"
            >
              <CgClose
                className="w-6 h-6 text-slate-300 group-hover:text-white 
              transition-colors duration-200"
              />
            </button>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 px-6 py-8">
          <ul className="space-y-2">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  onClick={closeNav}
                  className="group block"
                >
                  <div
                    className="relative p-4 rounded-xl transition-all duration-300
                  hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10
                  hover:shadow-lg hover:shadow-cyan-500/10 border border-transparent
                  hover:border-cyan-500/20"
                  >
                    <span
                      className="text-lg font-medium text-slate-200 
                    group-hover:text-white transition-colors duration-300
                    relative z-10"
                    >
                      {link.label}
                    </span>

                    {/* Animated underline under text only */}
                    <span className="relative inline-block">
                      <span
                        className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r 
                        from-cyan-400 to-blue-400 rounded-full transform 
                        transition-all duration-300 group-hover:w-full origin-left"
                      ></span>
                    </span>

                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r 
                    from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300"
                    ></div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer decoration */}
        <div className="p-6 border-t border-slate-700/30">
          <div className="flex justify-center">
            <div
              className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 
            rounded-full opacity-50"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
