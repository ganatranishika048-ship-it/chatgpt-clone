interface ComposerProps {
    value: string;
    onChange: (content: string) => void;
    onSend: (content: string) => void;
}

export default function Composer({ value, onChange, onSend }: ComposerProps) {


    return (

        <div className="flex items-center bg-slate-200 rounded-3xl px-4 mb-5"> 
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounder-full outline-none bg-transparent"
                type="text"
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        onSend(value);
                    }
                }}
            >
            </input>

            <button 
                disabled={value.trim() === ""}
                onClick={() => onSend(value)}
                className="ml-2 border-2 bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded-full"
            >
                Send
            </button>
            
        </div>
    )

}