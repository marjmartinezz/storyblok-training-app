import { storyblokEditable } from "@storyblok/react/rsc";
import { TestimonialStoryblok } from "../../../component-types-sb";

export const Testimonial = (params: TestimonialStoryblok) => {
  return (
    <div
      {...storyblokEditable(params.blok)}
      className="bg-white p-8 rounded-sm shadow"
    >
      <p className="text-xl leading-relaxed text-gray-700">
        {params.blok.comment}
      </p>
      <p className="text-lg font-semibold mt-6">{params.blok.name}</p>
    </div>
  );
};
