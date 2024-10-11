import {
  RecommendedToursStoryblok,
  TourStoryblok,
} from '../../../component-types-sb';
import { RecommendedTour } from './RecommendedTour';
import { storyblokEditable } from '@storyblok/react/rsc';

export const RecommendedTours = (params: RecommendedToursStoryblok) => {
  return (
    <section
      {...storyblokEditable(params.blok)}
      className="py-16 container mx-auto w-full px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        {params.blok.headline}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {params.blok.tours.map((tour: TourStoryblok) => (
          <RecommendedTour
            {...tour}
            story={tour}
            key={tour.content._uid}
          />
        ))}
      </div>
    </section>
  );
};
