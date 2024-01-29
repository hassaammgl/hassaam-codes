import Header from "@/components/Header";
import img1 from "@/public/1.png";
import img2 from "@/public/2.png";
import img3 from "@/public/3.png";
import img4 from "@/public/41.png";
import img5 from "@/public/51.png";
import img6 from "@/public/5.png";
import style from "@/styles/projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import BgVideo from "@/components/BgVideo";
import style2 from "@/styles/visitbtn.module.scss";

let array = [
  {
    img: img1,
    title: "PORTFOLIO WEBSITE",
    problem:
      "Nigerian businesses across all sectors especially ME's struggle to comply with compnay legal regulations.",
    solution:
      "Builda platyofrm that will enable these companies at the top of a button know what regulations apply to tgheir incorporated compnay without having to afford a lawyer.",
    websiteLink: "www.instagram.com",
    right: true,
  },
  {
    img: img2,
    title: "BLOG WEBSITE",
    problem:
      "NIgerian businesses across all sectors especially ME's struggle to comply with compnay legal regulations.",
    solution:
      "Builda platyofrm that will enable these companies at the top of a button know what regulations apply to tgheir incorporated compnay without having to afford a lawyer.",
    websiteLink: "www.google.com",
    right: false,
  },
  {
    img: img3,
    title: "TINDER",
    problem:
      "NIgerian businesses across all sectors especially ME's struggle to comply with compnay legal regulations.",
    solution:
      "Builda platyofrm that will enable these companies at the top of a button know what regulations apply to tgheir incorporated compnay without having to afford a lawyer.",
    websiteLink: "www.google.com",
    right: true,
  },
  {
    img: img4,
    title: "PORTFOLIO WEBSITE",
    problem:
      "NIgerian businesses across all sectors especially ME's struggle to comply with compnay legal regulations.",
    solution:
      "Builda platyofrm that will enable these companies at the top of a button know what regulations apply to tgheir incorporated compnay without having to afford a lawyer.",
    websiteLink: "www.google.com",
    right: false,
  },
  {
    img: img5,
    title: "PORTFOLIO WEBSITE",
    problem:
      "NIgerian businesses across all sectors especially ME's struggle to comply with compnay legal regulations.",
    solution:
      "Builda platyofrm that will enable these companies at the top of a button know what regulations apply to tgheir incorporated compnay without having to afford a lawyer.",
    websiteLink: "www.google.com",
    right: true,
  },
  {
    img: img6,
    title: "PARRE TEXTILES",
    problem:
      "Nigerian businesses across all sectors especially ME's struggle to comply with compnay legal regulations.",
    solution:
      "Builda platyofrm that will enable these companies at the top of a button know what regulations apply to tgheir incorporated compnay without having to afford a lawyer.",
    websiteLink: "www.google.com",
    right: false,
  },
];

export default function page() {
  return (
    <>
      <Header />
      <BgVideo />
      <div className={style.projects_body}>
        <h1>
          {`{`}
          <span>All Projects</span>
          {`}`}
        </h1>
        <div className={style.allprojects}>
          {array.map((projects, i) => {
            return (
              <div
                key={i}
                className={projects.right ? style.project : style.project2}
              >
                <Image
                  className={projects.right ? style.img1 : style.img2}
                  alt=""
                  src={projects.img}
                />
                <div className={style.projectcontent}>
                  <h3>{projects.title}</h3>
                  <p>
                    <span>Problem: </span>
                    {projects.problem}
                  </p>
                  <p>
                    <span>Solution: </span>
                    {projects.solution}
                  </p>
                  <Link href={projects.websiteLink}>
                    <button className={style2.btn}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Visit
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
