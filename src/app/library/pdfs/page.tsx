import PdfNode from '@/components/app/library/PdfNode';

const generateTestData = (num) => {
  const res: string[] = [];
  for (let i = 0; i < num; i++) {
    res.push(
      'Responsible Artificial Intelligence: Designing AI For Human Values. pdf'
    );
  }

  return res;
};

export default async function Page() {
  const temp = generateTestData(20);
  return (
    <div className='flex h-full w-full flex-row flex-wrap gap-10'>
      {temp.map((t, i) => (
        <PdfNode key={i} title={t} />
      ))}
    </div>
  );
}
