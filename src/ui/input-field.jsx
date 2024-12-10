export default function InputField(){
    return (
        <div id="inputField" className="flex flex-col border-4 border-dashed rounded-lg max-w-3xl mx-auto p-20">
            <label htmlFor="file-upload" className="block mx-auto py-2 px-4 bg-blue-500 text-white rounded-md text-center cursor-pointer hover:bg-blue-600 transition duration-200">
                Choose an Image
            </label>
            <input id="file-upload" className="hidden" type="file" accept="image/png, image/jpeg" />
        </div>

    );
}