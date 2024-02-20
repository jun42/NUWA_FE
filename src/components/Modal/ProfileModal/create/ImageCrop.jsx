import ReactCrop from 'react-image-crop';
import Image from '@components/Image/Image';
import 'react-image-crop/dist/ReactCrop.css';

const ImageCrop = ({ src, crop, onLoad, onChange, aspect, minWidth }) => {
  return (
    <>
      <ReactCrop
        crop={crop}
        keepSelection
        aspect={aspect}
        onChange={onChange}
        minWidth={minWidth}
      >
        <Image src={src} onLoad={onLoad} />
      </ReactCrop>
    </>
  );
};

export default ImageCrop;
