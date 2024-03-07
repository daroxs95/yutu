import { z } from 'zod';

import { PLAYLISTS_API_ENDPOINT } from '../../../config';
import { PlaylistSchema } from '../domain/schemas';

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
