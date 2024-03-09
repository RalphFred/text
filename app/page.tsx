import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({subsets: ['latin']})

export default function Home() {
  return (
    <main className={montserrat.className}>
      
    </main>
  );
}
