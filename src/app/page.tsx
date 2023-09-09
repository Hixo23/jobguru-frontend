import { Header } from "@/components/header/Header";
import { offerExamples } from "@/data /data";
import {OfferItem} from "@/components/offer/offerItem";
import {Loading} from "@/components/loading/Loading";

export default function Home() {
  return (
    <main className="bg-background pb-24 min-h-screen w-screen">
      <Header />
      {offerExamples.map((offer) => (
        <OfferItem key={offer.id} {...offer}/>
      ))}
    </main>
  );
}
