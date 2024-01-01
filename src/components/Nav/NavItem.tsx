import cn from "classnames";

interface NavItemProps {
  children: React.ReactNode;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, className }) => {
  return (
    <div
      className={cn([
        "text-sm sm:text-lg h-full font-light hover:font-normal uppercase transition-all",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default NavItem;
