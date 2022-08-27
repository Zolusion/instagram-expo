import { USERS } from "./users";

export const POSTS = [ 
    {
        imageUrl: 'https://www.iwmbuzz.com/wp-content/uploads/2021/10/ace-your-instagram-looks-with-selena-gomez-and-dua-lipa-see-pics.jpg',
        user: USERS[0].user,
        likes: 12930783,
        caption: 'I always wondered what the future holds for me. I hope its a good one.',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'arianagrande',
                comment: 'Go Guurrrlll!!!',
            },
            {
                user: 'jenniferlopez',
                comment: 'You are so beautiful!',
            },
            {
                user: 'courtneychipolone',
                comment: 'iloveyou',
            },
        ],
    },
    {
        imageUrl: 'https://helios-i.mashable.com/imagery/articles/029kClbNeLXS9bwJyHqvVBq/hero-image.fill.size_1200x1200.v1623383839.jpg',
        user: USERS[1].user,
        likes: 17748374,
        caption: 'Thankyou all for this amazing night. I hope you all have a great one.',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'avaa_es2021',
                comment: 'I am your biggest fan Arianaaaaaaa <3',
            },
            {
                user: 'lesliegrace',
                comment: 'the last shot aghhhhhhh🥹 cant wait',
            }
        ],
    },

]