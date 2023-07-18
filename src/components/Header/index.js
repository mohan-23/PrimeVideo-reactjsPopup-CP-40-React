import {withRouter, Link} from 'react-router-dom'
import {Component} from 'react'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'

import './index.css'

class Header extends Component {
  state = {value: ''}

  onClickHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  onClickAbout = () => {
    const {history} = this.props
    history.replace('/about')
  }

  onClickLogo = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderPopup = () => (
    <ul className="popup-menu">
      <li>
        <button type="button" className="row-button" onClick={this.onClickHome}>
          <AiFillHome />
          <Link to="/" className="link">
            <p className="tab">Home</p>
          </Link>
        </button>
      </li>
      <li>
        <button
          type="button"
          className="row-button"
          onClick={this.onClickAbout}
        >
          <BsInfoCircleFill />
          <Link to="/about" className="link">
            <p className="tab">About</p>
          </Link>
        </button>
      </li>
    </ul>
  )

  render() {
    const {value} = this.state

    return (
      <div className="container">
        <div className="nav-container">
          <button
            type="button"
            className="img-button"
            onClick={this.onClickLogo}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              alt="website logo"
              className="nav-logo"
            />
          </button>
          <div>
            <Popup
              modal
              trigger={
                <button
                  type="button"
                  className="trigger-button"
                  data-testid="hamburgerIconButton"
                >
                  <GiHamburgerMenu className="menu-icon" />
                </button>
              }
            >
              {close => (
                <>
                  {this.renderPopup()}
                  <button
                    type="button"
                    className="trigger-button"
                    data-testid="closeButton"
                    onClick={() => close()}
                  >
                    <IoMdClose />
                  </button>
                </>
              )}
            </Popup>
          </div>
        </div>
        <ul className="paths">
          <li className="item">
            <Link to="/">{this.onClickHome}</Link>
          </li>
          <li>
            <Link to="/about">{this.onClickAbout}</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Header)
