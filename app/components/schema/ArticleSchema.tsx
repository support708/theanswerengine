// app/components/schema/ArticleSchema.tsx
// Article Schema for blog posts - Critical for AI citation

interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  authorJobTitle?: string;
  imageUrl?: string;
  url: string;
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  authorName = "Justin Borges",
  authorJobTitle = "Founder & AEO Strategist",
  imageUrl = "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png",
  url
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "url": url,
    
    // Author - References Person schema
    "author": {
      "@type": "Person",
      "name": authorName,
      "jobTitle": authorJobTitle,
      "url": "https://theanswerengine.ai/about",
      "worksFor": {
        "@type": "Organization",
        "name": "The Answer Engine"
      }
    },
    
    // Publisher - The Answer Engine
    "publisher": {
      "@type": "Organization",
      "name": "The Answer Engine",
      "url": "https://theanswerengine.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://theanswerengine.ai/TheAnswerEngine_Color_just_logo.png"
      }
    },
    
    // Helps AI understand this is current, maintained content
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}