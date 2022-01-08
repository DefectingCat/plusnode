import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import MainLayout from 'layouts/MainLayout';
import { ReactElement } from 'react';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      name: 'xfy',
    },
  };
};

const Home = ({
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Plusnode</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Hello {name}</div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
