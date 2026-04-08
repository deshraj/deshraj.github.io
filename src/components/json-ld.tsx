export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Deshraj Yadav",
    url: "https://deshraj.xyz",
    jobTitle: "Co-founder and CTO",
    worksFor: {
      "@type": "Organization",
      name: "Mem0",
      url: "https://mem0.ai",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Georgia Institute of Technology",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "JSS Academy of Technical Education",
      },
    ],
    sameAs: [
      "https://twitter.com/deshrajdry",
      "https://github.com/DESHRAJ",
      "https://linkedin.com/in/deshraj-yadav-34325975",
      "https://scholar.google.com/citations?user=T9QZ6sIAAAAJ&hl=en",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
