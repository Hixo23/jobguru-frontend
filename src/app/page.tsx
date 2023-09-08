import { Header } from "@/components/header/Header";
import { offerExamples } from "@/data /data";

export default function Home() {
  return (
    <main className="bg-background h-screen w-screen">
      <Header />
      {offerExamples.map((offer) => (
        <div key={offer.id} className={"text-white border border-red-500"}>
          <h1>{offer.title.split(" ").join("-")}</h1>
          <ul className={`flex gap-4`}>
            {offer.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
