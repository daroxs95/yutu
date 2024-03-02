import { z } from 'zod';

import { VideoDetailsSchema, VideoListSchema } from './schemas';

export type Video = z.infer<typeof VideoListSchema>;
export type VideoDetails = z.infer<typeof VideoDetailsSchema>;
