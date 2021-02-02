import Link from 'next/link';
import Head from 'next/head';
import RNavBar from '../Components/RNavBar';

export default function Home() {
    return (<div>
    <Head><meta name="viewport" content="width=device-width"/></Head>

    <div class="box">
        <h1 className="title">Profissional</h1>

        <div class="grid">

                <Link href="#">
                    <a class="card">Linkedin</a>
                </Link>

                <Link href="#">
                    <a class="card">Curriculo</a>
                </Link>

                <Link href="#">
                    <a class="card">Experiências</a>
                </Link>

                <Link href="/">
                    <a class="card">Home</a>
                </Link>

        </div>
    </div>
</div>)

}