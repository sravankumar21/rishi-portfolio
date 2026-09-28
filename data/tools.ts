export interface Tool {
  name: string;
  category: string;
}

/**
 * Kitchen equipment and tools I operate daily across the stations and
 * storage areas described in my resume's Kitchen Equipment section.
 */
export const toolGroups: { category: string; items: Tool[] }[] = [
  {
    category: "Equipment & Stations",
    items: [
      { name: "Combi Oven", category: "Equipment & Stations" },
      { name: "Blast Chiller", category: "Equipment & Stations" },
      { name: "Undercounter Freezer", category: "Equipment & Stations" },
      { name: "Induction Range", category: "Equipment & Stations" },
      { name: "Prep Table", category: "Equipment & Stations" },
      { name: "Vacuum Sealer", category: "Equipment & Stations" },
      { name: "Grill & Charcoal Station", category: "Equipment & Stations" },
    ],
  },
  {
    category: "Storage & Stock Control",
    items: [
      { name: "HACCP Log Sheets", category: "Storage & Stock Control" },
      { name: "FIFO Labelling", category: "Storage & Stock Control" },
      { name: "Inventory Sheets", category: "Storage & Stock Control" },
      { name: "Dry Store Racking", category: "Storage & Stock Control" },
      { name: "Temperature Probes", category: "Storage & Stock Control" },
      { name: "Food Storage Bins", category: "Storage & Stock Control" },
      { name: "Supplier Replenishment", category: "Storage & Stock Control" },
    ],
  },
  {
    category: "Prep & Presentation Tools",
    items: [
      { name: "Chef's Knife", category: "Prep & Presentation Tools" },
      { name: "Carving Knife", category: "Prep & Presentation Tools" },
      { name: "Mandoline", category: "Prep & Presentation Tools" },
      { name: "Piping Bags", category: "Prep & Presentation Tools" },
      { name: "Plating Tweezers", category: "Prep & Presentation Tools" },
      { name: "Sauce & Squeeze Bottles", category: "Prep & Presentation Tools" },
      { name: "Ring Moulds", category: "Prep & Presentation Tools" },
      { name: "Cold Section Plating", category: "Prep & Presentation Tools" },
    ],
  },
];
