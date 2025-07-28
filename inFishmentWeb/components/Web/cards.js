import Link from 'next/link'

export default function Card() {
    return (
        <div className="w-full rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-40" src="/bg-mainpage.png" />
            <div className="py-4">
                <div className="px-6">
                    <div className="text-xl mb-2 text-primaryblue">Budidaya Ikan Kerapu</div>
                    <div className="flex flex-row mt-8">
                        <div className="flex-auto flex-col">
                            <div className="text-secondarygrey text-xs">Harga Per Unit</div>
                            <div className="text-goodgreen">Rp500.000</div>
                            <div className="text-secondarygrey text-xs mt-4">Dana Terkumpul</div>
                            <div className="text-goodgreen">Rp25.000.000</div>
                        </div>
                        <div className="flex-auto">
                            <div className="text-secondarygrey text-xs">Keuntungan</div>
                            <div className="text-primaryblue">14.5%</div>
                            <div className="text-secondarygrey text-xs mt-4">Resiko</div>
                            <div className="text-midyellow">Sedang</div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-divider my-8" />
                <div className="px-6">
                    <div className="flex flex-row">
                        <div className="flex-auto text-secondarygrey text-xs">Pembiayaan Terpenuhi</div>
                        <div className="flex-wrap items-end text-secondarygrey text-xs">90%</div>
                    </div>
                    <div className="w-full">
                        <div className="w-full bg-divider h-2 rounded-xl mt-2">
                            <div className="bg-midyellow h-2 rounded-xl leading-none py-1 text-center text-white" style={{ width: "90%" }} />
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <Link href="/detail-page">
                            <button className="w-full bg-primary-blue rounded py-3 text-white">Lihat Detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}