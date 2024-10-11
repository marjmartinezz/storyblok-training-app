import Image from 'next/image';
import Link from 'next/link';
import { TourStoryblok } from '../../../component-types-sb';

export const RecommendedTour = (props: TourStoryblok) => {
  return (
    <div className="bg-white rounded-sm shadow">
      <Image
        className="aspect-video object-cover w-full"
        src={`${props.story.content.main_image.filename}`}
        width={736}
        height={414}
        alt={props.story.content.main_image.alt}
        loading={'lazy'}
      />
      <div className="p-8">
        <div className="flex gap-4 justify-between text-lg font-bold">
          <h3>{props.story.content.name}</h3>
          <p>
            {Number(props.story.content.price).toLocaleString('en-US', {
              style: 'currency',
              currency: 'TWD',
              minimumFractionDigits: 0,
            })}
          </p>
        </div>
        <p className="text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide">
          {props.story.content.location}, Taiwan
        </p>
        <Link
          className="font-bold text-base mt-8 block underline"
          href={`/${props.story.full_slug}`}
        >
          View Tour
        </Link>
      </div>
    </div>
  );
};
