export default function TodoHeader({todos}) {
    if (!todos) return null;
    const total = todos.length;
    const completedCount = todos.filter(t => t.completed).length;


    return(
        <div className="flex justify-between items-center mb-4 pb-4 border-gray-100">
            <span className="text-sm font-medium text-gray-500">
                Total Task:{total}
            </span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
                Completed:{completedCount} 
            </span>
        </div>
    )
}     