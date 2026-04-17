import { motion } from "framer-motion";
import { ArrowLeft, Send } from "lucide-react";

import { Button } from "@/components/shadcn/button";
import { Textarea } from "@/components/shadcn/textarea";
import { ButtonGroup } from "@/components/shadcn/button-group";

import { framerSlideIn } from "@/constants/animations";
import { QUICK_MESSAGES } from "@/constants/contacts";

interface MessageInputViewProps {
  message: string;
  setMessage: (msg: string) => void;
  onBack: () => void;
  onSend: (customMsg?: string) => void;
}

const MessageInputView = ({
  message,
  setMessage,
  onBack,
  onSend,
}: MessageInputViewProps) => {
  return (
    <motion.div
      key="message"
      {...framerSlideIn}
      className="w-full max-w-xs flex flex-col gap-4"
    >
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft />
        </Button>
        <h3>메시지 작성</h3>
      </div>

      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="원하는 메세지를 입력해주세요."
        className="min-h-38"
        autoFocus
      />

      <Button
        onClick={() => onSend()}
        disabled={!message.trim()}
        className="w-full gap-2 py-5"
      >
        <Send size={16} /> 보내기
      </Button>

      <div className="flex flex-col gap-2 items-center mt-10">
        <p className="text-xs text-gray-400">작성 없이 기본 메세지 보내기</p>
        <ButtonGroup>
          {QUICK_MESSAGES.map((msg) => (
            <Button key={msg.label} onClick={() => onSend(msg.text)}>
              {msg.label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </motion.div>
  );
};

export default MessageInputView;
