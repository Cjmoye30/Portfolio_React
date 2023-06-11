// Importing react-sidebar component and getting starter code
// source: https://github.com/balloob/react-sidebar

import React from "react";
import Sidebar from "react-sidebar";

// Use some JS - add event listener. On click, give it a z-index of 2 so that it overlays everything.
// else, the default zIndex will just be 1
const handleClick = () => {
  console.log("Use this function to change the zIndex of the navbar because I can't figure anything else out")
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }



  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar:
          {
            background: "white",
            minHeight: '100%',
          },
          root:
          {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            zIndex: 2,
          },
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0,
            visibility: "hidden",
            transition: "opacity .3s ease-out, visibility .3s ease-out",
            backgroundColor: "rgba(0,0,0,.3)",
          }
        }}
      >

        <header>
          <button onClick={() => this.onSetSidebarOpen(true)}>
            <h1>Header Content - Sticky Header Needed</h1>
          </button>
        </header>
      </Sidebar>
    );
  }
}

export default App;