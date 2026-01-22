import { IconMenu, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
  navList : string[]
}

export default function Navbar(props : Props) {
  const { navList } = props;
  const [open, setOpen] = useState(false);

  function handleScroll (id : string) {
    const element = document.getElementById(id.toLowerCase())

    if (element) {
      element.scrollIntoView({
        behavior : 'smooth',
      });
      setOpen(false);
    }
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">

        {/* TOP BAR */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between">
          <h1 className="text-white font-semibold font-poppins text-base sm:text-lg">
            Portfolio
          </h1>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-8 text-white/80">
            {navList.map((item, index) => (
              <li
                key={index}
                onClick={() => handleScroll(item)}
                className="cursor-pointer hover:text-white transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <ul className="flex flex-col px-6 py-4 gap-4 text-white/80">
                {navList.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    onClick={() => handleScroll(item)}
                    className="cursor-pointer hover:text-white transition"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}
