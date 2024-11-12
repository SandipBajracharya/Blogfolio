import { toast } from 'react-toastify';

export const SuccessNotification = (message = 'Success') => toast.success(message);
export const ErrorNotification = (message = 'Error') => toast.error(message);
export const WarnNotification = (message = 'Warning') => toast.warn(message);
export const InfoNotification = (message = 'Info') => toast.info(message);
