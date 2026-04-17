import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import ContactButtons from "@/components/ContactButtons";
import CasperDongGuImage from "@/assets/casper-donggu-default.png";

import { framerFadeUp } from "@/constants/animations";

interface MainHomeViewProps {
  start: boolean;
  shake: boolean;
  onCall: () => void;
  onShowMessage: () => void;
}

const MainHomeView = ({
  start,
  shake,
  onCall,
  onShowMessage,
}: MainHomeViewProps) => {
  return (
    <motion.div
      key="main"
      {...framerFadeUp}
      className="flex flex-col items-center gap-4 text-center"
    >
      <h2>차주에게 연락이 필요하신가요?</h2>
      <p className="text-sm text-muted-foreground">
        원하는 방법을 선택해주시면 <br /> 바로 차주와 연락이 가능합니다.
      </p>

      <div
        className={cn(
          "transition-transform duration-6000 ease-linear",
          start
            ? "translate-x-0 translate-y-0 scale-100"
            : "translate-x-160 -translate-y-140 scale-10",
        )}
      >
        <img
          src={CasperDongGuImage}
          className={cn("w-70 h-70", shake ? "translate-y-px" : "")}
          alt="Car Owner"
        />
      </div>

      <ContactButtons onCall={onCall} onMessage={onShowMessage} />
    </motion.div>
  );
};

export default MainHomeView;
