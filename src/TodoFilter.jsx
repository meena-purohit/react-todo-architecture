export default function TodoFilter({filter,setFilter}) {
    const btnClass = (type) => 
        `px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
            filter === type ? "bg-blue-600 text-white shadow-md" : "bg-gray-500 hover:bg-gray-200" 
        }`
    return (
        <div className="flex gap-2 mb-4 justify-center">
            <button onClick={() => setFilter("all")} className={btnClass("all")}>All</button>
            <button  onClick={() => setFilter("active")} className={btnClass("active")}>Active</button>
            <button  onClick={() => setFilter("completed")}  className={btnClass("completed")}>Done</button>
        </div>
    )
}