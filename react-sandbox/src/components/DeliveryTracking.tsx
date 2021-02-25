import { FunctionComponent } from 'react';

type DeliveryTrackingProps = {
    title: string,
    paragraph: string
}

const DeliveryTracking: FunctionComponent<DeliveryTrackingProps> = ({ title, paragraph }) => <aside>
    <h2>{title}</h2>
    <p>
        {paragraph}
    </p>
</aside>

export default DeliveryTracking;
