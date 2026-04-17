import { AnimatePresence } from "framer-motion";

import { useContact } from "@/hooks/useContact";
import { useTheme } from "@/hooks/useTheme";
import { useAnimation } from "@/hooks/useAnimation";

import MainHomeView from "@/components/MainHomeView";
import MessageInputView from "@/components/MessageInputView";
import ThemeToggle from "@/components/ThemeToggle";

const MainPage = () => {
  const { start, shake } = useAnimation();
  const { dark, toggleTheme } = useTheme();
  const {
    isMessaging,
    setIsMessaging,
    message,
    setMessage,
    handleCall,
    handleSendMessage,
  } = useContact();

  return (
    <div className="flex flex-col h-screen items-center justify-center p-2 relative overflow-hidden">
      <div className="h-10 w-full flex justify-start p-1.5 shrink-0">
        <ThemeToggle dark={dark} toggleTheme={toggleTheme} />
      </div>

    <div className="flex-1 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!isMessaging ? (
          <MainHomeView
            start={start}
            shake={shake}
            onCall={handleCall}
            onShowMessage={() => setIsMessaging(true)}
          />
        ) : (
          <MessageInputView
            message={message}
            setMessage={setMessage}
            onBack={() => setIsMessaging(false)}
            onSend={handleSendMessage}
          />
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};

export default MainPage;
