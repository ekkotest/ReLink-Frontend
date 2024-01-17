import SectionName from '@/components/app/home/SectionName';
import SectionTitle1 from '@/components/app/home/SectionTitle1';
import SectionTitle2 from '@/components/app/home/SectionTitle2';

const data = [
  {
    title: 'Catch all key points',
    content:
      'We distill complex papers into clear and concise propositions, so you can catch all citation-worthy knowledge. Customize the depth of summary to get the right amount of detail.',
    icon: 'svg/home/RadiusSettingOutlined.svg',
  },
  {
    title: 'Visualize papers with diagrams',
    content:
      'After summarizing papers into propositions, we organize them into intuitive diagrams. So you can read faster and deepen understanding of logical connections.',
    icon: 'svg/home/Bulb.svg',
  },
  {
    title: 'Generate new research ideas',
    content:
      'Struggling to pinpoint a research topic? Our AI agent delves into the articles you upload, suggest research questions and untapped area of interest. Give it a try for free!',
    icon: 'svg/home/Partition.svg',
  },
];

const Card = ({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: string;
}) => (
  <div className='Frame584 inline-flex flex-col items-start justify-start gap-2.5 rounded border border-zinc-100 bg-white px-7 py-10'>
    <div className='IconWrapper48px flex flex-col items-center justify-center'>
      <img className='Radiussettingoutlined relative h-12 w-12' src={icon} />
    </div>
    <div className='Spacer24px inline-flex items-center justify-start gap-2.5'>
      <div className='Spacer h-6 w-6' />
    </div>
    <div className='Frame584 flex flex-col items-start justify-start gap-3.5'>
      <div className="CatchAllKeyPoints font-['Public Sans'] text-base font-medium leading-normal text-neutral-800">
        {title}
      </div>
      <div className="WeDistillComplexPapersIntoClearAndConcisePropositionsSoYouCanCatchAllCitationWorthyKnowledgeCustomizeTheDepthOfSummaryToGetTheRightAmountOfDetail font-['Public Sans'] w-80 text-sm font-normal leading-snug text-neutral-400">
        {content}
      </div>
    </div>
  </div>
);

const Title = () => (
  <div className='Frame619 flex flex-col items-center justify-start gap-5'>
    <SectionName>Features</SectionName>
    <div className='Frame623 flex flex-col items-center justify-start gap-5'>
      <SectionTitle1>Re-imagine Literature Review</SectionTitle1>
      <SectionTitle2>
        Relink is an innovative tool that summarizes research papers into
        propositions, which are citation-worthy statements. With our method, you
        will save significant time by reading summarized articles, without
        missing key insights.
      </SectionTitle2>
    </div>
  </div>
);

export default function Features() {
  return (
    <div className='Features inline-flex  flex-col items-center justify-center gap-16'>
      <Title />
      <div className='Frame586 flex flex-wrap  justify-center gap-5'>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              content={item.content}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
}
