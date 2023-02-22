import ReactPlayer from 'react-player'
import NextButton from './NextButton';

type ContentVideoProps = {
    onInnerClose: () => void;
    videoSrc: string;
}

const ContentVideo = ({ 
    onInnerClose, 
    videoSrc 
}: ContentVideoProps) => {
    return (
        <div>
            <ReactPlayer
                url={videoSrc}
                controls={false}
                playing={true}
            />

            <NextButton
                onClick={onInnerClose}
            />
        </div>
    )
}

export default ContentVideo;