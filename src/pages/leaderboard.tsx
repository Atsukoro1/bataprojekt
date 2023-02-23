import LeaderboardItem from "@/components/organisms/LeaderBoardItem"
import { prisma } from "@/server/db"
import { api } from "@/utils/api"
import { Score, User } from "@prisma/client"

const LeaderboardPage = ({ scores }: {
    scores: (Score & {
        user: User;
    })[]
}) => {
    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20 items-center text-center">
                <h1 className="text-white font-bold text-3xl">Žebříček</h1>
                <p className="text-white table w-[350px] text-center">
                    Žebříček zobrazuje nejlepší skóre za celou životnost aplikace
                </p>

                <div className="mt-5 grid grid-cols-1 gap-4">
                    {scores.map((el, key) => {
                        return (
                            <LeaderboardItem
                                userImage={el.user.image || ""}
                                username={el.user.name || ""}
                                place={key}
                                time={parseInt(el.time.toString())}
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export async function getServerSideProps() {
    const scores = await prisma.score.findMany({
        include: {
            user: true
        }
    });

    return {
        props: {
            scores: JSON.parse(JSON.stringify(scores, (_, v) => typeof v === 'bigint' ? v.toString() : v))
        },
    }
}

export default LeaderboardPage;