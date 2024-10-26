import Image from 'next/image';
import hero from '../assets/images/hero.png';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import Link from 'next/link';



export default function Home() {

  
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-center">Welcome to SAPAS</h1>
        <Image src={hero} alt="Hero" width={600} height={400} />
        <Link href="/auth/login"> <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md">Get Started</button></Link>
      </div>
      
    </ScrollArea>
  );
}