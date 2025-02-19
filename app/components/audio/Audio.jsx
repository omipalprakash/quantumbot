"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Play, Pause, AlertCircle } from "lucide-react";

const Audio = () => {
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState(null);
    const audioRef = useRef(null);

    const audioSource =
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_example_MP3_700KB-KHsGGN7DLslOED8lnFkwkK93r3MTL4.mp3";

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener("error", (e) => {
                setError("Error loading audio: " + e.target.error?.message);
            });
        }
    }, []);

    const togglePlay = useCallback(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((e) => {
                    setError("Error playing audio: " + e.message);
                });
            }
            setIsPlaying(!isPlaying);
        }
    }, [isPlaying]);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(progress);
        }
    };

    return (
        <div className="mx-auto p-6  text-white rounded-xl shadow-lg space-y-6">
            <div className="audio_transcribe__g9NmA">Please transcribe this audio.</div>

            {/* Audio Card */}
            <div className="audio_content-box__IV65G">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <button onClick={togglePlay} className="focus:outline-none" disabled={!!error}>
                                {isPlaying ? <Pause className="w-6 h-6 text-blue-400" /> : <Play className="w-6 h-6 text-blue-400" />}
                            </button>
                            <p className="text-sm">File Example MP3</p>
                        </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                            className="bg-blue-400 h-2 rounded-full transition-all duration-300 ease-in-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    {error && (
                        <div className="flex items-center space-x-2 text-red-400">
                            <AlertCircle className="w-4 h-4" />
                            <p className="text-xs">{error}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Transcript Card */}
            <div className="audio_content-box--code__byW5L">
                <h3 className="text-sm font-semibold mb-2">Transcription Result:</h3>
                <pre className="text-xs bg-gray-700 p-3 rounded-md overflow-auto text-green-400">
                    {JSON.stringify({ transcript: "Transcription will appear here after processing." }, null, 2)}
                </pre>
            </div>

            {/* Audio element */}
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying(false)}>
                <source src={audioSource} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default Audio;
