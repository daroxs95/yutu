import { z } from 'zod';

import { PlaylistSchema, VideoSchema } from './schemas';

export type Video = z.infer<typeof VideoSchema>;
export type Playlist = z.infer<typeof PlaylistSchema>;
