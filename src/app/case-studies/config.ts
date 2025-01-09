import workData from '../../../public/work.json';
import { PortfolioItem, WorkData } from '../types/work';

interface CaseStudyWithSlug extends PortfolioItem {
  slug: string;
}

// Type assertion for the imported data
const typedWorkData = workData as WorkData;

// Convert portfolio items to case studies with slugs
export const CASE_STUDIES: readonly CaseStudyWithSlug[] = typedWorkData.portfolio
  .filter((item: PortfolioItem) => item.hasCaseStudy)
  .map((item: PortfolioItem) => ({
    ...item,
    slug: item.link.split('/').pop() || '',
  }));

// Utility functions from the previous config
export function isValidCaseStudy(slug: string): boolean {
  // Exclude icon and asset requests
  if (
    slug.endsWith('.ico') ||
    slug.endsWith('.png') ||
    slug.includes('favicon') ||
    slug.includes('apple-touch-icon')
  ) {
    return false;
  }
  return CASE_STUDIES.some(study => study.slug === slug);
}

export function getCaseStudy(slug: string): CaseStudyWithSlug {
  const study = CASE_STUDIES.find(s => s.slug === slug);
  if (!study) {
    throw new Error(`Case study not found: ${slug}`);
  }
  return study;
}

export type { CaseStudyWithSlug };
