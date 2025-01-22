import { Typography } from "@/registry/default/akasha-ui/typography"

export default function TypographyDemo() {
  return (
    <div>
      <Typography variant="h1">The Joke Tax Chronicles</Typography>
      <Typography variant="p" className="mt-6">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </Typography>
      <Typography variant="h2" className="mt-10">
        The King's Plan
      </Typography>
      <Typography variant="p" className="mt-6">
        The king thought long and hard, and finally came up with{" "}
        <a
          href="#"
          className="font-medium text-primary underline underline-offset-4"
        >
          a brilliant plan
        </a>
        : he would tax the jokes in the kingdom.
      </Typography>
      <Typography variant="h3" className="mt-8">
        The Joke Tax
      </Typography>
      <Typography variant="p" className="mt-6">
        The king's subjects were not amused. They grumbled and complained, but
        the king was firm:
      </Typography>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
      <Typography variant="p" className="mt-6">
        As a result, people stopped telling jokes, and the kingdom fell into a
        gloom. But there was one person who refused to let the king's
        foolishness get him down: a court jester named Jokester.
      </Typography>
      <Typography variant="h3" className="mt-8">
        Jokester's Revolt
      </Typography>
      <Typography variant="p" className="mt-6">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester.
      </Typography>
      <Typography variant="p" className="mt-6">
        And then, one day, the people of the kingdom discovered that the jokes
        left by Jokester were so funny that they couldn't help but laugh. And
        once they started laughing, they couldn't stop.
      </Typography>
      <Typography variant="h3" className="mt-8">
        The People's Rebellion
      </Typography>
      <Typography variant="p" className="mt-6">
        The people of the kingdom, feeling uplifted by the laughter, started to
        tell jokes and puns again, and soon the entire kingdom was in on the
        joke.
      </Typography>
      <Typography variant="h3" className="mt-8">
        The People's Rebellion
      </Typography>
      <Typography variant="p" className="mt-6">
        The people of the kingdom, feeling uplifted by the laughter, started to
        tell jokes and puns again, and soon the entire kingdom was in on the
        joke.
      </Typography>
      <Typography variant="p" className="mt-6">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax. Jokester was declared a hero, and
        the kingdom lived happily ever after.
      </Typography>
      <Typography variant="p" className="mt-6">
        The moral of the story is: never underestimate the power of a good laugh
        and always be careful of bad ideas.
      </Typography>
    </div>
  )
}
