import { kitchenTipsData } from '../../../data/kitchenTipsData';
import KitchenTip from './KitchenTip/KitchenTip';

function KitchenOrganizationTips() {
  return (
    <div className='kitchen-organization' id='kitchen-tips'>
      <h2>Kitchen Organization Tips</h2>
      {kitchenTipsData.map((el) => {
        const { id, tipDescription, tipName, tipPointBullet } = el;
        return (
          <KitchenTip
            name={tipName}
            description={tipDescription}
            id={id}
            key={id}
            bullets={tipPointBullet}
          />
        );
      })}
    </div>
  );
}

export default KitchenOrganizationTips;
