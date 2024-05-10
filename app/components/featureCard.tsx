import classNames from "classnames";
import { useFeatureStore } from "../zustand/store";
import { Button } from "flowbite-react";
import Image from "next/image";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: string;
};

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullScreenFeature = useFeatureStore(
    (state) => state.setFullScreenFeature
  );
  return (
    <div
      className={classNames(
        "absolute inset-0 bg-gradient-to-br h-full w-full rounded-2xl opacity-0",

        inViewFeature === id
          ? "active-card opacity-100 duration-300"
          : "opacity-0 pointer-events-none duration-300"
      )}
    >
      <div
        className={classNames(
          "gradient absolute rounded-2xl inset-0 origin-bottom-left bg-gradient-to-br",
          gradient
        )}
      ></div>
      {children}
      <Button
        pill
        size="xs"
        gradientDuoTone="purpleToBlue"
        className="absolute bottom-5 right-5 show-me-btn"
        onClick={() => setFullScreenFeature(id)}
      >
        Montre-moi
      </Button>
    </div>
  );
};

export const Img1 = ({ id }: CardProps) => {
  const fullScreenFeature = useFeatureStore((store) => store.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <Image
        src="/img/hagerForum.svg"
        width={500}
        height={500}
        alt="image"
        className={classNames(
          "rounded-xl shadow-lg absolute left-[10%] top-[10%] w-[50%] transition-transform",
          isFullScreen ? "scale-0" : "scale-100"
        )}
      />
      <Image
        src="/img/abstractions.png"
        width={500}
        height={500}
        alt="image"
        className={classNames(
          "rounded-xl shadow-lg absolute left-[50%] top-[50%] w-[40%] transition-transform",
          isFullScreen ? "scale-0" : "scale-100"
        )}
      />
    </FeatureCard>
  );
};

export const Img2 = ({ id }: CardProps) => {
  const fullScreenFeature = useFeatureStore((store) => store.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#34e89e] to-[#00d4ff]">
      <Image
        src="/img/Midnight.svg"
        width={500}
        height={500}
        alt="image"
        className={classNames(
          "rounded-xl shadow-lg absolute left-[40%] top-[10%] w-[50%] transition-transform",
          isFullScreen ? "scale-0" : "scale-100"
        )}
      />
      <Image
        src="/img/disjoncteurs.svg"
        width={500}
        height={500}
        alt="image"
        className={classNames(
          "rounded-xl shadow-lg absolute left-[5%] top-[50%] w-[40%] transition-transform",
          isFullScreen ? "scale-0" : "scale-100"
        )}
      />
    </FeatureCard>
  );
};
export const Img3 = ({ id }: CardProps) => {
  const fullScreenFeature = useFeatureStore((store) => store.fullScreenFeature);
  const isFullScreen = fullScreenFeature === id;
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#38BDF8]">
      <Image
        src="/img/hager-Logo.svg"
        width={500}
        height={500}
        alt="image"
        className={classNames(
          "rounded-sm shadow-lg absolute left-[10%] top-[20%] w-[30%] transition-transform",
          isFullScreen ? "scale-0" : "scale-100"
        )}
      />
      <Image
        src="/img/gears.svg"
        width={500}
        height={500}
        alt="image"
        className={classNames(
          "rounded-xl shadow-lg absolute left-[60%] top-[25%] w-[30%] transition-transform",
          isFullScreen ? "scale-0" : "scale-100"
        )}
      />
      <Image
        src="/img/disjoncteurs.svg"
        width={500}
        height={500}
        alt="image"
        className={classNames(
          "rounded-xl shadow-lg absolute left-[20%] top-[60%] w-[40%] transition-transform",
          isFullScreen ? "scale-0" : "scale-100"
        )}
      />
    </FeatureCard>
  );
};
