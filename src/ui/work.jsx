import { useState } from 'react';
import ResultPreview  from './result';
import { IMG2ASCII } from "./script";


export default function Work({src, file}){
    // console.log(file);
    const [rText, setRText] = useState(null);
    const [value, setValue] = useState(100);

    const handleSliderChange = (event) => {
      setValue(event.target.value);
    };


    if(file){
        const img = new Image();
        const reader = new FileReader();
        
        reader.onload = function(e) {
        img.src = e.target.result;
        };

        reader.readAsDataURL(file);

        img.onload = function() {
            setRText(IMG2ASCII(img, value));
        };
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(rText)
        .then(() => {
            alert("Copied to Clipboard!");
          })
          .catch((error) => {
            alert("Failed to Copy");
          });
    }
 
    return (
        <div>
            <div className="rounded-md max-w-3xl mx-auto flex flex-col sm:flex-row justify-between">
                <div className="w-full rounded-md bg-con m-0 md:m-3">
                    <img className="rounded-lg mx-auto" src={src} alt="inputImg" id="inputImg"></img>
                </div>
                <div className="w-full rounded-md bg-con m-0 md:m-3 p-10 flex flex-col justify-around my-5">
                    {/* <button className='border'>test</button> */}

                    <div className="flex items-center space-x-2 mx-auto mb-10 md:mb-0">
                        <b>Character Width</b>
                        <input 
                            type="range"
                            id="custom-slider"
                            min="20"
                            max="500"
                            value={value}
                            onChange={handleSliderChange}
                            className="slider"
                            style={{
                            background: `linear-gradient(to right, #40C173 ${(value - 20) / (500 - 20) * 100}%, #ddd ${(value - 20) / (500 - 20) * 100}%)`
                            }}
                        />
                        <b>{value}</b>
                    </div>
                    <button onClick={handleCopy} className="px-6 py-3 bg-green text-con font-semibold rounded-lg duration-300 hover:bg-lgreen">
                        Copy to Clipboard
                    </button>

                </div>
            </div>
        <ResultPreview data={rText}/>
            {/* <div className='mt-3 bg-wht text-bd rounded-md max-w-3xl mx-auto p-4'>
                <div id="output">
                    <p>{rText}</p>
                </div>
            </div> */}
        </div>
    );
}