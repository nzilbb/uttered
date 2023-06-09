export interface Utterance {
    utteranceId: string;
    participantId: string;
    start: number;
    end: number;
    confidence: number;
    text: string;
}
