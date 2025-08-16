'use client';
import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatePresence, motion } from 'framer-motion';

// Import useCopilotChat and message types
import { useCopilotChat } from '@copilotkit/react-core';
import { TextMessage, MessageRole } from "@copilotkit/runtime-client-gql";


// Renamed type alias
type ChatMessage = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  // Use the renamed type alias
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, text: "Hello! I'm an AI assistant. How can I help you learn more about Durgesh?남도", sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Use the useCopilotChat hook, only destructuring available properties
  const {
    visibleMessages, // Correct property name from documentation
    isLoading, // CopilotKit's loading state
    appendMessage // Function to send messages
  } = useCopilotChat();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, visibleMessages]); // Include visibleMessages in the dependency array

  useEffect(() => {
    // Sync CopilotKit's messages with your local messages state
    // Use the renamed type alias
    const syncedMessages: ChatMessage[] = visibleMessages.map((msg, index) => ({
      id: index, // You might want a better ID
      text: (msg as any).content, // Adjust based on CopilotKit message structure
      sender: (msg as any).role === 'user' ? 'user' : 'bot', // Adjust based on CopilotKit role
    }));
    setMessages([
      { id: 1, text: "Hello! I'm an AI assistant. How can I help you learn more about Durgesh?남도", sender: 'bot' }, // Keep initial message
      ...syncedMessages.slice(1) // Add synced messages, excluding the potential initial bot message from copilotMessages
    ]);

  }, [visibleMessages]); // Sync when visibleMessages changes


  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Add user message to local state immediately
    // Use the renamed type alias
    const userMessage: ChatMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    // Use appendMessage from CopilotKit to send the message
    await appendMessage(
      new TextMessage({
        role: MessageRole.User,
        content: inputValue,
      }) as any // Type assertion might be needed depending on TextMessage definition
    );

    // Clear the input after sending
    setInputValue('');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute bottom-[calc(100%+1rem)] right-0"
            >
              <Card className="w-80 h-[28rem] flex flex-col shadow-2xl">
                <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-3">
                    <Bot className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">AI Assistant</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" onClick={toggleChat}>
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col">
                  <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                    <div className="space-y-4">
                      {messages.map((message: ChatMessage) => ( // Explicitly type the message parameter
                        <div
                          key={message.id}
                          className={`flex items-end gap-2 ${
                            message.sender === 'user' ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          {message.sender === 'bot' && (
                            <Avatar className="h-8 w-8">
                                <AvatarFallback>AI</AvatarFallback>
                            </Avatar>
                          )}
                           <div
                            className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                              message.sender === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-secondary'
                            }`}
                          >
                            {message.text}
                          </div>
                           {message.sender === 'user' && (
                            <Avatar className="h-8 w-8">
                                <AvatarFallback>You</AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                      ))}

                      {/* Loading indicator can be based on CopilotKit's isLoading */}
                      {isLoading && (
                        <div className="flex items-center gap-2">
                           <Avatar className="h-8 w-8">
                                <AvatarFallback>AI</AvatarFallback>
                           </Avatar>
                          <div className="bg-secondary rounded-lg px-3 py-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                  <div className="p-4 border-t">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} // Keep your input state handler
                        placeholder="Ask a question...남도"
                        autoComplete="off"
                        disabled={isLoading}
                      />
                      <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
        <Button onClick={toggleChat} size="icon" className="w-16 h-16 rounded-full shadow-lg">
          {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}\
        </Button>
      </div>
    </>
  );
}
