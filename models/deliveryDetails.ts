export interface DeliveryDetailsProps {
    trackingID: string;
    ReceiverName: string;
    PickUpAddress: string;
    deliveryAddress: string;
    status: string;
    weight: string;
}

export const deliveryDetails = {
    trackingID: "REG10123637",
    ReceiverName: "Babajide",
    PickUpAddress: "Agric, IKD, Lag.",
    deliveryAddress: "Phase 1, Lekki, Lag.",
    status: 'Transit',
    weight: "10 kg"
}