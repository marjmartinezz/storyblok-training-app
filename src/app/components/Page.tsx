import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { PageStoryblok } from "../../../component-types-sb";

export const Page = (params: PageStoryblok) => {
  return (
    <main {...storyblokEditable(params.blok)}>
      {params.blok.blocks.map((blok: PageStoryblok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  );
};
