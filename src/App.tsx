import * as Accordion from '@radix-ui/react-accordion';
import * as Switch from '@radix-ui/react-switch';
import Project from './components/project.tsx';
import linkedin from './data/linkedin.png';
import github from './data/github.png';
import { useState, useEffect } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true' ? true : false;
    });
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const [dnsLookupResult, setDNSLookupResult] = useState<string>("");
    const [dnsLookupDisable, setDNSLookupDisable] = useState<boolean>(false);
    const [HTTPAppResult, setHTTPAppResult] = useState<string>("");
    const [HTTPAppDisable, setHTTPAppDisable] = useState<boolean>(false);
    const [TCPAppResult, setTCPAppResult] = useState<string>("");
    const [TCPAppDisable, setTCPAppDisable] = useState<boolean>(false);

    // const darkColor = 'neutral-900';
    // const lightColor = 'neutral-200';

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "rgb(23,23,23)" : "white";
        document.body.style.color = darkMode ? "rgb(229,229,229)" : "rgb(23,23,23)";
        localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);  

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

    const handleDNSLookupSubmit = async () => {
        try {
            const dns_input = document.getElementById("dnslookuptext") as HTMLInputElement;
            const dns_query = dns_input.value;
            
            setDNSLookupResult("running...");
            setDNSLookupDisable(true);
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
                setDNSLookupResult('request timed out, is the server online?');
            } else {
                setDNSLookupResult('an error occurred, please try again.');
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
                setHTTPAppResult('request timed out, is the server online?');
            } else {
                setHTTPAppResult('an error occurred, please try again.');
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
            
            setTCPAppResult("running... (this can take a while with large packet loss)");
            setTCPAppDisable(true);
            console.log(JSON.stringify(
                {
                    query_fwd: tcp_query_forward,
                    query_rev: tcp_query_reverse
                }));
            
            const controller = new AbortController();
            const signal = controller.signal;
            const timeoutID = setTimeout(() => controller.abort(), 10000);

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
                setTCPAppResult('request timed out, is the server online?');
            } else {
                setTCPAppResult('an error occurred, please try again.');
            }
            setTCPAppDisable(false);
        }
    };

    const projects = [
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
            value: "choredash",
            title: <>ChoreDash | </>,
            link: <a href="https://hmukesh.itch.io/chore-dash" target="_blank" className={`underline ${darkmodeSwitcher}`}>homepage</a>,
            content:<>
                        <span className="font-bold text-amber-600">🏆 Capsher x Aggie Coding Club Coding Challenge 2023 1st place winner</span>
                        <br/>
                        A short, replayable 2D game where you control a character who must rush to complete chores before their mom comes home.
                        Built with {paytonLink} and {adnanLink}. Available for download on {choredashLink}.
                        <div className="h-2" />
                        <span className="italic">{pythonLink} | {pygameLink}</span>
                    </>
        },
        {
            value: "jerma",
            title: <>Jerma985 discord bot | </>,
            link: <a href="https://youtube.com/watch?v=gCIfvgX4Vg4" target="_blank" className={`underline ${darkmodeSwitcher}`}>demo</a>,
            content:<>
                        <span className="font-bold text-amber-600">🏆 Aggie Coding Club Discord Bot Challenge 2022 1st place winner</span>    
                        <br/>
                        A Discord bot based on the popular Twitch streamer Jerma985. Built with {paytonLink}.
                        <div className="h-2" />
                        <span className="italic">{pythonLink} | {nextcordLink} | {mysqlLink}</span>                        
                    </>
        },
        {
            value: "wordle",
            title: <>wordle by hemanth | </>,
            link: <a href="http://wordle-clone-5fbt.onrender.com/" target="_blank" className={`underline ${darkmodeSwitcher}`}>link</a>,
            content: <>A word puzzle as a web app inspired by the popular {wordleLink} game.
                    <div className="h-2" />
                    <span className="italic">{reactLink}</span>   
            </>
        },
        {
            value: "network",
            title: <>C++ network applications</>,
            link: <></>,
            content:<>
                        During my networks class at A&M (CSCE 463), I created a suite of various network applications.
                        Below, I have included demonstrations of 3 of these programs.
                        Feel free to try them out!
                        
                        <div className="h-2" />
                        <span className="italic">{cppLink} | {awsec2Link}</span>

                        <div className="mt-8" />
                        <span className="font-heading font-bold">DNS Lookup:</span>
                        <br/>
                        <p className="mb-2">
                            DNS stands for Domain Name Service.
                            It allows applications to lookup the IP addresses of domains like "youtube.com" so that it can connect to YouTube's servers.
                            Below, you can lookup those IP addresses yourself on {googleDNSLink}.
                            Try typing in "google.com", or this website, "hmukesh.me".
                        </p>
                        <div className="font-heading">
                            <span className='font-heading'>Domain/IP:</span>
                            <div>
                                <input id="dnslookuptext" type="text" name="query" placeholder='ex "google.com"' className={`font-heading mt-2 mb-2 mr-2 px-2 border-2 border-neutral-500 rounded w-64 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} />
                                <button disabled={dnsLookupDisable} onClick={handleDNSLookupSubmit} className={`mt-2 px-2 border-2 border-black rounded sm:text-sm text-xs ${darkMode ? 'border-neutral-200 hover:bg-neutral-200 hover:text-black' : 'border-neutral-900 hover:bg-neutral-900 hover:text-neutral-200'}`}>run</button>
                            </div>
                            <span className='font-heading'>Output:</span>
                            <br/>
                            <textarea className={`font-heading mt-2 px-2 py-1 border-2 border-neutral-500 rounded w-full h-80 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} readOnly
                                placeholder='output will appear here...'
                                value={dnsLookupResult}
                            >
                            </textarea>
                        </div>

                        <div className="mt-4">
                            <span className="font-heading font-bold">HTTP Packet Sender and Parser:</span>
                            <p className="mb-2">
                                A HTTP Packet sender and parser that validates, sends, and parses HTTP packets, displaying details about the entire process (including a DNS lookup, shown above).
                                One of the key features is that it can parse through the HTTP reply and extract the number of outgoing links, laying the foundation for a web crawler.
                                Try typing in "http://google.com" to see the HTTP response from the home page of Google.
                            </p>
                            
                            <span className='font-heading'>URL:</span>
                            <div>
                                <input id="httpapptext" type="text" name="query" placeholder='ex "http://google.com"' className={`font-heading mt-2 mb-2 mr-2 px-2 border-2 border-neutral-500 rounded w-64 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} />
                                <button disabled={HTTPAppDisable} onClick={handleHTTPSubmit} className={`mt-2 px-2 border-2 border-black rounded sm:text-sm text-xs ${darkMode ? 'border-neutral-200 hover:bg-neutral-200 hover:text-black' : 'border-neutral-900 hover:bg-neutral-900 hover:text-neutral-200'}`}>run</button>
                            </div>
                            <span className='font-heading'>Output:</span>
                            <br/>
                            <textarea className={`font-heading mt-2 px-2 py-1 border-2 border-neutral-500 rounded w-full h-80 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} readOnly
                                placeholder='output will appear here...'
                                value={HTTPAppResult}
                            >
                            </textarea>
                        </div>

                        <div className="mt-4">
                            <span className="font-heading font-bold">TCP Demonstration:</span>
                            <p className="mb-2">
                                TCP stands for Transmission Control Protocol, and it's widely used for reliable data transfer.
                                Although not fast enough for videos or games, this protocol ensures that all packets are delivered by re-transmitting lost packets.
                                Below, you can edit the forward and reverse loss rate of a TCP transfer and observe the effects.
                                Input 2 numbers between 0 and 1.
                            </p>
                            
                            <span className='font-heading'>Loss Rate:</span>
                            <div>
                                <input id="forwardloss" type="number" name="query" placeholder='forward loss' className={`font-heading mt-2 mb-2 mr-2 px-2 border-2 border-neutral-500 rounded w-32 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} />
                                <input id="reverseloss" type="number" name="query" placeholder='reverse loss' className={`font-heading mt-2 mb-2 mr-2 px-2 border-2 border-neutral-500 rounded w-32 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} />
                                <button disabled={TCPAppDisable} onClick={handleTCPSubmit} className={`mt-2 px-2 border-2 border-black rounded sm:text-sm text-xs ${darkMode ? 'border-neutral-200 hover:bg-neutral-200 hover:text-black' : 'border-neutral-900 hover:bg-neutral-900 hover:text-neutral-200'}`}>run</button>
                            </div>
                            <span className='font-heading'>Output:</span>
                            <br/>
                            <textarea className={`font-heading mt-2 px-2 py-1 border-2 border-neutral-500 rounded w-full h-80 sm:text-sm text-xs ${darkMode ? 'bg-neutral-900' : ''}`} readOnly
                                placeholder='output will appear here...'
                                value={TCPAppResult}
                            >
                            </textarea>
                        </div>

                    </>
        },
        {
            value: "messwaffles",
            title: <>Mess Waffles point of sale</>,
            link: <></>,
            content:
                <>
                    This was our final group project during CSCE 315/331.
                    As a team of 5, using the Agile methodology, we developed a full stack Point of Sale system based on a restaurant called Mess Waffles.
                    I was the primary backend lead, working on the database and API.
                    Unfortunately, the database has been cleared by A&M and is no longer available, so the site no longer works as intended.
                    However, this project taught me a lot about Agile, effective teamwork, and clear communication to resolve issues.
                    If you'd still like to view the frontend, you can do so <a href="http://messwafflespos.onrender.com/" target="_blank" className={`underline ${darkmodeSwitcher}`}>here</a>.
                    <div className="h-2" />
                    <span className="italic">{postgresLink} | {expressLink} | {reactLink}</span>
                </>
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

            <div className="mt-5 mb-5 sm:mt-6 sm:mb-6 flex justify-between w-16 sm:w-24 items-center">
                <a className={darkMode ? "invert" : ""} href="https://linkedin.com/in/hmukesh5" target="_blank"><img src={linkedin} className="w-6 sm:w-8"></img></a>
                <a className={darkMode ? "invert" : ""} href="https://github.com/hmukesh5" target="_blank"><img src={github} className="w-6 sm:w-8"></img></a>
            </div>

            <h3 className="font-bold text-xl sm:text-2xl font-heading mb-1 sm:mb-2">about</h3>
            <div className="mb-3 text-base sm:text-xl font-body">
                <p>Hello! My name is Hemanth Mukesh, and I'm a computer science senior at Texas A&M University. 
                   This website serves to showcase my work throughout college.
                   Feel free to contact me on {linkedinLink} or at {emailLink}!
                </p>
            </div>

            <div className="max-w-fit">
                <div className="flex align-middle mb-3 sm:mb-4 mt-5 sm:mt-6">
                    <h3 className="font-bold text-xl sm:text-2xl font-heading">projects</h3>
                    <button onClick={expandAll} className={`ml-4 border-black border-2 rounded text-base px-2 ${darkMode ? 'border-neutral-200 hover:bg-neutral-200 hover:text-black' : 'border-neutral-900 hover:bg-neutral-900 hover:text-neutral-200'}`}>
                        {expandedItems.length === projects.length ? "collapse all" : 
                         expandedItems.length == 0 ? "expand all" : "expand rest"}
                    </button>
                </div>
                
                <Accordion.Root value={expandedItems} type='multiple' className="flex flex-col gap-2 sm:gap-3">
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

            <br/>
            <div className="flex items-center">
                <p className="font-heading text-base sm:text-lg mr-3 inline align-top">dark mode</p>
                
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
