import type { Route } from "./+types/blog";
import { useState } from "react";
import { Calendar, User, Clock, BookOpen } from "lucide-react";
import classNames from "classnames";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { blogPosts, blogCategories } from "~/data/blog";
import styles from "./blog.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Knowledge Center - Farming Tips & Guides | AVNIGOLD Seeds" },
    {
      name: "description",
      content:
        "Expert farming advice, seed management tips, and agricultural insights. Learn best practices for maximizing crop yields, organic farming, and sustainable agriculture.",
    },
    {
      name: "keywords",
      content: "farming tips, seed management, organic farming guide, crop yield optimization, agricultural best practices, soil preparation",
    },
    { property: "og:title", content: "Agricultural Knowledge Center - Expert Farming Tips" },
    {
      property: "og:description",
      content: "Expert insights and practical guides for successful farming and crop management.",
    },
    { property: "og:type", content: "website" },
    { name: "robots", content: "index, follow" },
  ];
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <BookOpen className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>Knowledge Center</h1>
            <p className={styles.heroText}>
              Expert insights, farming tips, and agricultural best practices to help you succeed
            </p>
          </div>
          <div className={styles.heroDecoration}></div>
        </section>

        <section className={styles.blogSection}>
          <div className={styles.filterTabs}>
            {blogCategories.map((category) => (
              <button
                key={category}
                className={classNames(styles.tab, {
                  [styles.activeTab]: selectedCategory === category,
                })}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.postsGrid}>
            {filteredPosts.map((post, index) => (
              <article key={post.id} className={styles.postCard} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={styles.postImageWrapper}>
                  <img src={post.imageUrl} alt={post.title} />
                  <div className={styles.postCategory}>{post.category}</div>
                </div>
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.metaItem}>
                      <Calendar className={styles.metaIcon} />
                      {new Date(post.publishDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className={styles.metaItem}>
                      <Clock className={styles.metaIcon} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postFooter}>
                    <div className={styles.author}>
                      <User className={styles.authorIcon} />
                      <span>{post.author}</span>
                    </div>
                    <button className={styles.readMore}>Read Article →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
