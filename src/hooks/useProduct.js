import { useQuery } from "@tanstack/react-query";

export const useProductos = () => {
  return useQuery({
    queryKey: ["productos"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.jsonbin.io/v3/b/691f7073ae596e708f65f13d"
      );

      if (!res.ok) {
        throw new Error("Error al cargar productos");
      }

      const data = await res.json();

      return data.record; // ← MUY IMPORTANTE
    },
  });
};
