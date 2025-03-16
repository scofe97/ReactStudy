import './App.css'
import Page from "./components/Page.tsx";
import Main from "./components/Main.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";
import {TermsAndConditions} from "./components/TermsAndConditions.tsx";

function App() {

  return (
      <>
      <Page
          header={<Header title="My Application" subtitle="Product Page" onClick={() => console.log("toggle header")} />}

          sidebar={<Sidebar links={["Home", "About", "Contact"]} onLinkClick={(link) => console.log(`toggle sidebar: ${link}`)} />}

          main={<Main isLoading={false} content={<div>The main content</div>} />}
      />

      <TermsAndConditions />
      </>
  )
}

export default App
