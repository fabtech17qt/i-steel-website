import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { Button } from '@/components/ui/Button'
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

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug)
  const prev = blogPosts[currentIndex - 1]
  const next = blogPosts[currentIndex + 1]
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  const paragraphs = post.body.split('\n').filter(Boolean)

  return (
    <>
      {/* Dark hero */}
      <div className="relative pt-[120px] pb-16 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(4,9,30,0.85) 0%, rgba(4,9,30,0.97) 100%)' }}
        />

        <Container className="relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-mute hover:text-paper transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={14} />
            All articles
          </Link>
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-widest text-[#D4A020] bg-[#D4A020]/10 border border-[#D4A020]/30 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-mute">
                <Clock size={11} />
                {post.readTime} min read
              </span>
            </div>
            <h1 className="text-h1 font-heading text-paper max-w-3xl mb-4">{post.title}</h1>
            <p className="text-mute text-sm">
              {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </Reveal>
        </Container>
      </div>

      {/* White article body */}
      <div className="bg-white py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Article content */}
            <article className="prose prose-lg max-w-none">
              <div className="space-y-5 text-[#3A4A60] leading-relaxed">
                {paragraphs.map((para, i) => {
                  if (para.startsWith('## ')) {
                    return (
                      <h2 key={i} className="text-h2 font-heading text-[#04091E] mt-10 mb-4 first:mt-0">
                        {para.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (para.startsWith('### ')) {
                    return (
                      <h3 key={i} className="text-h3 font-heading text-[#04091E] mt-8 mb-3">
                        {para.replace('### ', '')}
                      </h3>
                    )
                  }
                  if (para.startsWith('- **')) {
                    const match = para.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/)
                    if (match) {
                      return (
                        <div key={i} className="flex items-start gap-3 pl-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A020] mt-2.5 shrink-0" />
                          <p><strong className="text-[#04091E] font-heading">{match[1]}:</strong> {match[2]}</p>
                        </div>
                      )
                    }
                  }
                  if (para.startsWith('- ')) {
                    return (
                      <div key={i} className="flex items-start gap-3 pl-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A020] mt-2.5 shrink-0" />
                        <p>{para.replace('- ', '')}</p>
                      </div>
                    )
                  }
                  return <p key={i}>{para}</p>
                })}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-[#E0E8F5]">
                <Tag size={14} className="text-[#8090B0]" />
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs text-[#6080A0] bg-[#F0F4FA] border border-[#E0E8F5] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Prev/Next */}
              <div className="flex justify-between gap-4 mt-10 pt-8 border-t border-[#E0E8F5]">
                {prev ? (
                  <Link href={`/blog/${prev.slug}`} className="flex flex-col gap-1 group max-w-[240px]">
                    <span className="text-xs text-[#8090B0] flex items-center gap-1">
                      <ArrowLeft size={12} /> Previous
                    </span>
                    <span className="text-sm text-[#04091E] group-hover:text-[#D4A020] transition-colors duration-200 leading-snug">
                      {prev.title}
                    </span>
                  </Link>
                ) : <div />}
                {next && (
                  <Link href={`/blog/${next.slug}`} className="flex flex-col items-end gap-1 group max-w-[240px] text-right">
                    <span className="text-xs text-[#8090B0] flex items-center gap-1">
                      Next <ArrowRight size={12} />
                    </span>
                    <span className="text-sm text-[#04091E] group-hover:text-[#D4A020] transition-colors duration-200 leading-snug">
                      {next.title}
                    </span>
                  </Link>
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              {/* CTA card */}
              <div className="bg-[#0A1547] rounded-xl p-6">
                <h3 className="text-h3 font-heading text-white mb-3">Have a project in mind?</h3>
                <p className="text-sm text-[#7080BC] mb-5 leading-relaxed">
                  Talk to our engineering team about your structural steel or civil construction requirement.
                </p>
                <Button
                  href="/contact"
                  className="w-full justify-center bg-[#D4A020] text-[#04091E] hover:bg-[#F0C840] font-semibold"
                >
                  Get a Quote
                </Button>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div className="bg-[#F8FAFF] border border-[#E0E8F5] rounded-xl p-5">
                  <h3 className="text-sm font-heading font-semibold text-[#04091E] uppercase tracking-widest mb-4">Related articles</h3>
                  <div className="flex flex-col gap-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex flex-col gap-1">
                        <span className="text-[10px] text-[#D4A020] uppercase tracking-widest font-heading">{r.category}</span>
                        <span className="text-sm text-[#3A4A60] group-hover:text-[#D4A020] transition-colors duration-200 leading-snug">
                          {r.title}
                        </span>
                        <span className="text-xs text-[#8090B0] flex items-center gap-1">
                          <Clock size={10} /> {r.readTime} min
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </div>

      <CTABanner />
    </>
  )
}
