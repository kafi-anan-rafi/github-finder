import { FaSlackHash } from 'react-icons/fa';

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <FaSlackHash className='text-6xl'/>
        <p>Copyright &copy; {footerYear} All Rights Reserved!</p>
      </div>
    </footer>
  )
}

export default Footer