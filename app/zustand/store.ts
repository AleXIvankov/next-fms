import { create } from "zustand";

type FeaturesStore = {
  inViewFeature: string | null;
  setInViewFeature: (feature: string | null) => void;

  fullScreenFeature: string | null;
  setFullScreenFeature: (feature: string | null) => void;

  lastFullScreenFeature: string | null;
  setLastFullScreenFeature: (feature: string | null) => void;
};

export const useFeatureStore = create<FeaturesStore>((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature: string | null) => set({ inViewFeature: feature }),

  fullScreenFeature: null,
  setFullScreenFeature: (feature: string | null) => {
    set({ fullScreenFeature: feature });
    if (feature !== null) {
      set({ lastFullScreenFeature: feature });
    }
  },

  lastFullScreenFeature: null,
  setLastFullScreenFeature: (feature: string | null) =>
    set({ fullScreenFeature: feature }),
}));
