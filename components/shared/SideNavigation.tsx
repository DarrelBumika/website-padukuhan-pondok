

interface SideNavigationProps {
  navItems: {
    id: string;
    label: string;
  }[];
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const SideNavigation = (
  {
    navItems,
    activeSection,
    scrollToSection
  }: SideNavigationProps
) => {

  return (
    <aside className="w-64 shrink-0 sticky top-24 self-start">
      <nav className="bg-primary-2 rounded-xl shadow-lg border border-gray-11 overflow-hidden">
        <ul className="px-2 py-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-5 py-3 text-regular-4 transition-all duration-300 cursor-pointer text-primary-11 rounded-lg
                  ${activeSection === item.id
                    ? "bg-darker-5 text-primary-1 font-semibold"
                    : "hover:bg-gray-11 hover:text-primary-2"
                  }
                `}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
};

export default SideNavigation;
