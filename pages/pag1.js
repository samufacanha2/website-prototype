import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
    return (<div>
    <Head><meta name="viewport" content="width=device-width"/></Head>
    <div class="box">
        <h1 >Pagina 1</h1>
        <ul class="grid">
            <li>
                <Link href="/sobre">
                    <a class="card">Sobre</a>
                </Link>
                <Link href="/">
                    <a class="card">Home</a>
                </Link>
            </li>
        </ul>
    </div>
        </div>)

}

