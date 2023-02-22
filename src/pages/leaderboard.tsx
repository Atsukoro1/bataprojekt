import LeaderBoardItem from "@/components/organisms/LeaderBoardItem"

export default () => {
    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20 items-center text-center">
                <h1 className="text-white font-bold text-3xl">Žebříček</h1>
                <p className="text-white table w-[350px] text-center">
                    Žebříček zobrazuje nejlepší skóre za celou životnost aplikace
                </p>

                <div className="mt-5 grid grid-cols-1 gap-4">
                    <LeaderBoardItem
                        userImage="https://avatars.githubusercontent.com/u/64079894?s=60&v=4"
                        username="Atsukoro1"
                        place={1}
                        time={34738743}
                    />
                </div>
            </div>
        </main>
    )
}