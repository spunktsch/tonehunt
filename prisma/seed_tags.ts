import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // CREATE SAMPLE CATEGORIES
  for (const c of sampleTags) {
    const tag = await prisma.tag.create({ data: c });
    console.log(`Created tag with id: ${tag.id}`);
  }
  console.log(`Seeding finished.`);
}

const sampleTags = [
  { name: "rock", group: "genre" },
  { name: "metal", group: "genre" },
  { name: "country", group: "genre" },
  { name: "blues", group: "genre" },
  { name: "ambient", group: "genre" },
  { name: "grunge", group: "genre" },
  { name: "djent", group: "genre" },
  { name: "punk", group: "genre" },
  { name: "pop", group: "genre" },
  { name: "indie", group: "genre" },
  { name: "experimental", group: "genre" },
  { name: "jazz", group: "genre" },
  { name: "clean", group: "textures" },
  { name: "high-gain", group: "textures" },
  { name: "saturated", group: "textures" },
  { name: "breakup", group: "textures" },
  { name: "fuzzy", group: "textures" },
  { name: "scooped", group: "textures" },
  { name: "crunch", group: "textures" },
  { name: "tight", group: "textures" },
  { name: "fat", group: "textures" },
  { name: "mid-forward", group: "textures" },
  { name: "fenderish", group: "textures" },
  { name: "voxish", group: "textures" },
  { name: "dry", group: "textures" },
  { name: "bright", group: "textures" },
  { name: "dark", group: "textures" },
  { name: "preamp-only", group: "technical" },
  { name: "poweramp-only", group: "technical" },
  { name: "raw", group: "technical" },
  { name: "post-processed", group: "technical" },
  { name: "solid-state", group: "technical" },
  { name: "valve", group: "technical" },
  { name: "digital", group: "technical" },
  { name: "analogue", group: "technical" },
  { name: "vintage", group: "technical" },
  { name: "studio-gear", group: "technical" },
  { name: "bass", group: "technical" },
  { name: "pedal", group: "technical" },
  { name: "1940s", group: "era" },
  { name: "1950s", group: "era" },
  { name: "1960s", group: "era" },
  { name: "1970s", group: "era" },
  { name: "1980s", group: "era" },
  { name: "1990s", group: "era" },
  { name: "2000s", group: "era" },
  { name: "2010s", group: "era" },
  { name: "2020s", group: "era" },
];

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
