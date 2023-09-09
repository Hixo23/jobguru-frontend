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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus mattis velit, in ultricies ex convallis at. Curabitur luctus porta aliquam. Quisque sagittis magna id diam euismod, quis pretium turpis dignissim. Sed purus risus, sollicitudin porta risus dictum, tempus cursus tellus. Maecenas a velit eu velit hendrerit vehicula. Sed faucibus, urna non tincidunt imperdiet, nulla dolor placerat leo, sed consectetur nisl felis ac nisi. Proin maximus sapien nec enim iaculis, a vulputate sem accumsan. Donec volutpat, augue condimentum sollicitudin sodales, orci ante aliquet nisi, vitae auctor dolor eros id nibh. Fusce venenatis nisi vitae volutpat condimentum. Integer sagittis hendrerit ante id pharetra. Suspendisse egestas scelerisque mi, non condimentum sapien malesuada id. In eleifend quis tellus a volutpat. Etiam vel ultrices lorem. Duis facilisis bibendum erat vel ultrices. Vivamus interdum dapibus velit a viverra. Mauris velit nunc, iaculis et fringilla bibendum, auctor eget leo. ",
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
