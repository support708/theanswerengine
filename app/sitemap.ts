import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

function getBlogPosts(): string[] {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  
  try {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .filter(name => !name.startsWith('_') && name !== 'page.tsx');
  } catch (error) {
    console.log('Blog directory not found or empty');
    return [];
  }
}

function getCaseStudies(): string[] {
  const caseStudiesDir = path.join(process.cwd(), 'app', 'case-studies');
  
  try {
    const entries = fs.readdirSync(caseStudiesDir, { withFileTypes: true });
    
    return entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .filter(name => !name.startsWith('_') && name !== 'page.tsx');
  } catch (error) {
    console.log('Case studies directory not found or empty');
    return [];
  }
}

function isHubPage(slug: string): boolean {
  const hubIndicators = [
    'what-is',
    'complete-guide',
    'ultimate-guide',
    'comprehensive',
    'everything-you-need',
  ];
  
  return hubIndicators.some(indicator => slug.includes(indicator));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theanswerengine.ai';
  const currentDate = new Date();

  const blogPosts = getBlogPosts();
  const caseStudies = getCaseStudies();

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map(slug => {
    const isHub = isHubPage(slug);
    
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: isHub ? 0.9 : 0.8,
    };
  });

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map(slug => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
    ...corePages,
    ...blogPages,
    ...caseStudyPages,
  ];
}