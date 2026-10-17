import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/motion/Reveal'
import { PageHero } from '@/components/sections/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
import { blogPosts } from '@/lib/content/blog'

export const metadata: Metadata = {
  title: 'Engineering Insights | iSteel Blog',
  description:
    'Technical guides, project insights, and industry news from iSteel Engineering — Qatar\'s structural steel and civil main contractor.',
}

const fmtDate = (d: string, long = false) =>
  new Date(d).toLocaleDateString('en-GB', long ? { day: 'numeric', month: 'long', year: 'numeric' } : { month: 'short', year: 'numeric' })

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHero
        eyebrow="Engineering insights"
        light="Notes from"
        bold="The workshop"
        description="Practical knowledge on structural steel, civil construction, safety and project delivery — written by engineers, for engineers and project owners."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Insights' }]}
      />

      <section className="section-py">
        <Container>
          {featured && (
            <Reveal>
              <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] rounded-[32px] bg-white overflow-hidden shadow-card mb-6">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[440px] overflow-hidden bg-steel">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
                  />
                  <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-accent text-ink text-[10px] font-heading font-bold uppercase tracking-[0.16em]">
                    Featured
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-eyebrow">{featured.category}</span>
                  <h2 className="mt-4 font-heading text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold leading-tight text-ink">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-copy leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="flex items-center gap-3 text-xs text-copy font-heading">
                      <Clock size={13} /> {featured.readTime} min read · {fmtDate(featured.publishedAt, true)}
                    </span>
                    <span className="w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center group-hover:bg-accent group-hover:text-ink transition-colors duration-300">
                      <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full rounded-[28px] bg-white overflow-hidden shadow-card">
                  <div className="relative aspect-[16/10] overflow-hidden bg-steel">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-7">
                    <span className="text-eyebrow">{post.category}</span>
                    <h2 className="mt-3 font-heading text-lg font-bold leading-snug text-ink group-hover:text-accent-2 transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-copy leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                    <div className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between text-xs text-copy font-heading">
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} /> {post.readTime} min · {fmtDate(post.publishedAt)}
                      </span>
                      <ArrowUpRight size={16} className="text-accent group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
