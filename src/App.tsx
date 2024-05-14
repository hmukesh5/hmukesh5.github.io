import * as Accordion from '@radix-ui/react-accordion';

function App() {

    return (
        <div className="max-w-4xl mx-auto p-8 font-sans">


            <div className="mb-8">
                <p className="text-center font-bold text-5xl">Hemanth Mukesh</p>
            </div>

            <div className="max-w-fit">
                <h3 className="font-bold text-2xl underline">projects</h3>
            
                <Accordion.Root type='multiple'>
                    <Accordion.Item value='wordle'>
                        <Accordion.Trigger>
                            <div className='font-bold text-xl'>wordle by hemanth</div>
                        </Accordion.Trigger>
                        <Accordion.Content>put content here</Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>


            </div>

        </div>
    )
}

export default App
