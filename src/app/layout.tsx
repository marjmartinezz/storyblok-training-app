import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import "./globals.css";
import { StoryBlokProvider } from "./components/StoryBlokProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function cachedFetch(input: any, init?: any): Promise<Response> {
  return fetch(input, {
    ...init,
    cache: 'no-store',
  });
}

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
    fetch: cachedFetch,
  },
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryBlokProvider>
      <html lang="en">
        <body className="antialiased">
          <div>Layout</div>
          {children}
        </body>
      </html>
    </StoryBlokProvider>
  );
}
