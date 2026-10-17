import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/sections/PageHero'
import { CTABanner } from '@/components/sections/CTABanner'
import { blogPosts } from '@/lib/content/blog'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | iSteel Engineering Blog`,
    description: post.excerpt,
  }
}

function splitTitle(title: string) {
  const [head, ...tail] = title.split(':')
  if (tail.length) return { bold: head.trim(), light: tail.join(':').trim() }
  return { bold: title, light: undefined }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug)
  const prev = blogPosts[currentIndex - 1]
  const next = blogPosts[currentIndex + 1]
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const paragraphs = post.body.split('\n').filter(Boolean)
  const { bold, light } = splitTitle(post.title)

  return (
    <>
      <PageHero
        eyebrow={post.category}
        bold={bold}
        light={light}
        boldFirst
        size="h1"
        image={post.coverImage}
        imageAlt={post.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/blog' },
          { label: post.category },
        ]}
      >
        <p className="flex items-center gap-2 text-sm text-white/60 font-heading">
          <Clock size={14} className="text-accent" />
          {post.readTime} min read ·{' '}
          {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </PageHero>

      <section className="section-py">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14 lg:gap-20">
            <article className="max-w-[720px]">
              <p className="font-heading text-[clamp(1.2rem,2vw,1.5rem)] font-light leading-snug text-ink mb-10 pl-6 border-l-[3px] border-accent">
                {post.excerpt}
              </p>
              <div className="space-y-5 text-copy text-[17px] leading-[1.8]">
                {paragraphs.map((para, i) => {
                  if (para.startsWith('## ')) {
                    return (
                      <h2 key={i} className="font-heading text-2xl sm:text-3xl font-bold text-ink !mt-14 mb-2 first:!mt-0">
                        {para.replace('## ', '')}
                        <span className="text-accent">.</span>
                      </h2>
                    )
                  }
                  if (para.startsWith('### ')) {
                    return (
                      <h3 key={i} className="font-heading text-xl font-semibold text-ink !mt-10">
                        {para.replace('### ', '')}
                      </h3>
                    )
                  }
                  if (para.startsWith('- ')) {
                    const match = para.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/)
                    return (
                      <div key={i} className="flex items-start gap-3 pl-1">
                        <span className="w-2 h-2 rounded-full bg-accent mt-[0.7em] shrink-0" />
                        <p>
                          {match ? (
                            <>
                              <strong className="text-ink font-semibold">{match[1]}:</strong> {match[2]}
                            </>
                          ) : (
                            para.replace('- ', '')
                          )}
                        </p>
                      </div>
                    )
                  }
                  return <p key={i}>{para}</p>
                })}
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-14 pt-8 border-t border-ink/10">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3.5 py-1.5 text-xs font-heading text-copy bg-white rounded-full shadow-card">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-10">
                {prev ? (
                  <Link href={`/blog/${prev.slug}`} className="group rounded-[22px] bg-white p-5 shadow-card">
                    <span className="flex items-center gap-1.5 text-[10px] font-heading uppercase tracking-[0.2em] text-copy">
                      <ArrowLeft size={12} /> Previous
                    </span>
                    <span className="mt-2 block text-sm font-heading font-semibold text-ink group-hover:text-accent-2 leading-snug">
                      {prev.title}
                    </span>
                  </Link>
                ) : (
                  <span />
                )}
                {next && (
                  <Link href={`/blog/${next.slug}`} className="group rounded-[22px] bg-white p-5 shadow-card text-right">
                    <span className="flex items-center justify-end gap-1.5 text-[10px] font-heading uppercase tracking-[0.2em] text-copy">
                      Next <ArrowRight size={12} />
                    </span>
                    <span className="mt-2 block text-sm font-heading font-semibold text-ink group-hover:text-accent-2 leading-snug">
                      {next.title}
                    </span>
                  </Link>
                )}
              </div>
            </article>

            <aside className="flex flex-col gap-4 lg:sticky lg:top-28 self-start">
              <div className="rounded-[28px] bg-ink text-white p-7">
                <h3 className="h-mix text-h2">
                  Have a <strong>project?</strong>
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  Talk to our engineering team about your structural steel or civil requirement.
                </p>
                <div className="mt-6">
                  <Button href="/contact" arrow>
                    Get a quote
                  </Button>
                </div>
              </div>
              {related.length > 0 && (
                <div className="rounded-[28px] bg-white p-7 shadow-card">
                  <h3 className="font-heading font-semibold text-ink mb-2">Keep reading</h3>
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex gap-3 py-4 border-b border-ink/10 last:border-0">
                      <span className="flex-1">
                        <span className="block text-[10px] font-heading uppercase tracking-[0.18em] text-accent">{r.category}</span>
                        <span className="mt-1 block text-sm text-ink leading-snug group-hover:text-accent-2 transition-colors">{r.title}</span>
                      </span>
                      <ArrowUpRight size={15} className="text-ink/30 group-hover:text-accent group-hover:rotate-45 transition-all shrink-0 mt-4" />
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
