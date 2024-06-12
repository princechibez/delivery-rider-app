export interface IMessage {
    text: string;
    timestamp: string;
    myMessage: boolean;
    read: boolean
}

export const messages = [
    {
        text: "Hello Mr. Daniel please where are you, been calling you.",
        timestamp: "09:38 AM",
        read: true,
        myMessage: false
    },
    {
        text: "Hi, I'm on my way to you",
        timestamp: "09:30 AM",
        read: true,
        myMessage: true
    },
    {
        text: "Oh ok, thanks, I'm waiting",
        timestamp: "09:38 AM",
        read: true,
        myMessage: false
    },
    {
        text: "Alright.",
        timestamp: "09:41 AM",
        read: true,
        myMessage: true
    },
    {
        text: "I'll be with you soon",
        timestamp: "09:41 AM",
        read: true,
        myMessage: true
    },
    {
        text: "Hello Mr. Daniel please where are you, been calling you.",
        timestamp: "09:38 AM",
        read: true,
        myMessage: false
    },
    {
        text: "Hi, I'm on my way to you",
        timestamp: "09:30 AM",
        read: true,
        myMessage: true
    },
    {
        text: "Oh ok, thanks, I'm waiting",
        timestamp: "09:38 AM",
        read: true,
        myMessage: false
    },
    {
        text: "Alright.",
        timestamp: "09:41 AM",
        read: false,
        myMessage: true
    },
    {
        text: "I'll be with you soon",
        timestamp: "09:41 AM",
        read: false,
        myMessage: true
    }
]