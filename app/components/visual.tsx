import { Carousel } from "flowbite-react";
import classNames from "classnames";
import { useFeatureStore } from "../zustand/store";
import Image from "next/image";

type Props = {
  id: string;
};

type VisualProps = {
  children: React.ReactNode;
} & Props;

const Visual = ({ children, id }: VisualProps) => {
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);

  return (
    <div
      className={classNames(
        "fixed inset-0 flex items-center justify-center opacity-0 pointer-events-none",
        `visual-${id}`
      )}
    >
      <div className="max-w-5xl w-full px-4">{children}</div>
    </div>
  );
};

export const ShowImages = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <Image src="/img/Midnight.svg" width={500} height={500} alt="..." />
          <Image src="/img/gears.svg" width={500} height={500} alt="..." />
          <Image
            src="/img/disjoncteurs.svg"
            width={500}
            height={500}
            alt="..."
          />
        </Carousel>
      </div>
    </Visual>
  );
};

export const OtherShowImages = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <Image
            src="/img/abstractions.png"
            width={500}
            height={500}
            alt="..."
          />
          <Image src="/img/Hager-Logo.svg" width={500} height={500} alt="..." />
          <Image src="/img/hagerForum.svg" width={500} height={500} alt="..." />
        </Carousel>
      </div>
    </Visual>
  );
};
