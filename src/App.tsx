import * as Accordion from '@radix-ui/react-accordion';
import Project from './components/project.tsx';

function App() {
    return (
        <div className="min-h-screen max-w-4xl mx-auto py-8 px-6 font-sans">

            <div className="mt-4 mb-8">
                <p className="text-center font-bold text-5xl">Hemanth Mukesh</p>
            </div>

            <div className="max-w-fit">
                <h3 className="font-bold text-2xl underline mb-4">projects</h3>
                
                <Accordion.Root type='multiple' className="flex flex-col gap-3">
                    <Project value="wordle" project_title={<>wordle by hemanth</>} content={
                        <>
                            A simple wordle clone built with React.ddddd ddd ddddddd dd ddddddd d ddddd ddddd dddd dddd dddd d dddddddd dddddddd ddddddd ddddd ddddd ddd dd dddddd d
                        </>
                    } />

                    <Project value="choredash" project_title={<>ChoreDash</>} content={
                        <>test</>
                    } />
                </Accordion.Root>


            </div>

        </div>
    )
}

export default App
