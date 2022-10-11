import { FC } from 'react';

export interface JumbotronProps {
  splashImage: string;
  splashText: string;
}

export const Jumbotron: FC<JumbotronProps> = props => {
  return (
    <div
      style={{ backgroundImage: `url("${props.splashImage}")` }}
      className={`bg-cover bg-center bg-fixed h-96 relative`}
    >
      <div className="z-10 h-full w-full absolute top-0 left-0 bg-black/10">
        <div className="absolute top-1/2 left-1/2 -mr-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-white text-7xl">{props.splashText}</h1>
        </div>
      </div>
    </div>
  );
};
