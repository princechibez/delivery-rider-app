import Dan from "../assets/images/daniel.png";
import Esther from '../assets/images/esther.png';
import Candy from "../assets/images/candy.png";
import Francis from "../assets/images/francis.png";

export interface IConversationProps {
    image: any;
    senderName: string;
    lastMessage: string;
    timestamp: string;
    unread: number
}

export const conversations = [
    {
        image: "",
        senderName: "George",
        lastMessage: "Please, where are you?",
        timestamp: '11 Mar.',
        unread: 1,
        address: "4 Sultan Bello, Agric, IKD, Lagos",
    },
    {
        image: Dan,
        senderName: "Daniella",
        lastMessage: "I've been calling you",
        timestamp: '14 Mar.',
        unread: 3,
        address: "426 Abakiliki street, Okpuno Awka, Anambra"
    },
    {
        image: Esther,
        senderName: "Esther",
        lastMessage: "Where are you, can i call?",
        timestamp: '2 Mar.',
        unread: 2,
        address: "78 Book foundation, Ifite, Anambra"
    },
    {
        image: Candy,
        senderName: "Candy",
        lastMessage: "Order received thanks",
        timestamp: '26 Feb.',
        unread: 1,
        address: "Egbo Cresent Ebonyi State"
    },
    {
        image: Francis,
        senderName: "Francisca",
        lastMessage: "Thanks",
        timestamp: '26 Feb.',
        unread: 4,
        address: "Capital city of Enugu State"
    }
]