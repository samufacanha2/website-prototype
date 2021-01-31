import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';


export default function Page(){

   return <body>
   <div id="__next">
       <div class="container">
           <h1 class="title">Samuel Façanha</h1>
           <p class="description">Página pessoal feita em Next.js!</p>
           <img src='../images/perfil.jpg' class='avatar' />
           <div class="grid">
                <Link href="/pag1">
               <a class="card">
                   <h3>Página 1</h3>
                   <p>Placeholder</p>
               </a>
               </Link>
               <Link href="/sobre">
               <a class="card">
                    <h3>Sobre</h3>
                    <p>Text Card2</p>
               </a>
               </Link>
               <Link href="#">
               <a class="card">
                    <h3>Card3</h3>
                    <p>Text Card3</p>
               </a>
               </Link>
               <Link href="#">
               <a class="card">
                    <h3>Card4</h3>
                    <p>Text Card4</p>
               </a>
               </Link>
               <Link href="#">
               <a class="card">
                    <h3>Card5</h3>
                    <p>Text Card5</p>
               </a>
               </Link>
           </div>
       </div>
   </div>
  
</body>

}