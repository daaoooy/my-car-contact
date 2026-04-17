import { motion } from "framer-motion";
import { ArrowLeft, Send } from "lucide-react";

import { Button } from "@/components/shadcn/button";
import { Textarea } from "@/components/shadcn/textarea";
import { Card, CardContent, CardHeader } from "@/components/shadcn/card";

import { framerSlideIn } from "@/constants/animations";
import { QUICK_MESSAGES } from "@/constants/contacts";
import { Separator } from "./shadcn/separator";

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
      className="w-full flex flex-col gap-5 relative"
    >
      <div className="flex items-center justify-start gap-3 px-3">
        <Button
          variant="outline"
          onClick={onBack}
          className="rounded-full border-gray-200 text-muted-foreground shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>

        <div className="flex flex-col">
          <h3>메시지로 연락하기</h3>
          <p className="text-xs text-muted-foreground">
            작성한 메시지는 바로 전달됩니다
          </p>
        </div>
      </div>

      <Card className="border-muted/50 shadow-sm">
        <CardHeader className="pb-1">
          <p className="text-xs text-muted-foreground">메시지를 입력하세요</p>
        </CardHeader>

        <CardContent>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="ex. 안녕하세요, 주차 때문에.."
            className="border-none h-40 resize-none transition placeholder:text-sm"
          />

          <Button
            onClick={() => onSend()}
            disabled={!message.trim()}
            className="w-full gap-2 mt-4 py-5 bg-[#23201e] dark:bg-[#fff9e9]"
          >
            <Send className="w-4 h-4" />
            보내기
          </Button>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-3 mt-6">
        <div className="flex flex-row gap-3 h-full items-center px-2">
          <Separator className="flex-1 bg-chart-1" />
          <p className="flex-1 text-xs text-center text-muted-foreground whitespace-nowrap">
            또는 작성 없이 빠른 메시지 선택
          </p>
          <Separator className="flex-1 bg-chart-1" />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {QUICK_MESSAGES.map((msg) => (
            <Button
              key={msg.label}
              variant="outline"
              onClick={() => onSend(msg.text)}
              className="rounded-full border-chart-2 text-xs"
            >
              {msg.label}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MessageInputView;
