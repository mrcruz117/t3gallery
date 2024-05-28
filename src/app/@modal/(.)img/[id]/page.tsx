import { getImage } from "~/server/queries";

export default async function ImgModal({
  params: { id: imgId },
}: {
  params: { id: string };
}) {
  const idAsNum = Number(imgId);
  const image = await getImage(idAsNum);

  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}
