import {StoryblokStory} from 'storyblok-generate-ts'

export interface FeatureStoryblok {
  headline: string;
  content: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  headline?: string;
  items: (FeatureStoryblok | TestimonialStoryblok)[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HeroStoryblok {
  headline: string;
  content: string;
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface PageStoryblok {
  blocks?: (FeatureStoryblok | GridStoryblok | HeroStoryblok | RecommendedToursStoryblok | TestimonialStoryblok)[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface RecommendedToursStoryblok {
  headline: string;
  tours: (StoryblokStory<TourStoryblok> | string)[];
  _uid: string;
  component: "recommended_tours";
  [k: string]: any;
}

export interface TestimonialStoryblok {
  name: string;
  comment: string;
  _uid: string;
  component: "testimonial";
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface TourStoryblok {
  name: string;
  introduction: string;
  price: string;
  main_image: AssetStoryblok;
  location: "" | "Taipei" | "Jiufen" | "Kaoshiung";
  body: RichtextStoryblok;
  _uid: string;
  component: "tour";
  [k: string]: any;
}
