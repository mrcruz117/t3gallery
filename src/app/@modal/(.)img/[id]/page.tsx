import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function ImgModal({
  params: { id: imgId },
}: {
  params: { id: string };
}) {
  const idAsNum = Number(imgId);

  return (
    <Modal>
      <FullPageImageView id={idAsNum} />
    </Modal>
  );
}
