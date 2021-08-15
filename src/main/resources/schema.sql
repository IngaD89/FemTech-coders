DROP TABLE IF EXISTS coders;
CREATE TABLE coders (

        id   BIGSERIAL PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        lastName VARCHAR (255) NOT NULL,
        age VARCHAR (255) NOT NULL,
        phoneNumber VARCHAR (255) NOT NULL,
        eMail VARCHAR (255) NOT NULL,
        country VARCHAR (255) NOT NULL,
        studies VARCHAR (255) NOT NULL,
        address VARCHAR (255) NOT NULL,
        promotion VARCHAR (255) NOT NULL

);