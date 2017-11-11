export interface User {
    name: String;
    college: String;
    major: String;
    profilePicture: String;
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

}