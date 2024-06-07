import * as Accordion from '@radix-ui/react-accordion';
import Project from './components/project.tsx';

function App() {
    return (
        <div className="min-h-screen max-w-4xl mx-auto py-8 px-6">

            <div className="mt-4 mb-8">
                <p className="text-center font-bold text-5xl">Hemanth Mukesh</p>
            </div>

            <div className="max-w-fit">
                <h3 className="font-bold text-2xl underline mb-4">projects</h3>
                
                <Accordion.Root type='multiple' className="flex flex-col gap-3">
                    <Project value="portfolio" project_title={<>this website</>} content={
                        <>
                            The website you are currently viewing! Built with React and Tailwind CSS.
                        </>
                    } />

                    <Project value="wordle" project_title={<>wordle by hemanth | <a href="http://wordle-clone-5fbt.onrender.com/" target="_blank" className="underline">link</a></>} content={
                        <>
                            A clone of the popular Wordle game, built with React.
                            <br />
                            <a href="https://github.com/hmukesh5/wordle-clone" className='underline' target='_blank'>Github</a>
                            <br />
                            <a href="https://wordle-clone-5fbt.onrender.com/" className='underline' target='_blank'>Link to project</a>
                        </>
                    } />                    

                    <Project value="choredash" project_title={<>ChoreDash</>} content={
                        <>test</>
                    } />

                    <Project value="jerma" project_title={<>Jerma985 Discord Bot</>} content={
                        <>test</>
                    } />

                    <Project value="network" project_title={<>C++ Network Applications</>} content={
                        <>test</>
                    } />
                </Accordion.Root>


            </div>

        </div>
    )
}

export default App
