import { Button } from "@/components/shadcn/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

interface ContactButtonsProps {
  onCall: () => void;
  onMessage: () => void;
  onKakao?: () => void;
}

const ContactButtons = ({
  onCall,
  onMessage,
  onKakao,
}: ContactButtonsProps) => {
  return (
    <div className="flex flex-col w-72 gap-2 mt-4">
      <Button className="w-full gap-2 shadow-sm" onClick={onCall}>
        <Phone size={18} /> 전화로 할래요
      </Button>

      <Button className="w-full gap-2 shadow-sm" onClick={onMessage}>
        <Mail size={18} /> 메시지로 할래요
      </Button>

      <Button className="w-full gap-2 shadow-sm" onClick={onKakao}>
        <MessageCircle size={18} /> 카톡으로 할래요
      </Button>
    </div>
  );
};

export default ContactButtons;
