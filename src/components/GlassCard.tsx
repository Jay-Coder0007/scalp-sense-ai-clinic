
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "bg-white/40 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl animate-fade-in",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
