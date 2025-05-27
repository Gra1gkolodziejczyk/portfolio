import Image from "next/image";
import ReactSVG from "@/public/react.svg";
import MenuBurger from "@/public/menu-burger.svg";
import Link from "next/link";
import { ModeToggle } from "@/components/toggle-menu";

export function Header() {
  return (
    <header className="fixed z-50 w-full h-[80px] bg-background/80">
      <div className="container h-full mx-auto px-4">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <Link href='/'>
              <Image
                src={ReactSVG}
                alt={"react svg"}
                height={50}
                width={50}
                className="cursor-pointer animate-spin hover:animate-none"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-primary font-medium hover:underline hover:underline-offset-4 transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="#about"
              className="text-primary font-medium hover:underline hover:underline-offset-4 transition-colors"
            >
              À propos de moi
            </Link>
            <Link
              href="#projets"
              className="text-primary font-medium hover:underline hover:underline-offset-4 transition-colors"
            >
              Mes projets
            </Link>
            <Link
              href="#competences"
              className="text-primary font-medium hover:underline hover:underline-offset-4 transition-colors"
            >
              Mes compétences
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden md:inline-flex px-6 py-3 text-sm font-medium text-white transition-colors bg-primary rounded-md hover:bg-primary/90"
            >
              Me contacter
            </Link>
            <ModeToggle />
            <button className="md:hidden">
              <Image
                src={MenuBurger}
                alt={"menu burger"}
                height={30}
                width={30}
                className="text-foreground"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <nav className="absolute w-full px-4 py-3 bg-background border-b hidden">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-primary hover:text-primary/80 transition-colors py-2"
            >
              Accueil
            </Link>
            <Link
              href="#about"
              className="text-primary hover:text-primary/80 transition-colors py-2"
            >
              À propos de moi
            </Link>
            <Link
              href="#projets"
              className="text-primary hover:text-primary/80 transition-colors py-2"
            >
              Mes projets
            </Link>
            <Link
              href="#competences"
              className="text-primary hover:text-primary/80 transition-colors py-2"
            >
              Mes compétences
            </Link>
            <Link
              href="#contact"
              className="text-primary hover:text-primary/80 transition-colors py-2"
            >
              Me contacter
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
