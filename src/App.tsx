import * as Accordion from '@radix-ui/react-accordion';
import * as Switch from '@radix-ui/react-switch';
import Project from './components/project.tsx';
import linkedin from './data/linkedin.png';
import github from './data/github.png';
import { useState, useEffect } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const [dnsLookupResult, setDNSLookupResult] = useState<string>("");
    const [dnsLookupDisable, setDNSLookupDisable] = useState<boolean>(false);

    const darkColor = 'neutral-900';
    const lightColor = 'neutral-200';

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "rgb(23,23,23)" : "white";
        document.body.style.color = darkMode ? "rgb(229,229,229)" : "rgb(23,23,23)";
    }, [darkMode]);  

    const darkmodeSwitcher = `${darkMode ? 'hover:bg-neutral-200 hover:text-black' : 'hover:bg-neutral-900 hover:text-neutral-100'}`;

    const reactLink = <a href="https://react.dev/" className={`underline ${darkmodeSwitcher}`} target="_blank">React.js</a>;
    const tailwindCSSLink = <a href="https://tailwindcss.com/" className={`underline ${darkmodeSwitcher}`} target="_blank">Tailwind CSS</a>;
    const wordleLink = <a href="https://www.nytimes.com/games/wordle/index.html" className={`underline ${darkmodeSwitcher}`} target="_blank">Wordle</a>;
    const pygameLink = <a href="https://www.pygame.org/wiki/about" className={`underline ${darkmodeSwitcher}`} target="_blank">pygame</a>;
    const nextcordLink = <a href="https://docs.nextcord.dev/en/stable/" className={`underline ${darkmodeSwitcher}`} target="_blank">nextcord</a>;
    const expressLink = <a href="https://expressjs.com/" className={`underline ${darkmodeSwitcher}`} target="_blank">Express.js</a>;
    const githubLink = <a href="https://github.com/hmukesh5" className={`underline ${darkmodeSwitcher}`} target="_blank">Github</a>;
    const linkedinLink = <a href="https://linkedin.com/in/hmukesh5" className={`underline ${darkmodeSwitcher}`} target="_blank">LinkedIn</a>;
    const emailLink = <a href="mailto:hmukesh@outlook.com" className={`underline ${darkmodeSwitcher}`}>hmukesh@outlook.com</a>;
    const awsec2Link = <a href="https://aws.amazon.com/ec2/" className={`underline ${darkmodeSwitcher}`} target="_blank">AWS EC2</a>;
    const servercodeLink = <a href="https://github.com/hmukesh5/hmukesh5.github.io/tree/main/server" className={`underline ${darkmodeSwitcher}`} target="_blank">server</a>;
    const namecheapLink = <a href="https://www.namecheap.com/" className={`underline ${darkmodeSwitcher}`} target="_blank">namecheap</a>;
    const githubStudentLink = <a href="https://education.github.com/pack/offers" className={`underline ${darkmodeSwitcher}`} target="_blank">Github Student Developer Pack</a>;
    const githubPagesLink = <a href="https://pages.github.com/" className={`underline ${darkmodeSwitcher}`} target="_blank">Github Pages</a>;
    const letsencryptLink = <a href="https://letsencrypt.org/" className={`underline ${darkmodeSwitcher}`} target="_blank">Let's Encrypt</a>;
    const googleDNSLink = <a href="https://developers.google.com/speed/public-dns" className={`underline ${darkmodeSwitcher}`} target="_blank">Google's DNS Servers</a>;
    const choredashLink = <a href="https://hmukesh.itch.io/chore-dash" className={`underline ${darkmodeSwitcher}`} target="_blank">itch.io</a>;
    const paytonLink = <a href="https://linkedin.com/in/prknezek" className={`underline ${darkmodeSwitcher}`} target="_blank">Payton Knezek</a>;
    const adnanLink = <a href="https://adnan-yusuf.com" className={`underline ${darkmodeSwitcher}`} target="_blank">Adnan Yusuf</a>;

    const handleDNSLookupSubmit = async () => {
        try {
            const dns_input = document.getElementById("dnslookuptext") as HTMLInputElement;
            const dns_query = dns_input.value;
            
            setDNSLookupResult("running... (might take up to 10 sec)");
            setDNSLookupDisable(true);
            console.log(JSON.stringify({query: dns_query}));
            
            const controller = new AbortController();
            const signal = controller.signal;
            const timeoutID = setTimeout(() => controller.abort(), 10000);

            const response = await fetch('https://cloudwindows.hmukesh.me/test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({query: dns_query}),
                signal: signal
            });

            clearTimeout(timeoutID);
        
            const data = await response.text();
            setDNSLookupResult(data);
            setDNSLookupDisable(false);
        } catch (error) {
            console.error('Error:', error);
            if (error.name === 'AbortError') {
                setDNSLookupResult('request timed out, please try again.');
            } else {
                setDNSLookupResult('an error occurred, please try again.');
            }
            setDNSLookupDisable(false);
        }
    };

    const projects = [
        {
            value: "portfolio",
            title: <>this website</>,
            link: <></>,
            content: <>The website you are currently viewing!
                       Front-end built with {reactLink} and {tailwindCSSLink}, hosted on {githubPagesLink}. Back-end built with {expressLink}, hosted on an {awsec2Link} instance. Domain from {namecheapLink} through the {githubStudentLink}.</>
        },
        {
            value: "choredash",
            title: <>ChoreDash | </>,
            link: <a href="https://hmukesh.itch.io/chore-dash" target="_blank" className={`underline ${darkmodeSwitcher}`}>homepage</a>,
            content:<>
                        <span className="font-bold text-amber-600">🏆 Capsher x Aggie Coding Club Coding Challenge 2023 1st place winner</span>
                        <br/>
                        A short, replayable 2D game where you control a character who must rush to complete chores before their mom comes home.
                        Built in Python with the {pygameLink} module, with {paytonLink} and {adnanLink}. Available for download on {choredashLink}.
                    </>
        },
        {
            value: "jerma",
            title: <>Jerma985 discord bot | </>,
            link: <a href="https://youtube.com/watch?v=gCIfvgX4Vg4" target="_blank" className={`underline ${darkmodeSwitcher}`}>youtube</a>,
            content:<>
                        <span className="font-bold text-amber-600">🏆 Aggie Coding Club Discord Bot Challenge 2022 1st place winner</span>    
                        <br/>
                        A Discord bot based on the popular Twitch streamer Jerma985.
                        Built in Python with the {nextcordLink} module, with {paytonLink}.
                    </>
        },
        {
            value: "network",
            title: <>C++ network applications</>,
            link: <></>,
            content:<>
                        During my networks class at A&M (CSCE 463), I created a suite of various network applications. This section is still a WIP, and will update as I work on it.
                        Built in C++, and hosted on an {awsec2Link} Windows instance running an {expressLink} {servercodeLink}. HTTPS certifications from {letsencryptLink}.
                        <br/>
                        <div className="mt-4" />
                        <span className="font-heading font-bold">DNS Lookup Tool:</span>
                        <br/>
                        <p className="mb-2">
                            DNS stands for Domain Name Service.
                            It allows applications to lookup the IP addresses of domains like "youtube.com" so that it can connect to YouTube's servers.
                            Below, you can lookup those IP addresses yourself on {googleDNSLink}.
                            Try typing in "google.com", or this website, "hmukesh.me".
                        </p>
                        <div className="font-heading">
                            <span className='font-body'>Input:</span>
                            <div>
                                <input id="dnslookuptext" type="text" name="query" placeholder='domain/IP (ex "google.com")' className={`mt-2 mb-2 mr-2 px-2 border-2 border-neutral-500 rounded w-64 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} />
                                <button disabled={dnsLookupDisable} onClick={handleDNSLookupSubmit} className={`mt-2 px-2 border-2 border-black rounded sm:text-sm text-xs ${darkMode ? 'border-neutral-200 hover:bg-neutral-200 hover:text-black' : 'border-neutral-900 hover:bg-neutral-900 hover:text-neutral-200'}`}>run</button>
                            </div>
                            <span className='font-body'>Output:</span>
                            <br/>
                            <textarea className={`mt-2 px-2 py-1 border-2 border-neutral-500 rounded w-full h-80 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} readOnly
                                placeholder='output will appear here...'
                                value={dnsLookupResult}
                            >
                            </textarea>
                        </div>

                    </>
        },
        {
            value: "wordle",
            title: <>wordle by hemanth | </>,
            link: <a href="http://wordle-clone-5fbt.onrender.com/" target="_blank" className={`underline ${darkmodeSwitcher}`}>link</a>,
            content: <>A word puzzle as a web app inspired by the popular {wordleLink} game. Built with {reactLink} and the help of various YouTube videos.</>
        },
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
                <p className="font-semibold text-4xl sm:text-5xl font-heading">Hemanth Mukesh</p>                
            </div>

            <div className="mt-5 mb-5 flex justify-between w-20">
                <a className={darkMode ? "invert" : ""} href="https://linkedin.com/in/hmukesh5" target="_blank"><img src={linkedin} width={30} height={30}></img></a>
                <a className={darkMode ? "invert" : ""} href="https://github.com/hmukesh5" target="_blank"><img src={github} width={30} height={30}></img></a>
            </div>

            <div className="mb-4 text-base sm:text-xl font-body">
                <p>Hello! My name is Hemanth Mukesh, and I'm a computer science senior at Texas A&M University. 
                   This website serves to showcase my work throughout college.
                   Feel free to contact me on {linkedinLink} or at {emailLink}!
                </p>
            </div>

            <div className="max-w-fit">
                <div className="flex align-middle mb-4 mt-6">
                    <h3 className="font-bold text-xl sm:text-2xl font-heading">projects</h3>
                    <button onClick={expandAll} className={`ml-4 border-black border-2 rounded text-base px-2 ${darkMode ? 'border-neutral-200 hover:bg-neutral-200 hover:text-black' : 'border-neutral-900 hover:bg-neutral-900 hover:text-neutral-200'}`}>
                        {expandedItems.length === projects.length ? "collapse all" : 
                         expandedItems.length == 0 ? "expand all" : "expand rest"}
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
                            darkMode={darkMode}
                        />
                    ))}
                </Accordion.Root>
            </div>
            
            <div className="max-w-fit">
                <div className="mb-2 mt-8">
                    <h3 className="font-bold text-lg sm:text-xl font-heading">note</h3>
                </div>
                <div className="text-sm sm:text-base font-body">
                    <p>
                        You'll notice that the project descriptions are filled with links. They're meant to be clicked!
                        That's because I don't want to leave those new to coding in the dark, wondering "how did he even do that?".
                        These links all point to the specific resources that I've used to build my projects, all for FREE.
                        Most of these projects can be found on my {githubLink}, but looking at raw code can be intimidating, so
                        I encourage you to explore the links here first. 
                        Hopefully, you'll learn something new about the world of software development! :)
                    </p>
                </div>
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
