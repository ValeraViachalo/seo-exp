import Curve from '@/components/Layout/Curve';
import { fetchData } from '@/components/Layout/FetchData/FetchData';
import Inner from '@/components/Layout/Inner';
import Head from 'next/head';

export async function getServerSideProps() {
  const data = await fetchData("/data/about.json");
  return { props: { data } };
}

export default function About({ data }) {
  return (
    <>
      <Head>
        <title>{data.documentTitle}</title>
        <meta name="description" content={data.documentDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />

        <meta content="summary_large_image" name="twitter:card" />
        <meta content={data.documentImage} property="og:image" />
        <meta content={data.documentImage} property="twitter:image" />

      </Head>
      <Inner backgroundColor={"#BCF366"}>
        <h1>About</h1>
        <div className='body'>
            <p>Nullam mattis mattis dictum. Praesent sit amet condimentum mi, quis venenatis lectus. Phasellus ac ante id purus viverra hendrerit quis at ex. Donec vitae augue pulvinar augue dictum fermentum dapibus nec tellus.</p>
            <p>Phasellus cursus, ante in eleifend vehicula, leo metus mattis est, sit amet dignissim dui nibh in dui. Nullam dictum tortor vitae quam condimentum, eget tincidunt nisi tincidunt. Praesent ut erat at purus gravida aliquam non a purus. Pellentesque sagittis in justo vel venenatis.</p>
        </div>
      </Inner>
    </>
  );
}
