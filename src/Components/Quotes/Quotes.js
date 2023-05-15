function QuotesInfo() {

const quotes = [
    {
        Quote: "You need imagination in order to imagine a future that doesn’t exist.",
        Author: "Azar Nafisi",
    },
    {
        Quote: "Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.",
        Author: "George Bernard Shaw",
    },
    {
        Quote: "Imagination is the eye of the soul.",
        Author: "Joseph Joubert",
    },
    {
        Quote: "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.",
        Author: "Gloria Steinem",
    },
    {
        Quote: "A book is a device to ignite the imagination.",
        Author: "Alan Bennett",
    },
    {
        Quote: "If you fall in love with the imagination, you understand that it is a free spirit. It will go anywhere, and it can do anything.",
        Author: "Alice Walker",
    },
    {
        Quote: "Imagination is the only weapon in the war against reality.",
        Author: "Jules de Gaultier",
    },
    {
        Quote: "The world of reality has its limits; the world of imagination is boundless.",
        Author: "Jean-Jacques Rousseau",
    },
    {
        Quote: "Imagination will often carry us to worlds that never were. But without it we go nowhere.",
        Author: "Carl Sagan",
    },
    {
        Quote: "What is now proved was once only imagined.",
        Author: "William Blake",
    },
    {
        Quote: "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        Author: "Albert Einstein",
    },
    {
        Quote: "Everything you can imagine is real.",
        Author: "Pablo Picasso",
    },
    {
        Quote: "I believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience. That laughter is the only cure for grief. And I believe that love is stronger than death.",
        Author: "Robert Fulghum",
    },
    {
        Quote: "I believe in the power of the imagination to remake the world, to release the truth within us, to hold back the night, to transcend death, to charm motorways, to ingratiate ourselves with birds, to enlist the confidences of madmen.",
        Author: "J.G. Ballard",
    },
    {
        Quote: "You can’t depend on your eyes when your imagination is out of focus.",
        Author: "Mark Twain",
    },
    {
        Quote: "My imagination makes me human and makes me a fool; it gives me all the world and exiles me from it.", Author: "Ursula K. Le Guin",
    },
    {
        Quote: "To know is nothing at all; to imagine is everything.",
        Author: "Anatole France",
    },
    {
        Quote: "Imagination is the voice of daring. If there is anything godlike about God, it is that. He dared to imagine everything.",
        Author: "Henry Miller",
    },
    {
        Quote: "All human accomplishment has this same origin, identically. Imagination is a force of nature. Is this not enough to make a person full of ecstasy? Imagination, imagination, imagination! It converts to actual. It sustains, it alters, it redeems!",
        Author: "Saul Bellow",
    },
    {
        Quote: "There is the strange power we have of changing facts by the force of the imagination.",
        Author: "Virginia Woolf",
    },
    {
        Quote: "Adults are bad at remembering how powerful they can be because somewhere along the line, they were shamed for their imagination.",
        Author: "Stephen Chbosky",
    },
    {
        Quote: "Imperfection inspires invention, imagination, creativity. It stimulates. The more I feel imperfect, the more I feel alive.",
        Author: "Jhumpa Lahiri",
    },
    {
        Quote: "Your imagination, my dear fellow, is worth more than you imagine.",
        Author: "Louis Aragon",
    },
    {
        Quote: "The soul without imagination is what an observatory would be without a telescope.",
        Author: "Henry Ward Beecher",
    },
    {
        Quote: "We all have an obligation to daydream. We have an obligation to imagine. It is easy to pretend that nobody can change anything, that society is huge and the individual is less than nothing. But the truth is individuals make the future, and they do it by imagining that things can be different.",
        Author: "Neil Gaiman",
    },
    {
        Quote: "Nature is the direct expression of the divine imagination.",
        Author: "John O'Donohue",
    },
    {
        Quote: "Reason is the natural order of truth, but imagination is the organ of meaning.",
        Author: "C.S. Lewis",
    },
    {
        Quote: "Every great advance in science has issued from a new audacity of imagination",
        Author: "John Dewey",
    },
    {
        Quote: "It’s delightful when your imaginations come true, isn’t it?",
        Author: "L. M. Montgomery",
    },
    {
        Quote: "It’s all a question of imagination. Our responsibility begins with the power to imagine.",
        Author: "Haruki Murakami",
    },
    {
        Quote: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        Author: "Cindy Trimm",
    },
    {
        Quote: "The warrior knows that their imagination is not a place to escape but to create.",
        Author: "Erwin Raphael McManus",
    },
    {
        Quote: "Anything one man can imagine, other men can make real.",
        Author: "Jules Verne",
    },
    {
        Quote: "It is not enough to know your craft - you have to have feeling. Science is all very well, but for us imagination is worth far more.",
        Author: "Edouard Manet",
    },
    {
        Quote: "All successful people men and women are big dreamers. They imagine what their future could be, ideal in every respect, and then they work every day toward their distant vision, that goal or purpose.",
        Author: "Brian Tracy",
    },
    {
        Quote: "My imagination is a monastery and I am its monk.",
        Author: "John Keats",
    },
    {
        Quote: "There is hope in dreams, imagination, and in the courage of those who wish to make those dreams a reality.",
        Author: "Jonas Salk",
    },
    {
        Quote: "A rock pile ceases to be a rock pile the moment a single man contemplates it, bearing within him the image of a cathedral.",
        Author: "Antoine de Saint-Exupery",
    },
    {
        Quote: "Fortunately, somewhere between chance and mystery lies imagination, the only thing that protects our freedom, despite the fact that people keep trying to reduce it or kill it off altogether.",
        Author: "Luis Bunuel"
    },
    {
        Quote: "To regard the imagination as metaphysics is to think of it as part of life, and to think of it as part of life is to realize the extent of artifice. We live in the mind.",
        Author: "Wallace Stevens"
    },
    {
        Quote: "Perhaps imagination is not where we go to escape reality but where we go to remember it.",
        Author: "Glennon Doyle",
    },
    {
        Quote: "Laughter is timeless, imagination has no age, and dreams are forever.",
        Author: "Walt Disney",
    }, 
    {
        Quote: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. It is, strictly speaking, a real factor in scientific research.",
        Author: "Albert Einstein",
    },
    {
        Quote: "If at first the idea is not absurd, then there is no hope for it.",
        Author: "Albert Einstein"
    },
    {
        Quote: "Everything is theoretically impossible, until it is done.",
        Author: "Robert A. Heinlein",
    },
    {
        Quote: "Every brilliant experiment, like every great work of art, starts with an act of imagination.",
        Author: "Jonah Lehrer",
    },
    {
        Quote: "We especially need imagination in science. It is not all mathematics, nor all logic, but it is somewhat beauty and poetry.",
        Author: "Maria Montessori",
    },
    {
        Quote: "Imagination is as vital to any advance in science as learning and precision are essential for starting points. Let me warn you to beware of two opposite errors: of letting your imagination soar unballasted by facts, but on the other hand, of shackling it so solidly that it loses all incentive to rise.",
        Author: "Percival Lowell",
    },
    {
        Quote: "Your imagination is everything. It is the preview of life's coming attractions",
        Author: "Albert Einstein",
    },
    {
        Quote: "The power of imagination makes us infinite.",
        Author: "John Muir",
    },
    {
        Quote: "Logic will get you from A to B. Imagination will take you everywhere.",
        Author: "Albert Einstein",
    },
    {
        Quote: "Science may set limits to knowledge, but should not set limits to imagination.",
        Author: "Bertrand Russell"
    }

];
return(
    <div>
        Hello
    </div>
)
}

export default QuotesInfo;
