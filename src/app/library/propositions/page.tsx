import PropNode, { PropNodeDetail } from '@/components/app/shared/PropNode';

const generateTestData = (num) => {
  const res: PropNodeDetail[] = [];
  const titles = ['Hypothesis', 'Case Study', 'Observation', 'Experiment'];
  for (let i = 0; i < num; i++) {
    const temp = Math.floor(Math.random() * 4);
    res.push({
      title: titles[temp],
      mode: 'graph',
      isSaved: true,
      content:
        'The degradation problem in plain networks, where deeper networks have higher training error, is attributed to optimization difficulties rather than vanishing gradients.',
    });
  }

  return res;
};

export default async function Page() {
  const temp = generateTestData(12);
  return (
    <div className='flex h-full w-full flex-row flex-wrap gap-10'>
      {temp.map((t, i) => (
        <PropNode key={i} detail={t} />
      ))}
    </div>
  );
}
