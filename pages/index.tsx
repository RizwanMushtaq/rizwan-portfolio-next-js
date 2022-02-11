import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Styles from "./index.module.scss";

import Card from "../components/Card";

const cv = "/assets/resume/CV_Rizwan.pdf";
const RizwanPic = "/assets/images/rizwan-pic.jpeg";
const envelope = "/assets/icons/envelope-regular.svg";
const linkedIn = "/assets/icons/linkedin-in-brands.svg";
const resumeIcon = "/assets/icons/file-regular.svg";
const arrowIcon = "/assets/icons/Pfeilrechts.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rizwan Portfolio</title>
        <meta
          name="description"
          content="Rizwan Mushtaq Dhudhaal Portfolio generated in Next.js"
        />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="rizwanmushtaqdhudhaal" />
        <meta
          property="og:title"
          content="Social Media Preview Working?"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content={"/favicon.ico"} />

        <link rel="icon" href={RizwanPic} />
      </Head>

      <div className={Styles.WelcomeCardContainer}>
        <Card type={"welcomeCard"}>
          <div className={Styles.container}>
            <div className={Styles.allContentContainer}>
              <div className={Styles.introduction}>
                <div className={Styles.greeting}>Hello</div>
                <div className={Styles.description}>
                  <div>Welcome I&apos;m Rizwan Mushtaq Dhudhaal. 😇</div>
                  <ul>
                    <li>
                      <div>❇️</div>
                      <div className={Styles.text}>
                        I am a Full Stack Web Developer. I am confident in
                        JavaScript, TypeScript, React.JS and Node.JS.
                      </div>
                    </li>

                    <li>
                      <div>❇️</div>
                      <div className={Styles.text}>
                        I have around 5 years of Experience, working in the
                        information technology and services industry.
                      </div>
                    </li>

                    <li>
                      <div>❇️</div>
                      <div className={Styles.text}>
                        I have 3 years of experience working with Agile Teams.
                        Ensuring Quality of software products by working closely
                        with DEV, UX, UA, Role Portfolio Managers and Customers.
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={Styles.contactContainer}>
                  <div className={Styles.logoContainer}>
                    <Image height={30} width={30} src={resumeIcon} alt="resume" />
                  </div>
                  <a href={cv} target="_blank" rel="noreferrer">
                    resume
                  </a>
                </div>
                <div className={Styles.contactContainer}>
                  <div className={Styles.logoContainer}>
                    <Image height={30} width={30} src={envelope} alt="email" />
                  </div>
                  <a
                    href="https://mail.google.com/mail"
                    target="_blank"
                    rel="noreferrer"
                  >
                    rizwanmushtaq15@gmail.com
                  </a>
                </div>
                <div className={Styles.contactContainer}>
                  <div className={Styles.logoContainer}>
                    <Image height={30} width={30} src={linkedIn} alt="email" />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/rizwan-mushtaq-dhudhaal-7a4091128/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Rizwan Mushtaq Dhudhaal
                  </a>
                </div>
              </div>
              <div className={Styles.avatar}>
                <Image src={RizwanPic} alt="rizwan-pic" height={300} width={400} />
              </div>
            </div>
            <div className={Styles.rightArrowContainer}>
              <div className={Styles.rightArrowContainerInner}>
                <Link href="/projects" passHref>
                  <div className={Styles.imgContainer}>
                    <Image height={30} width={30} src={arrowIcon} alt="arrowIcon" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
