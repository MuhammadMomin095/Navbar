export default function Button({props = "Home"}:any){
    return(
        <button className="bg-red-600 text-white sm:p-2 p-1 rounded-lg
         hover:bg-blue-700 text-xl">
            {props}
        </button>


    )
}