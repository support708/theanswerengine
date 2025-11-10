// app/sitemap.ts
// AUTOMATIC SITEMAP - Auto-discovers all blog posts
import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Helper function to get all blog post slugs
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

// Helper function to get all case studies
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

// Determine if a blog post is a hub page (comprehensive guide)
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

  // Get all blog posts and case studies dynamically
  const blogPosts = getBlogPosts();
  const caseStudies = getCaseStudies();

  // CORE PAGES - Static
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // BLOG POSTS - Dynamic (automatically categorizes hub vs spoke)
  const blogPages: MetadataRoute.Sitemap = blogPosts.map(slug => {
    const isHub = isHubPage(slug);
    
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: isHub ? 0.9 : 0.8, // Hub pages get 0.9, spokes get 0.8
    };
  });

  // CASE STUDIES - Dynamic
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map(slug => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Combine all pages
  return [
    ...corePages,
    ...blogPages,
    ...caseStudyPages,
  ];
}