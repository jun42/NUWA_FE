import { useRef, useState } from 'react';
import setCanvasPreview from '@utils/setCanvasPreview';
import { convertToPixelCrop } from 'react-image-crop';

export const useImageCrop = () => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState();
  const [imageSrc, setImageSrc] = useState('');
  const handleCropButton = () => {
    if (imgRef?.current?.width && imgRef?.current?.height) {
      setCanvasPreview(
        imgRef.current,
        previewCanvasRef.current,
        convertToPixelCrop(crop, imgRef.current.width, imgRef.current.height)
      );
      const dataUrl = previewCanvasRef.current.toDataURL();
      setImageSrc(dataUrl);
    }
  };

  return {
    imgRef,
    previewCanvasRef,
    imageSrc,
    setImageSrc,
    crop,
    setCrop,
    handleCropButton,
  };
};
