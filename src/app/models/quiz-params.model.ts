export interface QuizParams {
  category: Category;
  difficulty: Difficulty;
  type: QuizType;
  amount: number;
}
export enum Category {
  Any = 'any',
  GeneralKnowledge = 9,
  EntertainmentBooks = 10,
  EntertainmentFilm = 11,
  EntertainmentMusic = 12,
  EntertainmentMusicalsTheatres = 13,
  EntertainmentTelevision = 14,
  EntertainmentVideoGames = 15,
  EntertainmentBoardGames = 16,
  ScienceNature = 17,
  ScienceComputers = 18,
  ScienceMathematics = 19,
  Mythology = 20,
  Sports = 21,
  Geography = 22,
  History = 23,
  Politics = 24,
  Art = 25,
  Celebrities = 26,
  Animals = 27,
  Vehicles = 28,
  EntertainmentComics = 29,
  ScienceGadgets = 30,
  EntertainmentJapaneseAnimeManga = 31,
  EntertainmentCartoonAnimations = 32,
}

export enum Difficulty {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export enum QuizType {
  Any = 'any',
  Multiple = 'multiple',
  Boolean = 'boolean',
}
