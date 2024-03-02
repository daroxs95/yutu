import { API_ENDPOINT } from '../../../config';
import { VideoDetailsSchema, VideoListSchema } from '../domain/schemas';

export async function getVideos(searchQuery: string) {
  const queryParams = new URLSearchParams({ q: searchQuery });
  const res = await fetch(`${API_ENDPOINT}/search?${queryParams.toString()}`);
  const data = await res.json();
  const parsed = VideoListSchema.safeParse(data);
  if (!parsed.success) {
    console.error(parsed.error.errors);
    throw new Error('Unexpected response received from the API');
  }
  return parsed.data;
}

export async function getVideoById(id: string) {
  const res = await fetch(`${API_ENDPOINT}/videos/${id}`);
  const data = await res.json();
  const parsed = VideoDetailsSchema.safeParse(data);
  if (!parsed.success) {
    console.error(parsed.error.errors);
    throw new Error('Unexpected response received from the API');
  }
  return parsed.data;
}
