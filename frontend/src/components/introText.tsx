import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { FC } from 'react';

export interface IntroTextProps {
  topHeader: string;
  topDescription: string;
}

export const IntroText: FC<IntroTextProps> = props => {
  return (
    <div className="flex flex-col p-16">
      <div className="text-center">
        <h1 className="text-5xl font-medium mb-5">{props.topHeader}</h1>
        <p className="text-xl">{props.topDescription}</p>
        <br />
        <div className="text-center flex flex-row flex-wrap justify-center items-stretch">
          <Link href={'/about'}>
            <a className="flex items-center flex-row m-5 p-3 bg-black rounded-md text-white">
              More About Me &nbsp; <ArrowRightIcon className="h-5 w-5" />
            </a>
          </Link>
          <Link href={'/portfolio'}>
            <a className="flex items-center flex-row m-5 p-3 bg-black rounded-md text-white">
              View Portfolio &nbsp; <ArrowRightIcon className="h-5 w-5" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
