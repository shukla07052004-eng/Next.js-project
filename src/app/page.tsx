import Homepage from "@/components/Homepage";
import {CardHoverEffectDemo} from "@/components/cardsSection"
import { StickyScrollRevealDemo } from "@/components/sticyScroll"
import {InfiniteMovingCardsDemo} from "@/components/movingCards"
export default function Home() {
  return (
   <>
         <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
           <Homepage/>
           <CardHoverEffectDemo/>
           <StickyScrollRevealDemo/>
           <InfiniteMovingCardsDemo/>
         </main>
   </>
  );
}
