import { BallTriangle } from 'react-loader-spinner';
import s from './Loader.module.css';

function Loader() {
  return (
    <div className={s.container}>
      {' '}
      <BallTriangle color="#4267B2" />
    </div>
  );
}

export default Loader;
