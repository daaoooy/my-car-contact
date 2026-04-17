import { Button } from "@/components/shadcn/button";
import { Phone, Mail } from "lucide-react";

const ContactButtons = () => {
  const encoded = import.meta.env.VITE_ENCODED_PHONE;

  const handleCall = () => {
    if (encoded) {
      const decoded = atob(encoded);
      window.location.href = `tel:${decoded}`;
    } else {
      console.error("전화번호 환경변수 없음");
    }
  };

  const handleSMS = () => {
    if (!encoded) {
      console.error("전화번호 환경변수 없음");
      return;
    }

    const phone = atob(encoded);
    const message = "주차 관련으로 연락드립니다.";

    const androidSms = `sms:${phone}?body=${encodeURIComponent(message)}`;
    const iosSms = `sms:${phone}&body=${encodeURIComponent(message)}`;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    window.location.href = isIOS ? iosSms : androidSms;
  };

  return (
    <div className="flex flex-col w-72 gap-1 mt-4">
      <Button className="w-full" onClick={handleCall}>
        <Phone /> 전화로 할래요
      </Button>
      <Button className="w-full" onClick={handleSMS}>
        <Mail />
        메세지로 할래요
      </Button>
      <Button className="w-full">카톡으로 할래요</Button>
    </div>
  );
};

export default ContactButtons;
