import { SiDiscord } from 'react-icons/si';

const DiscordProviderButton = () => {
    return (
        <button className="flex flex-row gap-2 bg-[#7289DA] text-white p-3 rounded-lg">    
            <SiDiscord 
                size={28}
                color='white'
            />
            Přihlaš se přes Discord
        </button>
    )
}

export default DiscordProviderButton;