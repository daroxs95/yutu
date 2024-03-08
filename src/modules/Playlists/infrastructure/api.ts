import { z } from 'zod';

import { PLAYLISTS_API_ENDPOINT } from '../../../config';
import { PlaylistSchema } from '../domain/schemas';
import { Video } from '../domain/types';

export async function getPlaylists() {
  const res = await fetch(`${PLAYLISTS_API_ENDPOINT}/lists`);
  const data = await res.json();
  const parsed = z.array(PlaylistSchema).safeParse(data.lists);
  if (!parsed.success) {
    console.error(parsed.error.errors);
    throw new Error('Unexpected response received from the API');
  }
  return parsed.data;
}

export async function getPlaylistBySlug(slug: string) {
  const res = await fetch(`${PLAYLISTS_API_ENDPOINT}/lists/${slug}`);
  const data = await res.json();
  const parsed = PlaylistSchema.safeParse(data.list);
  if (!parsed.success) {
    console.error(parsed.error.errors);
    throw new Error('Unexpected response received from the API');
  }
  return parsed.data;
}

export async function createPlaylist(
  name: string,
  description: string,
  slug: string,
  videos: Video[],
) {
  const res = await fetch(`${PLAYLISTS_API_ENDPOINT}/lists`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, description, slug, videos }),
  });
  const data = await res.json();
  return data;
}

export async function addVideoToPlaylist(slug: string, video: Video) {
  const res = await fetch(`${PLAYLISTS_API_ENDPOINT}/lists/${slug}/video`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(video),
  });
  const data = await res.json();
  return data;
}

export async function deletePlaylist(slug: string) {
  const res = await fetch(`${PLAYLISTS_API_ENDPOINT}/lists/${slug}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return data;
}

export async function deleteVideoFromPlaylist(slug: string, videoId: string) {
  const res = await fetch(`${PLAYLISTS_API_ENDPOINT}/lists/${slug}/video/${videoId}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return data;
}
