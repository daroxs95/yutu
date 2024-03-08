import { createContext, ReactNode, useContext, useState } from 'react';

interface VideoContextType {
  id: string;
  title: string;
  floating: boolean;
  setId?: (id: string) => void;
  setTitle?: (title: string) => void;
  setFloating?: (floating: boolean) => void;
  playlist?: string[];
  setPlaylist?: (playlist: string[] | undefined) => void;
}

const initialState = {
  id: '',
  title: '',
  floating: false,
};

export const VideoContext = createContext<VideoContextType>(initialState);

export function VideoProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState(initialState.id);
  const [playlist, setPlaylist] = useState<string[] | undefined>([]);
  const [title, setTitle] = useState(initialState.title);
  const [floating, setFloating] = useState(initialState.floating);

  return (
    <VideoContext.Provider
      value={{
        id,
        title,
        floating,
        setId,
        setTitle,
        setFloating,
        playlist,
        setPlaylist,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export function useVideoContext() {
  return useContext(VideoContext);
}
