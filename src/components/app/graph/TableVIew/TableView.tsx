import TableColumn from '@/components/app/graph/TableView/TableColumn';

export default function TableView() {
  // TODO: Replace test data with props
  const MAX_TEST_ITEMS = 3;
  const tests = [
    {
      title: 'Hypothesis',
      items: new Array(Math.floor(Math.random() * MAX_TEST_ITEMS) + 1).fill(0),
    },
    {
      title: 'Observation',
      items: new Array(Math.floor(Math.random() * MAX_TEST_ITEMS) + 1).fill(0),
    },
    {
      title: 'Experiment',
      items: new Array(Math.floor(Math.random() * MAX_TEST_ITEMS) + 1).fill(0),
    },
    {
      title: 'Theory',
      items: new Array(Math.floor(Math.random() * MAX_TEST_ITEMS) + 1).fill(0),
    },
  ];

  return (
    <div className='mx-20 my-0 flex max-h-full max-w-full flex-row gap-2.5'>
      {tests.map((t, i) => (
        <TableColumn key={i} tableColumn={tests[i]}></TableColumn>
      ))}
    </div>
  );
}
