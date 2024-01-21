import TableColumn, {
  TableColumnInterface,
} from '@/components/app/graph/TableView/TableColumn';

export default function TableView() {
  // TODO: Replace test data with props
  const MAX_TEST_ITEMS = 3;
  const testItem = {
    title: 'Hypothesis',
    mode: 'table',
    isSaved: true,
    content:
      'The degradation problem in plain networks, where deeper networks have higher training error, is attributed to optimization difficulties rather than.',
  };
  const tests: TableColumnInterface[] = [
    {
      title: 'Hypothesis',
      items: new Array(Math.floor(Math.random() * MAX_TEST_ITEMS) + 1).fill(
        testItem
      ),
    },
    {
      title: 'Observation',
      items: new Array(Math.floor(Math.random() * MAX_TEST_ITEMS) + 1).fill(
        testItem
      ),
    },
    {
      title: 'Experiment',
      items: new Array(Math.floor(Math.random() * MAX_TEST_ITEMS) + 1).fill(
        testItem
      ),
    },
    {
      title: 'Theory',
      items: new Array(Math.floor(Math.random() * MAX_TEST_ITEMS) + 1).fill(
        testItem
      ),
    },
  ];

  return (
    <div className='mx-20 my-0 flex max-h-full max-w-full flex-row gap-2.5'>
      {tests.map((t, i) => (
        <TableColumn key={i} tableColumn={t}></TableColumn>
      ))}
    </div>
  );
}
