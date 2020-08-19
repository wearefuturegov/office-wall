## 🚀 FG Office Wall

A quick mashup between Airtable and Gatsby to try and create a lightweight virtual version of our office wall where we share pictures and interesting facts about each other.

Keep in mind the first iteration of this has been built by one of the mangement team - not a designer or developer. Go easy!

### TO DO

1. Update SEO and explore a simple password
2. Add links (to twitter username)
3. setup github action to periodically trigger a build/deploy (unless thats possible in airtable?!)
4. update 404 page and styling
5. look at my fudged error handling when pictures aren't found.

## Run locally

1. Clone the repo and change into the directory via terminal

```shell
git clone <giturl>
cd <folder>
```

2. Make sure you've got access to the Airtable base 'Virtual FG Office Wall' and create a '.env' file in the root with AIRTABLE_API_KEY set to the key given in your airtable account. An example copy of the airtbale base can be found at https://airtable.com/shrUhVnWaVgySV2NY

```shell
AIRTABLE_API_KEY=<xxxxxxxxxx>
```

3. Install project files / dependancies

```shell
npm install
```

4. Run gatsby development environment (localhost:8000)

```shell
gatsby develop
```

5. Grab a cold one and enjoy! :)
