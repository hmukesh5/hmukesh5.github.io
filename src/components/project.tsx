import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

type ProjectProps = {
    value: string;
    project_title: React.ReactNode;
    project_link: React.ReactNode;
    content: React.ReactNode;
    expandedItems: string[];
    setExpandedItems: React.Dispatch<React.SetStateAction<string[]>>;
    darkMode: boolean;
  };

const Project: React.FC<ProjectProps> = ({value, project_title, project_link, content, expandedItems, setExpandedItems, darkMode}) => (    
    <Accordion.Item value={value} className="">
        <Accordion.Header>
        <Accordion.Trigger className="AccordionTrigger">
            <div className="flex justify-center items-center gap-x-2">
                <ChevronDownIcon className="AccordionChevron" aria-hidden 
                    onClick={() => {
                        setExpandedItems((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]);
                    }}
                />
                <div className='font-semibold font-heading text-base sm:text-xl' >
                        <span onClick={() => {
                            setExpandedItems((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]);
                        }}>
                            {project_title}
                        </span>
                        {project_link}
                </div>
            </div>
        </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent text-base sm:text-lg font-body">
        <div className={`bordercontent border-l-2 ${darkMode ? 'border-neutral-200' : 'border-neutral-900'}`}>
        <div className="sm:h-1" />
        {content}
        </div>
        <div className="h-1 sm:h-2" />
        </Accordion.Content>
    </Accordion.Item>
);

export default Project;