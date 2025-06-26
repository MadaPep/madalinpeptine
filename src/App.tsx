import { Link } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react';
import ShareButton from './components/share-button';

function App() {

  const [inViewElement, setInViewElement] = useState<Element | null>(null);

  const visibleElement = (elements: Element[]) => {
    const visisbleElements = elements.filter((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = (
        // rect.top >= 60 &&
        rect.bottom >= 60 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
      return isVisible;
    })
    if (visisbleElements.length === 0) {
      return null;
    }
    const firstVisible = visisbleElements.sort((a: Element, b: Element) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0];
    return firstVisible;
  };

  const handleScroll = () => {
    const elements: Element[] = [document.querySelector('#aboutme'), document.querySelector('#work'), document.querySelector('#hobbies'), document.querySelector('#contacts')].filter(Boolean) as Element[];
    if (!elements) {
      return;
    }

    const visibleEl = visibleElement(elements)
    visibleEl === inViewElement ? null : setInViewElement(visibleEl);
  };

  useEffect(() => {
    const rootEle = document.querySelector('body');
    if (!rootEle) {
      return;
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // setInViewElement(element);
    }
  }

  return (
    <>

      <header className="w-10/12 lg:w-8/12 2xl:w-6/12 ">
        <div className="w-full h-dvh flex  items-center">
          <div className="flex gap-30 mb-64">
            <div className="rounded-full w-40 md:w-60 h-40 md:h-60 bg-amber-50 flex justify-center items-center">

            </div>
            <div className="flex flex-col gap-4 justify-center">
              <h1 className="text-5xl font-semibold text-white">Madalin Peptine</h1>
              <p className="text-lg font-light text-gray-300">Frontend Developer</p>

            </div>
          </div>
        </div>
      </header>
      <main className="w-10/12 lg:w-8/12 2xl:w-6/12 flex flex-col md:flex-row gap-4 p-4 relative">

        <aside className="flex justify-center sticky top-40 h-96 pt-1.5">
          <div className="flex flex-col w-80">
            <div className="flex items-center gap-4">
              <div className="flex justify-center w-5">
                <div className={`${(inViewElement?.id === "aboutme" ? "w-4 h-4 glow" : "w-2 h-2")} bg-amber-50 rounded-full transition-all`}></div>
              </div>
              <button onClick={() => handleScrollIntoView("aboutme")} className={`${(inViewElement?.id === "aboutme" ? "text-xl font-semibold ml-3" : "")} transition-all`}>About me</button >
            </div>
            <div className="flex justify-center w-5">
              <div className="w-0.5 h-16 -my-2.5 bg-amber-50"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex justify-center w-5">
                <div className={`${(inViewElement?.id === "work" ? "w-4 h-4 glow" : "w-2 h-2")} bg-amber-50 rounded-full transition-all`}></div>
              </div>
              <button onClick={() => handleScrollIntoView("work")} className={`${(inViewElement?.id === "work" ? "text-xl font-semibold ml-3" : "")} transition-all`}>Work Experience</button>
            </div>
            <div className="flex justify-center w-5">
              <div className="w-0.5 h-16 -my-2.5 bg-amber-50"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex justify-center w-5">
                <div className={`${(inViewElement?.id === "hobbies" ? "w-4 h-4 glow" : "w-2 h-2")} bg-amber-50 rounded-full transition-all`}></div>
              </div>
              <button onClick={() => handleScrollIntoView("hobbies")} className={`${(inViewElement?.id === "hobbies" ? "text-xl font-semibold ml-3" : "")} transition-all`}>Hobbies</button>
            </div>
            <div className="flex justify-center w-5">
              <div className="w-0.5 h-16 -my-2.5 bg-amber-50"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex justify-center w-5">
                <div className={`${(inViewElement?.id === "contacts" ? "w-4 h-4 glow" : "w-2 h-2")} bg-amber-50 rounded-full transition-all`}></div>
              </div>
              <button onClick={() => handleScrollIntoView("contacts")} className={`${(inViewElement?.id === "contacts" ? "text-xl font-semibold ml-3" : "")} transition-all`}>Contacts</button>
            </div>
          </div>
        </aside>

        <div className="flex flex-col gap-60 flex-auto">
          <section id="aboutme">
            <h1 className="text-2xl font-semibold">About me</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </section>

          <section id="work">
            <h1 className="text-2xl font-semibold">Work Experience</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </section>

          <section id="hobbies">
            <h1 className="text-2xl font-semibold">Hobbies</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </section>

          <section id="contacts">
            <h1 className="text-2xl font-semibold">Contacts</h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </section>

        </div>

      </main>
      <ShareButton />
    </>
  )
}

export default App
