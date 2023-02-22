type NextButtonProps = {
    onClick: () => void;
}

export default ({ onClick }: NextButtonProps) => {
    return (
        <button 
            className="text-white p-3 bg-slate-600 mt-4 rounded-lg"
            onClick={onClick}
        >
            Další
        </button>
    )
}