import type { Route } from "./+types/contact";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { Button } from "~/components/ui/button/button";
import { Input } from "~/components/ui/input/input";
import { Textarea } from "~/components/ui/textarea/textarea";
import { Label } from "~/components/ui/label/label";
import styles from "./contact.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - Get in Touch | AVNIGOLD Seeds" },
    {
      name: "description",
      content:
        "Contact AVNIGOLD SEEDS PRIVATE LIMITED in Mandsaur, Madhya Pradesh for seed inquiries, orders, or partnership opportunities. Email: info@avnigoldseeds.com, Phone: +91 98765 43210",
    },
    {
      name: "keywords",
      content: "contact AVNIGOLD, seed supplier Mandsaur, seed order inquiry, agricultural partnership, dealer inquiry",
    },
    { property: "og:title", content: "Contact AVNIGOLD Seeds - Mandsaur, Madhya Pradesh" },
    {
      property: "og:description",
      content: "Get in touch for seed inquiries, orders, or partnership opportunities.",
    },
    { property: "og:type", content: "website" },
    { name: "robots", content: "index, follow" },
  ];
}

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement form submission logic here
    // In production, this should POST to a secure backend endpoint
    const formData = new FormData(e.currentTarget);
    console.log('Form submitted:', Object.fromEntries(formData));
    // Add toast notification or redirect on success
  };
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      lines: ["info@avnigoldseeds.com", "sales@avnigoldseeds.com"],
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: ["+91 98765 43210", "+91 98765 43211"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["Survey No. 420/2, Gram - Bhunyakhedi", "Mandsaur City, Mandsaur - 458002", "Madhya Pradesh, India"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      lines: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: 9:00 AM - 1:00 PM"],
    },
  ];

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Get in Touch</h1>
            <p className={styles.heroText}>
              Have questions? We're here to help. Reach out to our team for support, inquiries, or partnership opportunities.
            </p>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <div className={styles.infoCards}>
              {contactInfo.map((info) => (
                <div key={info.title} className={styles.infoCard}>
                  <div className={styles.infoIconWrapper}>
                    <info.icon className={styles.infoIcon} />
                  </div>
                  <div className={styles.infoContent}>
                    <h3>{info.title}</h3>
                    {info.lines.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" type="text" placeholder="John Doe" required />
                  </div>

                  <div className={styles.formGroup}>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>

                  <div className={styles.formGroup}>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" type="text" placeholder="How can we help?" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={6} required />
                </div>

                <Button type="submit" size="lg" className={styles.submitBtn}>
                  <Send className={styles.btnIcon} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className={styles.mapSection}>
            <div className={styles.mapPlaceholder}>
              <MapPin className={styles.mapIcon} />
              <div>
                <h3>Find Us on the Map</h3>
                <p>Survey No. 420/2, Gram - Bhunyakhedi, Mandsaur City</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
