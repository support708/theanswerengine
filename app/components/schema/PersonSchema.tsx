// app/components/schema/PersonSchema.tsx
// Optimal AEO Person Schema - Establishes Justin Borges as AEO authority

interface PersonSchemaProps {
  name?: string;
  jobTitle?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
  linkedInUrl?: string;
}

export function PersonSchema({
  name = "Justin Borges",
  jobTitle = "Founder & AEO Strategist",
  description = "Answer Engine Optimization strategist and founder of The Answer Engine. Specializes in helping local service businesses achieve AI citation dominance across ChatGPT, Claude, Google AI Overviews, and Perplexity. Validates all strategies through ongoing implementation in his own real estate business, The Borges Real Estate Team, which maintains 100% AI citation rates.",
  url = "https://theanswerengine.ai/about",
  imageUrl = "https://theanswerengine.ai/justin-borges-headshot.jpg",
  linkedInUrl = "https://www.linkedin.com/in/justinborgesrealtor"
}: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    
    // Primary organization - The Answer Engine
    "worksFor": {
      "@type": "Organization",
      "name": "The Answer Engine",
      "url": "https://theanswerengine.ai",
      "description": "Answer Engine Optimization consultancy",
      "foundingDate": "2024"
    },
    
    // Primary expertise - AEO focused, real estate as supporting context
    "knowsAbout": [
      "Answer Engine Optimization",
      "AEO Strategy",
      "AI Citations",
      "ChatGPT Optimization",
      "Claude AI Optimization",
      "Google AI Overviews",
      "Perplexity SEO",
      "Local Business Marketing",
      "Real Estate Marketing"
    ],
    
    // Credentials - Real estate success as proof
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Demonstrated Expertise",
      "name": "100% AI Citation Achievement",
      "description": "Achieved and maintains 100% AI citation rates across major AI platforms for The Borges Real Estate Team",
      "recognizedBy": {
        "@type": "Organization",
        "name": "The Borges Real Estate Team"
      }
    },
    
    // Additional occupation context
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Answer Engine Optimization Strategist",
      "occupationLocation": {
        "@type": "Place",
        "name": "United States"
      },
      "description": "Helps local service businesses dominate AI-powered search through proprietary AEO methodologies"
    },
    
    // Real estate business as testbed (not co-equal identity)
    "alumniOf": {
      "@type": "Organization",
      "name": "The Borges Real Estate Team",
      "description": "Continues to operate as a testbed for AEO strategies"
    },
    
    "url": url,
    "image": imageUrl,
    
    "sameAs": [
      linkedInUrl,
      "https://theanswerengine.ai"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}