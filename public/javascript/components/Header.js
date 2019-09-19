//  APP > # [ RELOAD TRIGGER, SEARCHBAR TOGGLE, LINKS ]

class Header extends React.Component {
    render() {
        return (
            <header>
                {(this.props.isMobile)

                    // ========================= MOBILE HEADER ========================= //

                    ? <nav>
                        <img src="../css/images/icon-menu.png" className="header-icon" />
                        <img src="../css/images/logo.png" onClick={() => { {this.props.triggerReload()} }} className="header-logo" />
                        <img src="../css/images/icon-search.png" onClick={() => { {this.props.toggleSearchbar()} }} className="header-icon" />
                    </nav>

                    // ========================= FULL HEADER ========================= //

                    : <nav>
                        <a onClick={() => { {this.props.omnisearchSerialKillers()} }} className="header-link">Serial Killers</a>
                        <a onClick={() => { {this.props.omnisearchUnsolved()} }} className="header-link">Unsolved</a>
                        <img src="../css/images/logo.png" onClick={() => { {this.props.triggerReload()} }} className="header-logo" />
                        <a onClick={() => { {this.props.toggleSearchbar()} }} className="header-link">Search</a>
                        <a href="#" className="header-link">Investigators</a>
                    </nav>
                }
            </header>
        )
    }
}