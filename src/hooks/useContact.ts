import { useState } from "react";

export const useContact = () => {
  const [isMessaging, setIsMessaging] = useState(false);
  const [message, setMessage] = useState("");

  const getPhone = () => {
    const encoded = import.meta.env.VITE_ENCODED_PHONE;
    return encoded ? atob(encoded) : null;
  };

  const handleCall = () => {
    const phone = getPhone();
    if (phone) window.location.href = `tel:${phone}`;
  };

  const handleSendMessage = (customMessage?: string) => {
    const targetMessage = customMessage || message;
    const phone = getPhone();
    if (!targetMessage.trim() || !phone) return;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    window.location.href = `sms:${phone}${isIOS ? "&" : "?"}body=${encodeURIComponent(targetMessage)}`;
  };

  return {
    isMessaging,
    setIsMessaging,
    message,
    setMessage,
    handleCall,
    handleSendMessage,
  };
};
