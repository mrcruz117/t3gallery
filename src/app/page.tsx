import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/9769b3bc-f3cd-4f5b-ac53-98b2491abb84-ei8sho.png",
  "https://utfs.io/f/ed02a9e7-a46b-4b08-ae6a-6d3657f6a06a-ei8shn.png",
  "https://utfs.io/f/4b103c09-6fb8-4c14-9920-92b10751e684-ei8shm.png",
  "https://utfs.io/f/5e53219d-32f6-46a2-b014-c8505ab878b2-ei8shl.png",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-2">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
