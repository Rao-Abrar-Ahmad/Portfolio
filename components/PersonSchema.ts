import { Site } from "@/data/site";
import React from "react";

const PersonSchema = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    address: {
      "@type": "PostalAddress",
      addressLocality: Site?.address?.city,
      addressRegion: Site?.address?.country,
      postalCode: Site?.address?.zipCode,
      streetAddress: Site?.address?.location,
    },
    email: Site?.email,
    image: Site?.profilePic,
    jobTitle: Site?.jobTitle,
    name: Site?.name,
    telephone: Site?.socials?.tel,
    url: Site?.socials?.website,
    sameAs:[
      Site?.socials?.facebook,
      Site?.socials?.discord,
      Site?.socials?.email,
      Site?.socials?.fiveer,
      Site?.socials?.github,
      Site?.socials?.instagram,
      Site?.socials?.linkdin,
      Site?.socials?.slack,
      Site?.socials?.stackoverflow,
      Site?.socials?.upwork,
      Site?.socials?.website
    ]
  };

  return (
   <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
   </>
  );
};

export default PersonSchema;
