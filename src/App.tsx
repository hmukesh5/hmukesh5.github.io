import * as Accordion from '@radix-ui/react-accordion';
import * as Switch from '@radix-ui/react-switch';
import Project from './components/project.tsx';
import linkedin from './data/linkedin.png';
import github from './data/github.png';
import { useState, useEffect } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "rgb(23,23,23)" : "white";
        document.body.style.color = darkMode ? "rgb(229,229,229)" : "rgb(23,23,23)";
    }, [darkMode]);    

    const reactLink = <a href="https://react.dev/" className="underline" target="_blank">React</a>;
    const tailwindCSSLink = <a href="https://tailwindcss.com/" className="underline" target="_blank">Tailwind CSS</a>;
    const wordleLink = <a href="https://www.nytimes.com/games/wordle/index.html" className="underline" target="_blank">Wordle</a>;
    const pygameLink = <a href="https://www.pygame.org/wiki/about" className="underline" target="_blank">pygame</a>;
    const nextcordLink = <a href="https://docs.nextcord.dev/en/stable/" className="underline" target="_blank">nextcord</a>;

    const projects = [
        {
            value: "portfolio",
            title: <>this website</>,
            link: <></>,
            content: <>The website you are currently viewing!
                       Built with {reactLink} and {tailwindCSSLink}.</>
        },
        {
            value: "wordle",
            title: <>wordle by hemanth | </>,
            link: <a href="http://wordle-clone-5fbt.onrender.com/" target="_blank" className="underline">link</a>,
            content: <>A word puzzle as a web app inspired by the popular {wordleLink} game. Built with {reactLink}.</>
        },
        {
            value: "choredash",
            title: <>ChoreDash | </>,
            link: <a href="https://hmukesh.itch.io/chore-dash" target="_blank" className="underline">homepage</a>,
            content:<>
                        A short 2D game where you control a character who must rush to complete chores before their mom comes home.
                        Built in Python with the {pygameLink} module.
                        <br/>
                        <span className="font-bold text-amber-600">Capsher x ACC Coding Challenge 2023 1st place winner</span>
                    </>
        },
        {
            value: "jerma",
            title: <>Jerma985 Discord Bot | </>,
            link: <a href="https://github.com/prknezek/Jerma985Bot" target="_blank" className="underline">github</a>,
            content:<>
                        A Discord bot based on the popular Twitch streamer Jerma985.
                        Built in Python with the {nextcordLink} module.
                        <br/>
                        <span className="font-bold text-amber-600">ACC Discord Bot Challenge 2022 1st place winner</span>
                    </>
        },
        {
            value: "network",
            title: <>C++ Network Applications</>,
            link: <></>,
            content:<>
                        During CSCE 463 - Networks and Distributed Processing at TAMU, I created a suite of various network applications. While I cannot share the codebase due to academic policies, I am working on a way to allow remote execution on a server.
                        Built in C++ with Visual Studio.
                    </>
        }
    ];

    function expandAll() {
        if (expandedItems.length === projects.length) {
            setExpandedItems([]);
        } else {
            setExpandedItems(projects.map(project => project.value));
        }
    }

    return (
        <div className="min-h-screen max-w-4xl mx-auto py-6 sm:py-8 px-4 sm:px-6">

            <div className="mb-4">
                <p className="text-center font-bold text-4xl sm:text-5xl">Hemanth Mukesh</p>                
            </div>

            <div className="mt-5 mb-5 flex justify-evenly m-auto w-40">
                <a className={darkMode ? "invert" : ""} href="https://linkedin.com/in/hmukesh5" target="_blank"><img src={linkedin} width={30} height={30}></img></a>
                <a className={darkMode ? "invert" : ""} href="https://github.com/hmukesh5" target="_blank"><img src={github} width={30} height={30}></img></a>
            </div>

            <div className="mb-4 text-base sm:text-lg">
                <p>Hello! My name is Hemanth Mukesh, and I'm a computer science senior at Texas A&M University. 
                   Below is a collection of projects I've worked on both in and out of college.
                   Feel free to contact me at <a className="underline" href="mailto:hmukesh@outlook.com">hmukesh@outlook.com</a>!
                </p>
            </div>

            <div className="max-w-fit">
                <div className="flex align-middle mb-4 mt-6">
                    <h3 className="font-bold text-xl sm:text-2xl underline">projects</h3>
                    <button onClick={expandAll} className={`ml-4 border-black border-2 rounded text-base px-2 ${darkMode ? 'border-neutral-200 hover:bg-neutral-200 hover:text-black' : 'border-neutral-900 hover:bg-neutral-900 hover:text-neutral-200'}`}>
                        {expandedItems.length === projects.length ? "collapse all" : "expand all"}
                    </button>
                </div>
                
                <Accordion.Root value={expandedItems} type='multiple' className="flex flex-col gap-3">
                    {projects.map(project => (
                        <Project
                            value={project.value}
                            project_title={project.title}
                            project_link={project.link}
                            content={project.content}
                            expandedItems={expandedItems}
                            setExpandedItems={setExpandedItems}
                        />
                    ))}
                </Accordion.Root>
            </div>
            
            <br/>
            <div className="">
                <p className="text-base sm:text-lg mr-2 inline align-top">dark mode:</p>

                <Switch.Root className="SwitchRoot inline align-middle" id="airplane-mode" onCheckedChange={(checked) => {
                    setDarkMode(checked);
                }}>
                    <Switch.Thumb className="SwitchThumb" />
                </Switch.Root>
            </div>

        </div>
    )
}

export default App
