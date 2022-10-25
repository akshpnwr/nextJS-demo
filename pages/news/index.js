// our-domain.com/news

import Link from 'next/link';

const news = () => {
  return (
    <>
      <h1>This is the news page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>
            NestJs is great framework
          </Link>
        </li>
        <li>Someyhig else</li>
      </ul>
    </>
  );
};

export default news;
