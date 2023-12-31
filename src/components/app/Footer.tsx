export default function Example() {
  return (
    <div className='mx-auto  p-32 sm:py-48 lg:py-56'>
      <div className='text-center'>
        <a className='text-4xl font-bold tracking-tight  sm:text-6xl'>Relink</a>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          About us
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <footer className='mt-6 text-gray-700'>
          © {new Date().getFullYear()} By Theodorus Clarence1
        </footer>
      </div>
    </div>
  );
}
