## Improvements

I'll list a few improvements that can be made in this project here since I probably won't have time to implement them, maybe I find some time to do it later.

 - Improve logic in api/movies.ts file, I believe we have more ifs than we need to
 - Improve useEffect logic in useAutocompleteFetch hook, it works just fine for now but I think it can be improved
 - Add a zero-results message for the autocomplete
 - Add unit tests with Jest and RTL
 - Add E2E tests with Playwright
 - Add styled-components or Material UI with @emotion/styled to replace basic CSS files and remove styles that could be just a Material UI component
 - Remove the update-your-browser alert as soon as Firefox implements the rule-nesting feature - you can track it [here](https://caniuse.com/css-nesting)
 - Make the Autocomplete component more generic by adding a fetch function as a parameter and unleashing the component from being stuck with the Movie DTO and Movie API endpoint