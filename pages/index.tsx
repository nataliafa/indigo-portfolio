import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import Education from "../components/education";
import Portfolio from "../components/portfolio";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Contact from "../components/contact";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Portfolio | Oliver Wilson</title>
      <meta name="description" content="Portfolio | Oliver Wilson" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <About />
      <Skills />
      <Portfolio />
      <Education />
      <Experience />
      <Contact />
    </main>
  </>
);

export default Home;
