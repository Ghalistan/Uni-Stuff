export default function FishMenu() {
    return (
        <div className="flex flex-row border-b mx-8 mt-5 py-5">
            <div className="flex flex-col flex-auto items-center space-y-2">
                <img src="/Mobile/fish_icon.svg" />
                <p className="font-NunitoSans font-bold text-black">Ikan</p>
            </div>
            <div className="flex flex-col flex-auto items-center space-y-2">
                <img src="/Mobile/shrimp_icon.svg" />
                <p className="font-NunitoSans font-bold text-black">Udang</p>
            </div>
            <div className="flex flex-col flex-auto items-center space-y-2">
                <img src="/Mobile/crab_icon.svg" />
                <p className="font-NunitoSans font-bold text-black">Kepiting</p>
            </div>
            <div className="flex flex-col flex-auto items-center space-y-2">
                <img src="/Mobile/lobster_icon.svg" />
                <p className="font-NunitoSans font-bold text-black">Lobster</p>
            </div>
        </div>
    )
}