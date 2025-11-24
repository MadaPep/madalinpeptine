import './App.css'
import ShareButton from './components/share-button';
import SideMenu from './components/side-menu';
import Section from './components/section';

const menuItems = [
  {
    id: 'aboutme',
    title: 'About me',
    description: 'Experienced and passionate Frontend Developer with strong foundations in both frontend and backend development. With over five years of experience in the industry, I specialise in developing Angular and React applications, bringing a keen eye for UX/UI design. I thrive in fast-paced, collaborative environments, mentor junior developers, and contribute to the development of scalable, elegant solutions.'
  },
  {
    id: 'work',
    title: 'Work Experience',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    details: [
      {
        id: 'job1',
        title: 'Frontend Developer at XYZ Company',
        description: 'Developed and maintained web applications using React and Angular. Collaborated with designers to implement user-friendly interfaces. Improved application performance by optimizing code and implementing best practices.'
      },
      {
        id: 'job2',
        title: 'Junior Frontend Developer at ABC Inc.',
        description: 'Assisted in the development of web applications using HTML, CSS, and JavaScript. Participated in code reviews and contributed to team knowledge sharing sessions. Gained experience in responsive design and cross-browser compatibility.'
      },
      {
        id: 'job3',
        title: 'Intern at Web Solutions Ltd.',
        description: 'Supported the development team in building and testing web applications. Learned about version control systems and agile development methodologies. Contributed to documentation and user guides for end-users.'
      }
    ]
  },
  {
    id: 'hobbies',
    title: 'Hobbies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 'contacts',
    title: 'Contacts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

function App() {

  return (
    <>

      <header className="w-full flex justify-center">
        <div className="w-full h-dvh flex items-center justify-center">
          <div className="flex-col items-center md:flex-row flex gap-30 md:mb-64">
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
          {menuItems.map((item, index) => <Section key={item.id} className={index === menuItems.length - 1 ? "mb-72" : ""} item={item} />)}
        </div>

      </main>
      <footer className='h-80'></footer>
      <ShareButton />
    </>
  )
}

export default App
