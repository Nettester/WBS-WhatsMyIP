# WBS-WhatsMyIP
Small React App - What's My IP

##Goal
  - Create a react application that will display the user's IP address, as well as some geographic/time information
  - It should be a bit like: https://www.whatismyip.com/ or https://whatismyipaddress.com/
  - Deploy the app on Netlify or Vercel or Github pages, and add it to your portfolio

### Level 1
  - Use the ipify API (https://geo.ipify.org/) to get a user's IP address.
  - API documentation is available here: https://geo.ipify.org/docs.
  - You'll need to create an account to get an API key
  - Display the user's IP address when they arrive on the page
  - Store the key in a env file
 
### Level 2
  - Display a map of the user's current location using Pigeon Maps (https://pigeon-mans.js.org/)
  - Find a way to get more information about a user's country using any API you can find online (e.g. Public GraphQL API for information about countries or REST Countries) and display the info you find interesting
  - Display the flag of the visiting user's country in your app
  (use one of the previous APIs, or use a dedicated API like https://flagpedia.net/download/api)

### Level 3
  - Use a time management library (like Luxon: https://moment.github.io/luxon/index.html or Date-fns: https://date-fns.org/) to show information about the user's timezone such as:
    - The local date
    - The local time versus the time in another place
  - When you have all the functionalities working, make your app look nice and fancy, maybe you can try organizing the info in a bootstrap card?
    - Classic: https://getbootstrap.com/docs/5.1/components/card
    - React:https://react-bootstrap.github.io/components/cards
    - Or maybe have fun with another Ul Library Kit? Like Semantic UI / Material Ul / Ant Design
