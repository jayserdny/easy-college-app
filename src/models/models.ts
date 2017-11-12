export interface User {
    name: string;
    email: string;
    password: string;
    college: string;
    major: string;
    profilePicture: string;
    stats: {
        traded: Number;
        posted: Number;
        followers: Number;
        following: Number;
    };

}

export interface Book {
    title: String;
    isbn: String;
    author: String;
    edition: String;
    subject: String;
    cover: String;
    postedDate: any;

}