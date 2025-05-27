import Image from "next/image";
import ReactSVG from "@/public/react.svg";
import MenuBurger from "@/public/menu-burger.svg";
import Link from "next/link";
import {ModeToggle} from "@/components/toggle-menu";

export function Header() {
  return (
    <header className="w-full py-4">
      <nav className="px-10 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href='/'>
            <Image
              src={ReactSVG}
              alt={"react svg"}
              height={50}
              width={50}
              className="cursor-pointer animate-spin"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-primary font-medium hover:underline hover:underline-offset-4 transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/about"
            className="text-primary font-medium hover:underline hover:underline-offset-4 transition-colors"
          >
            À propos de moi
          </Link>
          <Link
            href="/projets"
            className="text-primary font-medium hover:underline hover:underline-offset-4 transition-colors"
          >
            Mes projets
          </Link>
          <Link
            href="/competences"
            className="text-primary font-medium hover:underline hover:underline-offset-4 transition-colors"
          >
            Mes compétences
          </Link>
        </div>

        <div className="flex justify-center items-center gap-2">
          <Link
            href="/contact"
            className="bg-primary font-bold text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors"
          >
            Contacter moi
          </Link>
          <ModeToggle />
        </div>

        <button className="md:hidden">
          <Image src={MenuBurger} alt={"menu burger"} height={30} width={30}/>
        </button>
      </nav>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 hidden">
          <Link
            href="/"
            className="block text-primary hover:text-blue-600 transition-colors py-2"
          >
            Accueil
          </Link>
          <Link
            href="/about"
            className="block text-primary hover:text-blue-600 transition-colors py-2"
          >
            À propos de moi
          </Link>
          <Link
            href="/projets"
            className="block text-primary hover:text-blue-600 transition-colors py-2"
          >
            Mes projets
          </Link>
          <Link
            href="/competences"
            className="block text-primary hover:text-blue-600 transition-colors py-2"
          >
            Mes compétences
          </Link>
        </div>
      </div>
    </header>
  );
}
