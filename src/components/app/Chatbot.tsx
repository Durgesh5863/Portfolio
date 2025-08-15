'use client';
import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatePresence, motion } from 'framer-motion';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm an AI assistant. How can I help you learn more about Durgesh?", sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    const currentInputValue = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      // Update the API endpoint to the new location
      const response = await fetch('/ai/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInputValue }), // Use 'message' as the key
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botResponse: Message = { 
        id: Date.now() + 1, 
        text: data.answer || "I'm not sure how to respond to that.", 
        sender: 'bot' 
      };
      setMessages((prev) => [...prev, botResponse]);

    } catch (error) {
      console.error("Failed to fetch chatbot response:", error);
      const errorResponse: Message = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting to the backend right now.",
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
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
                      {messages.map((message) => (
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
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask a question..."
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
          {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
        </Button>
      </div>
    </>
  );
}
