import Curve from "@/components/Layout/Curve";
import { fetchData } from "@/components/Layout/FetchData/FetchData";
import Inner from "@/components/Layout/Inner";

import Head from "next/head";

export async function getServerSideProps() {
  const data = await fetchData("/data/contact.json");
  return { props: { data } };
}

export default function Contact({ data }) {
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
      <Inner backgroundColor="#6E97D0">
        <h1>Contact</h1>
        <div className="body">
          <p>
            Fusce tristique nisi eu sodales suscipit. Praesent ante ipsum,
            suscipit eu dapibus in, tincidunt et massa. Sed pulvinar consequat
            elit at placerat. Maecenas bibendum in purus sed hendrerit. Integer
            efficitur mattis consectetur. Sed sagittis tortor non mauris laoreet
            ultrices. Nunc sit amet sem suscipit, accumsan justo sed, laoreet
            odio. Phasellus pharetra arcu nibh, non scelerisque ipsum rutrum
            quis. Fusce quis commodo leo. Mauris ut congue mauris.
          </p>
          <p>
            Duis tempus risus ut est malesuada, sit amet auctor tortor tempus.
            Sed luctus, odio a vulputate elementum, nulla enim bibendum ipsum,
            in ornare elit nisi quis tortor. Nullam quis condimentum tellus.
            Nullam non eros sem. Cras molestie convallis dolor, quis egestas
            turpis congue in. Maecenas ut tellus at nunc consectetur facilisis.
            Vivamus ornare ex a nibh egestas, id euismod mi euismod.
          </p>
        </div>
      </Inner>
    </>
  );
}
