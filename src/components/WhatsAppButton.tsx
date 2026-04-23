import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/config/site";

interface WhatsAppButtonProps {
  message?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "whatsapp" | "outline";
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-sertao-deep shadow-warm",
  whatsapp: "bg-whatsapp text-whatsapp-foreground hover:opacity-90",
  outline: "bg-transparent border-2 border-current text-primary-foreground hover:bg-primary-foreground/10",
};

const sizeClasses: Record<NonNullable<WhatsAppButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm rounded-full gap-2",
  md: "px-6 py-3 text-base rounded-full gap-2",
  lg: "px-8 py-4 text-lg rounded-full gap-3",
};

const WhatsAppButton = ({
  message,
  children = "Falar no WhatsApp",
  className,
  variant = "whatsapp",
  size = "md",
}: WhatsAppButtonProps) => {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      <MessageCircle className="w-5 h-5" aria-hidden />
      <span>{children}</span>
    </a>
  );
};

export default WhatsAppButton;