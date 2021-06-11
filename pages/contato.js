import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>

      <div className="box">
        <h1 className="title">Contatos</h1>

        <div className="grid">
          <Link href="mailto:samufacanha@gmail.com">
            <a className="card">
                <img src="/icons/gmail.png" className="imgGrande" />
              {' E-mail'}
              <p>
                samufacanha@gmail.com
              </p>
            </a>
          </Link>

          <Link href="https://t.me/SamuelFacanha2">
            <a className="card">
                <img src="/icons/Telegram.png" className="imgPequena" />
              {' Telegram'}
              <p>
                @Samuelfacanha2
              </p>
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/samuelfaçanha/">
            <a className="card">
                <img src="/icons/Linkedin.png" className="imgGrande" />
              {' LinkedIn'}
              <p>
                 linkedin.com/in/samuelfaçanha/
              </p>
            </a>
          </Link>

          <Link href="/">
            <a className="card">
            <img src="/icons/Home.svg" className="imgGrande" />
              {' Home'}
              <p>
                <br />
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
