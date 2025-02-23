import { Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import * as QuizActions from './../../store/quiz/quiz.actions';
import {
  Category,
  Difficulty,
  QuizParams,
  QuizType,
} from '../../models/quiz-params.model';
import { Questions } from '../../models/question.model';

// https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  quizForm: FormGroup;
  questions: Questions[] = [];
  categories = [
    { id: Category.Any, name: 'Any Category' },
    { id: Category.GeneralKnowledge, name: 'General Knowledge' },
    { id: Category.EntertainmentBooks, name: 'Entertainment: Books' },
    { id: Category.EntertainmentFilm, name: 'Entertainment: Film' },
    { id: Category.EntertainmentMusic, name: 'Entertainment: Music' },
    {
      id: Category.EntertainmentMusicalsTheatres,
      name: 'Entertainment: Musicals & Theatres',
    },
    { id: Category.EntertainmentTelevision, name: 'Entertainment: Television' },
    {
      id: Category.EntertainmentVideoGames,
      name: 'Entertainment: Video Games',
    },
    {
      id: Category.EntertainmentBoardGames,
      name: 'Entertainment: Board Games',
    },
    { id: Category.ScienceNature, name: 'Science & Nature' },
    { id: Category.ScienceComputers, name: 'Science: Computers' },
    { id: Category.ScienceMathematics, name: 'Science: Mathematics' },
    { id: Category.Mythology, name: 'Mythology' },
    { id: Category.Sports, name: 'Sports' },
    { id: Category.Geography, name: 'Geography' },
    { id: Category.History, name: 'History' },
    { id: Category.Politics, name: 'Politics' },
    { id: Category.Art, name: 'Art' },
    { id: Category.Celebrities, name: 'Celebrities' },
    { id: Category.Animals, name: 'Animals' },
    { id: Category.Vehicles, name: 'Vehicles' },
    { id: Category.EntertainmentComics, name: 'Entertainment: Comics' },
    { id: Category.ScienceGadgets, name: 'Science: Gadgets' },
    {
      id: Category.EntertainmentJapaneseAnimeManga,
      name: 'Entertainment: Japanese Anime & Manga',
    },
    {
      id: Category.EntertainmentCartoonAnimations,
      name: 'Entertainment: Cartoon & Animations',
    },
  ];

  difficulties = [
    Difficulty.Any,
    Difficulty.Easy,
    Difficulty.Medium,
    Difficulty.Hard,
  ];
  types = [QuizType.Any, QuizType.Multiple, QuizType.Boolean];

  constructor(private fb: FormBuilder, private store: Store) {
    this.quizForm = this.fb.group({
      numberOfQuestions: [10],
      category: ['any'],
      difficulty: ['any'],
      type: ['any'], // Updated default value
    });
  }

  onSubmit() {
    if (this.quizForm.valid) {
      console.log(this.quizForm.value);
      const params: QuizParams = {
        amount: this.quizForm.value.numberOfQuestions,
        category:
          this.quizForm.value.category !== 'any'
            ? this.quizForm.value.category
            : undefined,
        difficulty:
          this.quizForm.value.difficulty !== 'any'
            ? this.quizForm.value.difficulty
            : undefined,
        type:
          this.quizForm.value.type !== 'any'
            ? this.quizForm.value.type
            : undefined,
      };

      this.store.dispatch(QuizActions.loadQuestions({ params }));
      debugger;
    }
  }
}
