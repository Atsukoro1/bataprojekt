import NextButton from "./NextButton";

type ContentFinalProps = {
    title: string;
    subtitle: string;
    onInnerClose: () => void;
}

const ContentFinal = ({ 
    onInnerClose, 
    title, 
    subtitle 
}: ContentFinalProps) => {
    return (
        <div>
            <h1 className="text-white text-lg">
                {title}
            </h1>
            
            <p className="text-white text-md">
                {subtitle}
            </p>

            <NextButton
                onClick={onInnerClose}
            />
        </div>
    )
}

export default ContentFinal;