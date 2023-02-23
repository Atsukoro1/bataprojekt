import { convertMsToTime } from "@/utils/conversions";
import Image from "next/image";

type LeaderboardItemProps = {
	place: number;
	userImage: string;
	username: string;
	time: number;
};

const LeaderboardItem = ({
	place,
	userImage,
	username,
	time,
}: LeaderboardItemProps) => {
	return (
		<div className="flex items-center p-4 bg-slate-900 rounded-lg shadow-sm">
			<div
				className={"text-slate-400 w-5 text-lg font-medium"}
			>
				{`#${place}`}
			</div>

			<div className="flex items-center ml-4">
				<div className="w-12 h-12 overflow-hidden rounded-full">
					<Image
						src={{
							src: userImage,
							height: 50,
							width: 50,
						}}
						alt={username}
						width={48}
						height={48}
					/>
				</div>
				<div className="ml-4 text-white font-bold">{username}</div>

				<label className='text-slate-300 ml-[70px]'>
					{convertMsToTime(time)}
				</label>
			</div>
		</div>
	);
};

export default LeaderboardItem;
