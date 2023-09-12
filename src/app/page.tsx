"use client";
import { Header } from "@/components/header/Header";
import { OfferItem, TOffer } from "@/components/offer/offerItem";
import { useState } from "react";
import { NewOfferModal } from "@/components/modals/NewOfferModal";
import { useQuery } from "react-query";
import { Loading } from "@/components/loading/Loading";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const offerFetch = useQuery("offers", {
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/jobs");

      return await response.json();
    },
    refetchInterval: 1000,
  });

  if (offerFetch.isLoading) return <Loading />;

  return (
    <main className="bg-background pb-24 min-h-screen w-screen">
      <Header />
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <div className="p-4">
        {offerFetch.data?.map((offer: TOffer, i: number) => (
          <OfferItem key={i} {...offer} />
        ))}
      </div>

      <div>{offerFetch.data?.description}</div>
      <NewOfferModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </main>
  );
}
