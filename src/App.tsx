import './App.css'
import ShareButton from './components/share-button';
import SideMenu from './components/side-menu';
import Section from './components/section';

const menuItems = [
  { id: 'aboutme', title: 'About me', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 'work', title: 'Work Experience', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 'hobbies', title: 'Hobbies', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 'contacts', title: 'Contacts', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
];

function App() {

  return (
    <>

      <header className="w-full flex justify-center">
        <div className="w-full h-dvh flex items-center justify-center">
          <div className="flex-col items-center md:flex-row flex gap-30 mb-64">
            <div className="rounded-full w-60 h-60 bg-amber-50 flex justify-center items-center">

            </div>
            <div className="flex flex-col gap-4 justify-center">
              <h1 className="text-4xl md:text-5xl font-semibold text-white">Madalin Peptine</h1>
              <p className="text-lg font-light text-gray-300">Frontend Developer</p>

            </div>
          </div>
        </div>
      </header>
      <main className="w-10/12 lg:w-8/12 2xl:w-6/12 flex flex-col md:flex-row gap-4 p-4 relative">

        <SideMenu menuItems={menuItems} />

        <div className="flex flex-col gap-60 flex-auto">
          {menuItems.map((item) => <Section id={item.id} title={item.title} description={item.description} />)}
        </div>

      </main>
      <footer className='h-80'></footer>
      <ShareButton />
    </>
  )
}

export default App
