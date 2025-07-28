import Nav from '../components/Web/nav'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Card from '../components/Web/cards'

export default function Pendanaan() {
  return (
    <>
      <div className="w-full">
        <Nav />
      </div>
      <div className="flex flex-col xl:flex-row xl:px-32 bg-light-blue pb-24">
        <div className="flex-auto lg:flex-initial rounded-lg font-bold m-5 xl:w-1/4">
          <div className="flex flex-col shadow-lg p-4 space-y-4 rounded-lg bg-white border">
            <div className="space-y-2">
              <h1>Komoditas</h1>
              <select className="w-full appearance-none py-2 px-4 rounded-lg font-inter text-sm border">
                <option>Semua Komoditas</option>
                <option>Komoditas A</option>
                <option>Komoditas B</option>
                <option>Komoditas C</option>
              </select>
            </div>
            <div className="space-y-2">
              <h1>Tingkat Resiko</h1>
              <select className="w-full appearance-none py-2 px-4 rounded-lg font-inter text-sm border">
                <option>Semua Resiko</option>
                <option>Komoditas A</option>
                <option>Komoditas B</option>
                <option>Komoditas C</option>
              </select>
            </div>
            <div className="space-y-2">
              <h1>Keuntungan</h1>
              <div className="flex flex-row space-x-3">
                <input type="text" placeholder="0" className="rounded-lg border py-2 px-4 w-full" />
                <input type="text" placeholder="20" className="rounded-lg border py-2 px-4 w-full" />
              </div>
            </div>
            <div className="pt-10">
              <button className="w-full bg-midyellow font-visby font-bold py-3 rounded-lg">Cari Pendanaan</button>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 xl:px-0">
          <h1 className="font-inter font-semibold text-dark py-5">Menampilkan 6 dari 6 Proyek Pendanaan</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}