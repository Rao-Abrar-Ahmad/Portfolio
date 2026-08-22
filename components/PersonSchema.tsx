import { Site } from "@/data/site";

const PersonSchema = () => {
  const sameAs = [
    Site?.socials?.facebook,
    Site?.socials?.github,
    Site?.socials?.instagram,
    Site?.socials?.linkedin,
    Site?.socials?.stackoverflow,
    Site?.socials?.upwork,
    Site?.socials?.website,
  ].filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: Site?.name,
    url: Site?.socials?.website,
    image: Site?.profilePic,
    jobTitle: Site?.jobTitle,
    email: Site?.email,
    telephone: Site?.socials?.tel,

    address: {
      "@type": "PostalAddress",
      streetAddress: Site?.address?.location,
      addressLocality: Site?.address?.city,
      postalCode: Site?.address?.zipCode,
      addressCountry: Site?.address?.country,
    },

    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default PersonSchema;