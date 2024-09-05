"use client";

import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import { Tour } from "./Tour";

storyblokInit({
  components: { tour: Tour },
  enableFallbackComponent: true,
});

export const StoryBlokProvider = ({ children }: PropsWithChildren) => {
  return children;
};
