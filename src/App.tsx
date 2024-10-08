import * as Accordion from '@radix-ui/react-accordion';
import * as Switch from '@radix-ui/react-switch';
import Project from './components/project.tsx';
import linkedin from './data/linkedin.png';
import github from './data/github.png';
import { useState, useEffect } from 'react';
import trophysvg from './assets/trophy.svg';

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'false' ? false : true;
    });
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const [dnsLookupResult, setDNSLookupResult] = useState<string>("");
    const [dnsLookupDisable, setDNSLookupDisable] = useState<boolean>(false);
    const [dnsOutputExpand, setDNSOutputExpand] = useState<boolean>(false);
    const [HTTPAppResult, setHTTPAppResult] = useState<string>("");
    const [HTTPAppDisable, setHTTPAppDisable] = useState<boolean>(false);
    const [HTTPOutputExpand, setHTTPOutputExpand] = useState<boolean>(false);
    const [TCPAppResult, setTCPAppResult] = useState<string>("");
    const [TCPAppDisable, setTCPAppDisable] = useState<boolean>(false);
    const [TCPOutputExpand, setTCPOutputExpand] = useState<boolean>(false);
    const [serverstatus, setServerStatus] = useState<string>("...");
    const [statusclass, setStatusClass] = useState<string>("");

    // const darkColor = 'neutral-900';
    // const lightColor = 'neutral-200';

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "rgb(23,23,23)" : "white";
        document.body.style.color = darkMode ? "rgb(229,229,229)" : "rgb(23,23,23)";
        localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);

    useEffect(() => {
        fetch('https://cloudwindows.hmukesh.me/')
            .then(response => response.text())
            .then(data => {
                if (data === 'Hello World') {
                    setServerStatus('online');
                    setStatusClass('text-green-500');
                } else {
                    setServerStatus('offline - try refreshing');
                    setStatusClass('text-red-500');
                }
            })
            .catch(error => {setServerStatus('offline - try refreshing'); setStatusClass('text-red-500');});
    }, []);

    const darkmodeSwitcher = `${darkMode ? 'hover:bg-neutral-200 hover:text-black' : 'hover:bg-neutral-900 hover:text-neutral-100'}`;

    const reactLink = <a href="https://react.dev/" className={`underline ${darkmodeSwitcher}`} target="_blank">React.js</a>;
    const wordleLink = <a href="https://www.nytimes.com/games/wordle/index.html" className={`underline ${darkmodeSwitcher}`} target="_blank">Wordle</a>;
    const pygameLink = <a href="https://www.pygame.org/wiki/about" className={`underline ${darkmodeSwitcher}`} target="_blank">pygame</a>;
    const nextcordLink = <a href="https://docs.nextcord.dev/en/stable/" className={`underline ${darkmodeSwitcher}`} target="_blank">nextcord</a>;
    const expressLink = <a href="https://expressjs.com/" className={`underline ${darkmodeSwitcher}`} target="_blank">Express.js</a>;
    const linkedinLink = <a href="https://linkedin.com/in/hmukesh5" className={`underline ${darkmodeSwitcher}`} target="_blank">LinkedIn</a>;
    const emailLink = <a href="mailto:hmukesh@outlook.com" className={`underline ${darkmodeSwitcher}`}>hmukesh@outlook.com</a>;
    const awsec2Link = <a href="https://aws.amazon.com/ec2/" className={`underline ${darkmodeSwitcher}`} target="_blank">AWS EC2</a>;
    const googleDNSLink = <a href="https://developers.google.com/speed/public-dns" className={`underline ${darkmodeSwitcher}`} target="_blank">Google's DNS Servers</a>;
    const choredashLink = <a href="https://hmukesh.itch.io/chore-dash" className={`underline ${darkmodeSwitcher}`} target="_blank">itch.io</a>;
    const paytonLink = <a href="https://linkedin.com/in/prknezek" className={`underline ${darkmodeSwitcher}`} target="_blank">Payton Knezek</a>;
    const adnanLink = <a href="https://adnan-yusuf.com" className={`underline ${darkmodeSwitcher}`} target="_blank">Adnan Yusuf</a>;
    const mysqlLink = <a href="https://www.mysql.com/" className={`underline ${darkmodeSwitcher}`} target="_blank">MySQL</a>;
    const pythonLink = <a href="https://www.python.org/" className={`underline ${darkmodeSwitcher}`} target="_blank">Python</a>;
    const cppLink = <a href="https://isocpp.org/" className={`underline ${darkmodeSwitcher}`} target="_blank">C++</a>;
    const postgresLink = <a href="https://www.postgresql.org/" className={`underline ${darkmodeSwitcher}`} target="_blank">PostgreSQL</a>;
    const gymLink = <a href="https://gymnasium.farama.org/index.html" className={`underline ${darkmodeSwitcher}`} target="_blank">OpenAI Gymnasium</a>;
    const sb3Link = <a href="https://github.com/DLR-RM/stable-baselines3" className={`underline ${darkmodeSwitcher}`} target="_blank">Stable Baselines 3</a>;
    const colabLink = <a href="https://colab.google/" className={`underline ${darkmodeSwitcher}`} target="_blank">Google Colab</a>;
    const pytorchLink = <a href="https://pytorch.org/" className={`underline ${darkmodeSwitcher}`} target="_blank">PyTorch</a>;

    const handleDNSLookupSubmit = async () => {
        try {
            const dns_input = document.getElementById("dnslookuptext") as HTMLInputElement;
            const dns_query = dns_input.value;
            
            setDNSLookupResult("running...");
            setDNSLookupDisable(true);
            setDNSOutputExpand(true);
            console.log(JSON.stringify({query: dns_query}));
            
            const controller = new AbortController();
            const signal = controller.signal;
            const timeoutID = setTimeout(() => controller.abort(), 5000);

            const response = await fetch('https://cloudwindows.hmukesh.me/dns_app', {
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
                setDNSLookupResult('this took longer than I expected (10 seconds) - either your internet isn\'t good or the server might not be working right now. sorry!');
            } else {
                setTCPAppResult('an unknown error occurred, what the **** did you do ???');
            }
            setDNSLookupDisable(false);
        }
    };

    const handleHTTPSubmit = async () => {
        try {
            const http_input = document.getElementById("httpapptext") as HTMLInputElement;
            const http_query = http_input.value;
            
            setHTTPAppResult("running...");
            setHTTPAppDisable(true);
            setHTTPOutputExpand(true);
            console.log(JSON.stringify({query: http_query}));
            
            const controller = new AbortController();
            const signal = controller.signal;
            const timeoutID = setTimeout(() => controller.abort(), 5000);

            const response = await fetch('https://cloudwindows.hmukesh.me/http_app', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({query: http_query}),
                signal: signal
            });

            clearTimeout(timeoutID);
        
            const data = await response.text();
            setHTTPAppResult(data);
            setHTTPAppDisable(false);
        } catch (error) {
            console.error('Error:', error);
            if (error.name === 'AbortError') {
                setHTTPAppResult('this took longer than I expected (10 seconds) - either your internet isn\'t good or the server might not be working right now. sorry!');
            } else {
                setTCPAppResult('an unknown error occurred, what the **** did you do ???');
            }
            setHTTPAppDisable(false);
        }
    };

    const handleTCPSubmit = async () => {
        try {
            const tcp_input_forward = document.getElementById("forwardloss") as HTMLInputElement;
            const tcp_input_reverse = document.getElementById("reverseloss") as HTMLInputElement;
            const tcp_query_forward = tcp_input_forward.value;
            const tcp_query_reverse = tcp_input_reverse.value;
            
            setTCPAppResult("running... (this will take a while)");
            setTCPOutputExpand(true);
            setTCPAppDisable(true);
            console.log(JSON.stringify(
                {
                    query_fwd: tcp_query_forward,
                    query_rev: tcp_query_reverse
                }));
            
            const controller = new AbortController();
            const signal = controller.signal;
            const timeoutID = setTimeout(() => controller.abort(), 50000);

            const response = await fetch('https://cloudwindows.hmukesh.me/tcp_app', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        query_fwd: tcp_query_forward,
                        query_rev: tcp_query_reverse
                    }),
                signal: signal
            });

            clearTimeout(timeoutID);
        
            const data = await response.text();
            setTCPAppResult(data);
            setTCPAppDisable(false);
        } catch (error) {
            console.error('Error:', error);
            if (error.name === 'AbortError') {
                setTCPAppResult('this took longer than I expected (50 seconds) - either your internet isn\'t good or the server might not be working right now. sorry!');
            } else {
                setTCPAppResult('an unknown error occurred, what the **** did you do ???');
            }
            setTCPAppDisable(false);
        }
    };

    const websites = [
        {
            value: "portfolio",
            title: <>this website</>,
            link: <></>,
            content: <>
                        The website you are currently viewing!
                        <div className="h-2" />
                        <span className="italic">{reactLink} | {expressLink} | {awsec2Link}</span>
                    </>
                        
        },
        {
            value: "wordle",
            title: <>wordle by hemanth | </>,
            link: <a href="http://wordle-clone-5fbt.onrender.com/" target="_blank" className={`underline ${darkmodeSwitcher}`}>link</a>,
            content: <>A word puzzle as a web app - a replica of the popular {wordleLink} game.
                    <div className="h-2" />
                    <span className="italic">{reactLink}</span>   
            </>
        },
        {
            value: "messwaffles",
            title: <>mess waffles | </>,
            link: <a href="http://messwafflespos.onrender.com/" target="_blank" className={`underline ${darkmodeSwitcher}`}>link</a>,
            content:
                <>
                    As a team of 5 during CSCE 315/331, with the Agile methodology, we created a full stack website based on a restaurant called Mess Waffles.
                    It provides ordering and tracking capabilities for employees, and a menu for customers.
                    I was the primary backend lead, spearheading the database (which unfortunately has been deleted by A&M) and API.
                    For most of us, it was our first time using this tech stack, so the website is not super aesthetic LOL.
                    However, it taught us a lot about creating a website, and how to code as a team in Agile.
                    <div className="h-2" />
                    <span className="italic">{postgresLink} | {expressLink} | {reactLink}</span>
                </>
        },
    ]

    const ai = [
        {
            value: "dinoai",
            title: <>dino ai | </>,
            link: <a href="https://github.com/hmukesh5/dino-ai" target="_blank" className={`underline ${darkmodeSwitcher}`}>github</a>,
            content: <>
                Developing an AI model that can play the chrome://dino game through {pytorchLink} libraries. Currently a WIP.
                <div className="h-2" />
                <span className="italic">{gymLink} | {sb3Link} | {colabLink}</span>
            </>
                    
        }
    ]

    const games = [
        {
            value: "choredash",
            title: <>choredash | </>,
            link: <a href="https://hmukesh.itch.io/chore-dash" target="_blank" className={`underline ${darkmodeSwitcher}`}>homepage</a>,
            content:<>
                        <span className="font-normal sm:font-bold text-amber-600"> <img src={trophysvg} className="inline align-middle h-4 relative svg-bottom-align mr-0.5" /> 1st place at the 2023 Capsher x Aggie Coding Club Coding Challenge</span>
                        <br/>
                        A short, replayable 2D game where you control a character who must rush to complete chores before their mom comes home.
                        Built with {paytonLink} and {adnanLink}. Available for download on {choredashLink}.
                        <div className="h-2" />
                        <span className="italic">{pythonLink} | {pygameLink}</span>
                    </>
        },
        {
            value: "jerma",
            title: <>jerma985 discord bot | </>,
            link: <a href="https://youtube.com/watch?v=gCIfvgX4Vg4" target="_blank" className={`underline ${darkmodeSwitcher}`}>demo</a>,
            content:<>
                        <span className="font-normal sm:font-bold text-amber-600"> <img src={trophysvg} className="inline align-middle h-4 relative svg-bottom-align mr-0.5" /> 1st place at the 2022 Aggie Coding Club Discord Bot Challenge</span>    
                        <br/>
                        A Discord bot based on the popular Twitch streamer Jerma985. Built with {paytonLink}.
                        <div className="h-2" />
                        <span className="italic">{pythonLink} | {nextcordLink} | {mysqlLink}</span>                        
                    </>
        },
    ]

    const other = [
        {
            value: "network",
            title: <>c++ network applications</>,
            link: <></>,
            content:<>
                        During my networks class at A&M (CSCE 463), I created a suite of various network applications.
                        I have created demonstrations of 3 of these programs that will run the software on the cloud.
                        Feel free to try them out below!
                        <div className="h-2" />
                        <span className="italic">{cppLink} | {awsec2Link}</span>
                        <br/><br/>
                        Server Status: <span className={`font-bold ${statusclass}`}>{serverstatus}</span>
                        <div className="mt-8" />
                        <span className="font-heading tracking-tighter sm:tracking-normal font-bold">DNS Lookup:</span>
                        <br/>
                        <p className="mb-2">
                            DNS, or Domain Name Service, allows computers to lookup the IP address of a domain name. It's kinda like Google Maps for computers.
                            Below, you can try it yourself on {googleDNSLink}.
                            Try typing in "google.com", or this website, "hmukesh.me".
                        </p>
                        <div className="font-heading tracking-tighter sm:tracking-normal">
                            <span className='font-heading tracking-tighter sm:tracking-normal'>Domain/IP:</span>
                            <div>
                                <input id="dnslookuptext" type="text" name="query" placeholder='ex "google.com"' className={`font-heading tracking-tighter sm:tracking-normal mt-2 mb-2 mr-2 px-2 border-2 border-neutral-500 rounded w-64 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} />
                                <button disabled={dnsLookupDisable} onClick={handleDNSLookupSubmit} className={`mt-2 px-2 border-2 border-black rounded sm:text-sm text-xs ${darkMode ? 'border-neutral-200 hover:bg-neutral-200 hover:text-black' : 'border-neutral-900 hover:bg-neutral-900 hover:text-neutral-200'}`}>run</button>
                            </div>
                            <span className='font-heading tracking-tighter sm:tracking-normal'>Output:</span>
                            <br/>
                            <textarea className={`font-heading tracking-tighter sm:tracking-normal mt-2 px-2 py-1 border-2 border-neutral-500 rounded w-full sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''} ${dnsOutputExpand ? 'h-80': 'h-8'} `} readOnly
                                placeholder='output will appear here...'
                                value={dnsLookupResult}
                            >
                            </textarea>
                        </div>

                        <div className="mt-4">
                            <span className="font-heading tracking-tighter sm:tracking-normal font-bold">HTTP Packet Sender and Parser:</span>
                            <p className="mb-2">
                                An application that processes HTTP packets (including performing a DNS lookup, shown above).
                                It can extract the number of all outgoing links from a website, laying the foundation for a web crawler.
                                <br/>
                                <span className="italic">Note: HTTPS is not supported, and most HTTP requests (such as "http://google.com") will return a <span className="line-through">boring </span> redirect to the HTTPS version. Try "http://captive.apple.com" for a successful HTTP response.</span>
                            </p>
                            
                            <span className='font-heading tracking-tighter sm:tracking-normal'>URL:</span>
                            <div>
                                <input id="httpapptext" type="text" name="query" placeholder='ex "http://google.com"' className={`font-heading tracking-tighter sm:tracking-normal mt-2 mb-2 mr-2 px-2 border-2 border-neutral-500 rounded w-64 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} />
                                <button disabled={HTTPAppDisable} onClick={handleHTTPSubmit} className={`mt-2 px-2 border-2 border-black rounded sm:text-sm text-xs ${darkMode ? 'border-neutral-200 hover:bg-neutral-200 hover:text-black' : 'border-neutral-900 hover:bg-neutral-900 hover:text-neutral-200'}`}>run</button>
                            </div>
                            <span className='font-heading tracking-tighter sm:tracking-normal'>Output:</span>
                            <br/>
                            <textarea className={`font-heading tracking-tighter sm:tracking-normal mt-2 px-2 py-1 border-2 border-neutral-500 rounded w-full sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''} ${HTTPOutputExpand ? 'h-80': 'h-8'} `} readOnly
                                placeholder='output will appear here...'
                                value={HTTPAppResult}
                            >
                            </textarea>
                        </div>

                        <div className="mt-4">
                            <span className="font-heading tracking-tighter sm:tracking-normal font-bold">TCP Demonstration:</span>
                            <p className="mb-2">
                                TCP, or Transmission Control Protocol, is widely used for data transfer between two Internet users.
                                It resends any data that may be lost in the transmission, ensuring reliability.
                                Below, you can edit the loss rates of a TCP transfer between two users, and observe the effects.
                                Forward loss is between user 1 to user 2, and reverse loss is between user 2 to user 1.
                                Input 2 numbers between 0 and 1, where 0 is 0% loss and 1 is 100% loss.
                            </p>
                            <span className='font-heading tracking-tighter sm:tracking-normal'>Loss Rate:</span>
                            <div>
                                <input id="forwardloss" type="number" name="query" placeholder='forward loss' className={`font-heading tracking-tighter sm:tracking-normal mt-2 mb-2 mr-2 px-2 border-2 border-neutral-500 rounded w-32 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} />
                                <input id="reverseloss" type="number" name="query" placeholder='reverse loss' className={`font-heading tracking-tighter sm:tracking-normal mt-2 mb-2 mr-2 px-2 border-2 border-neutral-500 rounded w-32 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} />
                                <button disabled={TCPAppDisable} onClick={handleTCPSubmit} className={`mt-2 px-2 border-2 border-black rounded sm:text-sm text-xs ${darkMode ? 'border-neutral-200 hover:bg-neutral-200 hover:text-black' : 'border-neutral-900 hover:bg-neutral-900 hover:text-neutral-200'}`}>run</button>
                            </div>
                            <span className='font-heading tracking-tighter sm:tracking-normal'>Output:</span>
                            <br/>
                            <textarea className={`font-heading tracking-tighter sm:tracking-normal mt-2 px-2 py-1 border-2 border-neutral-500 rounded w-full h-80 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''} ${TCPOutputExpand ? 'h-80': 'h-8'} `} readOnly
                                placeholder='output will appear here...'
                                value={TCPAppResult}
                            >
                            </textarea>
                        </div>

                    </>
        },
    ];

    function expandAll() {
        if (expandedItems.length === websites.length + games.length + other.length + ai.length) {
            setExpandedItems([]);
        } else {
            const websitesItems = websites.map(website => website.value);
            const gamesItems = games.map(game => game.value);
            const otherItems = other.map(other => other.value);
            const aiItems = ai.map(ai => ai.value);
            setExpandedItems([...websitesItems, ...gamesItems, ...otherItems, ...aiItems]);
        }
    }

    return (
        <div className="min-h-screen max-w-4xl mx-auto py-6 sm:py-8 px-4 sm:px-6">

            <div className="mb-4">
                <p className="font-semibold text-4xl sm:text-5xl font-heading tracking-tighter sm:tracking-normal">Hemanth Mukesh</p>                
            </div>

            <div className="mt-5 mb-5 sm:mt-6 sm:mb-6 flex justify-between w-16 sm:w-24 items-center">
                <a className={darkMode ? "invert" : ""} href="https://linkedin.com/in/hmukesh5" target="_blank"><img src={linkedin} className="w-6 sm:w-8"></img></a>
                <a className={darkMode ? "invert" : ""} href="https://github.com/hmukesh5" target="_blank"><img src={github} className="w-6 sm:w-8"></img></a>
            </div>

            <h3 className="font-bold text-xl sm:text-2xl font-heading tracking-tighter sm:tracking-normal mb-1 sm:mb-2">about</h3>
            <div className="mb-3 text-base sm:text-xl font-body">
                <p>Hello! My name is Hemanth Mukesh, and I'm a computer science senior at Texas A&M University. 
                   This website serves to showcase my work throughout college.
                   Feel free to contact me on {linkedinLink} or at {emailLink}!
                </p>
            </div>

            <div className="max-w-fit">
                <div className="flex align-middle mb-3 sm:mb-4 mt-5 sm:mt-6">
                    <h3 className="font-bold text-xl sm:text-2xl font-heading tracking-tighter sm:tracking-normal">projects</h3>
                    <button onClick={expandAll} className={`ml-4 border-black border-2 rounded text-base px-2 ${darkMode ? 'border-neutral-200 hover:bg-neutral-200 hover:text-black' : 'border-neutral-900 hover:bg-neutral-900 hover:text-neutral-200'}`}>
                        {expandedItems.length === websites.length + games.length + other.length + ai.length ? "collapse all" : 
                         expandedItems.length == 0 ? "expand all" : "expand rest"}
                    </button>
                </div>
                
                <Accordion.Root value={expandedItems} type='multiple' className="flex flex-col gap-2 sm:gap-3">          

                    <h1 className={`text-base sm:text-xl font-heading tracking-tighter sm:tracking-normal ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>websites</h1>
                    {websites.map(project => (
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

                    <h1 className={`text-base sm:text-xl font-heading tracking-tighter sm:tracking-normal ${darkMode ? 'text-neutral-400' : 'text-neutral-600'} mt-2`}>ai</h1>
                    {ai.map(project => (
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

                    <h1 className={`text-base sm:text-xl font-heading tracking-tighter sm:tracking-normal ${darkMode ? 'text-neutral-400' : 'text-neutral-600'} mt-2`}>python</h1>
                    {games.map(project => (
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

                    <h1 className={`text-base sm:text-xl font-heading tracking-tighter sm:tracking-normal ${darkMode ? 'text-neutral-400' : 'text-neutral-600'} mt-2`}>c++</h1>
                    {other.map(project => (
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

            <br/>
            <div className="flex items-center">
                <p className="font-heading tracking-tighter sm:tracking-normal text-base sm:text-lg mr-3 inline align-top">dark mode</p>
                
                <Switch.Root className="SwitchRoot align-center" id="airplane-mode" checked={darkMode} onCheckedChange={(checked) => {
                    setDarkMode(checked);
                }}>
                    <Switch.Thumb className="SwitchThumb" />
                </Switch.Root>
            </div>

        </div>
    )
}

export default App
