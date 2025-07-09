type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type SidebarToolsProps = {
  title: string;
  items: NavItem[];
  activePath?: string;
};

const SidebarTools: React.FC<SidebarToolsProps> = ({ title, items, activePath }) => {
  return (
    <aside className="w-64 bg-white shadow-sm border-r">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <nav className="space-y-2">
          {items?.map((item, index) => {
            // const isActive = item.href === activePath;

            // isActive with index 0 only for presentation
            const isActive = index == 0;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-background-dark text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default SidebarTools;
