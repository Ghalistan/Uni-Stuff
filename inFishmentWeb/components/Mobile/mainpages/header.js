export function MobileMainPageHeader() {
    return (
        <div className="bg-white">
            <img src="/Mobile/mainpage-bg.png" />
            <div className="flex flex-row mx-5 px-4 py-2 bg-white rounded-lg shadow-xl">
                <div className="flex flex-col flex-auto items-center">
                    <div>
                        <img src="/Mobile/topup-icon.png" />
                    </div>
                    <p className="font-NunitoSans font-bold text-primaryblue">Top up</p>
                </div>
                <div className="flex flex-col flex-auto items-center">
                    <div>
                        <img src="/Mobile/withdraw-icon.png" />
                    </div>
                    <p className="font-NunitoSans font-bold text-primaryblue">Withdraw</p>
                </div>
                <div className="flex flex-col flex-auto items-center">
                    <div>
                        <img src="/Mobile/history-icon.png" />
                    </div>
                    <p className="font-NunitoSans font-bold text-primaryblue">History</p>
                </div>
            </div>
        </div>
    )
}