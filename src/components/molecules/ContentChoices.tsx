type ContentChoicesProps = {
    title: string;
    subtitle: string;
    choice1Text: string;
    choice2Text: string;
    onChoice: (num: number) => void;
}

const ContentChoices = ({ 
    title,
    subtitle,
    choice1Text, 
    choice2Text, 
    onChoice 
}: ContentChoicesProps) => {
    return (
        <div>
            <h1 className="text-white text-xl">{title}</h1>
            <p className="text-white text-md">{subtitle}</p>

            <div className="flex flex-grow gap-2 mt-4">
                <button 
                    onClick={() => onChoice(1)}
                    className="bg-slate-400 p-2 rounded-lg"
                >
                    {choice1Text}
                </button>

                <button 
                    onClick={() => onChoice(2)}
                    className="bg-slate-400 p-2 rounded-lg"
                >
                    {choice2Text}
                </button>
            </div>
        </div>
    )
}

export default ContentChoices;