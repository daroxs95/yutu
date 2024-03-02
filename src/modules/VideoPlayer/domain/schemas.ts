import { z } from 'zod';

export const VideoSchema = z.object({
  id: z.object({ videoId: z.string() }),
  url: z.string(),
  title: z.string(),
  channelName: z.string(),
  description: z.string(),
  duration_raw: z.string().nullable(),
  snippet: z.object({
    url: z.string(),
    duration: z.string().nullable(),
    publishedAt: z.string().nullable(),
    thumbnails: z.object({
      id: z.string(),
      url: z.string(),
      height: z.number(),
      width: z.number(),
    }),
    title: z.string(),
    views: z.string().or(z.number()),
  }),
  views: z.string().or(z.number()),
});

export const VideoDetailsSchema = z.object({
  videoId: z.string(),
  url: z.string(),
  title: z.string(),
  description: z.string(),
  owner: z.string(),
  channelId: z.string().optional(),
  thumbnailUrl: z.string(),
  datePublished: z.string(),
  genre: z.string(),
  paid: z.boolean().optional(),
  unlisted: z.boolean().optional(),
  isFamilyFriendly: z.boolean(),
  duration: z.number(),
  views: z.number(),
  regionsAllowed: z.array(z.string()),
  likeCount: z.number(),
});

export const VideoListSchema = z.array(VideoSchema);
