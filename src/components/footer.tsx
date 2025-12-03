import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Logo />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BioMyDream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
