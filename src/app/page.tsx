import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

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

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      {" "}
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <div key={image.id + "" + idx} className="w-48 p-2">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
