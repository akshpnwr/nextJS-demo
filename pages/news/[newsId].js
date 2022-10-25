// our-domain.com/news/details

import { useRouter } from 'next/router';

const DetailsPage = () => {
  const router = useRouter();

  console.log(router.query.newsId);

  return <h1>This is the {router.query.newsId} page</h1>;
};

export default DetailsPage;
