import NextButton from "./NextButton";

type ContentTextProps = {
    text: string;
    onInnerClose: () => void;
}

const ContentText = ({ text, onInnerClose }: ContentTextProps) => {
    return (
        <div>
            <p className="text-white text-md mb-2">
                {text}
            </p>

            <NextButton
                onClick={onInnerClose}
            />
        </div>
    )
}

export default ContentText;