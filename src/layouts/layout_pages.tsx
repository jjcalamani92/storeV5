import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
// import { Footer } from "../components/footer";
import { Data, HeadV1, Site } from "../interfaces/siteV1";
import { Main, Header } from '../components';

interface Layout {
	head: HeadV1 | any;
	children?: React.ReactNode;
	site?: Site
}

export const LayoutPages: FC<Layout> = ({
	head,
	children,
	site
}) => {
	const router = useRouter()
  const { pathname, asPath } = router
	// console.log(sites);
	// const site = sites.find((site: { _id: string; }) => site._id === process.env.API_SITE)
	// const hero = site?.route[0].content.body
	// const header = site?.route .filter((data: { href: string}) => data.href !== 'home')
	console.log(head.image);
	
	
	
	return (
		<>
			<Head>
			<title>{head ? head.name : 'Terrakota'}</title>
				<meta name="keywords" />
				<meta name="description" content={head ? head.description : 'description'} />
				<meta property="og:title" content={head ? head.name : 'title'} />
				<meta property="og:description" content={head ? head.description : 'description'} />
				<meta property="og:type" content="og:product" />
				{head && head.image && <meta property="og:image" content={head ? head?.image.src :'image'} />}
				<link rel="icon" href={"https://regalosterrakota.com/wp-content/uploads/2021/11/cropped-icono-web-hhh-180x180.jpg"} />
			</Head>
      <Header site={site!} />
			<Main>
				{children}
			</Main>
			{/* <Footer /> */}
			</>
	);
};
