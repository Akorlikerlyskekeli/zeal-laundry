"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { posts } from "../data";
import { Clock, User, ArrowLeft, Tag } from "lucide-react";
import YouTubeEmbed from "../../components/YouTubeEmbed";
import { WhatsAppIcon } from "../../components/SocialIcons";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = posts.find((p) => p.id === slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 md:h-96 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto w-full px-6 pb-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/blog"
                className="flex items-center gap-2 text-blue-300 
                hover:text-white text-sm mb-4 transition-colors"
              >
                <ArrowLeft size={16} /> Back to Blog
              </Link>
              <span
                className="bg-blue-500 text-white text-xs font-bold 
              px-3 py-1 rounded-full mb-3 inline-block"
              >
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {post.title}
              </h1>
              <div
                className="flex items-center gap-4 mt-4 text-blue-300 
              text-sm flex-wrap"
              >
                <span className="flex items-center gap-1">
                  <User size={14} /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {post.readTime}
                </span>
                <span>{post.date}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 bg-white rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <p
              className="text-gray-500 text-lg italic border-l-4 
            border-blue-700 pl-4 mb-8 leading-relaxed"
            >
              {post.excerpt}
            </p>
            {/* Excerpt Quote */}
            <p
              className="text-gray-500 text-lg italic border-l-4 
              border-blue-700 pl-4 mb-8 leading-relaxed"
            >
              {post.excerpt}
            </p>

            {/* ✅ YouTube Video — shows only if post has a videoId */}
            {post.videoId && (
              <div className="mb-8">
                <h3
                  className="text-lg font-bold text-gray-800 mb-3 
              flex items-center gap-2"
                >
                  <span
                    className="bg-red-600 text-white text-xs 
                 font-bold px-2 py-1 rounded"
                  >
                    ▶ VIDEO
                  </span>
                  Watch: {post.title}
                </h3>
                <YouTubeEmbed videoId={post.videoId} title={post.title} />
              </div>
            )}

            {/* Article content continues below... */}

            <div className="prose prose-blue max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (
                  paragraph.trim().startsWith("**") &&
                  paragraph.trim().endsWith("**")
                ) {
                  return (
                    <h3
                      key={i}
                      className="text-xl font-bold text-gray-800 
                    mt-6 mb-3"
                    >
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (paragraph.trim().startsWith("- ")) {
                  const items = paragraph
                    .trim()
                    .split("\n")
                    .filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 
                        text-gray-600"
                        >
                          <span
                            className="text-blue-600 font-bold 
                          mt-1 shrink-0"
                          >
                            ✓
                          </span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item
                                .replace("- ", "")
                                .replace(
                                  /\*\*(.*?)\*\*/g,
                                  "<strong>$1</strong>",
                                ),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-gray-600 leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{
                      __html: paragraph.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>",
                      ),
                    }}
                  />
                );
              })}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag size={16} className="text-gray-400" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-700 
                  text-xs font-semibold px-3 py-1 rounded-full 
                  border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA inside post */}
            <div
              className="mt-10 bg-blue-700 rounded-2xl p-6 
            text-white text-center"
            >
              <p className="font-bold text-xl mb-2">
                Need Professional Laundry Help?
              </p>
              <p className="text-blue-200 text-sm mb-4">
                Book a pick-up with Zeal Laundry in Koforidua today!
              </p>
              <a
                href="https://wa.me/233XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-400 
                text-white font-bold py-3 rounded-full transition-colors
                flex items-center justify-center gap-2"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:w-72 space-y-6">
            {/* Recent Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 text-lg mb-4">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {posts
                  .filter((p) => p.id !== post.id)
                  .slice(0, 4)
                  .map((p) => (
                    <Link key={p.id} href={`/blog/${p.id}`}>
                      <div
                        className="flex gap-3 group cursor-pointer 
                    hover:bg-blue-50 rounded-xl p-2 transition-colors"
                      >
                        <div
                          className="relative w-14 h-14 rounded-xl 
                      overflow-hidden shrink-0"
                        >
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p
                            className="text-gray-700 text-sm font-semibold 
                        leading-snug group-hover:text-blue-700 
                        transition-colors line-clamp-2"
                          >
                            {p.title}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">{p.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link
                href="/blog"
                className="mt-4 block text-center text-blue-700 
                font-semibold text-sm hover:underline"
              >
                View All Posts →
              </Link>
            </div>

            {/* Book CTA */}
            <div
              className="bg-blue-700 rounded-2xl p-6 text-white 
            text-center"
            >
              <div className="text-4xl mb-3">🧺</div>
              <h3 className="font-bold text-lg mb-2">Book a Pick-Up</h3>
              <p className="text-blue-200 text-sm mb-4">
                Koforidua's most trusted laundry service.
              </p>
              <a
                href="tel:+233XXXXXXXXX"
                className="block bg-white text-blue-700 font-bold 
                py-3 rounded-full hover:bg-blue-50 transition-colors mb-2"
              >
                📞 Call Us
              </a>
              <a
                href="https://wa.me/233XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-400 
                text-white font-bold py-3 rounded-full transition-colors
                flex items-center justify-center gap-2"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="max-w-6xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/blog/${p.id}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl overflow-hidden 
                    shadow-sm hover:shadow-lg transition-shadow flex 
                    gap-4 p-4 cursor-pointer"
                  >
                    <div
                      className="relative w-24 h-24 rounded-xl 
                    overflow-hidden shrink-0"
                    >
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-600">
                        {p.category}
                      </span>
                      <h3
                        className="font-bold text-gray-800 text-sm 
                      mt-1 leading-snug"
                      >
                        {p.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-2">{p.date}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
