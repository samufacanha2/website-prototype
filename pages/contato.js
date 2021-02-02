import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
    return (<div>
    <Head><meta name="viewport" content="width=device-width"/></Head>

    <div class="box">
        <h1 className="title">Contatos</h1>
        
        <div class="grid">

            <Link href="#">
                <a class="card">Instagram</a>
            </Link>

            <Link href="#">
                <a class="card">E-mail</a>
            </Link>

            <Link href="#">
                <a class="card">Telegram</a>
            </Link>

            <Link href="/">
                <a class="card">Home</a>
            </Link>
            
        </div>
    </div>
        </div>)

}