import { z } from 'zod';

import { VideoListSchema } from './schemas';

export type Video = z.infer<typeof VideoListSchema>;
