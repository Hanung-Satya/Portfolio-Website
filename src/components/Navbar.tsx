interface Props {
  navList : string[]
}

export default function Navbar(props : Props) {
  const { navList } = props;

  function handleScroll (id : string) {
    const element = document.getElementById(id.toLowerCase())

    if (element) {
      element.scrollIntoView({
        behavior : 'smooth',
      })
    }
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div
        className="
          bg-black/30 backdrop-blur-sm
          border border-white/10
          rounded-2xl
          shadow-lg shadow-black/20
        "
      >
        <div className="px-6 py-4 flex items-center justify-between">
          
          <h1 className="text-white font-semibold font-poppins text-lg">
            Portfolio
          </h1>

          <ul className="hidden md:flex items-center gap-8 text-white/80">
            {navList.map((navItem, index) => (
              <li key={index} className="hover:text-white transition cursor-pointer" onClick={() => handleScroll(navItem)}>{navItem}</li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
}
