import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

type ProjectProps = {
    value: string;
    project_title: React.ReactNode;
    content: React.ReactNode;
  };

const Project: React.FC<ProjectProps> = ({value, project_title, content}) => (
    <Accordion.Item value={value}>
        <Accordion.Header>
        <Accordion.Trigger className="AccordionTrigger">
            <div className="flex justify-center items-center gap-x-2">
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
            <div className='font-bold text-xl'>
                {project_title}
            </div>
            </div>
        </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent ml-6 text-lg">
        {content}
        </Accordion.Content>
    </Accordion.Item>
);

export default Project;