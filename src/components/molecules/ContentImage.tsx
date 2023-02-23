import Image from "next/image";
import NextButton from "./NextButton";

type ContentImageProps = {
    onInnerClose: () => void;
    imageSrc: string;
}

const ContentImage = ({ 
    onInnerClose, 
    imageSrc 
}: ContentImageProps) => {
    return (
        <div>
            <Image 
                src={{
                    src: imageSrc,
                    height: 430,
                    width: 300
                }}
                alt="Content Image"
            />

            <NextButton
                onClick={onInnerClose}
            />
        </div>
    )
};

export default ContentImage;