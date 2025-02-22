
# NgRx Trivia App: Learning State Management

This project is designed to be a comprehensive learning resource for NgRx, the reactive state management library for Angular. It starts with simple state management and gradually introduces more complex concepts, providing a hands-on approach to mastering NgRx.

## Project Goal

To learn and understand NgRx by building a functional trivia application that utilizes a free public API.

## Technologies Used

* Angular
* NgRx (@ngrx/store, @ngrx/effects, @ngrx/entity, @ngrx/store-devtools)
* Open Trivia Database ([https://opentdb.com/api\_config.php](https://opentdb.com/api_config.php))
* JSONPlaceholder ([https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)) (for mock POST requests)

## Project Structure

The project is structured into phases, each focusing on specific NgRx concepts:

**Phase 1: Basic State Management (Loading & Displaying Questions)**

* **Objective:** Implement basic NgRx concepts to load and display trivia questions from the Open Trivia Database.
* **Key Concepts:**
  * Actions (e.g., `LoadQuestions`, `LoadQuestionsSuccess`, `LoadQuestionsFailure`)
  * Reducers
  * Store setup
  * Selectors
  * Effects for API calls
* **Implementation:**
  * Create a service for HTTP requests.
  * Dispatch actions to load questions.
  * Handle API responses in effects.
  * Display questions and loading/error states in the component.

**Phase 2: Entity State & Category Selection**

* **Objective:** Utilize NgRx Entity for efficient state management and add category selection functionality.
* **Key Concepts:**
  * NgRx Entity (`@ngrx/entity`)
  * Category selection
  * Updating effects for category changes
* **Implementation:**
  * Convert questions state to an entity state.
  * Modify the reducer to use entity adapter methods.
  * Add a category selection dropdown.
  * Update effects to fetch questions based on the selected category.

**Phase 3: Question Answering & Scoring**

* **Objective:** Implement question answering and scoring logic.
* **Key Concepts:**
  * User interactions (answering questions)
  * Scoring system
  * State updates for answered questions and scores
* **Implementation:**
  * Add answer options (radio buttons/buttons).
  * Create actions to handle answering questions.
  * Update the reducer to track answers and scores.
  * Create a reset quiz action.

**Phase 4: Advanced Features & Store Devtools**

* **Objective:** Introduce advanced features and debugging tools.
* **Key Concepts:**
  * NgRx Store Devtools
  * Router integration
  * Local storage for persistent data
  * POST request handling using a mock api.
* **Implementation:**
  * Use Store Devtools for debugging.
  * Integrate the store with the Angular Router.
  * Save and load data from local storage.
  * Implement a feedback/high-score submission feature using JSONPlaceholder.
  * Create relevant actions, effects, and reducers for the post requests.
  * Implement error handling, loading indicators, and user feedback for POST requests.
  * Create a final score component.

## Getting Started

1. **Clone the repository:** `git clone [repository URL]`
2. **Install dependencies:** `npm install`
3. **Run the application:** `ng serve`
4. **Open the application in your browser:** `http://localhost:4200/`

## Learning Tips

* **Start small:** Focus on one concept at a time.
* **Use the NgRx documentation:** Refer to the official NgRx documentation for detailed information.
* **Debug with Store Devtools:** Utilize the Store Devtools to inspect the store's state and actions.
* **Break down complexity:** Divide the project into smaller, manageable tasks.
* **Practice regularly:** Consistent practice is key to mastering NgRx.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please submit a pull request.

## License

[Your License]
