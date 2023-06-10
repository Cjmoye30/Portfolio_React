// Importing react-sidebar component and getting starter code
// source: https://github.com/balloob/react-sidebar

import React from "react";
import Sidebar from "react-sidebar";

// define styles
const styles = {
    navGroup: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '200px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
}


const mql = window.matchMedia(`(min-width: 8000px)`);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarDocked: mql.matches,
          sidebarOpen: false
        };
    
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
    
      componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
      }
    
      componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
      }
    
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
    
      mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
      }

    render() {
        return (
            <Sidebar
                sidebar={
                    <div style={styles.navGroup} className='navGroup'>
                        <a className="nav-links" href="#projects-section">My Work</a>
                        <a className="nav-links" href="#about-me-section">About Me</a>
                        <a className="nav-links" href="assets/pdf/CambricMoye WebDev Resume.pdf"
                            target="_blank">Resume</a>
                        <a className="nav-links" href="#contact-me">Contact</a>
                    </div>
                }
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
            >

                <button onClick={() => this.onSetSidebarOpen(true)}>
                    Menu Icon
                </button>
            </Sidebar>
        );
    }
}

export default App;