import ReactCrop, { convertToPixelCrop } from 'react-image-crop';
import Image from '@components/Image/Image';
import 'react-image-crop/dist/ReactCrop.css';
import { useImageCrop } from '@hooks/useImageCrop';
import setCanvasPreview from '@utils/setCanvasPreview';
import { Button, ButtonGroup, ModalFooter } from '@chakra-ui/react';
const ImageCrop = ({
  src,
  crop,
  onLoad,
  onChange,
  aspect,
  minWidth,
  updateAvatar,
  setCorpImageSrc,
}) => {
  const { imgRef, previewCanvasRef } = useImageCrop();

  // console.log(previewCanvasRef);
  return (
    <>
      <ReactCrop
        crop={crop}
        keepSelection
        aspect={aspect}
        onChange={onChange}
        mixWidth={minWidth}
      >
        <Image src={src} onLoad={onLoad} ref={imgRef} />
      </ReactCrop>
      {crop && (
        <canvas
          ref={previewCanvasRef}
          style={{
            display: 'none',
            border: '1px solid black',
            objectFit: 'contain',
            width: 500,
            height: 500,
          }}
        />
      )}
      <ModalFooter p="20px 0">
        <ButtonGroup>
          <Button rounded="50px" w="120px" onClick={() => setCorpImageSrc('')}>
            취소
          </Button>
          <Button
            color="#fff"
            bg="#5158FF"
            rounded="50px"
            w="120px"
            onClick={() => {
              setCanvasPreview(
                imgRef.current, // HTMLImageElement
                previewCanvasRef.current, // HTMLCanvasElement
                convertToPixelCrop(
                  crop,
                  imgRef.current.width,
                  imgRef.current.height
                )
              );
              const dataUrl = previewCanvasRef.current.toDataURL();
              updateAvatar(dataUrl);
              setCorpImageSrc('');
            }}
          >
            설정
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </>
  );
};

export default ImageCrop;
