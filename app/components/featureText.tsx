import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { useFeatureStore } from "../zustand/store";

type Props = {
  children: React.ReactNode;
  id: string;
};

export const FeatureText = ({ children, id }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p
      ref={ref}
      className={classNames(
        "feature-text text-3xl font-semibold py-10 transition-colors leading-10",
        isInView
          ? "text-black dark:text-white"
          : "text-gray-400 dark:text-gray-700"
      )}
    >
      {children}
    </p>
  );
};
