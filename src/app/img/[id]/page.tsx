import FullPageImageView from "~/components/full-image-page";

export default function ImgPage({
  params: { id: imgId },
}: {
  params: { id: string };
}) {
  const idAsNum = Number(imgId);

  return <FullPageImageView id={idAsNum} />;
}
