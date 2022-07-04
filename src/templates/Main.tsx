import Link from 'next/link';
import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="relative overflow-hidden bg-neutral-700 py-8 font-mono">
    {props.meta}
    <div className="relative px-4 sm:px-6 lg:px-6">
      <div className="mx-auto max-w-prose text-lg text-amber-300">
        <h1>
          <span className="block text-center text-base uppercase tracking-wide">
            Hi there,
          </span>
          <span className="mt-2 block text-center text-xl leading-8 tracking-tight sm:text-4xl">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm Solomon
          </span>
        </h1>
      </div>
      <div className="prose prose-sm prose-indigo mx-auto mt-4 text-amber-400">
        <p className="whitespace-pre-line">
          Full-time student in Bilkent Uni (4th year) and other full-time --
          developer.
        </p>
        <p>Currently learning rust.</p>
        <p>
          Love wearing a black hoodie and feeling like a hacker. Even if all I
          am doing is centering a div. Still feels good.
        </p>
        <div className="text-center">
          <Link href="/meeting">
            <a className="text-center text-red-600">
              Schedule a Meeting With Me!
            </a>
          </Link>
        </div>
        <p>
          In blockchain space for a year now. Experienced with frontend.
          Attended EthAmsterdam, HackMoney and EthPrague.
        </p>
        <div className="text-center">
          <a
            className="text-center text-red-600"
            href="https://devpost.com/software/bilkent-blockchain?ref_content=my-projects-tab&ref_feature=my_projects"
          >
            EthPrague Project
          </a>
        </div>
        <p>Find Me On:</p>
        <ul role="list">
          <li>telegram: @solomon_nsi</li>
          <li>twitter: Solomon_nsi</li>
          <li>github: suleymanHanyyev</li>
        </ul>
        <p>I enjoy sharing knowledge where I can.</p>
        <ul role="list">
          <li>
            <a
              className="text-amber-400"
              href="https://stackoverflow.com/users/13167787/solomon-nsi"
            >
              stackoverflow
            </a>
          </li>
          <li>
            <a
              className="text-amber-400"
              href="https://mirror.xyz/0x076C8831785a841f81D5e5e1F693c761bECeB1b7"
            >
              mirror
            </a>
          </li>
          <li>
            <a
              className="text-amber-400"
              href="https://medium.com/@hack.me.solomon"
            >
              medium
            </a>
          </li>
          <li>
            <a
              className="text-amber-400"
              href="https://hackmesolomon.substack.com/p/my-story-in-blockchain-space?r=1md0ap&s=w&utm_campaign=post&utm_medium=web"
            >
              substack
            </a>
          </li>
          <li>
            <a
              className="text-amber-400"
              href="https://hackernoon.com/u/solomonnsi"
            >
              hackernoon (coming soon)
            </a>
          </li>
        </ul>
        <br />
        <h3>welp, that was the main info, the rest is extra! </h3>
        <p>nationality: Turkmen. </p>
        <p>languages: English, Russian, Turkish, Turkmen, French. </p>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          worked with neufi (for a very short time, but the pr's I saw increased
          my skills and taught me a lot. Love the guys.
        </p>
        <p className="decoration-0">
          also a board of{' '}
          <a
            className="text-red-600 decoration-0 "
            href="https://twitter.com/blkntblockchain"
          >
            blockchain community
          </a>{' '}
          in our uni
        </p>
        <p>
          near protocol is very interesting to me. I would like to meet the
          guys.
        </p>
        <p>
          still thinking about the learn2earn idea. A bit utopian, but thinking
          that there might be a future where people will be paid to learn is
          exciting{' '}
        </p>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          basketball, table tennis, sometimes chess. I read, sometimes i don't.
          Hopefully will read Dostoyevsky one day.
        </p>
        <p> Podcasts: Jordan Peterson, Huberman Lab</p>
        <p> Mr.Robot was a very nice series</p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>
          {' '}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          if u read these as well, dm me on twitter already, let's be friends!
        </p>
      </div>
    </div>
  </div>
);

export { Main };
