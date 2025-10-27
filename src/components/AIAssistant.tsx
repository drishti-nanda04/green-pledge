'use client';

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input';
import { Action, Actions } from '@/components/ai-elements/actions';
import { Fragment, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { Response } from '@/components/ai-elements/response';
import { CopyIcon, MessageSquareIcon, XIcon, Minimize2Icon, GlobeIcon } from 'lucide-react';
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from '@/components/ai-elements/sources';
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@/components/ai-elements/reasoning';
import { Loader } from '@/components/ai-elements/loader';

const ChatBotDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [webSearch, setWebSearch] = useState(false);
  const { messages, sendMessage, status, regenerate } = useChat();

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) {
      return;
    }

    sendMessage(
      { 
        text: message.text || 'Sent with attachments',
        files: message.files 
      },
      {
        body: {
          model: 'google/gemini-2.5-flash',
          webSearch: webSearch,
        },
      },
    );
    setInput('');
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-700 hover:bg-green-800 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2 md:gap-3 group hover:shadow-xl active:scale-95"
          aria-label="Open AI Assistant"
        >
          <MessageSquareIcon className="h-5 w-5 md:h-6 md:w-6" />
          <span className="hidden lg:group-hover:block text-sm font-medium pr-2">
            AI Assistant
          </span>
        </button>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 ${
            isMinimized ? 'h-16 md:h-20' : 'h-[80vh] md:h-[600px] max-h-[600px]'
          } w-[95vw] sm:w-[90vw] md:w-[400px] max-w-[400px] bg-white rounded-xl md:rounded-2xl shadow-2xl border-2 border-green-200 flex flex-col transition-all duration-300 overflow-hidden`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-3 md:p-4 flex items-center justify-between rounded-t-xl md:rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 md:p-2 rounded-lg">
                <MessageSquareIcon className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-lg">GreenGuard</h3>
                <p className="text-xs text-green-100 hidden sm:block">AI Environmental Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 md:p-2 hover:bg-white/20 rounded-lg transition"
                aria-label={isMinimized ? 'Expand' : 'Minimize'}
              >
                <Minimize2Icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 md:p-2 hover:bg-white/20 rounded-lg transition"
                aria-label="Close"
              >
                <XIcon className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <>
              <Conversation className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
                <ConversationContent className="p-4">
                  {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center px-4">
                      <div className="bg-green-100 p-4 md:p-6 rounded-full mb-3 md:mb-4">
                        <MessageSquareIcon className="h-10 w-10 md:h-12 md:w-12 text-green-700" />
                      </div>
                      <h4 className="text-base md:text-lg font-semibold text-green-900 mb-2">
                        Welcome to GreenGuard
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 max-w-xs">
                        I'm your AI environmental assistant! Ask me about reforestation, carbon credits, packages, or your dashboard metrics!
                      </p>
                    </div>
                  )}
                  {messages.map((message) => (
                    <div key={message.id}>
                      {message.role === 'assistant' && message.parts.filter((part) => part.type === 'source-url').length > 0 && (
                        <Sources>
                          <SourcesTrigger
                            count={
                              message.parts.filter(
                                (part) => part.type === 'source-url',
                              ).length
                            }
                          />
                          {message.parts.filter((part) => part.type === 'source-url').map((part, i) => (
                            <SourcesContent key={`${message.id}-${i}`}>
                              <Source
                                key={`${message.id}-${i}`}
                                href={part.url}
                                title={part.url}
                              />
                            </SourcesContent>
                          ))}
                        </Sources>
                      )}
                      {message.parts.map((part, i) => {
                        switch (part.type) {
                          case 'text':
                            return (
                              <Fragment key={`${message.id}-${i}`}>
                                <Message from={message.role}>
                                  <MessageContent>
                                    <Response>
                                      {part.text}
                                    </Response>
                                  </MessageContent>
                                </Message>
                                {message.role === 'assistant' && i === messages.length - 1 && (
                                  <Actions className="mt-2">
                                    <Action
                                      onClick={() => regenerate()}
                                      label="Retry"
                                    >
                                      <CopyIcon className="size-3" />
                                    </Action>
                                  </Actions>
                                )}
                              </Fragment>
                            );
                          case 'reasoning':
                            return (
                              <Reasoning
                                key={`${message.id}-${i}`}
                                className="w-full"
                                isStreaming={status === 'streaming' && i === message.parts.length - 1 && message.id === messages.at(-1)?.id}
                              >
                                <ReasoningTrigger />
                                <ReasoningContent>{part.text}</ReasoningContent>
                              </Reasoning>
                            );
                          default:
                            return null;
                        }
                      })}
                    </div>
                  ))}
                  {status === 'submitted' && <Loader />}
                </ConversationContent>
                <ConversationScrollButton />
              </Conversation>

              {/* Input Area */}
              <div className="border-t border-green-200 bg-white">
                <PromptInput onSubmit={handleSubmit} className="border-0" multiple>
                  <PromptInputBody>
                    <PromptInputAttachments>
                      {(attachment) => <PromptInputAttachment data={attachment} />}
                    </PromptInputAttachments>
                    <PromptInputTextarea
                      onChange={(e) => setInput(e.target.value)}
                      value={input}
                      placeholder="Ask GreenGuard about packages, dashboard metrics, or carbon credits..."
                    />
                  </PromptInputBody>
                  <PromptInputFooter>
                    <PromptInputTools>
                      <PromptInputButton
                        variant={webSearch ? 'default' : 'ghost'}
                        onClick={() => setWebSearch(!webSearch)}
                        className="text-green-700 hover:text-green-800"
                      >
                        <GlobeIcon size={16} />
                        <span className="hidden sm:inline">Search</span>
                      </PromptInputButton>
                    </PromptInputTools>
                    <PromptInputSubmit disabled={!input && !status} status={status} />
                  </PromptInputFooter>
                </PromptInput>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBotDemo;
