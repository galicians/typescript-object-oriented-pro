import { CardState } from '../enums/CardState.enum';
import { Deck } from './Deck.class';

export class Card {
  question: string;
  answer: string;
  state: CardState;
  tags: Array<String>;
  deck: Deck;
  created: Date;
}

