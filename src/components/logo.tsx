import { cn } from "@/lib/utils";
import { BioMyDreamLogoIcon } from "./icons/biomydream-logo-icon";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <BioMyDreamLogoIcon className="h-8 w-8 text-primary" />
      <span className="font-headline text-xl font-bold">BioMyDream</span>
    </div>
  );
}
