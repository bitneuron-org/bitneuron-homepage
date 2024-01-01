import cn from "classnames";
import { ReactComponent as IconArrowRight } from "icons/icon-arrow-right.svg";

const BtnWebApp: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <button
      className={cn(["uppercase leading-none px-4 py-3 border border-white rounded", className])}
    >
      GET STARTED
      <IconArrowRight className="inline-block ml-2" />
    </button>
  );
};

export default BtnWebApp;
