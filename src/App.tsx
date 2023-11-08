import { useEffect, useRef } from "react";
import "./App.css";
import { MainLayout } from "./layouts";
import { WebPage } from "./components";
import { useStore } from "./store";
import { useTabs, useUrl } from "./hooks";

function App() {
  const webviewRef = useRef<Electron.WebviewTag>(null);

  const { setRef } = useStore();

  useUrl();
  useTabs();

  useEffect(() => {
    setRef(webviewRef);
  }, [setRef, webviewRef]);

  return (
    <MainLayout>
      <WebPage />
    </MainLayout>
  );
}

export default App;
