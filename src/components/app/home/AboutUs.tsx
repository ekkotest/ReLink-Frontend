import SectionName from '@/components/app/home/SectionName';
import SectionTitle1 from '@/components/app/home/SectionTitle1';
import SectionTitle2 from '@/components/app/home/SectionTitle2';

export default function AboutUS() {
  return (
    <div className='AboutUs flex  w-full  flex-col items-center   gap-10 bg-neutral-50 p-10'>
      <div className='Title flex flex-col items-center gap-5 '>
        <div className='Frame623 flex flex-col items-center gap-2.5'>
          <SectionName>Relink</SectionName>
          <SectionTitle1>About us</SectionTitle1>
        </div>
        <SectionTitle2>
          <p>
            Relink is on a bold mission to achieve open science for all. We aim
            to revolutionize the research landscape by harnessing the power of
            advanced language models to make research fundamentally more
            efficient and accessible. At Relink, we believe that everyone should
            have access to the latest research and insights, can contribute to
            the research ecosystem, regardless of their background or budget.
          </p>
          <p>
            Redesigning Literature Review is only our first milestone. Next, we
            will launch a pioneering research collaboration platform, uniting
            researchers from diverse backgrounds, fostering collaboration and
            driving progress towards shared goals. Be at the forefront of this
            revolution. Join our waitlist at{' '}
            <a href='https://www.relinkapp.com'>relinkapp.com</a> to become one
            of the early adopters of the collaboration platform. If our vision
            of open science resonates with you, we invite you to connect with
            us. Learn how you can contribute to and support this transformative
            journey towards a more open, inclusive world of research.
          </p>
        </SectionTitle2>
      </div>

      <div className='Logo flex items-center justify-center gap-4 p-2'>
        <div className='Group39596  h-8 w-16'>
          <img
            className='Union  left-[3.42px] top-[0.08px] h-8 w-14'
            src='svg/Logo.svg'
          />
        </div>
        <div className="Relink font-['Poppins'] text-2xl font-semibold  text-slate-600">
          Relink
        </div>
      </div>
    </div>
  );
}
