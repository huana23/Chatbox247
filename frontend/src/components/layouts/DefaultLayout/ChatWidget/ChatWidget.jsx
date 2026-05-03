import { useState, useEffect, useRef } from "react";

const WEBHOOK_URL =
  "https://binhlt1809.app.n8n.cloud/webhook/3a536ed1-fe56-4b9b-be13-6782d73abbf9";

function ChatWidget() {
  const [open, setOpen] = useState(false);

  // tạo sessionId ngay khi khởi tạo state
  const [sessionId] = useState(() => {
    let sid = localStorage.getItem("chatbot247_session");

    if (!sid) {
      sid = crypto.randomUUID();
      localStorage.setItem("chatbot247_session", sid);
    }

    return sid;
  });

  // load history ngay khi init state
  const [messages, setMessages] = useState(() => {
    const history = localStorage.getItem("chatbot247_history");

    if (history) {
      return JSON.parse(history);
    }

    return [
      {
        from: "bot",
        text: "👋 Xin chào! Tôi là AI của ChatBot247. Tôi có thể giúp gì cho bạn?",
      },
    ];
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  /* lưu lịch sử + scroll */
  useEffect(() => {
    localStorage.setItem("chatbot247_history", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");

    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);

    setLoading(true);

    const fullChat = messages.map(m => `[${m.from}]: ${m.text}`).join('\n');

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          message: userMsg,
          fullChat:fullChat,
          source: "website",
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: data.reply || "ChatBot247 sẽ phản hồi bạn ngay 😊",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "⚠️ Không kết nối được hệ thống.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 w-[360px] h-[520px] bg-white shadow-2xl rounded-xl z-50 flex flex-col">
          {/* header */}
          <div className="flex items-center justify-between px-4 py-3 bg-orange-500 text-white rounded-t-xl">
            <span className="font-semibold">ChatBot247</span>

            <button
              className="w-5 h-5 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  m.from === "user"
                    ? "bg-orange-500 text-white ml-auto"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {m.from === "bot" ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: m.text.replace(/\n/g, "<br>"),
                    }}
                  />
                ) : (
                  m.text
                )}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-100 text-gray-600 text-sm px-3 py-2 rounded-lg w-fit">
                ChatBot247 đang trả lời...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* input */}
          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Nhập câu hỏi..."
              className="flex-1 border rounded px-3 py-2 text-sm"
            />

            <button
              onClick={sendMessage}
              className="bg-orange-500 text-white px-4 rounded hover:bg-orange-600"
            >
              Gửi
            </button>
          </div>
        </div>
      )}

      {/* button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-orange-500 text-white cursor-pointer rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition z-50"
      >
        💬 Chat ngay
      </button>
    </>
  );
}

export default ChatWidget;