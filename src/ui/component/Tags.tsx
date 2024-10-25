import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

export default function Tags({ className = '' }) {
  return (
    <div
      className={
        'px-7 py-5 bg-grey rounded-md relative h-fit md:h-auto max-h-[670px] overflow-y-auto dark:bg-dark-grey' +
        className
      }
    >
      <h3 className="text-xl text-dark-grey font-bold font-serif dark:text-grey">Tags</h3>
      <ul className="mt-4">
        <li className="mt-1 flex items-center">
          <FontAwesomeIcon icon={faHandPointRight} className="me-3 text-accent text-sm" />
          <div className="hover:underline hover:cursor-pointer">Postman (5)</div>
        </li>
        <li className="mt-1 flex items-center">
          <FontAwesomeIcon icon={faHandPointRight} className="me-3 text-accent text-sm" />
          <div className="hover:underline hover:cursor-pointer">Backend (2)</div>
        </li>
      </ul>
    </div>
  );
}
