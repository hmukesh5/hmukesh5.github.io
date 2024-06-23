import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

type ProjectProps = {
    value: string;
    project_title: React.ReactNode;
    project_link: React.ReactNode;
    content: React.ReactNode;
    expandedItems: string[];
    setExpandedItems: React.Dispatch<React.SetStateAction<string[]>>;
  };

const Project: React.FC<ProjectProps> = ({value, project_title, project_link, content, expandedItems, setExpandedItems}) => (    
    <Accordion.Item value={value} className="">
        <Accordion.Header>
        <Accordion.Trigger className="AccordionTrigger">
            <div className="flex justify-center items-center gap-x-2">
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
                <div className='font-bold font-heading text-base sm:text-xl' >
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
        <Accordion.Content className="AccordionContent ml-6 text-base sm:text-lg font-body">
        <div className="h-1" />
        {content}
        <div className="h-5" />
        </Accordion.Content>
    </Accordion.Item>
);

export default Project;