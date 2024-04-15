import { Carousel } from "flowbite-react";
import classNames from "classnames";
import { useFeatureStore } from "../zustand/store";

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
          <img src="/img/FMS-1500-HagerFront.png" alt="..." />
          <img src="/img/hager-Logo.svg" alt="..." />
          <img src="/img/logo-no-background.png" alt="..." />
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
          <img src="/img/FMS_1500_Hager Front.png" alt="..." />
          <img src="/img/Hager-Logo.svg" alt="..." />
          <img src="/img/logo-no-background.png" alt="..." />
        </Carousel>
      </div>
    </Visual>
  );
};
