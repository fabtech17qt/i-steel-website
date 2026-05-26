'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Bot, ChevronDown } from 'lucide-react'

type Role = 'user' | 'bot'
interface Message {
  role: Role
  text: string
  time: string
}

// ---------------------------------------------------------------------------
// Preset Q&A — replace getResponse() with an async API call when ready
// ---------------------------------------------------------------------------
const QA = [
  {
    keys: ['hello', 'hi ', 'hey', 'morning', 'afternoon', 'evening', 'greet', 'start'],
    ans: "Hello! Welcome to iSteel Engineering. I can help with information about our services, projects, certifications, or getting a quote. What would you like to know?",
  },
  {
    keys: ['service', 'offer', 'provide', 'what do you', 'capabilities', 'scope'],
    ans: "iSteel delivers 12 integrated services under one contract:\n\n• Structural Steel Fabrication\n• Steel Erection & Installation\n• Civil Construction\n• MEP Contracting\n• Industrial Buildings\n• Oil & Gas Construction\n• Steel Blasting & Painting\n• Renovation & Fit-Out\n• Precast Concrete Works\n• Roofing & Cladding\n• Electromechanical Works\n• Steel Design & Engineering\n\nWhich service would you like to know more about?",
  },
  {
    keys: ['quote', 'price', 'cost', 'estimate', 'budget', 'how much', 'tender'],
    ans: "To request a quote, please visit our Contact page or email us at info@i-steelgroup.com — our team responds within 24 hours with an initial assessment. For urgent enquiries, call +974 4000 0000.",
  },
  {
    keys: ['location', 'address', 'where are you', 'doha', 'office', 'headquarter'],
    ans: "iSteel Engineering is headquartered in Doha, Qatar. We deliver projects across the entire country — from Lusail and The Pearl to Mesaieed Industrial City and beyond.",
  },
  {
    keys: ['certif', 'iso', 'accredit', 'standard', 'qcd', 'compliance'],
    ans: "iSteel holds three ISO certifications:\n\n• ISO 9001:2015 — Quality Management\n• ISO 14001:2015 — Environmental Management\n• ISO 45001:2018 — Occupational Health & Safety\n\nWe are also QCD registered for Qatar's chemical and petroleum sector.",
  },
  {
    keys: ['experience', 'year', 'founded', 'established', 'since', 'how long', 'history'],
    ans: "Founded in 2013, iSteel Engineering has over 12 years of experience delivering structural steel and civil projects in Qatar. We have completed hundreds of projects ranging from 50-tonne fabrication packages to 4,000 m² turnkey industrial facilities.",
  },
  {
    keys: ['contact', 'phone', 'email', 'call', 'reach', 'enquir', 'get in touch'],
    ans: "📧 info@i-steelgroup.com\n📞 +974 4000 0000\n🕐 Sunday – Thursday, 7:30 am – 6:00 pm\n\nOr visit our Contact page to submit a direct enquiry.",
  },
  {
    keys: ['fabricat', 'workshop', 'weld', 'beam', 'column', 'truss', 'section', 'plate'],
    ans: "Our Doha fabrication workshop is equipped with CNC plasma cutters, heavy saws, drilling stations, and certified welding bays. We produce beams, columns, trusses, and bespoke built-up sections to AISC, BS, and Eurocode standards — with full NDT testing (UT, MT, PT).",
  },
  {
    keys: ['oil', 'gas', 'petrochemical', 'qatarenergy', 'adnoc', 'upstream', 'midstream', 'mesaieed'],
    ans: "iSteel is QCD registered with extensive experience in structural and civil works within oil & gas facilities. We understand the HSE requirements for brownfield operating assets and deliver safely in hazardous area environments.",
  },
  {
    keys: ['warehouse', 'industrial', 'factory', 'pre-engineered', 'peb', 'portal frame', 'storage'],
    ans: "We design and build turnkey industrial warehouses and factories — from soil investigation to handover. Our PEB systems achieve clear spans up to 90 metres. A typical 4,000 m² project completes within 12–16 weeks.",
  },
  {
    keys: ['safety', 'hse', 'health', 'accident', 'environment', 'ptw', 'hazard'],
    ans: "Safety is non-negotiable at iSteel. Our ISO 45001:2018-certified HSE system enforces permit-to-work, daily toolbox talks, pre-task risk assessments, and strict PPE compliance on every site. Zero-tolerance unsafe act policy.",
  },
  {
    keys: ['roof', 'cladding', 'panel', 'sandwich', 'skylight', 'standing seam'],
    ans: "Our roofing & cladding division installs standing-seam metal roofing, insulated sandwich panels (PIR/PUR), skylights, and aluminium composite facades for industrial and commercial buildings across Qatar.",
  },
  {
    keys: ['civil', 'foundation', 'concrete', 'earthwork', 'excavat', 'pile', 'slab', 'drainage'],
    ans: "Our civil division delivers complete packages: bulk earthworks, pile foundations, reinforced concrete frames, ground slabs, drainage, and underground utilities — using our own plant fleet.",
  },
  {
    keys: ['mep', 'mechanical', 'electrical', 'plumbing', 'hvac', 'fire fight', 'bms', 'low voltage'],
    ans: "Our MEP division designs, installs, and commissions HVAC, LV electrical, fire fighting, plumbing, and BMS systems as part of our turnkey packages, tested to Qatar authority standards.",
  },
  {
    keys: ['project', 'portfolio', 'work', 'completed', 'past', 'gallery', 'case'],
    ans: "You can browse our delivered projects on the Projects page — covering industrial, commercial, oil & gas, civil, and MEP sectors. Notable work includes long-span commercial truss structures, industrial warehouse complexes, and major petrochemical fabrication packages.",
  },
  {
    keys: ['blast', 'paint', 'coat', 'surface', 'sa 2', 'sa2', 'epoxy', 'primer'],
    ans: "Our in-house blasting & painting facility applies abrasive blasting to Sa 2½/Sa 3 followed by zinc-rich epoxy primer and polyurethane or intumescent topcoats. We comply with SSPC/NACE specifications with full DFT records.",
  },
  {
    keys: ['design', 'engineer', 'tekla', 'bim', 'model', 'drawing', 'detailing', 'structural analysis'],
    ans: "Our in-house engineering team uses Tekla Structures for 3D BIM modelling, STAAD/ETABS for structural analysis, and AutoCAD for workshop drawings. We support clients with constructability reviews and full erection sequences.",
  },
  {
    keys: ['thank', 'thanks', 'great', 'helpful', 'appreciate'],
    ans: "You're welcome! Is there anything else I can help you with? For detailed discussions, our team is always available at info@i-steelgroup.com.",
  },
]

const FALLBACK =
  "I don't have a specific answer for that, but our team would be happy to help. Please contact us at info@i-steelgroup.com or visit the Contact page — we respond within 24 hours."

// Swap this function body for an `await fetch('/api/chat', ...)` call when your API is ready
function getResponse(input: string): string {
  const lower = input.toLowerCase()
  const match = QA.find((r) => r.keys.some((k) => lower.includes(k)))
  return match?.ans ?? FALLBACK
}

const QUICK_PROMPTS = [
  'What services do you offer?',
  'How do I get a quote?',
  'What certifications do you hold?',
  'Where are you located?',
]

const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

const INITIAL: Message = {
  role: 'bot',
  text: "Hello! I'm the iSteel assistant. Ask me about our services, projects, certifications, or how to get a quote.",
  time: now(),
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = useCallback((text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    const t = now()
    setMessages((prev) => [...prev, { role: 'user', text: trimmed, time: t }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { role: 'bot', text: getResponse(trimmed), time: now() }])
    }, 800 + Math.random() * 400)
  }, [])

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  const hasOnlyInitial = messages.length === 1

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Chat with iSteel assistant'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_32px_-4px_rgba(10,21,71,0.45)] transition-all duration-300 hover:scale-105 active:scale-95"
        style={{ background: open ? '#D4A020' : '#0A1547' }}
      >
        {open ? <ChevronDown size={22} color="white" /> : <MessageCircle size={22} color="white" />}
        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping bg-[#0A1547]/30 pointer-events-none" />
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[340px] sm:w-[390px] rounded-2xl overflow-hidden shadow-[0_24px_80px_-12px_rgba(4,9,30,0.45)] border border-[#1B2F8A]/20 flex flex-col bg-white transition-all duration-300 origin-bottom-right ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ maxHeight: '82vh' }}
        role="dialog"
        aria-label="iSteel chat assistant"
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 py-4 shrink-0"
          style={{ background: 'linear-gradient(135deg, #04091E 0%, #0A1547 100%)' }}
        >
          <div className="w-9 h-9 rounded-full bg-[#D4A020]/20 border border-[#D4A020]/40 flex items-center justify-center shrink-0">
            <Bot size={18} color="#D4A020" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-white tracking-wide leading-none">iSteel Assistant</div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-emerald-300">Online · typically replies instantly</span>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white/40 hover:text-white transition-colors duration-200 shrink-0 p-1"
            aria-label="Close chat"
          >
            <X size={17} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-[#F5F8FF] px-4 py-4 flex flex-col gap-3 min-h-[260px] max-h-[380px]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
              {msg.role === 'bot' && (
                <div className="w-7 h-7 rounded-full bg-[#0A1547] flex items-center justify-center shrink-0 mt-0.5">
                  <Bot size={13} color="#D4A020" />
                </div>
              )}
              <div className={`flex flex-col gap-1 max-w-[82%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-[#0A1547] text-white rounded-tr-sm'
                      : 'bg-white border border-[#DDE8F5] text-[#3A4A60] rounded-tl-sm shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-[#A0B4CC] px-1">{msg.time}</span>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex justify-start gap-2">
              <div className="w-7 h-7 rounded-full bg-[#0A1547] flex items-center justify-center shrink-0 mt-0.5">
                <Bot size={13} color="#D4A020" />
              </div>
              <div className="bg-white border border-[#DDE8F5] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                <div className="flex gap-1 items-center h-4">
                  {[0, 150, 300].map((d) => (
                    <span
                      key={d}
                      className="w-1.5 h-1.5 rounded-full bg-[#8090B0] animate-bounce"
                      style={{ animationDelay: `${d}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick prompts — shown only on fresh open */}
        {hasOnlyInitial && (
          <div className="px-4 py-3 bg-white border-t border-[#E8EFF8] flex flex-wrap gap-2 shrink-0">
            {QUICK_PROMPTS.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-xs text-[#0A1547] border border-[#C8D8EC] rounded-full px-3 py-1.5 hover:border-[#D4A020] hover:text-[#D4A020] transition-colors duration-200 bg-white"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="bg-white border-t border-[#E8EFF8] px-3 py-3 flex gap-2 shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about our services…"
            className="flex-1 text-sm text-[#3A4A60] placeholder-[#A8BDD0] bg-[#F0F5FB] border border-[#DDE8F5] rounded-xl px-4 py-2.5 outline-none focus:border-[#1B2F8A]/50 transition-colors duration-200"
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || typing}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-35 disabled:cursor-not-allowed shrink-0"
            style={{ background: input.trim() ? '#0A1547' : '#C8D8EC' }}
            aria-label="Send message"
          >
            <Send size={15} color="white" />
          </button>
        </div>

        {/* Footer */}
        <div className="bg-white pb-3 text-center shrink-0">
          <span className="text-[10px] text-[#B0C4D8]">iSteel Engineering · Doha, Qatar</span>
        </div>
      </div>
    </>
  )
}
