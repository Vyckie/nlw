import type { AppProps } from 'next/app'

import '../styles/global.css';
import Image from 'next/image';
import appPreview from '../assets/app-nlw-copa.png'
import logoImg from '../assets/logo.svg';
import usersAvatar from '../assets/users-avatar-example.png'
import iconCheking from '../assets/icon.svg'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28'>
      <main>
        <Image src={logoImg} alt="Nlw Copa"/>

        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>Crie seu próprio bolão da copa e compartilhe entre amigos! </h1>
        <div className='mt-10 flex items-center gap-2' >
          <Image src={usersAvatar} alt=""/>
          <strong className='text-gray-100 text-xl'>
            <span className='text-ignite-500'>+14.987</span> já estão usando
          </strong>

        </div>
        <form className='mt-10 flex '>
        <input
          className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm'
          type="text" 
          required 
          placeholder='Qual nome do bolão?' />
          <button 
            className='bg-yellow-500 rounded gap-2 px-6 py-4 text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700' 
            type="submit"
            >Criar bolão
          </button>
        </form>

        <p
        className='mt-4 text-sm text-grat-300'
        >Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas</p>

        <div className='mt-10 pt-10 border-t border-gray-600 flex justify-between text-gray-100 items-center'>
          <div className='flex items-center'>
            <Image src={iconCheking} alt=""/>
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+2.345</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div className='w-px h-14 bg-gray-600'></div>
          <div className='flex items-center'>
          <Image src={iconCheking} alt=""/>
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+192.087</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreview} alt="Dois celulares exibindo uma prévia do app Nlw-Copa" />
    </div>
  ) 
   
}
