import {
  CookieIconSVG,
  HeartIconSVG,
  KitchenIconSVG,
} from '../../svg/EntranceSVG';

function EntranceWords() {
  return (
    <h2>
      <KitchenIconSVG />
      <span className='first-child'>From Kitchen</span> <br />
      <HeartIconSVG />
      <span className='second-child'>to Heart</span> <br />
      <CookieIconSVG />
      <span
        className='third-child'
        style={{
          color: '#ffa94d',
          textDecoration: 'underline',
        }}
      >
        Every Bite Matters.
      </span>
    </h2>
  );
}

export default EntranceWords;
