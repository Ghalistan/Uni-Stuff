import Nav from '../components/Web/nav'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Transition } from '@headlessui/react'

export default class AboutUs extends React.Component {
  constructor(props) {
    super(props)
    this.longlorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab."
    this.state = {
      showModal: false
    }
  }

  render() {
    return (
      <>
        <Nav />
        <div className="bg-light-blue">
          <div className="flex flex-col xl:flex-row justify-center space-y-4 xl:space-y-0 xl:space-x-4 py-20 px-10 xl:px-32">
            <div className="flex-1 bg-white rounded-lg">
              <div className="flex flex-row space-x-10 p-6">
                <div className="flex w-1/4">
                  <Carousel>
                    <div className="flex w-full">
                      <img src="/bg-mainpage.png" className="h-64 transform" />
                    </div>
                    <div className="flex w-full">
                      <img src="/bg-mainpage.png" className="h-64 transform" />
                    </div>
                    <div className="flex w-full">
                      <img src="/bg-mainpage.png" className="h-64 transform" />
                    </div>
                  </Carousel>
                </div>
                <div className="flex flex-col flex-auto font-visby">
                  <div className="border-b pb-4">
                    <h1 className="font-visby text-primaryblue font-bold text-3xl">Budidaya Kepiting Air Payau</h1>
                    <div className="flex flex-row space-x-2 text-dark-gray">
                      <img src="/ic-location.svg" />
                      <p className="font-visby font-light">Cisarua, Bogor.</p>
                    </div>
                  </div>
                  <div className="my-4">
                    <div className="flex flex-col">
                      <div className="flex flex-row justify-between">
                        <h1>Pembiayaan Terpenuhi</h1>
                        <h1>90%</h1>
                      </div>
                      <div className="bg-divider h-2 rounded-xl mt-2">
                        <div className="bg-midyellow h-2 rounded-xl leading-none py-1 text-center text-white" style={{ width: "90%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-col flex-auto space-y-4">
                      <div>
                        <h1 className="text-xs">Proyek Dimulai</h1>
                        <p className="font-bold text-secondarygrey">24 Mei 2021</p>
                      </div>
                      <div>
                        <h1 className="text-xs">Dana Terkumpul</h1>
                        <p className="font-bold text-goodgreen">Rp25.000.000</p>
                      </div>
                      <div>
                        <h1 className="text-xs">Kuota Pendanaan</h1>
                        <p className="font-bold text-primaryblue">200 Unit</p>
                      </div>
                      <div>
                        <h1 className="text-xs">Harga per Unit</h1>
                        <p className="font-bold text-goodgreen">Rp500.000</p>
                      </div>
                    </div>
                    <div className="flex flex-col flex-auto space-y-4">
                      <div>
                        <h1 className="text-xs">Periode Budidaya</h1>
                        <p className="font-bold text-secondarygrey">120 Hari</p>
                      </div>
                      <div>
                        <h1 className="text-xs">Resiko</h1>
                        <p className="font-bold text-midyellow">Sedang</p>
                      </div>
                      <div>
                        <h1 className="text-xs">Kuota Tersisa</h1>
                        <p className="font-bold text-primaryblue">50 Unit</p>
                      </div>
                      <div>
                        <h1 className="text-xs">Keuntungan</h1>
                        <p className="font-bold text-primaryblue">14.5%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-visby p-6">
                <div>
                  <ul className="flex border-b border-divider">
                    <li className="py-2">
                      <a className="border-b-4 border-primaryblue py-2 px-4 text-primaryblue">Deskripsi</a>
                    </li>
                    <li className="py-2">
                      <a className="py-2 px-4 text-dark-gray">Aktivitas</a>
                    </li>
                    <li className="py-2">
                      <a className="py-2 px-4 text-dark-gray">Simulasi Pengembalian</a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row space-x-4 py-5">
                  <div className="flex-1">
                    <p>{this.longlorem}</p>
                  </div>
                  <div className="flex flex-1 justify-center">
                    <img src="/map-placeholder.png" className="w-2/4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-initial xl:w-1/5">
              <div>
                <div className="flex flex-col bg-white rounded-lg font-visby p-4 space-y-3">
                  <h1>Mulai Pendanaan</h1>
                  <h1>Unit Pendanaan</h1>
                  <div className="flex flex-row space-x-2">
                    <button><img src="/ic-remove.svg" className="min-w-min-content border p-2 rounded-lg" /></button>
                    <input type="text" className="flex-auto appearance-none border text-center bg-divider rounded-lg" value="1" disabled />
                    <button><img src="/ic-add.svg" className="min-w-min-content border p-2 rounded-lg" /></button>
                  </div>
                  <div className="flex flex-row justify-between border-b py-3">
                    <h1>Estimasi Keuntungan</h1>
                    <h1>Rp25.000</h1>
                  </div>
                  <div className="flex flex-row justify-between border-b py-3">
                    <h1>Total Keuntungan</h1>
                    <h1 className="text-goodgreen">Rp225.000</h1>
                  </div>
                  <div className="flex flex-row justify-between border-b py-3">
                    <h1>Tanggal Keuntungan</h1>
                    <h1>25 Sept 2021</h1>
                  </div>
                  <div className="flex flex-col text-center">
                    <h1>Total Investasi</h1>
                    <h1 className="text-3xl">Rp200.000</h1>
                  </div>
                  <button 
                    className="bg-primary-blue rounded-lg focus:outline-none text-white py-4"
                    onClick={() => this.setState({ showModal: true })}
                  >
                    Biayai Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- MODAL -------------------*/}
          <>
            <Transition
              show={this.state.showModal}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      
                  <div 
                    className="fixed inset-0 transition-opacity"
                    onClick={() => this.setState({ showModal: false })} 
                  >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                  </div>

                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="flex flex-col pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="mx-auto text-center">
                        <img src="/bg-mainpage.png" className="rounded-full h-56 w-56 m-auto mb-8"/>
                        <h1 className="text-primaryblue font-bold text-xl mb-1">Budidaya Kepiting Air Payau</h1>
                        <div className="font-bold text-lg mb-4">
                          <span className="text-primaryblue">5 Unit</span>
                          <span className="text-black"> x Rp.200,000</span>
                        </div>
                      </div>
                      <div className="flex flex-row space-x-4 justify-around text-center mb-5">
                        <div>
                          <h1 className="font-visby font-semibold mb-2 text-lg">Total Pembayaran</h1>
                          <h1 className="font-visby font-bold text-green-500 text-2xl">Rp.200,000</h1>
                        </div>
                        <div className="bg-cool-gray-400 border h-12 self-center"></div>
                        <div>
                          <h1 className="font-visby font-semibold text-lg mb-2">Status Pembayaran</h1>
                          <h1 className="font-visby font-bold text-yellow-300 text-2xl">Diproses</h1>
                        </div>
                      </div>
                      <div className="flex flex-col w-full mx-auto text-center bg-blue-200 bg-opacity-25 rounded p-4 sm:p-6 sm:py-4 mb-7">
                        <img src="/Mandiri.png" className="h-8 m-auto mb-4"/>
                        <h1 className="font-visby font-bold text-dark-gray text">TRANSFER KE VIRTUAL ACCOUNT</h1>
                        <h1 className="text-primaryblue font-bold text-xl">18823081399321082</h1>
                        <button type="button" className="underline font-visby font-bold text-dark-gray text focus:outline-none">Salin Nomor Rek</button>
                      </div>
                      <button 
                        className="w-full bg-midyellow font-visby font-bold py-3 rounded-lg mb-3 focus:outline-none"
                        onClick={() => this.setState({ showModal: false })}
                      >
                          Update Status Pembayaran
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </>
        </div>
      </>
    )
  }
}