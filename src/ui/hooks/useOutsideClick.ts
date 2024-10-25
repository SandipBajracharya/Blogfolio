import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    // Function to handle outside click
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // second condition check is to prevent closing when menu click
        callback(); // Call the callback function if clicked outside
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
