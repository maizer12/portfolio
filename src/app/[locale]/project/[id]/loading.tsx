import { cn } from '@/shared/lib/utils';
import styles from './loading.module.scss';
import { LoadingSpinner } from '@/shared/common';

interface Props {
  className?: string;
}
const Loading: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, 'pt-40 text-center text-white flex justify-center text-base items-center gap-8')}>
      <LoadingSpinner />
      Loading...
    </div>
  );
};

export default Loading;
