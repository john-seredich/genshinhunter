# Genshin Hunter

🎮📚 **Genshin Impact Database built using ReactJS, React Query, React Router, and TypeScript.**
Here you can find information about the game, including info about characters, weapons, materials, and various other things for making your journey smooth.
[Live Demo](https://github.com/john-seredich/genshinhunter)

# How I worked on this project

My goal was to simulate the UI from the game Genshin Impact.

- I used Figma to extract colors, sizes, functions, and layout of the original UI: [Screenshot of designs](https://www.figma.com/file/4kg5suQkPsZB3luUB3bivq/GenshinHunter-Design-Board?node-id=0%3A1&t=M8mxlokfuhG7wZxD-1)
- I used the [Unofficial Genshin Impact API](https://genshin.dev/) to fetch the information on the items.
- The API did not include images so I had to extract them my self.

# Why I buildt the project this way

- I used react-router for this project because I needed multiple pages. It's a fairly simple yet powerful library for creating perforant, fast, and seemless pages.
- I didn't use a state manager for this project, however, React Query handles the Asynchronous State from the API. React Query also handles fetching, caching, synchronizing, and updating the server state.
- TypeScript in my opinion is a must-have in all projects in 2023. It helps keep your code cleaner, bug-free and has better writing practices.
- SCSS/CSS Modules is an awesome library for styling. It makes it so that styles are scoped to the component, but in a separate file that is linked. This is my preferred styling method, however, other ways are just as valid.

# If I had more time I would change this

- Reusable Layout Component
- Create a reusable component for every item type.
- Create better styling for loading and error state.
- To refactor the homepage to contain dynamic data based on the current state of the game.
- Use a testing library to set up, create, and execute tests

# Technologies

    ReactJS
    TypeScript
    React Query
    React Router
    Axios

# Credits and Thanks

- Thank you to the developer of [Genshin.Dev](https://genshin.dev/) for creating and maintaining this unofficial API.
- Thank you to the developers of [Paimon.moe](https://paimon.moe/) for having most of the Genshin Impact images easily accessible to download.
- Thank you to Reddit user [u/AnxiouslyConvolved](https://www.reddit.com/user/AnxiouslyConvolved/) for helping me fix a sorting problem I was having on my website.

Genshin Hunter is not affiliated with HoYoverse.
Genshin Impact, game content, and materials are trademarks and copyrights of HoYoverse.
