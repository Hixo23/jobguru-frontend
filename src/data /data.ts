export type SingleOfferType = {
  id: number;
  title: string;
  company: string;
  skills: Array<string>;
  salary: string;
  description: string;
};

export const offerExamples: SingleOfferType[] = [
  {
    company: "januszex123",
    description: "backend developer needed",
    id: 1,
    salary: "30000",
    skills: ["go", "postgresql", "redis"],
    title: "go backend developer",
  },
  {
    id: 2,
    title: "typescript developer",
    company: "OGDEVS123",
    skills: ["js", "ts", "mongodb"],
    salary: "20000",
    description: "typescript developer asap",
  },
  {
    id: 3,
    title: "javascript developer",
    company: "OGDEVS123",
    skills: ["js", "mongodb"],
    salary: "20000",
    description: "javascript developer asap",
  },
  {
    id: 4,
    title: "rust developer",
    company: "OGDEVS123",
    skills: ["rust", "mongodb"],
    salary: "25000",
    description: "rust developer asap",
  },
];
