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
		<div className="flex items-center p-4 bg-slate-900 rounded-lg mx-auto w-[90%] shadow-sm">
			<div
				className={"text-slate-400 w-5 text-lg font-medium"}
			>
				{`#${place}`}
			</div>

			<div className="flex items-center flex-row ml-4">
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

				<div className="ml-4 text-white font-bold">
					{username.length > 20 ? (
						`${username.substring(0,20)}...`
					) : (
						username
					)}
				</div>

				<label className='text-slate-300 w-fit ml-[20px]'>
					{convertMsToTime(time)}
				</label>
			</div>
		</div>
	);
};

export default LeaderboardItem;
