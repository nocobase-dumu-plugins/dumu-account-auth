import { useTranslation } from 'react-i18next';

export const NAMESPACE = 'dumu-account-auth';

export function useAuthTranslation() {
  return useTranslation(NAMESPACE);
}
