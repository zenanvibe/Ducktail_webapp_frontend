import React from "react";

const messages = [
    { text: "Hey How are you today?", sender: "other" },
    { text: "I'm ok what about you?", sender: "self" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", sender: "other" },
    { text: "Lorem ipsum dolor sit, amet consectetur adipisicing. ?", sender: "self" },
    { text: "Lorem ipsum dolor sit amet !", sender: "other" },
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, in.", sender: "other" },
];

const ChatTile = () => {
    return (
       <>
        <div className="flex flex-col  bg-gray-100 p-4" style={{ borderRadius: "12px" }}>
            <div className="flex-1 overflow-y-auto space-y-4 py-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.sender === "self" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`rounded-lg p-3 max-w-xs text-white ${msg.sender === "self" ? "bg-blue-500" : "bg-gray-300 text-black"}`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center p-2 bg-white border-t" style={{ borderRadius: "12px" }}>
                <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 p-2 border  outline-none"
                    style={{ borderRadius: "12px" }}
                />
                <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
            </div>
        </div>
       </>
    );
};

export default ChatTile;
