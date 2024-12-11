export default function ResultPreview({data}){
    return (
        <div className='mt-0 md:mt-3 bg-wht text-bd rounded-md max-w-3xl mx-auto p-4'>
            <div id="output">
                <p>{data}</p>
            </div>
        </div>
    )
}