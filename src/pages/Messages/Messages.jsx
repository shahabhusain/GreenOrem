import React, { useState } from 'react';
import { Search, Star, MoreVertical, Video, Phone, MessageCircle, Mic, Smile, Paperclip, Send, ThumbsUp, ChevronDown } from 'lucide-react';

const Messages = () => {
  const [currentChat, setCurrentChat] = useState('Ammi Watts');
  const [messageInput, setMessageInput] = useState('');
  
  const contacts = [
    { id: 1, name: 'Jennifer Markus', message: 'Hey! Did you finish the Hi-Fi wireframes for flora app design?', time: 'Today | 05:30 PM', starred: false },
    { id: 2, name: 'Ammi Watts', message: 'Hey! Did you finish the Hi-Fi wireframes for flora app design?', time: 'Today | 05:30 PM', starred: false },
    { id: 3, name: 'Jerry Helfer', message: 'Hey! Did you finish the Hi-Fi wireframes for flora app design?', time: 'Today | 05:30 PM', starred: false },
    { id: 4, name: 'David Elson', message: 'Hey! Did you finish the Hi-Fi wireframes for flora app design?', time: 'Today | 05:30 PM', starred: false },
    { id: 5, name: 'Mary Freund', message: 'Hey! Did you finish the Hi-Fi wireframes for flora app design?', time: 'Today | 05:30 PM', starred: false },
  ];

  const messages = {
    'Ammi Watts': [
      { id: 1, text: 'Oh, hello! All perfectly.\nI will check it and get back to you soon', time: '04:45 PM', sent: false },
      { id: 2, text: 'Oh, hello! All perfectly.\nI will check it and get back to you soon', time: '04:45 PM', sent: true },
    ],
    'Jerry Helfer': [
      { id: 1, text: 'Oh, hello! All perfectly.\nI will check it and get back to you soon', time: '04:45 PM', sent: false },
    ],
    'David Elson': [
      { id: 1, text: 'Oh, hello! All perfectly.\nI will check it and get back to you soon', time: '04:45 PM', sent: true },
    ],
    'Mary Freund': [
      { id: 1, text: '', time: '04:45 PM', sent: false, isAudio: true, duration: '01:24' },
    ],
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      // Handle sending message logic would go here
      setMessageInput('');
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(part => part[0]).join('');
  };

  const getRandomColor = (name) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500', 'bg-yellow-500'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="flex h-[620px] w-[98%] mx-auto mt-24 rounded-lg overflow-hidden">
      {/* Left sidebar */}
        <div className="p-4">
          <button className="bg-green-600 text-white rounded-md py-2 px-4 flex items-center gap-2">
            <MessageCircle size={20} />
            <span>Messages</span>
          </button>
        </div>

      <div className="w-1/3 border-r border-gray-200 bg-white flex flex-col">
        {/* Messages button */}
      
        {/* Filter tabs */}
        <div className="flex px-2 text-sm border-b border-gray-200">
          <button className="py-2 px-3 text-white bg-green-600 rounded-t-md">All Messages</button>
          <button className="py-2 px-3 text-gray-600">Unread</button>
          <button className="py-2 px-3 text-gray-600">Starred Messages</button>
          <button className="ml-auto py-2 px-1">
            <MoreVertical size={18} className="text-gray-600" />
          </button>
        </div>

        {/* Search */}
        <div className="p-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search or start a new chat"
              className="w-full bg-gray-100 rounded-md pl-8 pr-3 py-2 text-sm"
            />
            <Search size={16} className="absolute left-2 top-2.5 text-gray-500" />
          </div>
        </div>

        {/* Contacts list */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map(contact => (
            <div 
              key={contact.id}
              onClick={() => setCurrentChat(contact.name)}
              className={`p-3 flex items-start border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${currentChat === contact.name ? 'bg-gray-50' : ''}`}
            >
              <div className="flex-shrink-0 mr-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${getRandomColor(contact.name)}`}>
                  {getInitials(contact.name)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-medium text-gray-900 truncate">{contact.name}</h3>
                  <Star size={16} className={`${contact.starred ? 'text-yellow-400' : 'text-gray-300'}`} />
                </div>
                <p className="text-sm text-gray-600 truncate mt-1">{contact.message}</p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-400">{contact.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-200">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white mr-3 ${getRandomColor(currentChat)}`}>
              {getInitials(currentChat)}
            </div>
            <div>
              <h3 className="text-sm font-medium">{currentChat}</h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button><Video size={20} className="text-gray-600" /></button>
            <button><Phone size={20} className="text-gray-600" /></button>
            <button><Search size={20} className="text-gray-600" /></button>
            <button><MoreVertical size={20} className="text-gray-600" /></button>
          </div>
        </div>

        {/* Chat messages area */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
          <div className="flex flex-col gap-4">
            {messages[currentChat]?.map(message => (
              <div key={message.id} className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-md rounded-lg p-3 ${message.sent ? 'bg-green-500 text-white' : 'bg-blue-100 text-gray-800'}`}>
                  {message.isAudio ? (
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <Mic size={16} className="text-gray-600" />
                      </button>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-300 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                      <span className="text-xs">{message.duration}</span>
                    </div>
                  ) : (
                    <>
                      <p className="whitespace-pre-line">{message.text}</p>
                      <p className="text-xs mt-1 text-right opacity-70">{message.time}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message input area */}
        <div className="border-t border-gray-200 bg-white p-3">
          <div className="flex items-center gap-2">
            <button className="text-gray-500">
              <Smile size={24} />
            </button>
            <div className="flex-1 bg-gray-100 rounded-full flex items-center px-4 py-2">
              <input
                type="text"
                placeholder="Type your message here..."
                className="flex-1 bg-transparent outline-none"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <div className="flex items-center gap-2">
                <button className="text-gray-500">
                  <Mic size={20} />
                </button>
                <button className="text-gray-500">
                  <Paperclip size={20} />
                </button>
              </div>
            </div>
            {messageInput.trim() ? (
              <button 
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"
                onClick={handleSendMessage}
              >
                <Send size={18} />
              </button>
            ) : (
              <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                <ThumbsUp size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;