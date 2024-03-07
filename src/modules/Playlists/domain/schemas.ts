import { z } from 'zod';

export const VideoSchema = z.object({
  name: z.string(),
  id: z.string(),
  url: z.string(),
  thumbnailUrl: z.string(),
});

export const PlaylistSchema = z.object({
  name: z.string(),
  slug: z.string(),
  videos: z.array(VideoSchema),
  description: z.string(),
});
