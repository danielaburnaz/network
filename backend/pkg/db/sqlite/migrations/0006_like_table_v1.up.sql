CREATE TABLE IF NOT EXISTS "like" (
    postID INTEGER NOT NULL,
    userID INTEGER NOT NULL,
    PRIMARY KEY (postID, userID),
    FOREIGN KEY (postID) REFERENCES "post" (ID),
    FOREIGN KEY (userID) REFERENCES "user" (ID)
);