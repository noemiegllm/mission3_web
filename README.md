# Mission M3 - Reactor Core

This is a web application built with **React 19** and **Vite**, evolving from the mission 2 into a component-driven architecture based on the principle *"Everything is a component"*. It search in the public **TheMealDB** API and shows the result on the screen.

To access the app: https://github.com/noemiegllm/mission3_web.git

---

## AI Usage

- **Tools used:** Gemini

- **Parts developed with AI:**

  * Helping to understand how to lift the state up (*Lifting State Up*) between `App.jsx`, `Research`, and `ListMeal`.
  * Clarifying React rules regarding component structure, props deconstruction, and stable key attributes in lists.
  * Adjusting the CSS styling for a clean, light-themed responsive grid layout.

- **Parts written by hand:**

  * The fetch to API data (`api.js`) and the initial project structure setup.
  * Writing the logical JSX for individual components (`CardMeal`, `ListMeal`, `Research`) without the good syntaxe.

- **Prompts Example:**

  1. *"Right now the app displays the search bar and button, and logs the query result in the console. Now we are going to create a listMeal component that handles retrieving the result list and transforming it into multiple cardMeals using the CardMeal component. Is this the right reasoning?"*

  2. *"I don’t understand what I’m supposed to do for the search bar. Can you explain the "lift state up" concept?"*

For the AI-generated suggestions, I reviewed, and integrated the code by hand.

---

## Autopsy

Problems Encountered:
    - **State Management & Lifting State Up:** When I started M3, I thought it would be easy. Then I realized I hadn't fully understood the course material, especially the concept of useState.
     **Decision made:** I asked Gemini to understand the concept, to show example and how to integrate it into M3 (e.g for the search bar and its button).
    - **Components oriented:** I also had trouble understanding how to remodel the project. Moving from an MVC model (view, model, ... are seperated) to components was unusual. I struggled to figure out how to properly separate the components."
     **Decision made:** I ended up separating the components like this: 1 function = 1 file