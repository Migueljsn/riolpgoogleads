const brands = [
  "Pampers", "Huggies", "MamyPoko", "Johnson's", "Nivea", "Dove",
  "Colgate", "Palmolive", "Sundown", "Garnier", "L'Oréal", "Lux",
];

export const Brands = () => (
  <section className="bg-muted/40 py-14 sm:py-16">
    <div className="container-tight">
      <p className="text-center text-sm font-bold uppercase tracking-wider text-muted-foreground">
        Trabalhamos com as marcas que seu cliente procura
      </p>
      <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-6">
        {brands.map((b) => (
          <div
            key={b}
            className="flex items-center justify-center rounded-lg bg-card px-3 py-4 font-display text-sm font-bold text-muted-foreground grayscale transition-all hover:text-foreground hover:grayscale-0 hover:shadow-card sm:text-base"
          >
            {b}
          </div>
        ))}
      </div>
    </div>
  </section>
);
