CREATE TABLE IF NOT EXISTS postImage (
   postID INTEGER NOT NULL,
   imageID INTEGER NOT NULL,
   PRIMARY KEY (postID, imageID),
   FOREIGN KEY (postID) REFERENCES post (ID),
   FOREIGN KEY (imageID) REFERENCES "image" (ID)
);
