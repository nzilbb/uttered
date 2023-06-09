import { Utterance } from './utterance';
export interface Transcript {
    media: string;
    utterances: Utterance[];
}
