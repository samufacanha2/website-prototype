import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';


export default function Page(){

   return <div>
   <div id="__next">
       <div className="container">
           <header>
               <h1 className= 'title'>Olá, eu sou <br/><span className='title'>Samuel Façanha</span></h1>
               <p className="description">E essa é minha página pessoal feita em Next.js!</p>
           </header>

           <img src='/images/perfil.jpg' className='avatar' />
           <div id="GridM">
               <Link href="/projetos">
               <a className="card">
                   <h3>Projetos</h3>
                   <p>APPs WEB, GitHub, etc.</p>
               </a>
               </Link>
               <Link href="/contato">
               <a className="card">
                    <h3>Contato</h3>
                    <p>E-mail, Instagram, etc.</p>
               </a>
               </Link>
               <Link href="/profissional">
               <a className="card">
                    <h3>Profissional</h3>
                    <p>Currículo, estágios, etc.</p>
               </a>
               </Link>
               {/* <Link href="#">
               <a className="card">
                    <h3>Card4</h3>
                    <p>Text Card4</p>
               </a>
               </Link>
               <Link href="#">
               <a className="card">
                    <h3>Card5</h3>
                    <p>Text Card5</p>
               </a>
               </Link> */}
           </div>
       </div>
   </div>
  
</div>

}