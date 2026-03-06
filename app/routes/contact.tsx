import type { Route } from "./+types/contact";
import { data, useFetcher } from "react-router";
import { z } from "zod/v4";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { Button } from "~/components/ui/button/button";
import { Input } from "~/components/ui/input/input";
import { Textarea } from "~/components/ui/textarea/textarea";
import { Label } from "~/components/ui/label/label";
import styles from "./contact.module.css";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.email("Please enter a valid email address"),
  phone: z.string().max(20).optional().default(""),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    return data(
      { success: false, errors: z.flattenError(result.error).fieldErrors },
      { status: 400 }
    );
  }

  console.log("Contact form submission received at:", new Date().toISOString());
  return data({ success: true, errors: null });
}

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
    { property: "og:url", content: "https://avnigoldseeds.com/contact" },
    { property: "og:image", content: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=630&fit=crop" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index, follow" },
  ];
}

export default function Contact() {
  const fetcher = useFetcher<typeof action>();
  const isSubmitting = fetcher.state !== "idle";
  const actionData = fetcher.data;
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
              {actionData?.success ? (
                <div className={styles.successMessage}>
                  <CheckCircle className={styles.successIcon} />
                  <h3>Message Sent Successfully</h3>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <fetcher.Form method="post" className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" type="text" placeholder="John Doe" required />
                      {actionData?.errors?.name && <p className={styles.fieldError}>{actionData.errors.name[0]}</p>}
                    </div>

                    <div className={styles.formGroup}>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                      {actionData?.errors?.email && <p className={styles.fieldError}>{actionData.errors.email[0]}</p>}
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>

                    <div className={styles.formGroup}>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" type="text" placeholder="How can we help?" required />
                      {actionData?.errors?.subject && <p className={styles.fieldError}>{actionData.errors.subject[0]}</p>}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell us more about your inquiry..." rows={6} required />
                    {actionData?.errors?.message && <p className={styles.fieldError}>{actionData.errors.message[0]}</p>}
                  </div>

                  <Button type="submit" size="lg" className={styles.submitBtn} disabled={isSubmitting}>
                    <Send className={styles.btnIcon} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </fetcher.Form>
              )}
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
