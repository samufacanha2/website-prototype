import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
    return (<div>
    <Head><meta name="viewport" content="width=device-width"/></Head>
    
    <div class="box">
        <h1 className="title">Projetos</h1>

        <div className="grid">

            <Link href="#">
                <a class="card">Projeto 1</a>
            </Link>

            <Link href="#">
                <a class="card">Projeto 2</a>
            </Link>

            <Link href="https://github.com/samufacanha2">
                <a class="card">GitHub</a>
            </Link>

            <Link href="/">
                <a class="card">Home</a>
            </Link>
            
        </div>
    </div>
        </div>)

}

