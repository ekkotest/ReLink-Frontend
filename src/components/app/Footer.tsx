import { FaInstagram, FaSquareFacebook, FaTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className='Frame39643 flex  items-center   p-6'>
      <div className="2023RelinkIncAllRightsReservedLegalInformation font-['Public Sans']  text-xs font-normal leading-tight text-neutral-800">
        © 2023 Relink,Inc. All rights reserved. Legal information
      </div>
      <div className='MenuLegacy flex w-44 items-center justify-end'>
        <div className='MenuItem inline-flex flex-col items-center justify-center gap-7 px-5'>
          <FaSquareFacebook className='Facebook relative h-4 w-4' />
        </div>
        <div className='MenuItem inline-flex flex-col items-center justify-center gap-7 px-5'>
          <FaInstagram className='Instagram relative h-4 w-4' />
        </div>
        <div className='MenuItem inline-flex flex-col items-center justify-center gap-7 px-5'>
          <FaTwitter className='Twitter relative h-4 w-4' />
        </div>
      </div>
    </div>
  );
}
