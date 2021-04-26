import { Heading } from "@chakra-ui/layout";
import DefaultLayout from "@components/layout";
import { GetServerSideProps } from 'next'
import { NextSeo } from "next-seo";

export default function Artist({ artist }) {
  const { name } = artist;

  return (
    <>
      <NextSeo title={name} />
      <Heading>{name}</Heading>
    </>
  )
}

Artist.Layout = DefaultLayout;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id: artistId } = params;
  const artist = await fetch(`https://api.nindo.de/artist/${artistId}`).then(res => res.json())

  return {
    props: {
      artist,
    }
  }
}
