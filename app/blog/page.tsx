"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { posts, categories } from "./data";
import { Clock, User, Tag } from "lucide-react";
import { WhatsAppIcon } from "../components/SocialIcons";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter((post) => {
    const matchCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const featuredPost = posts[0];
  const recentPosts = posts.slice(0, 4);
  const allTags = [...new Set(posts.flatMap((p) => p.tags))];

  return (
    <div>
      {/* Hero */}
      <section
        className="bg-gradient-to-br from-blue-700 to-blue-900 
      text-white py-20 px-6 text-center"
      >
        <AnimateOnScroll direction="down">
          <span
            className="text-blue-200 font-semibold text-sm uppercase 
          tracking-widest"
          >
            Our Blog
          </span>
          <h1 className="text-5xl font-bold mt-3 mb-4">Laundry Tips & News</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Expert laundry advice, fabric care guides and tips from the Zeal
            Laundry team in Koforidua.
          </p>
          <div
            className="flex items-center justify-center gap-2 mt-6 
          text-blue-300 text-sm"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>→</span>
            <span className="text-white">Blog</span>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Featured Post */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll direction="up">
            <Link href={`/blog/${featuredPost.id}`}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative rounded-3xl overflow-hidden shadow-xl 
                group cursor-pointer"
              >
                <div className="relative h-80 md:h-96 w-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="100vw"
                    className="object-cover group-hover:scale-105 
                    transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t 
                  from-blue-900 via-blue-900/40 to-transparent"
                  ></div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 p-8 
                text-white"
                >
                  <span
                    className="bg-blue-500 text-white text-xs 
                  font-bold px-3 py-1 rounded-full mb-3 inline-block"
                  >
                    ⭐ Featured Post
                  </span>
                  <h2 className="text-3xl font-bold mb-2 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-blue-200 text-sm mb-4 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                  <div
                    className="flex items-center gap-4 text-blue-300 
                  text-sm"
                  >
                    <span className="flex items-center gap-1">
                      <User size={14} /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {featuredPost.readTime}
                    </span>
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left — Posts Grid */}
          <div className="flex-1">
            {/* Search */}
            <AnimateOnScroll direction="left">
              <input
                type="text"
                placeholder="🔍 Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-200 rounded-full 
                px-6 py-3 mb-6 focus:outline-none focus:border-blue-500 
                bg-white shadow-sm"
              />
            </AnimateOnScroll>

            {/* Category Filter */}
            <AnimateOnScroll direction="left" delay={0.1}>
              <div className="flex gap-2 flex-wrap mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold 
                    transition-all ${
                      activeCategory === cat
                        ? "bg-blue-700 text-white shadow"
                        : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Posts */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p className="text-5xl mb-4">🔍</p>
                <p className="text-xl font-semibold">No posts found</p>
                <p className="text-sm mt-2">
                  Try a different search or category
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((post, index) => (
                  <AnimateOnScroll
                    key={post.id}
                    direction="up"
                    delay={index * 0.1}
                  >
                    <Link href={`/blog/${post.id}`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="bg-white rounded-2xl overflow-hidden 
                        shadow-sm hover:shadow-lg transition-shadow 
                        cursor-pointer h-full flex flex-col"
                      >
                        {/* Image */}
                        <div className="relative h-48 w-full">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                          />
                          <div className="absolute top-3 left-3 flex gap-2">
                            <span
                              className="bg-blue-700 text-white 
                                text-xs font-bold px-3 py-1 rounded-full"
                            >
                              {post.category}
                            </span>
                            {/* ✅ Show YouTube badge if post has video */}
                            {post.videoId && (
                              <span
                                className="bg-red-600 text-white 
                                text-xs font-bold px-3 py-1 rounded-full
                                flex items-center gap-1"
                              >
                                ▶ Video
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                          <div
                            className="flex items-center gap-3 
                          text-gray-400 text-xs mb-3"
                          >
                            <span className="flex items-center gap-1">
                              <User size={12} /> {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} /> {post.readTime}
                            </span>
                          </div>
                          <h3
                            className="font-bold text-gray-800 text-lg 
                          mb-2 leading-snug"
                          >
                            {post.title}
                          </h3>
                          <p
                            className="text-gray-500 text-sm leading-relaxed 
                          flex-1"
                          >
                            {post.excerpt.slice(0, 100)}...
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-gray-400 text-xs">
                              {post.date}
                            </span>
                            <span
                              className="text-blue-700 font-semibold 
                            text-sm hover:underline"
                            >
                              Read More →
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </AnimateOnScroll>
                ))}
              </div>
            )}
          </div>

          {/* Right — Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Book CTA */}
            <AnimateOnScroll direction="right">
              <div
                className="bg-blue-700 rounded-2xl p-6 text-white 
              text-center"
              >
                <div className="text-4xl mb-3">🧺</div>
                <h3 className="font-bold text-lg mb-2">Ready to Book?</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Get your laundry picked up today in Koforidua.
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
            </AnimateOnScroll>

            {/* Recent Posts */}
            <AnimateOnScroll direction="right" delay={0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 text-lg mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                      <div
                        className="flex gap-3 group cursor-pointer 
                      hover:bg-blue-50 rounded-xl p-2 transition-colors"
                      >
                        <div
                          className="relative w-16 h-16 rounded-xl 
                        overflow-hidden shrink-0"
                        >
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p
                            className="text-gray-700 text-sm font-semibold 
                          leading-snug group-hover:text-blue-700 
                          transition-colors line-clamp-2"
                          >
                            {post.title}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            {post.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Categories */}
            <AnimateOnScroll direction="right" delay={0.2}>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 text-lg mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories
                    .filter((c) => c !== "All")
                    .map((cat) => {
                      const count = posts.filter(
                        (p) => p.category === cat,
                      ).length;
                      return (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className="w-full flex items-center justify-between 
                        py-2 px-3 rounded-xl hover:bg-blue-50 
                        transition-colors text-left group"
                        >
                          <span
                            className="text-gray-600 text-sm 
                        group-hover:text-blue-700"
                          >
                            → {cat}
                          </span>
                          <span
                            className="bg-blue-100 text-blue-700 
                        text-xs font-bold px-2 py-0.5 rounded-full"
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Tags */}
            <AnimateOnScroll direction="right" delay={0.3}>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3
                  className="font-bold text-gray-800 text-lg mb-4 
                flex items-center gap-2"
                >
                  <Tag size={18} /> Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-blue-700 text-xs 
                      font-semibold px-3 py-1 rounded-full border 
                      border-blue-100 hover:bg-blue-700 hover:text-white 
                      transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
