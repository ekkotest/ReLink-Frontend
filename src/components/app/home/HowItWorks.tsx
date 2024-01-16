import SectionName from '@/components/app/home/SectionName';
import SectionTitle1 from '@/components/app/home/SectionTitle1';
import SectionTitle2 from '@/components/app/home/SectionTitle2';

const Title = () => (
  <div className='Frame619 flex flex-col items-center justify-start gap-5'>
    <SectionName>How it works</SectionName>
    <div className='Frame623 flex flex-col items-center justify-start gap-5'>
      <SectionTitle1>Understand Articles With Diagrams</SectionTitle1>
      <SectionTitle2>
        Upload PDFs, let AI do the summary, and get research insights. It's that
        simple.
      </SectionTitle2>
    </div>
  </div>
);
export default function HowItWorks() {
  return (
    <div className='Features  inline-flex  flex-col items-center justify-center gap-16'>
      <Title />
      <img className='pl-32' src='svg/home/Diagrams.svg' />
    </div>
  );
}
