import React, { ChangeEvent, FormEvent, useState } from 'react';

const ImageUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: do something with -> file
    console.log('handle uploading-', file);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const reader = new FileReader();
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      reader.onloadend = () => {
        setFile(selectedFile);
        setImagePreviewUrl(reader.result as string);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = <img src={imagePreviewUrl} />;
  } else {
    $imagePreview = <div className="previewText">Please select an Image for Preview</div>;
  }

  return (
    <div className="previewComponent">
      <div onSubmit={handleSubmit}>
        <input className="fileInput" type="file" onChange={handleImageChange} />
        <button className="submitButton" type="submit" onClick={handleSubmit}>
          Upload Image
        </button>
      </div>
      <div className="imgPreview">{$imagePreview}</div>
    </div>
  );
};

export default ImageUpload;
