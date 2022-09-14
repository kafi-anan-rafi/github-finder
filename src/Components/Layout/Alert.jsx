import { useContext } from 'react';
import AlertContext from '../../Context/Alert/AlertContext';
import { GiCrossMark } from 'react-icons/gi';

function Alert() {
  const { alert } = useContext(AlertContext);
  return alert !== null && (
    <div className="flex items-start mb-4 space-x-2">
      {alert.type === 'error' && (
        <GiCrossMark className='inline pr-2 text-3xl' />
      )}
      <p className="flex-1 text-base font-semibold leading-7 text-white align-middle">
        <strong>{alert.msg}</strong>
      </p>
    </div>
  )
}

export default Alert