import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "/turath", label: "التراث" },
  { href: "/hadarat", label: "الحضارات" },
  { href: "/hiwar", label: "حوار الحضارات" },
  { href: "/al-aab", label: "فضاء الألعاب" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 flex flex-col items-center">
        {/* SECTION LOGO : Placé tout en haut et parfaitement centré */}
        <div className="flex flex-col items-center text-center max-w-xl mb-12">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/ner.png"
              alt="إفريقية Logo"
              width={140}
              height={55}
              className="h-50 w-50 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-sm leading-relaxed text-primary-foreground/80">
            المرجع الرقمي للهوية التونسية وحوار الحضارات. منصّة ثقافية تجمع بين
            عراقة التراث وروح العصر.
          </p>
        </div>

        {/* Ligne de séparation optionnelle pour un rendu plus propre */}
        <div className="w-full border-t border-primary-foreground/10 my-2" />

        {/* SECTION CONTENU : Les deux autres colonnes de liens réparties en dessous */}
        <div className="grid w-full grid-cols-1 gap-10 pt-8 sm:grid-cols-2 text-center">
          {/* Liens de navigation */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold">
              استكشف
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* À propos */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gold">
              عن المنصّة
            </h4>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
              الهوية التونسية هي مزيجٌ غني من التاريخ العريق والثقافات المتنوعة،
              تجمع بين الأصالة والانفتاح، وتعكس قيم التسامح والإبداع والانتماء.
              وتمثل التراث والعادات واللغة والفنون التي تُميز تونس وتربط أجيالها
              بماضيها وحاضرها.
            </p>
          </div>
        </div>
      </div>

      {/* Bas du footer (Droits d'auteur) */}
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-primary-foreground/70 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} إفريقية — جميع الحقوق محفوظة.</p>
          <p>صُنع بشغف للهوية التونسية</p>
        </div>
      </div>
    </footer>
  );
}
