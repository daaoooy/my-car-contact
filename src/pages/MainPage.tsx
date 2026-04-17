import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import CasperDongGuImage from "@/assets/casper-donggu-default.png";
import { Button } from "@/components/shadcn/button";
import ContactButtons from "@/components/feature/ContactButtons";

const MainPage = () => {
  const [start, setStart] = useState(false);
  const [shake, setShake] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 80);
    }, 140);

    return () => clearInterval(interval);
  }, [start]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center overflow-hidden">
      <Button
        onClick={toggleTheme}
        className="absolute top-2 right-2 transition-all duration-300"
      >
        {dark ? <Sun /> : <Moon />}
      </Button>

      <h2>차주에게 연락이 필요하신가요?</h2>

      <p className="text-sm">
        원하는 방법을 선택해주시면 <br /> 바로 차주와 연락이 가능합니다.
      </p>

      <div
        className={cn(
          "transition-all duration-7000 ease-linear",
          start
            ? "translate-x-0 translate-y-0 scale-100"
            : "translate-x-160 -translate-y-140 scale-10",
        )}
      >
        <img
          src={CasperDongGuImage}
          className={cn("w-70 h-70 scale-100", shake ? "translate-y-px" : "")}
        />
      </div>
      <ContactButtons />
    </div>
  );
};

export default MainPage;
