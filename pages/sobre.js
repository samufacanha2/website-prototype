import Link from 'next/link';

export default function Sobre(){
    return <div>
        <div class="box">
            <h1>Sobre</h1>
            <ul>
                <li>
                    <Link href="/">
                        <a class="card">Home</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>

}

