import YouTube from "react-youtube";
import Card from "./cards";
import Nav from "./nav";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Footer from "./footer";

export default function WebMainPage(props) {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris.";
    const longerlorem = "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nec id ultrices vulputate. Sollicitudin eu morbi in molestie dolor euismod tincidunt dictumst interdum. Amet aliquam dui sed ullamcorper aliquet mattis ut. Convallis ante felis blandit dui elit, varius cras scelerisque.”"

    return (
        <>
            <div className="fixed w-full bg-transparent">
                <Nav isMainPage={true} />
            </div>
            <div className="w-full h-75 bg-mainpage bg-cover bg-center" />
            <div className="flex flex-col w-full items-center mt-20">
                <h1 className="text-4xl font-visby text-primaryblue">Alasan Kami Hadir</h1>
                <div className="-mb-16 mt-12">
                    <YouTube videoId="1eyl6ga045w" />
                </div>
                <div className="flex w-full bg-blue-part bg-cover bg-center py-20 justify-center">
                    <div className="flex flex-wrap flex-col space-y-3 sm:flex-row sm:space-x-10 sm:space-y-0 font-visby mt-6 text-white">
                        <div className="flex flex-col">
                            <div className="place-self-center"><h1 className="text-5xl">200</h1></div>
                            <div className="place-self-center"><a>Mitra Tambak</a></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="place-self-center"><h1 className="text-5xl">1.000</h1></div>
                            <div className="place-self-center"><a>Pemodal</a></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="place-self-center"><h1 className="text-5xl">Rp4.7M</h1></div>
                            <div className="place-self-center"><a>Dana Tersalurkan</a></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="place-self-center"><h1 className="text-5xl">95%</h1></div>
                            <div className="place-self-center"><a>Tingkat Keberhasilan</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-20 items-center space-y-20 font-visby">
                <h1 className="text-4xl text-primaryblue">Cara Kerja Infishment</h1>
                <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-items-center">
                    <div className="flex flex-col max-w-sm items-center text-center space-y-2">
                        <img src="/Ikan.png" />
                        <h1>Danai Proyek yang tersedia</h1>
                        <p className="font-inter">{lorem}</p>
                    </div>
                    <div className="flex flex-col max-w-sm items-center text-center space-y-2">
                        <img src="/Laptop.png" />
                        <h1>Danai Proyek yang tersedia</h1>
                        <p className="font-inter">{lorem}</p>
                    </div>
                    <div className="flex flex-col max-w-sm items-center text-center space-y-2">
                        <img src="/Cash.png" />
                        <h1>Danai Proyek yang tersedia</h1>
                        <p className="font-inter">{lorem}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full py-20 space-y-20 items-center font-visby bg-light-blue">
                <div><h1 className="text-4xl text-primaryblue">Rekomendasi Pendanaan</h1></div>
                <div className="grid px-4  xl:grid-cols-4 gap-4 sm:grid-cols-2 max-w-screen-xl">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="flex flex-col w-full py-20 items-center bg-mainpage-parts bg-cover bg-center font-visby space-y-20">
                <h1 className="text-4xl text-white text-center">Keuntungan Menggunakan Infishment</h1>
                <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row lg:mx-64 md:space-x-4">
                    <div className="flex flex-col justify text-center space-y-3">
                        <img src="/ic-handshake.svg" />
                        <p className="text-white">Proses Adil dan Kredibel</p>
                        <p className="font-inter text-white">{lorem}</p>
                    </div>
                    <div className="flex flex-col justify text-center space-y-3">
                        <img src="/ic-online.svg" />
                        <p className="text-white">Proses Adil dan Kredibel</p>
                        <p className="font-inter text-white">{lorem}</p>
                    </div>
                    <div className="flex flex-col justify text-center space-y-3">
                        <img src="/ic-margin.svg" />
                        <p className="text-white">Proses Adil dan Kredibel</p>
                        <p className="font-inter text-white">{lorem}</p>
                    </div>
                    <div className="flex flex-col justify text-center space-y-3">
                        <img src="/ic-social-care.svg" />
                        <p className="text-white">Proses Adil dan Kredibel</p>
                        <p className="font-inter text-white">{lorem}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full py-20 items-center space-y-20 font-visby">
                <h1 className="text-4xl text-primaryblue">Pendapat Pemodal</h1>
                <div className="w-3/5 font-inter text-light-gray">
                    <Carousel >
                        <div className="flex flex-col items-center text-center">
                            <img src="/bg-mainpage.png" className="rounded-full h-32 w-32 my-8" />
                            <h1 className="text-xl">Ryo Alif R</h1>
                            <h2 className="text-xs">Mahasiswa</h2>
                            <p className="text-xl py-10">{longerlorem}</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img src="/bg-mainpage.png" className="rounded-full h-32 w-32 my-8" />
                            <h1 className="text-xl">Ryo Alif R</h1>
                            <h2 className="text-xs">Mahasiswa</h2>
                            <p className="text-xl py-10">{longerlorem}</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img src="/bg-mainpage.png" className="rounded-full h-32 w-32 my-8" />
                            <h1 className="text-xl">Ryo Alif R</h1>
                            <h2 className="text-xs">Mahasiswa</h2>
                            <p className="text-xl py-10">{longerlorem}</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img src="/bg-mainpage.png" className="rounded-full h-32 w-32 my-8" />
                            <h1 className="text-xl">Ryo Alif R</h1>
                            <h2 className="text-xs">Mahasiswa</h2>
                            <p className="text-xl py-10">{longerlorem}</p>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="flex flex-col items-center -my-16">
                <div className="flex bg-blue-part bg-cover bg-center lg:w-3/5 items-center justify-between rounded-lg px-8 py-10">
                    <div className="text-xl text-white font-visby">Bersama Kita Bantu Sejahterakan Petambak Lokal</div>
                    <button className="bg-white rounded font-inter text-primaryblue font-bold px-5 py-3">Mulai Pendanaan</button>
                </div>
            </div>
            <div className="flex flex-col w-full py-24 items-center bg-light-blue space-y-20 font-visby text-primaryblue font-bold">
                <h1 className="text-4xl text-center">Pertanyaan yang Sering Ditanyakan</h1>
                <div className="max-w-screen-xl">
                    <div className="flex flex-col items-center w-full border-t border-divider py-3">
                        <div className="w-full flex flex-row place-content-between">
                            <a className="text-base">Lorem Ipsum Sit Dolor Amet</a>
                            <img src="/ic-remove.svg" />
                        </div>
                        <div className="font-inter text-gray font-light text-sm my-4">
                            <p>{lorem + lorem + lorem + lorem + lorem + lorem}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full border-t border-divider py-3">
                        <div className="w-full flex flex-row place-content-between">
                            <a className="text-base">Lorem Ipsum Sit Dolor Amet</a>
                            <img src="/ic-add.svg" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full border-t border-divider py-3">
                        <div className="w-full flex flex-row place-content-between">
                            <a className="text-base">Lorem Ipsum Sit Dolor Amet</a>
                            <img src="/ic-add.svg" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full border-t border-divider py-3">
                        <div className="w-full flex flex-row place-content-between">
                            <a className="text-base">Lorem Ipsum Sit Dolor Amet</a>
                            <img src="/ic-add.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}