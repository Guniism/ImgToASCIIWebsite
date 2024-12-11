export function IMG2ASCII(img, n){
        // console.log(img);
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
  
        // let n = 200;
        let r = n/img.width;
        canvas.width = n;
        canvas.height = (img.height*r)/2.24;
  
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
  
        const myData = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = myData.data;
        const asciiImage = [];
        let result = "";

        const asciiChars = '@%#*+=-:. ';
  
        let line = '';
        for(let i = 0; i < data.length; i+=4){
          // console.log(i);
            const r = data[i];
            const g = data[i+1];
            const b = data[i+2];
            const a = data[i+3];
            //console.log(i + ": (" + r + "," + g + "," + b + "," + a + ")");
            
            const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;
            const char = asciiChars[Math.floor((gray/255) * (asciiChars.length-1))];
            line += char;
  
            if ((i / 4 + 1) % canvas.width === 0) {
                asciiImage.push(line);
                // asciiImage.push("\n");

                result += line + "\n";

                line = '';
            }
          }
  
          // return asciiImage.join('\n');
          // console.log(result);
          return result;
      }