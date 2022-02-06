import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Styles from "./index.module.scss";

import Card from "../components/Card";

import cv from "../assets/resume/CV_Rizwan-1.jpg";
import RizwanPic from "../assets/images/rizwan-pic.jpeg";
import envelope from "../assets/icons/envelope-regular.svg";
import linkedIn from "../assets/icons/linkedin-in-brands.svg";
import resumeIcon from "../assets/icons/file-regular.svg";
import arrowIcon from "../assets/icons/Pfeilrechts.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rizwan Portfolio</title>
        <meta
          name="description"
          content="Rizwan Mushtaq Dhudhaal Portfolio generated in Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
                <a href='/assets/images/AppPage-464-256.png' target="_blank" rel="noreferrer">
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
              <Image src={RizwanPic} alt="rizwan-pic" />
            </div>
          </div>
          <div className={Styles.rightArrowContainer}>
            <div className={Styles.rightArrowContainerInner}>
              <Link href="/projects" passHref>
                <Image src={arrowIcon} alt="arrowIcon" />
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
