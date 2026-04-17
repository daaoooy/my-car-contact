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
    <div className="flex flex-col h-screen items-center justify-center overflow-hidden p-6 relative">
      <ThemeToggle dark={dark} toggleTheme={toggleTheme} />

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
  );
};

export default MainPage;
