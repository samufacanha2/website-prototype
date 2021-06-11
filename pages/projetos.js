import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
    return (<div>
    <Head><meta name="viewport" content="width=device-width"/></Head>
    
    <div class="box">
        <h1 className="title">Projetos</h1>

        <div className="grid">

            {/* <Link href="#">
                <a class="card">Projeto 1</a>
            </Link>

            <Link href="#">
                <a class="card">Projeto 2</a>
            </Link> */}

            <Link href="https://github.com/samufacanha2">
            <a className="card">
            <img src="/icons/Github.png" className="imgGrande" />
              {' GitHub'}
              <p>
              github.com/samufacanha2
              </p>
            </a>
          </Link>

            <Link href="https://gitlab.com/samuelfacanha2">
            <a className="card">
            <img src="/icons/Gitlab.svg" className="imgGrande" />
              {' Gitlab'}
              <p>
              gitlab.com/samuelfacanha2
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
        </div>)

}

