export default function Footer() {
    const data = new Map()
    data.set('company', 'PT.Infishment Indonesia')
    data.set('lorem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nec id ultrices')
    data.set('notelp', '(021) 12345678 / (021) 12345678')
    data.set('email', 'hi@infishment.id')

    return (
        <div className="flex flex-col p-4 space-y-3 md:space-y-0 md:flex-row lg:mx-48 lg:my-20 font-visby justify-center ">
            <div className="flex-auto w-1/4">
                <div className="text-xs text-gray space-y-2">
                    <img src="/inFishment_dark.svg" />
                    <h1>{data.get('company')}</h1>
                    <p className="font-inter">{data.get('lorem')}</p>
                    <p className="font-inter">{data.get('notelp')}</p>
                    <p className="font-inter">{data.get('email')}</p>
                </div>
            </div>
            <div className="flex-auto space-y-2">
                <h1 className="text-primaryblue">Tentang iTernak</h1>
                <div className="flex flex-row text-xs">
                    <div className="flex flex-col flex-auto space-y-1">
                        <a>Tentang Kami</a>
                        <a>Cara Kerja</a>
                        <a>Pembiayaan</a>
                        <a>Hubungi Kami</a>
                    </div>
                    <div className="flex flex-col flex-auto space-y-1">
                        <a>FAQ</a>
                        <a>Blog</a>
                        <a>{"Syarat & Ketentuan"}</a>
                        <a>Pelayanan Investor</a>
                    </div>
                </div>
            </div>
            <div className="flex-auto space-y-2">
                <h1 className="text-primaryblue">{"Dapatkan Info & Penawaran Terbaru dari kami."}</h1>
                <div className="flex flex-row">
                    <input type="email" placeholder="Alamat Email" className="font-inter bg-gray rounded-l-md outline-none px-3" />
                    <button className="bg-primary-blue p-3 rounded-r-md"><img src="/ic-sent.svg" /></button>
                </div>
            </div>
        </div>
    )
}