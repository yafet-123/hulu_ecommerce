import {Hero} from '../components/bio/Hero';
import { MainHeader } from '../components/common/MainHeader';


export default function Bio() {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Helen Zeray : Bio" />
      <div className="flex flex-col">
        <h1 className="font-sans font-extralight text-[2.1rem] leading-[2.35rem] text-left text-[#010101] w-full lg:w-[55%] tracking-[0.16rem] mb-10">BIO</h1>
        <Hero />
      </div>
    </main> 
  )
}