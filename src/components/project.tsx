import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

type ProjectProps = {
    value: string;
    project_title: React.ReactNode;
    content: React.ReactNode;
    expandedItems: string[];
    setExpandedItems: React.Dispatch<React.SetStateAction<string[]>>;
  };

const Project: React.FC<ProjectProps> = ({value, project_title, content, expandedItems, setExpandedItems}) => (    
    <Accordion.Item value={value}>
        <Accordion.Header>
        <Accordion.Trigger className="AccordionTrigger" onClick={() => {
            setExpandedItems((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]);
        }}>
            <div className="flex justify-center items-center gap-x-2">
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
            <div className='font-bold text-base sm:text-xl'>
                {project_title}
            </div>
            </div>
        </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent ml-6 text-base sm:text-lg">
        {content}
        </Accordion.Content>
    </Accordion.Item>
);

export default Project;