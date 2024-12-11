import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Work  from './work';

export default function MyDropzone() {
  const [preview, setPreview] = useState(null);
  const [upload, setUpload] = useState(false);
  const [file, setFile] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const objectUrl = URL.createObjectURL(file);
    setUpload(true);
    setPreview(objectUrl);
    setFile(file);
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept: 'image/*'
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
      'image/gif': ['.gif'],
      'image/webp': ['.webp']
    },
    maxFiles: 1
  })

  return (
    <div>
      {(upload) ? <></> :
            <div {...getRootProps()} className="bg-con flex flex-col border-2 border-dashed border-bd rounded-lg max-w-3xl mx-auto p-20 cursor-pointer">
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <b>Drop the image here ...</b> :
                  <b>Drop your image here, or click to select images</b>
              }
            </div>
      }

    {preview && (
      <Work src={preview} file={file} />
    )}

  </div>
  )
}
