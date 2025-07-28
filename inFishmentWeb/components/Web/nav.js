import Link from 'next/link'

export default class Nav extends React.Component {

  state = {
    isTop: this.props.isMainPage ? true : false,
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY < 100 && this.props.isMainPage) {
        this.setState({ isTop: true })
      } else {
        this.setState({ isTop: false })
      }
    })
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return (
      <>
        <nav className={this.state.isTop ? "" : "bg-white shadow"}>
          <div className="flex flex-wrap">
            <Link href="/">
              <a>
                <img src={this.state.isTop ? "/inFishment_light.svg" : "/inFishment_dark.svg"} />
              </a>
            </Link>
          </div>
          <div className={"nav-menu space-y-3 md:space-y-0 md:space-x-4 " + (this.state.isTop ? "text-white" : "text-dark")} >
            <div>
              <Link href="/Pendanaan">
                <a>Pendanaan</a>
              </Link>
            </div>
            <div>
              <Link href="/about-us">
                <a>Tentang Kami</a>
              </Link>
            </div>
            <div className="pr-5">
              <Link href="/jadi-mitra">
                <a>Jadi Mitra</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap flex-col space-y-3 mt-3 md:mt-0 md:space-y-0 md:flex-row md:space-x-4 md:border-l md:items-center">
            <div className={"md:pl-5 " + (this.state.isTop ? "text-white" : "text-dark")}>
              <Link href="/login">
                <a>Masuk</a>
              </Link>
            </div>
            <div>
              <button className={"font-bold px-8 py-2 rounded " + (this.state.isTop ? "btn-white" : "btn-blue")}>Daftar</button>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
