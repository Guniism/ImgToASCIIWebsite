import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export default function MyDropzone() {
  const [preview, setPreview] = useState(null);
  const [upload, setUpload] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    setUpload(true);
    acceptedFiles.forEach(file => {
      const objectUrl = URL.createObjectURL(file)
      setPreview(objectUrl)

      // Log file name and type
      console.log(file.name, file.type)
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept: 'image/*' // Accept only image files
    accept: {
      'image/png': ['.png']
    },
    maxFiles: 1
  })

  return (
    <div>
      {(upload) ? <></> :
            <div {...getRootProps()} className="bg-con flex flex-col border-2 border-dashed border-bd rounded-lg max-w-3xl mx-auto p-20 ">
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop the image here ...</p> :
                  <p>Drag 'n' drop some images here, or click to select images</p>
              }
            </div>
      }


    {preview && (
      <div className="mt-4 bg-con rounded-md">
        <h3>Image Preview:</h3>
        <img src={preview} alt="Preview" className="max-w-xl h-auto" />
      </div>
    )}
  </div>
  )
}
