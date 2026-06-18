import Image from 'next/image'

export function PageHero({
  tag,
  title,
  subtitle,
  img,
  alt,
}: {
  tag: string
  title: string
  subtitle: string
  img: string
  alt: string
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={img || '/placeholder.svg'} alt={alt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/65 to-primary/40" />
      </div>
      <div className="relative mx-auto flex min-h-[48vh] max-w-7xl flex-col justify-center px-4 py-20 md:px-8">
        <span className="inline-flex w-fit items-center rounded-full border border-gold/50 bg-background/10 px-4 py-1.5 text-sm font-bold text-gold backdrop-blur-sm">
          {tag}
        </span>
        <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-primary-foreground text-balance md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
