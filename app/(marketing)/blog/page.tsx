import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/motion/Reveal'
import { CTABanner } from '@/components/sections/CTABanner'
import { SteelIcon } from '@/components/ui/SteelIcon'
import { blogPosts } from '@/lib/content/blog'

export const metadata: Metadata = {
  title: 'Engineering Insights | iSteel Blog',
  description:
    'Technical guides, project insights, and industry news from iSteel Engineering — Qatar\'s leading structural steel and civil main contractor.',
}

const categories = Array.from(new Set(blogPosts.map((p) => p.category)))

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      {/* Dark hero header */}
      <div className="relative pt-[120px] pb-24 overflow-hidden">
        <Image
          src="/assets/envato/Metal Textures 3.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(4,9,30,0.96) 0%, rgba(10,21,71,0.92) 100%)' }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
          <SteelIcon name="048-grid" size={360} color="white" />
        </div>

        <Container className="relative z-10">
          <Reveal>
            <Eyebrow className="mb-4">Engineering insights</Eyebrow>
            <h1 className="text-h1 font-heading text-paper max-w-2xl">
              Technical guides from Qatar's steel experts
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-body text-mute mt-6 max-w-xl">
              Practical knowledge on structural steel, civil construction, safety compliance, and
              project delivery — written by engineers, for engineers and project owners.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* White blog section */}
      <div className="bg-white py-16 lg:py-24">
        <Container>
          {/* Featured post */}
          {featured && (
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 p-8 rounded-2xl border border-[#E0E8F5] bg-[#F8FAFF] hover:border-[#D4A020]/30 hover:shadow-[0_8px_40px_-12px_rgba(10,21,71,0.12)] transition-all duration-300"
              >
                <div className="relative aspect-[16/9] lg:aspect-auto rounded-xl overflow-hidden bg-[#F0F4FA]">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04091E]/40 to-transparent" />
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-widest text-[#D4A020] bg-[#D4A020]/10 border border-[#D4A020]/30 rounded-full">
                      Featured
                    </span>
                    <span className="text-xs text-[#8090B0]">{featured.category}</span>
                  </div>
                  <h2 className="text-h2 font-heading text-[#04091E] group-hover:text-[#D4A020] transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="text-[#3A4A60] leading-relaxed">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-[#8090B0]">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {featured.readTime} min read
                    </span>
                    <span>{new Date(featured.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#D4A020] font-heading font-medium group-hover:gap-3 transition-all duration-200">
                    Read article <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Category eyebrow */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 mb-10">
              <span className="text-xs text-[#8090B0] uppercase tracking-widest font-heading font-medium mr-2">Categories:</span>
              {categories.map((cat) => (
                <span key={cat} className="px-3 py-1 text-xs text-[#6080A0] bg-[#F0F4FA] border border-[#E0E8F5] rounded-full">
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-[#E0E8F5] overflow-hidden hover:border-[#D4A020]/30 hover:-translate-y-1 hover:shadow-[0_8px_32px_-8px_rgba(10,21,71,0.12)] transition-all duration-300 bg-white"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#F0F4FA]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04091E]/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 text-[10px] font-heading font-semibold uppercase tracking-widest text-[#D4A020] bg-[#04091E]/80 border border-[#D4A020]/30 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-5 flex-1">
                    <h2 className="text-h3 font-heading text-[#04091E] group-hover:text-[#D4A020] transition-colors duration-200 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#3A4A60] leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-[#E0E8F5]">
                      <div className="flex items-center gap-3 text-xs text-[#8090B0]">
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime} min
                        </span>
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
                      </div>
                      <ArrowRight size={14} className="text-[#D4A020] group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      <CTABanner />
    </>
  )
}
