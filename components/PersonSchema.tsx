import React from "react";
import { Site } from "@/data/site";
import { projects } from "@/data/projects";

const PersonSchema = () => {
  const sameAs = [
    Site?.socials?.facebook,
    Site?.socials?.github,
    Site?.socials?.instagram,
    Site?.socials?.linkedin,
    Site?.socials?.stackoverflow,
    Site?.socials?.upwork,
    Site?.socials?.fiveer,
    Site?.socials?.twitter,
    Site?.socials?.website,
  ].filter(Boolean);

  // 1. Person Schema
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${Site.url}/#person`,
    name: Site.name,
    givenName: Site.firstName,
    familyName: Site.lastName,
    url: Site.url,
    image: Site.profilePic,
    jobTitle: Site.jobTitle,
    email: Site.email,
    telephone: Site.socials.tel,
    gender: Site.gender,
    knowsLanguage: ["English", "Urdu"],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "Nest.js",
      "FastAPI",
      "Shopify",
      "TypeScript",
      "Tailwind CSS",
      "SaaS Architecture",
      "E-commerce Web Development",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: Site.address.location,
      addressLocality: Site.address.city,
      postalCode: Site.address.zipCode,
      addressCountry: Site.address.country,
    },
    sameAs,
  };

  // 2. ProfilePage Schema
  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${Site.url}/#webpage`,
    url: Site.url,
    name: Site.title,
    description: Site.description,
    mainEntity: {
      "@id": `${Site.url}/#person`,
    },
  };

  // 3. ItemList (Projects CreativeWork) Schema
  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Rao Abrar Ahmad — Featured Projects Portfolio",
    description: "Selection of high-impact SaaS and e-commerce web applications developed by Rao Abrar Ahmad.",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        url: `${Site.url}/projects/${project.slug}`,
        image: project.thumbnail,
        keywords: project.stack.join(", "),
        author: {
          "@id": `${Site.url}/#person`,
        },
      },
    })),
  };

  // 4. FAQPage Schema for AEO / GEO (Answer Engine Optimization)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Rao Abrar Ahmad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rao Abrar Ahmad is a Front-End Focused Full Stack Developer based in Rawalpindi, Pakistan with 3+ years of experience specializing in React, Next.js, Node.js, Nest.js, FastAPI, and Shopify web applications.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Rao Abrar Ahmad specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rao specializes in React, Next.js (App Router), TypeScript, Node.js, Nest.js, FastAPI, Tailwind CSS, Framer Motion, GSAP, Shopify App/Liquid development, and Stripe payment integration.",
        },
      },
      {
        "@type": "Question",
        name: "Is Rao Abrar Ahmad available for freelance or contract work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Rao Abrar Ahmad is available for full-time freelance projects, contract roles, and consulting for SaaS and e-commerce web applications.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Rao Abrar Ahmad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Rao Abrar Ahmad via email at raoabrar629@gmail.com, direct WhatsApp at +923407985784, or via LinkedIn at linkedin.com/in/rao-abrar-ahmad.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
};

export default PersonSchema;