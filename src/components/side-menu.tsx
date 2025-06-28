import { useEffect, useState } from "react";

interface SideMenuProps {
  menuItems: {
    id: string;
    title: string;
  }[];
}

const SideMenu = ({ menuItems }: SideMenuProps) => {
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
    //[document.querySelector('#aboutme'), document.querySelector('#work'), document.querySelector('#hobbies'), document.querySelector('#contacts')]
    const elements: Element[] = menuItems.map(item => document.querySelector(`#${item.id}`)).filter(Boolean) as Element[];
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
    <aside className="hidden md:flex justify-center sticky top-40 h-96 pt-1.5 ">
      <div className="flex flex-col w-80">

        {menuItems.map((item, index) => (
          <>
            <div className="flex items-center gap-4">
              <div className="flex justify-center w-5">
                <div className={`${(inViewElement?.id === item.id ? "w-4 h-4 glow" : "w-2 h-2")} bg-amber-50 rounded-full transition-all`}></div>
              </div>
              <button onClick={() => handleScrollIntoView(item.id)} className={`${(inViewElement?.id === item.id ? "text-xl font-semibold ml-3 " : "")} cursor-pointer transition-all`}>{item.title}</button >
            </div >

            {
            index < menuItems.length - 1  && 
            <div className="flex justify-center w-5">
              <div className="w-0.5 h-16 -my-2.5 bg-amber-50"></div>
            </div>}
          </>
        ))}

      </div>
    </aside >

  );
}

export default SideMenu;